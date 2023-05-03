import React from 'react'
import CIcon from '@coreui/icons-react'
// import { LayoutTextSidebarReverse,FileFontFill,FileTextFill,ChatRightDotsFill,ChatRightTextFill,CardHeading,JournalText,ListTask,CalendarDay } from 'react-bootstrap-icons'

import {
  cilPuzzle,
  cilSpeedometer,
  cilUserFollow,
  cilPeople,
  cilCommentSquare,
  cilPen,
  cilDollar,
  cilSpreadsheet,
  cilHandshake,
  cilUser,
  cilLibrary,
  cilHamburgerMenu,
  cilListRich,
  cilList,
  cilAvTimer,
  cilExcerpt,
  cilEnvelopeLetter,
  cilEnvelopeOpen,
  cilContact,
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
    name: 'Licensee',
    to: '/licensee',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Course Management',
    to: '/coursemanage',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'My Team',
    to: '/myteam',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Enquiry',
    to: '/enquiry',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Admission',
    to: '/admission',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Enrollments',
    to: '/enrollments',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Fee Payments',
    to: '/payments',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Support Enquiry',
    to: '/supportenq',
    icon: <CIcon icon={cilHandshake} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Course Category',
        to: '/settings/category',
        icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        // icon: <LayoutTextSidebarReverse className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Course ',
        to: '/settings/course',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
        // icon: <CardHeading className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Subject',
        to: '/settings/subject',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
        // icon: <FileTextFill className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Topic',
        to: '/settings/topic',
        icon: <CIcon icon={cilHamburgerMenu} customClassName="nav-icon" />,

        // icon: <FileFontFill className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Course Track',
        to: '/settings/coursetrack',
        icon: <CIcon icon={cilExcerpt} customClassName="nav-icon" />,
        // icon: <JournalText className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Enquiry Mode',
        to: '/settings/enquirymode',
        icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
        // icon: <ChatRightDotsFill className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Enquiry Source',
        to: '/settings/enquirysource',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        // icon: <ChatRightTextFill className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Support Type',
        to: '/settings/suportype',
        icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
        // icon: <CIcon icon={cilHandshake} customClassName="nav-icon" />,
      },

      {
        component: CNavItem,
        name: 'Duration',
        to: '/settings/duration',
        icon: <CIcon icon={cilAvTimer} customClassName="nav-icon" />,
        // icon: <CalendarDay className="me-3" customClassName="nav-icon" />,
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Miscellaneous',

  //   to: '/miscellaneous',
    // icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'Task',
    //     to: '/miscellaneous/task',
        // icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        // icon: <LayoutTextSidebarReverse className="me-3" customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Task Type',
      //   to: '/miscellaneous/tasktype',
        // icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        // icon: <LayoutTextSidebarReverse className="me-3" customClassName="nav-icon" />,
    //   },

    // ]

  // }
]

export default _nav
