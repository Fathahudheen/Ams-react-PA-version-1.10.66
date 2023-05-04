import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import 'react-toastify/dist/ReactToastify.css'
import { Container, Row, Col, Badge, Card, Form, Button } from 'react-bootstrap'
import './ViewTable.css'
import { CgUserList } from 'react-icons/cg'
import { GoEye, GoPlus } from 'react-icons/go'
import { BsPencilSquare } from 'react-icons/bs'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import AddModal from '../AddModal/AddModal'
import ViewModal from '../ViewModal/ViewModal'
import UpdateModal from '../UpdateModal/UpdateModal'
import DeleteData from '../DeleteData/DeleteData'
import { ToastContainer } from 'react-toastify'

const ViewTable = () => {
  //................Table Render Controll.............//

  const [load, setLoad] = useState(false)
  const tableRenderTrue = () => {
    setLoad(true)
  }
  const tableRenderFalse = () => {
    setLoad(false)
  }

  //................Table Render Controll Ends.............//

  // ................Fetching All Data.....................//

  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/supportType')
      const json = await response.json()
      setData(json)
      setSearchData(json)
      setFilterData(json)
      console.log('hp')
    }
    fetchData()
  }, [load])

  // ................Fetching All Data Enda.....................//

  //  .................Search Data........................//

  const [searchData, setSearchData] = useState([])

  const Search = (event) => {
    const query = event.target.value
    const searched = searchData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    )
    setData(searched)
  }
  useEffect(() => {
    setSearchData(data)
  }, [searchData])

  //  .................Search Data Ends.....................//

   //  .................Filter Data........................//

   const [filterData, setFilterData] = useState([])

   const filter = (event) => {
     const filterquery = event.target.value
     const filtered = filterData.filter((item) =>
     item.status.toUpperCase() === filterquery.toUpperCase() || filterquery === "",
     )
     setData(filtered)
   }
   useEffect(() => {
    setFilterData(data)
   }, [filterData])
 
   //  .................Filter Data Ends.....................//

  // ...........Add Modal ......................//

  const [addModal, setAddModal] = useState(false)
  const addModalClose = () => {
    setAddModal(false)
  }
  const addModalShow = () => {
    setAddModal(true)
  }

  // ...........Add Modal Ends ......................//

  // ...........View Modal ......................//

  const [viewModal, setViewModal] = useState(false)
  const viewModalClose = () => {
    setViewModal(false)
  }
  const viewModalShow = () => {
    setViewModal(true)
  }

  // ...........View Modal Ends ......................//

  // ...........Update Modal ......................//

  const [updateModal, setUpdateModal] = useState(false)
  const updateModalClose = () => {
    setUpdateModal(false)
  }
  const updateModalShow = () => {
    setUpdateModal(true)
  }

  // ...........Update Modal Ends ......................//

  // ...........Delete Modal ......................//

  const [deleteModal, setDeleteModal] = useState(false)
  const deleteModalClose = () => {
    setDeleteModal(false)
  }
  const deleteModalShow = () => {
    setDeleteModal(true)
  }

  // ...........Delete Modal Ends ......................//

  // ...........Row Id.................//
  const [id, setId] = useState(null)
  const handleClick = (id) => {
    console.log(`You clicked me! ${id}`)
    setId(id)
    console.log(id)
  }

  // ...........Row Id Ends..................//

  // ...............Table...................//
  const columns = [
    {
    name: 'ID',
    selector: '_id',
    sortable: true,
  },
    {
      name: 'NAME',
      selector: 'name',
      sortable: true,
    
    },
    {
      name: 'DESCRIPTION',
      selector: 'descp',
      sortable: true,
    
    },
    {
      name: 'STATUS',
      selector: 'status',
      cell: (row) => (
        <div>
          <Badge bg={`${row.status === 'Active' ? 'success' : 'danger'}`}>{row.status}</Badge>
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
              tableRenderTrue()
            }}
          >
            <GoEye className="text-primary" />
          </Button>
          <Button
            key={`upd-${row._id}`}
            className="icon-btn"
            onClick={() => {
              updateModalShow()
              handleClick(row._id)
              tableRenderFalse()
            }}
          >
            <BsPencilSquare className="text-info" />
          </Button>
          <Button
            key={`dlt-${row._id}`}
            className="icon-btn"
            onClick={() => {
              deleteModalShow()
              handleClick(row._id)
              tableRenderFalse()
            }}
          >
            <RiDeleteBin6Fill className="text-danger" />
          </Button>
        </div>
      ),
    },
  ]

  const paginationRowsPerPageOptions = [7, 14, 25]

  // ...............Table Ends...................//
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-1" lg={12}>
            <Card>
              <Card.Body className="pt-4">
                <div style={{ width: '100%' }} className="d-flex ">
                  <Button
                    className="mb-2 fw-600 d-flex align-items-center text-white"
                    variant="success"
                    onClick={() => {
                      addModalShow()
                      tableRenderFalse()
                    }}
                  >
                    <GoPlus /> ADD
                  </Button>
                  <input
                    className="ms-auto me-3 mb-2 ps-2 search_inp"
                    type="text"
                    onChange={Search}
                    placeholder="Search"
                  />
                  <div className="me-3" style={{ width: '120px' }}>
                    <Form.Select
                      className="ms-auto search_inp "
                      aria-label="Default select example"
                      onChange={filter}
                      name=""
                    >
                      <option
                        style={{ backgroundColor: '#40536e' }}
                        value=""
                        className=" text-white"
                      >
                        All
                      </option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Select>
                  </div>
                  <div
                    className="search_inp "
                    style={{
                      width: '95px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: '400',
                      marginRight: '18px',
                      height: '37px',
                    }}
                  >
                    Count :
                    &nbsp;{data.length}
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
      <AddModal tableRenderTrue={tableRenderTrue} addclose={addModalClose} add={addModal} />
      <ViewModal
        tableRenderFalse={tableRenderFalse}
        load={load}
        viewclose={viewModalClose}
        view={viewModal}
        id={id}
      />
      <UpdateModal
        updateclose={updateModalClose}
        update={updateModal}
        id={id}
        tableRenderTrue={tableRenderTrue}
      />
      <DeleteData
        deleteclose={deleteModalClose}
        dlt={deleteModal}
        id={id}
        tableRenderTrue={tableRenderTrue}
      />
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
