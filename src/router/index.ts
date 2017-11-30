import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * import your page or compoennt.
 * 
 * grouping components in the same chunk, see: 
 * https://router.vuejs.org/en/advanced/lazy-loading.html
 */

const App = () => import(/* webpackChunkName: "APP" */'../containers/app').then(m => m.App);
const DealerMultiselect = () => import(/* webpackChunkName: "home" */'../components/multiselect').then(m => m.DealerMultiselect);
const Inventory = () => import(/* webpackChunkName: "Inventory" */'../pages/inventory').then(m => m.Inventory);
const TradeHistory = () => import(/* webpackChunkName: "Trade" */'../pages/tradehistory').then(m => m.TradeHistory);
const VehicleEstimator = () => import(/* webpackChunkName: "VehicleEsylmator" */'../pages/vehicleestimator').then(m => m.VehicleEstimator);
const LocalHistory = () => import(/* webpackChunkName: "LocalHistory" */'../pages/localhistory').then(m => m.LocalHistory);


/**
 * use router plugin.
 */
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: App,
       // redirect: '/home',
      children: [
        {
          path: '/dashboard',
          component: DealerMultiselect
        },
        {
          path: '/inventory',
          component: Inventory
        },
        {
          path: '/tradehistory',
          component: TradeHistory
        },
        {
          path: '/vehicleestimator',
          component: VehicleEstimator
        },
        {
          path: '/localhistory',
          component: LocalHistory
        }
      ]
    },
  ]
});