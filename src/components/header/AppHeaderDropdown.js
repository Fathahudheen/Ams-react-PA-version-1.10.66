import React from 'react'
import { Link } from 'react-router-dom'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilLockLocked, cilSettings, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Myprofile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Reset password
        </CDropdownItem>
        <CDropdownDivider />
        <Link className="text-dark" to="/login" style={{ textDecoration: 'none' }}>
          <CDropdownItem>
            <CIcon icon={cilLockLocked} className="me-2" />
            Log Out
          </CDropdownItem>
        </Link>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
