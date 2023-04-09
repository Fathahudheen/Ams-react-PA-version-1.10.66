import React from 'react'
import { CDropdown, CDropdownMenu, CDropdownToggle, CDropdownItem } from '@coreui/react'

function Filter() {
  return (
    <div className="d-flex">
      <p className="fw-bold fs-4"> Enquiry source </p>
      <div className="justify-content-end ms-auto">
        <CDropdown>
          <CDropdownToggle color="light">Filter Table</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
    </div>
  )
}

export default Filter
