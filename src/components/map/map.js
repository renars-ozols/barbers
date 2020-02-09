import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import GoogleMapReact from 'google-map-react'
import { IoIosPin } from 'react-icons/io'

const AnyReactComponent = (...props) => <IoIosPin color="red" size="3em" />

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 53.334876,
      lng: -6.212157,
    },
    zoom: 11,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%', marginTop: `2rem` }}>
        <LazyLoad height={'50vh'} offset={100} once>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent lat={53.334876} lng={-6.212157} />
          </GoogleMapReact>
        </LazyLoad>
      </div>
    )
  }
}

export default Map
