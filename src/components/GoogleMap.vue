<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-6 col-xl-6">
        <div>
          <!-- To filter based on distance -->
          <p>Current dist to filter by is {{ dist }}</p>
          <button @click="dist += 100">Add</button>
          <input v-model="dist">
          <button @click="dist -= 100">Minus</button>
        </div>
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
import { collection, where, query, doc, getFirestore, getDocs, setDoc } from "firebase/firestore";
import { toRaw } from 'vue';
const { encoding } = await google.maps.importLibrary("geometry")
const { spherical } = await google.maps.importLibrary("geometry")
const db = getFirestore();
const q = query(collection(db, "users"));

export default {
  data() {
    return {
      map: null,
      infoWindow: null,
      placesService: null,
      currentPos: { lat: 0, lng: 0, dist: 0, }, //To get currentPos without calling function again
      dist: 1000,
      users: [],
      markers: [],
    };
  },


  /**
   * Load the Google Maps JavaScript SDK when the component is mounted.
   *
   * @param {} 
   * @return {} 
   */
  mounted() {
    // Load the Google Maps JavaScript SDK when the component is mounted
    this.loadGoogleMapsScript();
  },
  watch: {
    /**
     * This function is used to calculate the distance.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    dist() {
      this.findNearbyPlaces(this.currentPos);
    },
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
        mapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDA9Lr5Q_orxHic9yRrScWEU6P6OQM_mjI&libraries=geometry&callback=initMap";

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
     * Retrieves the users subcollection from the database and performs some operations on it.
     *
     * @return {void} This function does not return any value.
     */
    /**
     * Retrieves the users subcollection and performs some operations on the data.
     */
    getUsersSubcollection() {
      // Retrieve the documents from the subcollection
      getDocs(q).then((querySnapshot) => {
        // Iterate over each document in the query snapshot
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          this.users.push(data);
        });

        // Log a message indicating that the list of users is being retrieved
        console.log('Hi getting list of users');

        // Log the list of users
        console.log(this.users);

        // Iterate over each user in the list
        for (const user of this.users) {
          // Check if the user type is "business"
          if (user.userType == "business") {
            // Log the name of the user
            console.log(user.name);
          }
        }
      });
    },


    /**
     * Initializes the map and sets up the necessary components and configurations.
     *
     * @return {Promise<void>} A promise that resolves when the map is successfully initialized.
     */
    async initMap() {
      const { encoding } = await google.maps.importLibrary("geometry")
      const { spherical } = await google.maps.importLibrary("geometry")
      // Define custom map style
      const customMapStyle = [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
      ];

      // Create a new map instance
      this.map = new google.maps.Map(document.getElementById("map"), {
        // Set the initial center of the map
        // center: { lat: 1.304833, lng: 103.831833 },
        zoom: 15,
        styles: customMapStyle,
        mapTypeControl: false,
      });

      // Create an info window
      this.infoWindow = new google.maps.InfoWindow();

      // Create a places service
      this.placesService = new google.maps.places.PlacesService(this.map);

      // Check if geolocation is available
      if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Extract latitude and longitude from the position
            const { latitude, longitude } = position.coords;
            const pos = { lat: latitude, lng: longitude };
            this.currentPos = pos;

            // Set the position of the info window
            this.infoWindow.setPosition(pos);

            // Set the content of the info window
            this.infoWindow.setContent("Current Location");

            // Open the info window on the map
            this.infoWindow.open(this.map);

            // Set the center of the map to the current position
            this.map.setCenter(pos);

            // Find nearby places
            this.findNearbyPlaces(pos);
          },
          () => {
            // Handle location error
            handleLocationError(true, this.infoWindow, this.map.getCenter());
          }
        );
      } else {
        // Handle location error
        handleLocationError(false, this.infoWindow, this.map.getCenter());
      }
    },

    /**
* Calculates the Haversine distance between the current position and a given location.
*
* @param {Object} locObj - The location object containing latitude and longitude.
* @return {number} The calculated distance between the two locations.
*/
    haversine_distance(locObj) {
      setTimeout(250);
      console.log(locObj);
      // Create a new LatLng object for the origin coordinates
      console.log('In calculate distance');
      let origin = new google.maps.LatLng({
        lat: this.currentPos.lat,
        lng: this.currentPos.lng,
      });

      // Create a new LatLng object for the destination coordinates
      let destination = new google.maps.LatLng({ lat: locObj.lat, lng: locObj.lng });

      // Calculate the distance between the origin and destination using the spherical geometry library
      const distance = google.maps.geometry.spherical.computeDistanceBetween(origin, destination)
      // console.log(distance);

      // Return the distance
      return distance;
    },

    /**
     * Find nearby places based on the given location.
     *
     * @param {Object} location - The location object.
     * @return {undefined} This function does not return a value.
     */
    async findNearbyPlaces(location) {
      console.log('Inside FindNearbyPlaces')
      const request = {
        location: location,
        radius: 1000,
        type: "clothing_store",
      };
      let arrayOfData = [];
      let markerArray = [];

      //Empty out array
      arrayOfData.splice(0);
      markerArray.splice(0);
      this.users.splice(0);
      if (this.markers.length > 0) {
        this.markers.splice(0);
      }

      //Old Code 

      // Perform a nearby search using the placesService
      // this.placesService.nearbySearch(request, (results, status) => {
      //   // Check if the search was successful
      //   if (status === google.maps.places.PlacesServiceStatus.OK) {
      //     // Limit the number of results to 5
      //     const limitedResults = results.slice(0, 5);
      //     //const bounds = new google.maps.LatLngBounds();
      //     // Iterate over the limited results
      //     for (const place of limitedResults) {
      //       // Create a marker for each place
      //       //bounds.extend(place.geometry.location);
      //       this.createMarker(place);
      //     }
      //     //this.map.fitBounds(bounds);
      //   }
      // });

      // https://jsfiddle.net/hufk3qtL/2/ To loop through radius and display
      // Pass the results array to the haversine_distance function

      // let data = [149306, 149729];

      getDocs(q).then((querySnapshot) => {
        // Iterate over each document in the query snapshot
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          this.users.push(data);
        });

        console.log('Hi getting list of users');
        console.log(this.users);

        // Iterate over each user in the users array
        for (const user of this.users) {
          if (user.userType == "business") {
            // Create a location object with latitude and longitude
            var locName = {
              lat: user.address.latitude,
              lng: user.address.longitude,
              dist: 0
            };

            // Calculate distance using haversine formula
            const returnDist = this.haversine_distance(locName);
            locName.dist = returnDist.toFixed(2);

            // Add the location to the arrayOfData array
            arrayOfData.push(locName);
          }
        }

        console.log(arrayOfData);

        // Iterate over each location in the arrayOfData array
        for (const loc of arrayOfData) {
          if (loc.dist < this.dist) {
            // Add the location to the markerArray array
            markerArray.push(loc);
          }
        }

        console.log(markerArray);

        // Call the makeMarker function with the markerArray
        this.makeMarker(markerArray);
      });

      //Idk wtf is this dont touch

      // const apiKey = 'AIzaSyDA9Lr5Q_orxHic9yRrScWEU6P6OQM_mjI';

      // // Map each address to a geocoding API request URL
      // const apiUrls = data.map(address => {

      //   const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBAXj3w94Ny-9Kylm1nrFCJtPki8B1dMfk`;
      //   return axios.get(apiUrl);
      // });

      // // Wait for all API requests to complete
      // Promise.all(apiUrls)
      //   .then(responses => {
      //     // Extract latitude, longitude, and distance from each response
      //     arrayOfData = responses.map(response => {
      //       const { lat, lng } = response.data.results[0].geometry.location;
      //       var locName = {
      //         lat: lat,
      //         lng: lng,
      //         dist: 0
      //       };

      //       // Calculate distance using haversine formula
      //       const returnDist = this.haversine_distance(locName);
      //       locName.dist = returnDist.toFixed(2);

      //       return locName;
      //     });

      //     // Filter and process data within a certain distance
      //     for (let i = 0; i < arrayOfData.length; i++) {
      //       if (arrayOfData[i].dist < this.dist) {
      //         //Add into array
      //         markerArray.push(arrayOfData[i]);
      //         // Create marker
      //         // console.log(arrayOfData[i]);
      //         // this.makeMarker(arrayOfData[i]);
      //       }
      //     }
      //     // console.log('Am i pushing');
      //     console.log(this.markerArray);
      //     //Loop through a array to add to map marker
      //     this.makeMarker(markerArray);
      //   })
      //   .catch(error => {
      //     console.log(error.message);
      //   });

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

    /**
     * Creates markers on a Google Map for each location in the given data.
     *
     * @param {Array} locData - An array of objects containing latitude and longitude for each location.
     */
    makeMarker(locData) {
      // Log a message indicating that the marker is being made
      console.log('Hi making marker');

      // Log the location data
      console.log(locData);

      // Iterate over the location data
      for (let i = 0; i < locData.length; i++) {
        // Log the current index
        console.log(i);

        // Create a new latlng object for the current location
        let latlng = { lat: locData[i].lat, lng: locData[i].lng };

        // Create a new marker for the current location
        let marker = new google.maps.Marker({
          position: latlng,
          map: this.map,
        });

        // Add a click event listener to the marker
        marker.addListener("click", () => {
          // Generate a Google Maps link for the marker's location
          const mapsLink = `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}`;

          // Open the link in a new tab
          window.open(mapsLink, "_blank");
        });

        // Add the marker to the markers array
        this.markers.push(marker);
      }
    },

    /** Use the above makeMarker instead to create
     * Creates a marker on the map for the given place.
     *
     * @param {Object} place - The place object containing the information of the place.
     * @return {void} This function does not return anything.
     */
    /**
     * Creates a marker on the map at the given place.
     * @param {Object} place - The place object containing the location and name of the marker.
     */
    createMarker(place) {
      // Create a new marker on the map
      const marker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        title: place.name,
      });

      // Add a click event listener to the marker
      marker.addListener("click", () => {
        // Generate a Google Maps link with the location of the marker
        const mapsLink = `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}`;
        // Open the link in a new tab
        window.open(mapsLink, "_blank");
      });
    },


    /**
     * Handles the location error.
     *
     * @param {boolean} browserHasGeolocation - Indicates if the browser has geolocation.
     * @param {infoWindow} thisinfoWindow - The info window object.
     * @param {pos} pos - The position object.
     * @return {void} This function does not return a value.
     */
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
    