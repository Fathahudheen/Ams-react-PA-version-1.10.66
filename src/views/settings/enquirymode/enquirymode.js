import React from 'react'
import CIcon from '@coreui/icons-react'
import Pagination from '../../widgets/pagination'
import Modal from 'src/views/widgets/Modal'
// import View from 'src/views/actions/View'

import {
  CCard,
  CCardBody,
  CCol,
  CLink,
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
            {/* <CButton
              style={{ backgroundColor: 'rgb(88 107 135)', border: 'none' }}
              className="mb-2"
            >
              ADD+
            </CButton> */}
            <Modal />
          </div>
          <CCard className="mb-4">
            <CCardBody>
              <Filter />
              {/* <div className="d-flex">
                <p className="fw-bold fs-4"> Enquiry source </p>
                <div className="justify-content-end ms-auto">
                  <CDropdown>
                    <CDropdownToggle color="light">Dropdown button</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </div>
              </div> */}
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-end">Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Image</CTableHeaderCell>

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
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.mode.icon} />
                      </CTableDataCell>

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
                        <div className="d-flex justify-content-center">
                          <CLink>
                            <CIcon size="xl " icon={item.action.view} />
                          </CLink>
                          <CIcon size="xl " icon={item.action.edit} />
                          <CIcon size="xl" icon={item.action.delete} />
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
