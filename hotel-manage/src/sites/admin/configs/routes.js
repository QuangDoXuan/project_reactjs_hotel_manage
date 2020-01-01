import React from 'react';
import Authorization from '../../../securities/Authorization'
import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('../containers/dashboard/index.js'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('../containers/user/index.js'),
  loading: Loading,
});

const Room = Loadable({
  loader: () => import('../containers/room/index.js'),
  loading: Loading,
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
   { path: '/admin/dashboard', name: "Dashboard", component: Dashboard },
    { path: '/admin/user', name: "", component: User },
    { path: '/admin/room', name: "", component: Room },
]

export default routes;
