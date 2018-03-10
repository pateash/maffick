import Vue from 'vue';
import Router from 'vue-router';
// import VueAnalytics from 'vue-analytics';
// import ga from 'vue-ga';
// import Hello from '@/components/Hello';
import Home from '@/components/Home';
import Team from '@/components/Team/Team';
import Sponsors from '@/components/Sponsors/Sponsors';
// import EventList from '@/components/Events/EventList';
const EventList = () => import('@/components/Events/EventList');
const Register = () => import('@/components/Register/Register');
const Gallery = () => import('@/components/Gallery/Gallery');
const Pronites = () => import('@/components/Pronites/Pronites');

Vue.use(Router);

const technoRouter = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                progress: {
                    func: [
                        {call: 'color', modifier: 'temp', argument: '#ffb000'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                    ]
                }
            }
        },
        {
            path: '/events',
            redirect:'/events/all'
        },
        {
            path: '/events/:category',
            name: 'Events',
            component: EventList,
            meta: {
                progress: {
                    func: [
                        {call: 'color', modifier: 'temp', argument: '#ffb000'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                    ]
                }
            }
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
            path: '/pronites',
            name: 'Pronites',
            component: Pronites,
            meta: {
                progress: {
                    func: [
                        {call: 'color', modifier: 'temp', argument: '#ffb000'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                    ]
                }
            }
        },
        {
            path: '*',
            component: Home
        }
    ],
});

// ga(technoRouter, 'UA-107575556-1')
// Vue.use(VueAnalytics, {
//     id: 'UA-107575556-1',
//     technoRouter
// })
// Vue.use(VueAnalytics, {
//     id: 'UA-51356287-2',
//     technoRouter
// })
export default technoRouter;
