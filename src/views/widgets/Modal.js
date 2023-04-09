import React from 'react'
import { useState } from 'react'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

function Modal() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className="pb-2">
        <CButton
          style={{ backgroundColor: 'rgb(88 107 135)', border: 'none' }}
          onClick={() => setVisible(!visible)}
        >
          ADD +
        </CButton>
      </div>
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

export default Modal
