function initMap() {
    // Initialize the map object to be shown on the screen
    // Map ID is private and provided by Du Nguyen for this project use only
    map = new google.maps.Map(document.getElementById("map"), {
      mapId: "3d375f96ca2243c3",
      // lat and lng is the coordinate that the custom map will be zoomed into when first run
      center: { lat: 39.129475370358996, lng: -84.51613866940073 },
      zoom: 17,
      maptypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    });

    // Name
    // Latitude, Longitude
    // Image URL
    // scaledSize width, height
    const markers = [
      [
        "You are here marker",
        39.128221490956705,
        -84.51694299694256,
        "icon/standing_person_marker.png",
        40,
        40
      ]
      
      [
        "BIBIBOP Asian Grill",
        39.1284323,
        -84.51638,
        "icon/standing_person_marker.png",
        40,
        40
      ]

    ];

    // loop go through all the items in markers and initialize it
    for (let i = 0; i < markers.length; i++) {
      const currMarker = markers[i];
      const standing_marker = new google.maps.Marker({
        position: { lat: 39.128221490956705, lng: -84.51694299694256 },
        map,
        title: "Standing Person Marker",
        icon: {
          url: "icon/standing_person_marker.png",
          scaledSize: new google.maps.Size(40,40) // Size(width, height[, widthUnit, heightUnit])
        },
        animation: google.maps.Animation.DROP
      });
      
      const infowindow = new google.maps.InfoWindow({
        content: "You are standing at this location",
      });
  
      standing_marker.addListener("click", () => {
        infowindow.open(map, standing_marker);
      }) 



    }



    /* This part is hard coded to display only a single standing person marker
    to display a list of different marker, the markers array will be utilized and use a for loop to go through the items
    
    // Add and initialize a single marker
    // The maker lat and lng 39.128221490956705, -84.51694299694256
    const standing_marker = new google.maps.Marker({
      position: { lat: 39.128221490956705, lng: -84.51694299694256 },
      map,
      title: "Standing Person Marker",
      icon: {
        url: "icon/standing_person_marker.png",
        scaledSize: new google.maps.Size(40,40) // Size(width, height[, widthUnit, heightUnit])
      },
      animation: google.maps.Animation.DROP
    });
    
    // This object is declared to open the info window when click on the standing_marker
    const infowindow = new google.maps.InfoWindow({
      content: "You are standing at this location",
    });

    standing_marker.addListener("click", () => {
      infowindow.open(map, standing_marker);
    }) 
    
    */
  } 
    
  
  window.initMap = initMap;
  
// University of Cincinnati latitude and longtitue respectively: 
// 39.13140206910473, -84.51619941228316

// Standing Person Marker:
// 39.128546992045806, -84.51730215071254