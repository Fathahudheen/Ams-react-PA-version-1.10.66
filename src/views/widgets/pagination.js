import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

function Pagination() {
  return (
    <div>
      <CPagination align="center" aria-label="Page navigation example">
        <CPaginationItem style={{ color: 'rgb(69 89 132)' }} disabled>
          Previous
        </CPaginationItem>
        <CPaginationItem style={{ color: 'rgb(69 89 132)' }}>1</CPaginationItem>
        <CPaginationItem style={{ color: 'rgb(69 89 132)' }}>2</CPaginationItem>
        <CPaginationItem style={{ color: 'rgb(69 89 132)' }}>3</CPaginationItem>
        <CPaginationItem style={{ color: 'rgb(69 89 132)' }}>Next</CPaginationItem>
      </CPagination>
    </div>
  )
}

export default Pagination
