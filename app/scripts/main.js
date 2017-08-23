/*jshint esversion: 6 */

var ToDecimal = Vue.extend({
  template: '#template-todecimal',
  data: function () {
    return {
      minutes: 30,
      hours: 0
    };
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

var ToMinutes = Vue.extend({
  template: '#template-tominutes',
  data: function () {
    return {
      hoursDecimal: 0.5
    };
  },
  computed: {
    minutes() {
      return Math.round(this.hoursDecimal * 60);
    }
  }
});

new Vue ({
  el: '#app',
  components: {
    todecimal: ToDecimal,
    tominutes: ToMinutes
  }
});
