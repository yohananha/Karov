mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9hbXNtYXAiLCJhIjoiY2tkc2xxOTY1MHNyOTJwbGk4YjN4NmRwNSJ9.8iMoHVbkmowQPyjFobmOCQ";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 9,
  center: [35.1657572, 31.8009876],
});

//var marker = new mapboxgl.Marker().setLngLat([12.550343, 55.665957]).addTo(map);
// var marker2 = new mapboxgl.Marker()
//   .setLngLat([12.5503433, 55.665957])
//   .addTo(map);
// var marker3 = new mapboxgl.Marker((options = { color: "#ffff" }))
//   .setLngLat([30.5, 50.5])
//   .addTo(map);

// var marker22 = new mapboxgl.Marker()
//   .setLngLat([30.5, 50.53])
//   .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")) // add popup
//   .addTo(map);

// points.map((point) => {
//   console.log(Object.values(point.location.coordinates[0]));
//   console.log(Object.values(point.location.coordinates[0])[0]);

//   console.log(JSON.stringify(point.location.coordinates[1]));
// });
///////////////////////////////////////////////
// points.map((point) => {
//   let lng = Object.values(point.location.coordinates[0])[0];
//   let lat = Object.values(point.location.coordinates[1])[0];
//   console.log(point);
//   console.log(point.distributions.courierID);

//   let color = point.distributions.courierID ? null : { color: "#FF0000" };
//   new mapboxgl.Marker((options = color)).setLngLat([lng, lat]).addTo(map);
// });
////////////////////////////
const getPoints = () => {
  fetch("/points")
    .then((response) => response.json())
    .then((responseData) => {
      Object.keys(responseData.data).map((obj) => {
        let lng = responseData.data[obj].location.coordinates[0];
        let lat = responseData.data[obj].location.coordinates[1];
        let color = responseData.data[obj].distributions[0].courierID
          ? null
          : { color: "#FF0000" };
        new mapboxgl.Marker((options = color)).setLngLat([lng, lat]).addTo(map);

        console.log(lng);

        console.log(lat);
      });
    })
    .catch((error) => console.warn(error));
};
/////////

/////////
const points = getPoints();
console.log("points are:");

// const getPoints = () => {
//     fetch("/points")
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((arr) => console.log(arr));
//   };

// console.log("now foo: ");
// console.log(getPoints());

//getvals().then((response) => console.log(response));
