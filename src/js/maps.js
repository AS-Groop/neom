const coords = [
  [40.108115,67.847597],
  [37.231205,67.255728],
  [38.823247,65.789131],
  [39.64663,66.995906],
  [41.367855,69.238113],
  [41.533887,60.663487],
  [40.119437,65.354124],
  [41.280722,69.146703]
];
import ymaps from 'ymaps';
let map;
ymaps.load()
  .then(maps => {
    map = new maps.Map('ymap', {
      center: [39.64663,66.995906],
      zoom: 8
    });
    // const myPlacemark = new maps.Placemark([41.367855,69.238113],{
    //   hintContent:'Moskwa',
    //   balloonContent:'Stolitsa'
    // })
    // console.log(map)
    // map.geoObjects.add(myPlacemark);
    return maps
  })
  .then(
    maps =>{
      let myGeoObjects = [];
      coords.forEach((e,i)=>{
        myGeoObjects[i] = new maps.GeoObject({
          geometry:{
            type: 'Point',
            coordinates: coords[i]
          }
        })
      })

      const myClusterer = new maps.Clusterer();
      myClusterer.add(myGeoObjects);
      map.geoObjects.add(myClusterer);
    }
  )
  .catch(error => console.log('Failed to load Yandex Maps', error));