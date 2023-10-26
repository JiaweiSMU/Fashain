<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6">
          <!-- Card component -->
          <div class="card">
            <div class="card-body">
              <!-- Card body with padding -->
              <div id="map" class="w-100"></div>
              <!-- Map container -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {

    data() {
      return {
        map: null,           
        infoWindow: null,    
        placesService: null, 
      };
    },
  
    // Lifecycle hook that is called when the Vue component is mounted (i.e., added to the DOM)
    mounted() {
        // Load the Google Maps JavaScript SDK when the component is mounted
        this.loadGoogleMapsScript();
    },
  
    methods: {
        // Method to load the Google Maps JavaScript SDK dynamically
        loadGoogleMapsScript() {
            console.log('loading');
            // Check if the Google Maps SDK is already loaded
            if (typeof google === 'undefined') {

                // If the Google Maps SDK is not loaded, set the global `initMap` function to the `initMap` method of this component
                // We bind it to the current Vue component's context to make sure it has access to component's data, methods, etc.
                window.initMap = this.initMap.bind(this);

                // Create a new <script> element to load the Google Maps SDK
                const script = document.createElement('script');
                // Set the source of the script to the Google Maps SDK, including the API key and callback function
                script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBgzMSEPxutQDRMWM5W9O83UR8cLMmocaE&libraries=geometry,places&callback=initMap";
                script.async = true; // Load the script asynchronously
                document.head.appendChild(script); // Append the script to the head of the document
            } 
            
            else {
                // If the Google Maps SDK is already loaded, directly initialize the map
                this.initMap();
            }
        },

      haversine_distance(arr) {
        //Current location
        let origin = new google.maps.LatLng({
          lat: 1.2954519,
          lng: 103.809086,
        });
        // console.log(origin);
        let distArr = [];

        //This code snippet calculates the distance between an origin point and multiple destination points using the Google Maps API.
        //It iterates over an array of locations, calculates the distance between the origin and each destination,
        //and stores the distances in another array. Finally, it logs the array of distances to the console.
        for (let loc of arr) {
          // console.log(loc);
          let dest = new google.maps.LatLng({ lat: loc.lat, lng: loc.lng });
          const distance =
            google.maps.geometry.spherical.computeDistanceBetween(origin, dest);
          // console.log(distance);
          distArr.push(Math.floor(distance)); //In meters
        }
        console.log(distArr);
      },
  
      initMap() {
        const customMapStyle = [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
        ];

        this.map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 1.304833, lng: 103.831833 },
          zoom: 15,
          styles: customMapStyle,
          mapTypeControl: false,
        });
        this.infoWindow = new google.maps.InfoWindow();
        this.placesService = new google.maps.places.PlacesService(this.map);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              // console.log(pos);
              this.infoWindow.setPosition(pos);
              this.infoWindow.setContent("Current Location");
              this.infoWindow.open(this.map);
              this.map.setCenter(pos);
              this.findNearbyPlaces(pos);
            },
            () => {
              handleLocationError(true, this.infoWindow, this.map.getCenter());
            }
          );
        } else {
          handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
      },
  
      findNearbyPlaces(location) {
        const request = {
          location: location,
          radius: 1000,
          type: "clothing_store",
        };

        let data = [149306, 149729];
        let results = [];

        //Alter this part, go to firestore retrieve the list of locations and use the axios.get to get the lat and long values
        for (let i = 0; i < data.length; i++) {
          // console.log(data[i]);
          
          //Firebase to retrieve the objects
          axios
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${data[i]}&key=AIzaSyBgzMSEPxutQDRMWM5W9O83UR8cLMmocaE`
            )
            .then((resp) => {
              // console.log(resp.data.results);
              let lat = resp.data.results[0].geometry.location.lat;
              let loong = resp.data.results[0].geometry.location.lng;
              let locName = {};
              locName.lat = lat;
              locName.lng = loong;
              // console.log(locName);
              results.push(locName);
              // console.log(results);
              this.haversine_distance(results); //Pass to this function to calculate the distance between the places in meters
            })
            .catch((err) => {
              console.log(err.message);
            });
        }

        this.placesService.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            const limitedResults = results.slice(0, 5);
            //   console.log(limitedResults);
            for (const place of limitedResults) {
              this.createMarker(place);
            }
          }
        });
      },
  
      createMarker(place) {
        const marker = new google.maps.Marker({
          map: this.map,
          position: place.geometry.location,
          title: place.name,
        });

        marker.addListener("click", () => {
          const mapsLink = `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}`;
          window.open(mapsLink, "_blank");
        });
      },
  
      handleLocationError(browserHasGeolocation, thisinfoWindow, pos) {
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        this.infoWindow.open(this.map);
      },
    },
  };
  </script>

  <style scoped>
  #map {
    height: 50vh;
    border-radius: 15px;
  }
  
  .card {
    border-radius: 20px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .card-body {
    padding: 15px;
  }
  
  body {
    background-color: #f5f5f5;
  }
  </style>
  