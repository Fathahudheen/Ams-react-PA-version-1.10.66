// import React, { useState, useEffect } from 'react'
// import DataTable from 'react-data-table-component'
// import 'react-toastify/dist/ReactToastify.css'
// import { Container, Row, Col, Badge, Card, Form, Button } from 'react-bootstrap'
// import './ViewTable.css'
// import { CgUserList } from 'react-icons/cg'
// import { GoEye } from 'react-icons/go'
// import { BsPencilSquare } from 'react-icons/bs'
// import { RiDeleteBin6Fill } from 'react-icons/ri'
// import AddModal from '../AddModal/AddModal'
// import ViewModal from '../ViewModal/ViewModal'
// import UpdateModal from '../UpdateModal/UpdateModal'
// import DeleteData from '../DeleteData/DeleteData'
// import { ToastContainer } from 'react-toastify'

// const ViewTable = () => {
//   // ................Fetching All Data.....................//

//   const [data, setData] = useState([])
//   useEffect(() => {
//     async function fetchData() {
//       console.log('hai')
//       const response = await fetch('http://localhost:8000/course')
//       const json = await response.json()
//       setData(json)
//       setFilterData(json)
//       console.log('hp')
//     }
//     fetchData()
//   }, [])
//   // ................Fetching All Data Enda.....................//

//   //  .................Search Data........................//

//   const [filterData, setFilterData] = useState([])

//   const Search = (event) => {
//     const query = event.target.value
//     const filtered = filterData.filter((item) =>
//       item.f_name.toLowerCase().includes(query.toLowerCase()),
//     )
//     setData(filtered)
//   }
//   useEffect(() => {
//     setFilterData(data)
//   }, [filterData])

//   //  .................Search Data Ends.....................//

//   // ...........View Modal ......................//

//   const [viewModal, setViewModal] = useState(false)
//   const viewModalClose = () => {
//     setViewModal(false)
//   }
//   const viewModalShow = () => {
//     setViewModal(true)
//   }

//   // ...........View Modal Ends ......................//

//   // ...........Update Modal ......................//

//   const [updateModal, setUpdateModal] = useState(false)
//   const updateModalClose = () => {
//     setUpdateModal(false)
//   }
//   const updateModalShow = () => {
//     setUpdateModal(true)
//   }

//   // ...........Update Modal Ends ......................//

//   // ...........Delete Modal ......................//

//   const [deleteModal, setDeleteModal] = useState(false)
//   const deleteModalClose = () => {
//     setDeleteModal(false)
//   }
//   const deleteModalShow = () => {
//     setDeleteModal(true)
//   }

//   // ...........Delete Modal Ends ......................//

//   // ............................//
//   const [id, setId] = useState(null)
//   const handleClick = (id) => {
//     console.log(`You clicked me! ${id}`)
//     setId(id)
//     console.log(id)
//   }

//   // .............................//

//   const columns = [
//     {
//       name: 'ID',
//       selector: '_id',
//       sortable: true,
//     },
//     {
//       name: 'COURSE NAME',
//       selector: 'crs_name',
//       sortable: true,
//     },
//     {
//       name: 'COURSE CATEGORY',
//       selector: 'crs_ctgry',
//       sortable: true,
//     },
//     {
//       name: 'DURATION',
//       selector: 'duration',
//       sortable: true,
//     },
//     {
//       name: 'DESCRIPTION',
//       selector: 'crs_dscrp',
//       sortable: true,
//     },
//     {
//       name: 'CREATED DATE',
//       selector: 'ctd_date',
//       sortable: true,
//     },
//     {
//       name: 'STATUS',
//       selector: 'status',
//       cell: (row) => (
//         <div>
//           <Badge bg={`${row.status === 'Active' ? 'success' : 'danger'}`}>{row.status}</Badge>
//         </div>
//       ),
//       sortable: true,
//     },
//     {
//       name: 'ACTIONS',
//       cell: (row) => (
//         <div className="d-flex align-items-center justify-content-center">
//           <Button
//             key={`view-${row._id}`}
//             className="icon-btn"
//             onClick={() => {
//               viewModalShow()
//               handleClick(row._id)
//             }}
//           >
//             <GoEye className="text-primary" />
//           </Button>
//           <Button
//             key={`upd-${row._id}`}
//             className="icon-btn"
//             onClick={() => {
//               updateModalShow()
//               handleClick(row._id)
//             }}
//           >
//             <BsPencilSquare className="text-info" />
//           </Button>
//           <Button
//             key={`dlt-${row._id}`}
//             className="icon-btn"
//             onClick={() => {
//               deleteModalShow()
//               handleClick(row._id)
//             }}
//           >
//             <RiDeleteBin6Fill className="text-danger" />
//           </Button>
//         </div>
//       ),
//     },
//   ]

//   const paginationRowsPerPageOptions = [7, 14, 25]
//   return (
//     <>
//       <Container fluid>
//         <Row>
//           <Col className="p-1" lg={12}>
//             <Card>
//               <Card.Body className="pt-4">
//                 <div style={{ width: '100%' }} className="d-flex ">
//                   <AddModal />
//                   <input
//                     className="ms-auto me-3 mb-2 ps-2 search_inp"
//                     type="text"
//                     onChange={Search}
//                     placeholder="Search"
//                   />
//                   <div className='me-3' style={{ width: '180px' }}>
//                     <Form.Select
//                       className="ms-auto search_inp "
//                       aria-label="Default select example"
//                       name=""
//                     >
//                       <option
//                         style={{ backgroundColor: '#40536e' }}
//                         value=""
//                         className=" text-white"
//                       >
//                         Filter
//                       </option>
//                       <option>Active</option>
//                       <option>Inactive</option>
//                     </Form.Select>
//                   </div>
//                   <div className='search_inp ' style={{width:'50px', display: 'flex', alignItems: 'center',justifyContent: 'center',fontSize: '20px',fontWeight: '400',marginRight:'10px',height:'37px'}}>
//                   <CgUserList style={{fontWeight: '400',fontSize:'22px'}} className="text-dark" />&nbsp;{data.length}
//                   </div>
//                 </div>
//                 <DataTable
//                   columns={columns}
//                   data={data}
//                   paginationRowsPerPageOptions={paginationRowsPerPageOptions}
//                   pagination
//                   paginationPerPage={7}
//                   fixedHeader
//                   selectableRows
//                   selectableRowsHighlight
//                   fixedHeaderScrollHeight="400px"
//                   highlightOnHover
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <ViewModal viewclose={viewModalClose} view={viewModal} id={id} />
//       <UpdateModal updateclose={updateModalClose} update={updateModal} id={id} />
//       <DeleteData deleteclose={deleteModalClose} dlt={deleteModal} id={id} />
//       <ToastContainer
//         position="top-right"
//         autoClose={1000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </>
//   )
// }

// export default ViewTable


import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import 'react-toastify/dist/ReactToastify.css'
import { Container, Row, Col, Badge, Card, Form, Button } from 'react-bootstrap'
import './ViewTable.css'
import { CgUserList } from 'react-icons/cg'
import { GoEye,GoPlus } from 'react-icons/go'
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
      console.log('hai')
      const response = await fetch('http://localhost:8000/course')
      const json = await response.json()
      setData(json)
      setFilterData(json)
      console.log('hp')
    }
    fetchData()
  }, [load])

  // ................Fetching All Data Enda.....................//

  //  .................Search Data........................//

  const [filterData, setFilterData] = useState([])

  const Search = (event) => {
    const query = event.target.value
    const filtered = filterData.filter((item) =>
      item.f_name.toLowerCase().includes(query.toLowerCase()),
    )
    setData(filtered)
  }
  useEffect(() => {
    setFilterData(data)
  }, [filterData])

  //  .................Search Data Ends.....................//

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
            name: 'COURSE NAME',
            selector: 'crs_name',
            sortable: true,
          },
          {
            name: 'COURSE CATEGORY',
            selector: 'crs_ctgry',
            sortable: true,
          },
          {
            name: 'DURATION',
            selector: 'duration',
            sortable: true,
          },
          {
            name: 'DESCRIPTION',
            selector: 'crs_dscrp',
            sortable: true,
          },
          {
           name: 'CREATED DATE',
            selector: 'ctd_date',
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
                    onClick={()=>{
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
                  <div className="me-3" style={{ width: '180px' }}>
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
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Select>
                  </div>
                  <div
                    className="search_inp "
                    style={{
                      width: '70px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: '400',
                      marginRight: '18px',
                      height: '37px',
                    }}
                  >
                    <CgUserList
                      style={{ fontWeight: '400', fontSize: '22px' }}
                      className="text-dark"
                    />
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
      <AddModal tableRenderTrue={tableRenderTrue} load={load} addclose={addModalClose} add={addModal}/>
      <ViewModal viewclose={viewModalClose} view={viewModal} id={id}  />
      <UpdateModal updateclose={updateModalClose} update={updateModal} id={id} tableRenderTrue={tableRenderTrue} load={load}/>
      <DeleteData deleteclose={deleteModalClose} dlt={deleteModal} id={id} tableRenderTrue={tableRenderTrue} load={load}/>
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
