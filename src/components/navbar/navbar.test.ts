import Vue from 'vue';
import VueRouter from 'vue-router';
//import Component from 'vue-class-component';
import { Component, Watch } from 'vue-property-decorator';
import './navbar.css'
import { ComponentTest } from '../../util/component-test';
import { Navbar } from './navbar';

@Component({
  template: require('./navbar.html'),
  props: {
    value: null,
    items: {
      type: Array,
      required: true,
      default: function () { return [] }
    }
  }
})
class MockNavbarComponent extends Navbar {
  constructor() {
    super();
  }
}

describe('Navbar component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;
  let items:[{'name': 'Home', 'link': '#'},{'name': 'Applications', 'link': '#'}];

  beforeEach(() => {
    Vue.use(VueRouter);
    directiveTest = new ComponentTest('<div><navbar :items='+items+'></navbar></div>', { 'Navbar': MockNavbarComponent });
  });


  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
      expect(vm.$el).toMatchSnapshot();
    });
  });
});
