import React from 'react'
import { useState } from 'react'
// import CIcon from '@coreui/icons-react'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

function View() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      {/* <CIcon>
        <cibBigCartel />
      </CIcon> */}
      <CButton onClick={() => setVisible(!visible)}>Edit</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Edit</CModalTitle>
        </CModalHeader>
        <CModalBody>Edit</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default View
