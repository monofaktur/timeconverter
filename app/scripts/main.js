/*jshint esversion: 6 */

new Vue ({
  el: '#app',
  data: {
    minutes: 30,
    hours: 0
  },
  computed: {
    hoursDecimal() {
      let min = parseFloat(this.minutes) || 0;
      let hours = (parseFloat(this.hours) * 60) || 0;
      let minTotal = min + hours;
      let decimale = minTotal / 60;
      return Math.round( decimale * 100) / 100;
    }
  }

});
