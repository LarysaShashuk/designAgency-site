const mapElement = document.querySelector('#map')

if (mapElement) {
  // Create the script tag, set the appropriate attributes
  const script = document.createElement('script')
  script.src =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDgclrR8QqACLDYcgLjsLd1RIZV9-V8Bpc&_=1592332435797&callback=initMap'
  script.defer = true

  // Append the 'script' element to 'head'
  document.head.appendChild(script)

  let map

  // Attach your callback function to the `window` object
  window.initMap = function() {
    // JS API is loaded and available

    const mapCenter = { lat: 34.043782, lng: -118.191228 }

    // The map, centered
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: mapCenter,
      disableDefaultUI: true,
      styles: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5'
            }
          ]
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#f5f5f5'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [
            {
              saturation: -30
            },
            {
              lightness: -40
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#808080'
            }
          ]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#bdbdbd'
            }
          ]
        },
        {
          featureType: 'landscape',
          stylers: [
            {
              color: '#b8b7b7'
            },
            {
              lightness: -25
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#eeeeee'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e5e5e5'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e'
            }
          ]
        },
        {
          featureType: 'road',
          stylers: [
            {
              lightness: 80
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#bdbcbc'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#e8e8e8'
            },
            {
              lightness: -40
            },
            {
              visibility: 'on'
            },
            {
              weight: 0.5
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dadada'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#8c8c8c'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          featureType: 'road.local',
          stylers: [
            {
              saturation: -40
            },
            {
              lightness: -85
            },
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#bfbfbf'
            },
            {
              weight: 0.5
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#000000'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e'
            }
          ]
        },
        {
          featureType: 'transit',
          stylers: [
            {
              color: '#706f6b'
            },
            {
              saturation: 100
            },
            {
              lightness: 100
            },
            {
              weight: 1
            }
          ]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e5e5e5'
            }
          ]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#eeeeee'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#c9c9c9'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e'
            }
          ]
        }
      ]
    })

    // Marker

    let markerIcon = 'assets/img/marker.svg'

    let point = {
      position: { lat: 34.043782, lng: -118.191228 },
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'clemo Agency',
      icon: markerIcon
    }

    let marker = new google.maps.Marker(point)
    marker.setMap(map)
  }
}
