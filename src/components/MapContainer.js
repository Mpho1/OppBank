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

const setMapScreenSize = (_this) => {
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
  withState('zoom', 'onZoomChange', 10),
  withStateHandlers(() => ({
    isOpen: false
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  lifecycle({
    componentDidMount () {
      window.addEventListener('resize', setMapScreenSize.bind(null, this))
      setMapScreenSize(this)
    },
    componentWillUnmount () {
      window.removeEventListener('resize', setMapScreenSize.bind(null, this))
    },
    componentWillMount () {
      const refs = { }
      this.setState({
        bounds: null,
        places: [],
        defaultZoom: 11,
        center: {
          lat: 0.3416113, // 29 Kanjokya St, Kampala, Uganda Head Office
          lng: 32.59085099999993
        },
        markers: [{
          lat: 0.3416113, // 29 Kanjokya St, Kampala, Uganda Head Office
          lng: 32.59085099999993
        },
        {
          lat: 0.335845, // Plot 204, Block 494, Goshen House, Kawempe
          lng: 32.587500
        },
        {
          lat: 0.363889, // Nansana East, 1 Zone, Nabweru, Nansana Trading Centre, Wakiso
          lng: 32.528611
        },
        {
          lat: 0.450833, // Gayaza Zone A Gayaza  Trading Centre, Gayaza
          lng: 32.611667
        },
        {
          lat: 0.5050, // Kalagi Trading Centre, Kalagi, Mukono
          lng: 32.7500
        },
        {
          lat: 0.298325, // Plot 1106 Block 18 Masaka Road- Nateete
          lng: 32.534989
        },
        {
          lat: 0.433343, // Plot 23/25, Edward Avenue, Masaka
          lng: 31.094438
        },
        {
          lat: -0.6051493000000001, // Plot 64, High Street, Mbarara
          lng: 30.66231360000006
        },
        {
          lat: 0.6011365, // Plot 3, Nyantungo Road, Kyenjojo
          lng: 30.64126250000004
        },
        {
          lat: 0.5539012999999999, // Plot 103, Lubanga Road, Mubende
          lng: 31.38846710000007
        },
        {
          lat: 1.430488, // Plot 15, Main Street, Hoima
          lng: 31.352770299999975
        },
        {
          lat: 0.5439144, // Plot 43, Block 530, Agip Zone, Jinja Road Highway,  Mukono
          lng: 32.79480509999996
        },
        {
          lat: 0.431245, // Plot 9, Scindia Road, Jinja
          lng: 33.212058
        },
        {
          lat: 0.6152156999999999, // Plot 88, Main Street, Iganga
          lng: 33.47902899999997
        },
        {
          lat: 0.5889137999999999, // Plot 83, Iganga Road, Mayuge
          lng: 33.72538959999997
        },
        {
          lat: 1.071769, // Plot 1-3, Manafwa Road, BCU Building, Mbale
          lng: 34.176459
        },
        {
          lat: 1.715, // Plot 46, Gweri Road, Soroti
          lng: 33.61111110000002
        },
        {
          lat: 0.3036503, // Plot 79  Mityana  Road 1st floor
          lng: 32.52306329999999
        },
        {
          lat: 2.2401568, // Plot number 39-41 Lira Avenue
          lng: 32.89532699999995
        },
        {
          lat: 2.245864499999999, // Block 1, plot 203 Oyam District ( Corner kamdini)
          lng: 32.33200880000004
        },
        {
          lat: 0.06444, // Plot 1, Enteebe road ( Lloyde Building)
          lng: 32.44694
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

          const distanceOrigin = new google.maps.LatLng(this.props.coords.latitude, this.props.coords.longitude)
          const distanceDestination = new google.maps.LatLng(places[0].geometry.location.lat(), places[0].geometry.location.lng())

          const service = new google.maps.DistanceMatrixService()
          service.getDistanceMatrix(
            {
              origins: [distanceOrigin],
              destinations: [distanceDestination],
              travelMode: 'DRIVING',
              unitSystem: google.maps.UnitSystem.METRIC,
              avoidHighways: false,
              avoidTolls: false
            }, callback.bind(this))

          function callback (response, status) {
            if (status === 'OK') {
              const origins = response.originAddresses
              let element = null
              let distance = null

              for (let i = 0; i < origins.length; i++) {
                const results = response.rows[i].elements
                for (let j = 0; j < results.length; j++) {
                  element = results[j]
                  distance = element.distance.text
                  this.setState(() => {
                    return {
                      distanceBtwUserDestination: distance
                    }
                  })
                  return
                }
              }
            }
          }
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

    <Place places = {props.places} distance = {props.distanceBtwUserDestination}/>
    {props.markers.map((marker, index) =>
      <Marker
        key={index}
        position={marker.position}
        icon={{
          path: 'M10.5,0.75 C5.185625,0.75 0.875,5.060625 0.875,10.375 C0.875,17.59375 10.5,28.25 10.5,28.25 C10.5,28.25 20.125,17.59375 20.125,10.375 C20.125,5.060625 15.814375,0.75 10.5,0.75 L10.5,0.75 Z M10.5,13.8125 C8.6025,13.8125 7.0625,12.2725 7.0625,10.375 C7.0625,8.4775 8.6025,6.9375 10.5,6.9375 C12.3975,6.9375 13.9375,8.4775 13.9375,10.375 C13.9375,12.2725 12.3975,13.8125 10.5,13.8125 L10.5,13.8125 Z',
          fillColor: '#75DEC5',
          strokeColor: '#FFFFFF',
          fillOpacity: 0,
          scale: 0.8
        }}/>
    )}
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={props.defaultZoom}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
      defaultOptions={{ styles: mapContainerStyles }}
    >
      {props.markers.map((marker, index) => {
        return (<Marker key={index}
          icon={{
            path: 'M10.5,0.75 C5.185625,0.75 0.875,5.060625 0.875,10.375 C0.875,17.59375 10.5,28.25 10.5,28.25 C10.5,28.25 20.125,17.59375 20.125,10.375 C20.125,5.060625 15.814375,0.75 10.5,0.75 L10.5,0.75 Z M10.5,13.8125 C8.6025,13.8125 7.0625,12.2725 7.0625,10.375 C7.0625,8.4775 8.6025,6.9375 10.5,6.9375 C12.3975,6.9375 13.9375,8.4775 13.9375,10.375 C13.9375,12.2725 12.3975,13.8125 10.5,13.8125 L10.5,13.8125 Z',
            fillColor: '#75DEC5',
            strokeColor: '#FFFFFF',
            fillOpacity: 1,
            scale: 0.8
          }}
          position={marker}/>)
      })
      }
      {props.directions && <DirectionsRenderer directions={props.directions}
        options={{
          polylineOptions: {
            strokeColor: '#2CABE2',
            strokeOpacity: 0.5,
            strokeWeight: 3
          },
          markerOptions: {
            icon: {
              path: 'M10.5,0.75 C5.185625,0.75 0.875,5.060625 0.875,10.375 C0.875,17.59375 10.5,28.25 10.5,28.25 C10.5,28.25 20.125,17.59375 20.125,10.375 C20.125,5.060625 15.814375,0.75 10.5,0.75 L10.5,0.75 Z M10.5,13.8125 C8.6025,13.8125 7.0625,12.2725 7.0625,10.375 C7.0625,8.4775 8.6025,6.9375 10.5,6.9375 C12.3975,6.9375 13.9375,8.4775 13.9375,10.375 C13.9375,12.2725 12.3975,13.8125 10.5,13.8125 L10.5,13.8125 Z',
              fillColor: '#75DEC5',
              strokeColor: '#FFFFFF',
              fillOpacity: 1,
              scale: 0.8
            }
          }
        }}/>}
    </GoogleMap>
  </div>
)

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(MapContainer)
