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
})

// const Doctor = Loadable({
//   loader: () => import('../containers/doctor'),
//   loading: Loading,
// })

// const MgrAdmin = Loadable({
//   loader: () => import('../containers/mgr-admin'),
//   loading: Loading,
// })

// const Post = Loadable({
//   loader: () => import('../containers/post'),
//   loading: Loading,
// })

// const MgrRole = Loadable({
//   loader: () => import('../containers/role'),
//   loading: Loading,
// })

// const MgrHospital = Loadable({
//   loader: () => import('../containers/hospital'),
//   loading: Loading,
// })

// const MgrDetailHospital = Loadable({
//   loader: () => import('../containers/hospital/detail-hospital'),
//   loading: Loading,
// })

// const MgrDetailWallets = Loadable({
//   loader: () => import('../containers/hospital/detail-wallets'),
//   loading: Loading,
// })

// const MgrRegisteredDoctor = Loadable({
//   loader: () => import('../containers/doctor-inf'),
//   loading: Loading,
// })

// const MgrSpecialist = Loadable({
//   loader: () => import('../containers/specialist'),
//   loading: Loading,
// })

// const MgrServiceType = Loadable({
//   loader: () => import('../containers/serviceType'),
//   loading: Loading,
// })

// const MgrBooking = Loadable({
//   loader: () => import('../containers/booking'),
//   loading: Loading,
// })

// const MedicineCategory = Loadable({
//   loader: () => import('../containers/medicine-category'),
//   loading: Loading,
// })

// const UserTracking = Loadable({
//   loader: () => import('../containers/user-tracking'),
//   loading: Loading,
// })


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
   { path: '/admin/dashboard', name: "Dashboard", component: Dashboard },
    { path: '/admin/user', name: "", component: User },
  // { path: '/admin/doctor', name: "", component: Doctor },
  // { path: '/admin/mgr-admin', name: "", component: MgrAdmin },
  // { path: '/admin/post', name: "", component: Post },
  // { path: '/admin/role', name: "", component: MgrRole },
  // { path: '/admin/hospital', name: "", component: MgrHospital },
  // { path: '/admin/detail-hospital/:id', name: "", component: MgrDetailHospital },
  // { path: '/admin/wallets-hospital/:id', name: "", component: MgrDetailWallets },
  // { path: '/admin/doctor-inf', name: "", component: MgrRegisteredDoctor },
  // { path: '/admin/specialist', name: "", component: MgrSpecialist },
  // { path: '/admin/service-type', name: "", component: MgrServiceType },
  // { path: '/admin/booking', name: "", component: MgrBooking },
  // { path: '/admin/medicine-category', name: "", component: MedicineCategory },
  // { path: '/admin/user-tracking', name: "", component: UserTracking }
]

export default routes;
