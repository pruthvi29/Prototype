import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import axios from 'axios';
import './grid.css';
@Component({
  template: require('./grid.html'),
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
    selectedValue: String
  },
  data: function () {
    let sortOrders = {};
    return {
      sortKey: '',
      sortOrders: sortOrders
    };
  },
  computed: {
    filteredData: function () {
      return this.$props.data;
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  methods: {
    sortBy: function (key) {
      this.$props.sortKey = key;
      this.$props.sortOrders[key] = this.$props.sortOrders[key] * -1;
    }
  }
})
export class Grid extends Vue {

  
}