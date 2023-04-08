import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilDrop,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
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
      // text: 'NEW',
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
    name: 'Myteam',
    to: '/theme/typography',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  {
    component: CNavItem,
    name: 'Enquiry',
    to: '/theme/colors',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Allstudents',
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
    name: 'Fee payments',
    to: '/theme/colors',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users management',
    to: '/theme/typography',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Support enquiry',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Accordion',
      //   to: '/base/accordion',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Breadcrumb',
      //   to: '/base/breadcrumbs',
      // },
      {
        component: CNavItem,
        name: 'Enquiry mode',
        to: '/settings/enquirymode',
      },
      {
        component: CNavItem,
        name: 'Enquiry source',
        to: '/settings/enquirysource',
      },
      {
        component: CNavItem,
        name: 'Course category',
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
        name: 'Subjects-Syllabus',
        to: '/base/popovers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'Buttons',
    //     to: '/buttons/buttons',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Buttons groups',
    //     to: '/buttons/button-groups',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Dropdowns',
    //     to: '/buttons/dropdowns',
    //   },
    // ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
]

export default _nav
