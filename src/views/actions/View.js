import React from 'react'
import { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

function View(props) {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CIcon>
        <cibBigCartel />
      </CIcon>
      <CButton onClick={() => setVisible(!visible)}>Vertically centered modal</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </CModalBody>
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
