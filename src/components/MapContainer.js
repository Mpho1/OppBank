import React from 'react'
import Place from './Place'

import style from './MapContainer.module.scss'
import mapContainerStyles from './mapContainerStyles.json'

import _ from 'lodash'
import { compose, withProps, withStateHandlers, withState, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'
import { geolocated } from 'react-geolocated'

/* global google */

const setMapCenter = (_this) => {
  if (window.innerWidth <= 420) {
    _this.setState({
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `300px`, width: `378px`, marginLeft: `0.2em`, marginBottom: `2em` }} />,
      mapElement: <div style={{ height: `100%` }} />
    })
  } else if (window.innerWidth <= 500) {
    _this.setState({
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px`, width: `540px`, marginLeft: `2.0em`, marginBottom: `2em` }} />,
      mapElement: <div style={{ height: `100%` }} />
    })
  } else if (window.innerWidth <= 623) {
    _this.setState({
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px`, width: `540px`, marginLeft: `2.0em`, marginBottom: `2em` }} />,
      mapElement: <div style={{ height: `100%` }} />
    })
  } else if (window.innerWidth <= 850) {
    _this.setState({
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `300px`, width: `540px`, marginLeft: `3.99em`, marginBottom: `2em` }} />,
      mapElement: <div style={{ height: `100%` }} />
    })
  }
}

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
    componentDidMount () {
      window.addEventListener('resize', setMapCenter.bind(null, this))
      setMapCenter(this)
    },
    componentWillUnmount () {
      window.removeEventListener('resize', setMapCenter.bind(null, this))
    },
    componentWillMount () {
      const refs = { }
      this.setState({
        bounds: null,
        places: [],
        defaultZoom: 13,
        center: {
          lat: 0.335845,
          lng: 32.587500
        },
        markers: [{
          lat: 0.335845,
          lng: 32.587500
        },
        {
          lat: 0.3107461,
          lng: 32.58409280000001
        },
        {
          lat: 0.3474566,
          lng: 32.61247370000001
        }],
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

          if (!this.props.isGeolocationAvailable || !this.props.coords) {
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
          const locationsData = {
            origin: new google.maps.LatLng(this.props.coords.latitude, this.props.coords.longitude),
            destination: new google.maps.LatLng(places[0].geometry.location.lat(), places[0].geometry.location.lng()),
            travelMode: google.maps.TravelMode.DRIVING
          }

          DirectionsService.route(locationsData, (result, status) => {
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
      defaultZoom={props.defaultZoom}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
      defaultOptions={{ styles: mapContainerStyles }}
    >
      {props.markers.map((marker, index) => {
        return (<Marker key={index} position={marker}
        />)
      })
      }
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
