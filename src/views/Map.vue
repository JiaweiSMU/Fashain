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
      currentPos: { lat: 0, lng: 0, dist: 0, }, //To get currentPos without calling function again
    };
  },

  // called when the component is added to the DOM. 
  // It triggers the function loadGoogleMapsScript() to load the Google Maps JavaScript SDK, 
  // which is used to display maps in the component.
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

        // Create a script element for the Google Maps API
        const mapsScript = document.createElement('script');

        // Set the source URL for the Google Maps API
        mapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBgzMSEPxutQDRMWM5W9O83UR8cLMmocaE&libraries=geometry,places&callback=initMap";

        // Set the script to load asynchronously
        mapsScript.async = true;

        // Append the script element to the document head
        document.head.appendChild(mapsScript);
      }
      else {
        // If the Google Maps SDK is already loaded, directly initialize the map
        this.initMap();
      }
    },


    /**
     * Calculates the Haversine distance between the current position and a given location.
     *
     * @param {Object} locObj - The location object containing latitude and longitude.
     * @return {number} The calculated distance between the two locations.
     */
    haversine_distance(locObj) {
      // Create a new LatLng object for the origin coordinates
      let origin = new google.maps.LatLng({
        lat: this.currentPos.lat,
        lng: this.currentPos.lng,
      });

      // Create a new LatLng object for the destination coordinates
      let dest = new google.maps.LatLng({ lat: locObj.lat, lng: locObj.lng });

      // Calculate the distance between the origin and destination using the spherical geometry library
      const distance = google.maps.geometry.spherical.computeDistanceBetween(origin, dest);

      // Return the distance
      return distance;
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
        //center: { lat: 1.304833, lng: 103.831833 },
        zoom: 15,
        styles: customMapStyle,
        mapTypeControl: false,
      });

      this.infoWindow = new google.maps.InfoWindow();
      this.placesService = new google.maps.places.PlacesService(this.map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const pos = { lat: latitude, lng: longitude };
            this.currentPos = pos;
            // console.log(this.currentPos);

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

    /**
     * Find nearby places based on the given location.
     *
     * @param {Object} location - The location object.
     * @return {undefined} This function does not return a value.
     */
    async findNearbyPlaces(location) {
      const request = {
        location: location,
        radius: 1000,
        type: "clothing_store",
      };
      let arrayOfData = [];
      // Call function to retrieve list of locations

      // Perform a nearby search using the placesService
      this.placesService.nearbySearch(request, (results, status) => {
        // Check if the search was successful
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // Limit the number of results to 5
          const limitedResults = results.slice(0, 5);

          // Iterate over the limited results

          //Insert code to check the distance between the current location and the place
          //If distance within X range, create a marker
          for (const place of limitedResults) {
            // Create a marker for each place
            this.createMarker(place);
          }
        }
      });

      // Pass the results array to the haversine_distance function

      let data = [149306, 149729];

      const apiKey = 'AIzaSyBgzMSEPxutQDRMWM5W9O83UR8cLMmocaE';
      const apiUrls = data.map(address => {
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
        return axios.get(apiUrl);
      });

      Promise.all(apiUrls)
        .then(responses => {
          arrayOfData = responses.map(response => {
            const { lat, lng } = response.data.results[0].geometry.location;
            var locName = {
              lat: lat,
              lng: lng,
              dist: null
            };

            const returnDist = this.haversine_distance(locName);
            locName.dist = returnDist.toFixed(2);
            console.log(locName);

            return locName;
          });
          console.log(arrayOfData[1]);
          for (let i = 0; i < arrayOfData.length; i++) {
            // console.log(arrayOfData[i]);
            if (arrayOfData[i].dist < 4800) {
              //create marker
              console.log(arrayOfData[i]);
              this.makeMarker(arrayOfData[i]);
            }
          }
        })
        .catch(error => {
          console.log(error.message);
        });


      //Alter this part, go to firestore retrieve the list of locations and use the axios.get to get the lat and long values
      // Iterate through the data array
      // for (let i = 0; i < data.length; i++) {
      //   const address = data[i];
      //   const apiKey = 'AIzaSyBgzMSEPxutQDRMWM5W9O83UR8cLMmocaE';
      //   const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

      //   axios.get(apiUrl)
      //     .then((response) => {
      //       const { lat, lng } = response.data.results[0].geometry.location;
      //       const locName = {
      //         lat: lat,
      //         lng: lng,
      //         dist: null
      //       };

      //       const returnDist = this.haversine_distance(locName);
      //       locName.dist = returnDist.toFixed(2);
      //       console.log(locName);

      //       arrayOfData.push(locName);
      //       console.log(arrayOfData);
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //     });
      // }
      // console.log(arrayOfData.locName);
    },

    makeMarker(locData) {
      console.log(locData);
      const latlng = {lat: locData.lat, lng: locData.lng};
      const marker = new google.maps.Marker({
        position: latlng,
        map: this.map,
      });
      marker.addListener("click", () => {
        const mapsLink = `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}`;
        window.open(mapsLink, "_blank");
      });
    },

    /**
     * Creates a marker on the map for the given place.
     *
     * @param {Object} place - The place object containing the information of the place.
     * @return {void} This function does not return anything.
     */
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
  