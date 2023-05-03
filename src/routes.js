import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))
const Licensee = React.lazy(() => import('./pages/licensee/Licensee'))
const Coursemanage = React.lazy(() => import('./pages/coursemanage/Coursemanage'))
const Myteam = React.lazy(() => import('./pages/myteam/Myteam'))
const Enquiry = React.lazy(() => import('./pages/enquiry/Enquiry'))
const Admission = React.lazy(() => import('./pages/admission/Admission'))
const Enrollments = React.lazy(() => import('./pages/enrollments/Enrollments'))
const feepayments = React.lazy(() => import('./pages/fee payments/Feepayments'))
const Supportenq = React.lazy(() => import('./pages/supportenq/Supportenq'))
const Crscategory = React.lazy(() => import('./pages/settings/course category/Coursecategory'))
const Course = React.lazy(() => import('./pages/settings/course/Course'))
const Subject = React.lazy(() => import('./pages/settings/subject/Subject'))
const Topic = React.lazy(() => import('./pages/settings/topic/Topic'))
const CourseTrack = React.lazy(() => import('./pages/settings/coursetrack/Coursetrack'))
const Enquirymode = React.lazy(() => import('./pages/settings/enquirymode/enquirymode'))
const Enquirysource = React.lazy(() => import('./pages/settings/enquirysource/Enquirysource'))
const Supportype = React.lazy(() => import('./pages/settings/supporttype/Suportype'))
const Duration = React.lazy(() => import('./pages/settings/duration/Duration'))

//miscellaneous ie,this is not for platform admin
// const Task = React.lazy(() => import('./pages/miscellaneous/task/Task'))
// const Tasktype = React.lazy(() => import('./pages/miscellaneous/task type/Tasktype'))

const routes = [
  { path: '/home', name: 'Home' },
  { path: '/licensee', name: 'Licensee', element: Licensee },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/coursemanage', name: 'Course Management', element: Coursemanage },
  { path: '/myteam', name: 'My Team', element: Myteam },
  { path: '/enquiry', name: 'Enquiry', element: Enquiry },
  { path: '/admission', name: 'Admission', element: Admission },
  { path: '/enrollments', name: 'Enrollments', element: Enrollments },
  { path: '/payments', name: 'Fee Payments', element: feepayments },
  { path: '/supportenq', name: 'Support Enquiry', element: Supportenq },
  { path: '/settings/category', name: 'Course Category', element: Crscategory },
  { path: '/settings/course', name: 'Course', element: Course },
  { path: '/settings/subject', name: 'Subject', element: Subject },
  { path: '/settings/topic', name: 'Topic', element: Topic },
  { path: '/settings/coursetrack', name: 'Course Track', element: CourseTrack },
  { path: '/settings/enquirymode', name: 'Enquiry Mode', element: Enquirymode },
  { path: '/settings/enquirysource', name: 'Enquiry Source', element: Enquirysource },
  { path: '/settings/suportype', name: 'Support Type', element: Supportype },
  { path: '/settings/duration', name: 'Duration', element: Duration },

//miscellaneous ie,this is not for platform admin
// { path: '/miscellaneous/task', name: 'Task', element:Task },
// { path: '/miscellaneous/tasktype', name: 'Task Type', element: Tasktype },

]

export default routes
