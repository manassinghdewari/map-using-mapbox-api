 mapboxgl.accessToken = 'pk.eyJ1IjoibWFuYXM0NDQiLCJhIjoiY2t4aWhubmIxNDlmejJ3bzVmeXQ3emtuNSJ9.jbGPQsuCN0bsKk-Pra6I4w';
  
 //api that gives the current location
 navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})
 
 function successLocation(position)
 {
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude]); //in this we are passing cordinate of center i.e. longitude ,latitude 
 }
 function errorLocation()
 {
      setupMap([72.877656,19.075984])  // it means if error occurs then by default this location wll be returned 
 }

 function setupMap(center)  //center takes two argument 1-longitude 2-latitude
 {
    const map = new mapboxgl.Map
    ({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', //style means type of map for exp in this it is steet map.
        center:center,
        zoom:16     //it is zoom lavel it means more zoom then more deep map picture
    });
    // const nav = new mapboxgl.NavigationControl();     //for adding zoom in-out buttons
    // map.addControl(nav);
    
      const nav = new mapboxgl.NavigationControl({      //for adding zoom in-out buttons
        visualizePitch: true
       });
      map.addControl(nav, 'bottom-right');

      var directions = new MapboxDirections({
          // accessToken: 'YOUR-MAPBOX-ACCESS-TOKEN',
          accessToken:  mapboxgl.accessToken,   //copied from top 1st line
          // unit: 'metric',
          // profile: 'mapbox/cycling'
      });

      map.addControl(directions, 'top-left');
 }

// 10:48