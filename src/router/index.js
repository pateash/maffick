import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Home from '@/components/Home';
import EventList from '@/components/Events/EventList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/events',
      name: 'Events',
      component: EventList
    }
  ],
});
