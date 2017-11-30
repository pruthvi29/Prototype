import Vue from 'vue';
import axios from 'axios';
import { Component, Watch } from 'vue-property-decorator';
import './navbar.css';
@Component({
  template: require('./navbar.html'),
  props: {
    value: null,
    items: {
      type: Array,
      required: true
    }
  }
})
export class Navbar extends Vue {

}