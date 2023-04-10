import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPuzzle,
  cilSpeedometer,
  cilUserFollow,
  cilPeople,
  cilCommentSquare,
  cilPen,
  cilList,
  cilDollar,
  cilGroup,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Lisensee',
    to: '/theme/colors',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'My Team',
    to: '/theme/typography',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Enquiry',
    to: '/theme/colors',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Students',
    to: '/theme/typography',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Enrollments',
    to: '/theme/colors',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Task',
    to: '/theme/typography',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Fee Payments',
    to: '/theme/colors',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users Management',
    to: '/theme/typography',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Support Enquiry',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Enquiry Mode',
        to: '/settings/enquirymode',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Enquiry Source',
        to: '/settings/enquirysource',
      },
      {
        component: CNavItem,
        name: 'Course Category',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Duration',
        to: '/base/tooltips',
      },
      {
        component: CNavItem,
        name: 'Course Track',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Subjects Syllabus',
        to: '/base/popovers',
      },
    ],
  },
]

export default _nav
