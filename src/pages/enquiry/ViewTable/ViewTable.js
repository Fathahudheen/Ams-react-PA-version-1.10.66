import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import 'react-toastify/dist/ReactToastify.css'
import { Container, Row, Col, Badge, Card, Form, Button } from 'react-bootstrap'
import './ViewTable.css'
import { CgUserList } from 'react-icons/cg'
import { GoEye } from 'react-icons/go'
import { BsPencilSquare } from 'react-icons/bs'
import { RiDeleteBin6Fill } from 'react-icons/ri'

import ViewModal from '../ViewModal/ViewModal'

import { ToastContainer } from 'react-toastify'

const ViewTable = () => {
  // ................Fetching All Data.....................//

  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/enquiry')
      const json = await response.json()
      setData(json)
      setFilterData(json)
   
    }
    fetchData()
  }, [])
  // ................Fetching All Data Enda.....................//

  //  .................Search Data........................//

  const [filterData, setFilterData] = useState([])

  const Search = (event) => {
    const query = event.target.value
    const filtered = filterData.filter((item) =>
      item.fname.toLowerCase().includes(query.toLowerCase()),
    )
    setData(filtered)
  }
  useEffect(() => {
    setFilterData(data)
  }, [filterData])

  //  .................Search Data Ends.....................//

  // ...........View Modal ......................//

  const [viewModal, setViewModal] = useState(false)
  const viewModalClose = () => {
    setViewModal(false)
  }
  const viewModalShow = () => {
    setViewModal(true)
  }

  // ...........View Modal Ends ......................//



  // ............................//
  const [id, setId] = useState(null)
  const handleClick = (id) => {
    console.log(`You clicked me! ${id}`)
    setId(id)
    console.log(id)
  }

  // .............................//

  const columns = [
    {
      name: 'ID',
      selector: '_id',
      sortable: true,
    },
    {
      name: 'NAME',
      cell: (row) => (
        <div>
          {row.fname} {row.lname}
        </div>
      ),
      sortable: true,
    },
    {
      name: 'EMAIL',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'PHONE',
      selector: 'mobile',
      sortable: true,
    },
    {
      name: 'ENQ FOR',
      selector: 'enq_for',
      sortable: true,
    },
   
    {
      name: 'STATUS',
      selector: 'status',
      cell: (row) => (
        <div>
          <Badge bg={`${row.status === 'New' ? 'success' : 'danger' }`}>{row.status}</Badge>
        </div>
      ),
      sortable: true,
    },
    {
      name: 'ACTIONS',
      cell: (row) => (
        <div className="d-flex align-items-center justify-content-center">
          <Button
            key={`view-${row._id}`}
            className="icon-btn"
            onClick={() => {
              viewModalShow()
              handleClick(row._id)
            }}
          >
            <GoEye className="text-primary" />
          </Button>
         
      
        </div>
      ),
    },
  ]

  const paginationRowsPerPageOptions = [7, 14, 25]
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-1" lg={12}>
            <Card>
              <Card.Body className="pt-4">
                <div style={{ width: '100%' }} className="d-flex ">
             
                  <input
                    className="ms-auto me-3 mb-2 ps-2 search_inp"
                    type="text"
                    onChange={Search}
                    placeholder="Search"
                  />
                  <div className='me-3 mb-2' style={{ width: '180px' }}>
                    <Form.Select
                      className="ms-auto search_inp "
                      aria-label="Default select example"
                      name=""
                    >
                      <option
                        style={{ backgroundColor: '#40536e' }}
                        value=""
                        className=" text-white"
                      >
                        Filter
                      </option>
                      <option>New</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Select>
                  </div>
                  <div className='search_inp ' style={{width:'50px', display: 'flex', alignItems: 'center',justifyContent: 'center',fontSize: '20px',fontWeight: '400',marginRight:'10px',height:'37px'}}>
                  <CgUserList style={{fontWeight: '400',fontSize:'22px'}} className="text-dark" />&nbsp;{data.length}
                  </div>
                </div>
                <DataTable
                  columns={columns}
                  data={data}
                  paginationRowsPerPageOptions={paginationRowsPerPageOptions}
                  pagination
                  paginationPerPage={7}
                  fixedHeader
                  selectableRows
                  selectableRowsHighlight
                  fixedHeaderScrollHeight="400px"
                  highlightOnHover
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ViewModal viewclose={viewModalClose} view={viewModal} id={id} />
    
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default ViewTable
