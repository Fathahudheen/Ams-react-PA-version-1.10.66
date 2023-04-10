import React from 'react'
// import CIcon from '@coreui/icons-react'
import Pagination from '../../widgets/pagination'
import Modal from 'src/views/widgets/Modal'
// import { useState } from 'react'
// import { Button } from 'react-bootstrap'
// import { BsFill0CircleFill } from 'react-icons/bs'
import Delete from 'src/views/actions/Delete'

import View from 'src/views/actions/View'

import {
  CCard,
  CCardBody,
  CCol,
  // CLink,
  // CModal,
  CButton,
  // CModalHeader,
  // CModalTitle,
  // CModalBody,
  // CModalFooter,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import {
  cibInstagram,
  cibBigCartel,
  cilAlarm,
  cilBook,
  cibFacebook,
  cibTwitter,
  cibWhatsapp,
} from '@coreui/icons'
import Filter from 'src/views/widgets/Filter'

const Dashboard = () => {
  // const [visible, setVisible] = useState(false)
  const tableExample = [
    {
      id: { id: 1 },
      mode: {
        name: 'Instagram',
        icon: cibInstagram,
        status: true,
        desc: 'Instagram description shows here',
      },
      action: {
        view: cibBigCartel,
        edit: cilAlarm,
        delete: cilBook,
      },
    },
    {
      id: { id: 2 },
      mode: {
        name: 'Facebook',
        icon: cibFacebook,
        status: true,
        desc: 'Facebook description shows here',
      },
      action: {
        view: cibBigCartel,
        edit: cilAlarm,
        delete: cilBook,
      },
    },
    {
      id: { id: 3 },
      mode: {
        name: 'Twitter',
        icon: cibTwitter,
        status: false,
        desc: 'Twitter description shows here',
      },
      action: {
        view: cibBigCartel,
        edit: cilAlarm,
        delete: cilBook,
      },
    },
    {
      id: { id: 4 },
      mode: {
        name: 'Whatsapp',
        icon: cibWhatsapp,
        status: true,
        desc: 'Whatsapp description shows here',
      },
      action: {
        view: cibBigCartel,
        edit: cilAlarm,
        delete: cilBook,
      },
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <div>
            <Modal />
          </div>
          <CCard className="mb-4">
            <CCardBody>
              <div className="">
                <div className="d-flex">
                  <div className="fw-bold fs-4"> Enquiry Mode </div>
                  <div className="justify-content-end ms-auto mb-2">
                    <Filter />
                  </div>
                </div>
              </div>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-end">Id</CTableHeaderCell>
                    {/* <CTableHeaderCell className="text-center">Image</CTableHeaderCell> */}

                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Description</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-end">
                        <div>{item.id.id}</div>
                      </CTableDataCell>
                      {/* <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.mode.icon} />
                      </CTableDataCell> */}

                      <CTableDataCell>
                        <div>{item.mode.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.mode.desc}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>
                          <span
                            style={
                              item.mode.status
                                ? { backgroundColor: 'green' }
                                : { backgroundColor: 'red' }
                            }
                            className="p-2 rounded-5 text-light"
                          >
                            {item.mode.status ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-center ">
                          <div className="">
                            <View />
                          </div>
                          <div>
                            <Delete />
                          </div>
                          <div>
                            <CButton>Delete</CButton>
                          </div>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
            <div>
              <Pagination />
            </div>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
