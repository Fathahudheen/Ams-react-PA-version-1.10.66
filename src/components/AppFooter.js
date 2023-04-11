import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="d-flex justify-content-center">
      {/* <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ms-1">&copy; 2023 creativeLabs.</span>
      </div> */}
      <div>
        <span className="me-1">Developed by</span>
        <a href="https://fullstackdeveloper.io/" target="_blank" rel="noopener noreferrer">
          Fullstack Developer Academy
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
