module.exports = function(name) {

  var div = document.createElement('div');
  div.id = name;
  document.body.appendChild(div);
  return div;

};
