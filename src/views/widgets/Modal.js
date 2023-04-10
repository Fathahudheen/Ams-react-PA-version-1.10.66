import React from 'react'
import { useState } from 'react'
import {
  CModal,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
} from '@coreui/react'
import Form from './Form'
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
          <CModalTitle>Add</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="row g-3">
            <div className="d-flex justify-content-center">
              <Form />
            </div>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton
                color="primary"
                type="submit"
                style={{ backgroundColor: 'rgb(69 89 132)', border: 'none' }}
              >
                Submit
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default Modal
