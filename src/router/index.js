import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Home from '@/components/Home';
import Team from '@/components/Team/Team';
import Sponsors from '@/components/Sponsors/Sponsors';
// import EventList from '@/components/Events/EventList';
const EventList = () => import('@/components/Events/EventList');
const Register = () => import('@/components/Register/Register');
const Gallery = () => import('@/components/Gallery/Gallery');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/events/:category',
      name: 'Events',
      component: EventList
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '*',
      component: Home
    }
  ],
});
