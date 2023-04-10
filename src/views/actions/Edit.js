import React from 'react'
import { useState } from 'react'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'
import { PencilSquare } from 'react-bootstrap-icons'

function Edit() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <PencilSquare onClick={() => setVisible(!visible)} size={25} className="m-1 iconsPointer" />
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

export default Edit
