/*jshint laxcomma:true*/
function url() {
  return "http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0";
}

function popup(geojson) {
  return [
    '<h3>',
    geojson.properties.stop_name,
    '</h3><p>Stop ID: ',
    geojson.properties.stop_id,
    '</p><p>',
    geojson.properties.stop_desc,
    '</p>'
  ].join('');
}

var element = require('./libs/ui.js')('map')
  , map = L.map(element).setView([45.520, -122.674], 13);

L.esri.basemapLayer('Streets').addTo(map);

L.esri.clusteredFeatureLayer(url(), {
  cluster: new L.MarkerClusterGroup({
    spiderfyOnMaxZoom:false,
    disableClusteringAtZoom: 16,
    polygonOptions: {
      color: "#2d84c8",
      weight: 4,
      opacity: 1,
      fillOpacity: 0.5
    }
  }),

  onEachMarker: function(geojson, marker) {
    marker.bindPopup(popup(geojson));
  }
}).addTo(map);
