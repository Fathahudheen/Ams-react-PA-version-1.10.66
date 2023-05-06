import React, { useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  // CDropdown,
  // CDropdownMenu,
  // CDropdownItem,
  // CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
// import { getStyle } from '@coreui/utils'
// import { CChartBar, CChartLine } from '@coreui/react-chartjs'
// import CIcon from '@coreui/icons-react'
// import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {

    // ................Fetching licensee All Data.....................//

    const [license, setlicense] = useState([])
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:8000/licensee/licensee/count')
        const json = await response.json()
        setlicense(json)
      }
      fetchData()
    }, [])
  
    // ................Fetching licensee All Data Enda.....................//
    
        // ................Fetching Myteam All Data.....................//

        const [myteam, setmyteam] = useState([])
        useEffect(() => {
          async function fetchData() {
            const response = await fetch('http://localhost:8000/myteam')
            const json = await response.json()
            setmyteam(json)
          }
          fetchData()
        }, [])
      
        // ................Fetching Myteam All Data Enda.....................//
    
          // ................Fetching Myteam All Data.....................//

          const [admission, setAdmission] = useState([])
          useEffect(() => {
            async function fetchData() {
              const response = await fetch('http://localhost:8000/std_profile')
              const json = await response.json()
              setAdmission(json)
            }
            fetchData()
          }, [])
        
          // ................Fetching Myteam All Data Enda.....................//
  
  return (
    <>
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              {license.length}
            </>
          }
          title="Licensee"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {myteam.length}
            </>
          }
          title="My Team"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              {admission.length}
            </>
          }
          title="Admissions"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              0{''}
            </>
          }
          title="Enrollments"
        />
      </CCol>
    </CRow>
    <CRow>
    <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              0  {' '}
            </>
          }
          title="Course Categories"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              0  {' '}
            </>
          }
          title="Courses"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              0  {' '}
            </>
          }
          title="Enquiries"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              0  {' '}
            </>
          }
          title="Sessions"
        />
      </CCol>


    </CRow>
    
  </>

  )
}

export default WidgetsDropdown
