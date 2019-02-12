<template>
  <div id="middle">
    <div class="container">
      <div class="flex-wrapper">
        <div class="tabs"></div>
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Middle",
    mounted() {
      const myLatLng = {lat:50.4501, lng: 30.5234}
      // eslint-disable-next-line
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 12,
        disableDefaultUI: true,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
      })
      // const image = '@/assets/marker.png'
      // const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      const marker = {
        path: 'M-15,0a15,15 0 1,0 30,0a15,15 0 1,0 -30,0',
        fillColor: '#3db565',
        fillOpacity: 1,
        scale: .8
      }
      // eslint-disable-next-line
      this.marker = new google.maps.Marker({
        position: {lat:50.4430, lng: 30.5234},
        map: this.map,
        title: 'Киев',
        icon: marker
      });

    }
  }
</script>

<style scoped lang="scss">
  #middle {
    background-color: var(--black);
  }
  
  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 50%;
    }
  }
  
  #map {
    height: 500px;
    background-color: tomato;
  }
  
  /*Media*/
  @media only screen and (max-width : 768px) {
    .flex-wrapper {
      & > div {
        width: 100%;
      }
    }
  }
</style>

<style>
  a[href^="http://maps.google.com/maps"]{display:none !important}
  a[href^="https://maps.google.com/maps"]{display:none !important}
  
  .gmnoprint a, .gmnoprint span, .gm-style-cc {
    display:none;
  }
  .gmnoprint div {
    background:none !important;
  }
</style>