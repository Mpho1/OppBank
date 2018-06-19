import React from 'react'
import Place from './Place'

import _ from 'lodash'
import { compose, withProps, withStateHandlers, withState, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'
import mapContainerStyles from './mapContainerStyles.json'
import style from './MapContainer.module.scss'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'
import { geolocated } from 'react-geolocated'

/* global google */

const MapContainer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBoJx89DCH5N9fsmS8Gk-W6-tB4Ib85w6I&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `720px`, marginLeft: `10em`, marginBottom: `2em` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 0.335845, lng: 32.587500 }
  }),
  withState('zoom', 'onZoomChange', 8),
  withStateHandlers(() => ({
    isOpen: false
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  lifecycle({
    componentWillMount () {
      const refs = { }
      // this.props.isGeolocationAvailable
      // this.props.isGeolocationEnabled
      console.log(this, 'tytytytytyyty111')
      console.log(this.props, 'tytytytytyyty222')
      console.log(this.props.coords, 'tytytytytyyty333')
      this.setState({
        bounds: null,
        places: [],
        center: {
          lat: 0.335845,
          lng: 32.587500
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref
        },
        onZoomChanged: ({ onZoomChange }) => () => {
          onZoomChange(refs.map.getZoom())
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces()
          if (!places) {
            return
          }

          const bounds = new google.maps.LatLngBounds()

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          })
          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }))
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center)

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
            places
          })

          const DirectionsService = new google.maps.DirectionsService()

          DirectionsService.route({
            origin: new google.maps.LatLng(0.335845, 32.587500),
            destination: new google.maps.LatLng(0.3107461, 32.58409280000001),
            travelMode: google.maps.TravelMode.DRIVING
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result
              })
            } else {
              console.error(`error fetching directions ${result}`)
            }
          })
          // refs.map.fitBounds(bounds);
          return this
        }
      })
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <div>
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}>
      <input
        type="text"
        placeholder="Search for our branches here"
        className={style.mapSearch}
      />
    </StandaloneSearchBox>
    <button
      type="submit"
      onClick={ (event) => { props.onPlacesChanged() } }
      className={style.findButton}>Find Branch
    </button>

    <Place places = {props.places} />
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={13}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
      defaultOptions={{ styles: mapContainerStyles }}
      className={style.googleMap}
    >
      <Marker
        position={{
          lat: 0.335845,
          lng: 32.587500
        }}
      />
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  </div>
)

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(MapContainer)
