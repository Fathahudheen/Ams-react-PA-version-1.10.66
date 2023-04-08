import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Enquirymode = React.lazy(() => import('./views/settings/enquirymode/enquirymode'))
const Enquirysource = React.lazy(() => import('./views/settings/enquirysource/Enquirysource'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/settings/enquirymode', name: 'Enquiry Mode', element: Enquirymode },
  { path: '/settings/enquirysource', name: 'Enquiry Source', element: Enquirysource },
]

export default routes
