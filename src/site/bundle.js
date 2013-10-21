;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(name) {

  return d3.select('body').
    append('div').
    attr('id', name)[0][0];

};

},{}],2:[function(require,module,exports){
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

},{"./libs/ui.js":1}]},{},[2,1])
;