var moment =  require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp ',now.unix());

var timestamp = 1477476811;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('ddd D MMMM YYYY @ HH:mm:ss '));