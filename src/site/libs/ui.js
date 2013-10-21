module.exports = function(name) {

  return d3.select('body').
    append('div').
    attr('id', name)[0][0];

};
