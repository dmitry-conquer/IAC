import { Loader } from "@googlemaps/js-api-loader";
const markers = document.querySelectorAll("[data-marker]");
const mapBlock = document.getElementById("map");
const mapCenter = mapBlock.dataset.mapCenter.split(",");
const zoom = Number(mapBlock.dataset.zoom);
const apiKey = mapBlock.dataset.api;
const mapId = mapBlock.dataset.mapId;
const icon = mapBlock.dataset.markerIcon;

const loader = new Loader({
  apiKey,
  version: "weekly",
});

loader.load().then(async () => {
  let { Map } = await google.maps.importLibrary("maps");
  const markersData = [];

  function initMarkers() {
    markers.forEach(m => {
      const data = m.dataset.marker.split(",");
      const newMarker = { lat: Number(data[0]), lng: Number(data[1]), title: data[2] };
      markersData.push(newMarker);
      m.addEventListener("click", e => {
        const currentMarkerData = e.target
          .closest("[data-marker]")
          .dataset.marker.split(",")
          .map(i => Number(i));
        setMapPostion(currentMarkerData[0], currentMarkerData[1]);
      });
    });
  }

  initMarkers();

  const map = new Map(document.getElementById("map"), {
    center: { lat: Number(mapCenter[0]), lng: Number(mapCenter[1]) },
    zoom,
    disableDefaultUI: true,
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapId,
  });

  markersData.forEach(marker => {
    new google.maps.Marker({
      map: map,
      position: { lat: marker.lat, lng: marker.lng },
      title: marker.title,
      icon,
    });
  });

  function setMapPostion(lat, lng) {
    const newCenter = { lat, lng };

    window.scrollTo({ top: 200 });
    setTimeout(() => {
      map.setCenter(newCenter);
    }, 200);
  }
});
