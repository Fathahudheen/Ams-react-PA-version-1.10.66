import React from 'react'
import { CCol, CFormInput, CFormTextarea, CFormSwitch } from '@coreui/react'

function Form() {
  return (
    <div className="align-middle ">
      <CCol className="mb-3" md={6} lg={10}>
        <CFormInput
          type="text"
          id="validationDefault01"
          label="Name"
          defaultValue="Mark"
          required
        />
      </CCol>
      <CCol md={6} lg={10}>
        <CFormTextarea
          label="Description"
          id="exampleFormControlTextarea1"
          rows={3}
        ></CFormTextarea>
      </CCol>
      <div className="d-flex justify-content-center mt-3 ">
        <cCol>
          <CFormSwitch
            className="btn-outline-success"
            reverse
            size="md"
            label="Status"
            id="reverseFormSwitch1"
            defaultChecked
          />
        </cCol>
      </div>
      {/* <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol> */}
    </div>
  )
}

export default Form
