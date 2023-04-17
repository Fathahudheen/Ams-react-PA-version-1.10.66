import React from 'react'
import { useState } from 'react'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'
import { EyeFill } from 'react-bootstrap-icons'
function Delete() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <EyeFill onClick={() => setVisible(!visible)} size={25} className="m-1 iconsPointer" />
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>View</CModalTitle>
        </CModalHeader>
        <CModalBody>This is view</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Delete
