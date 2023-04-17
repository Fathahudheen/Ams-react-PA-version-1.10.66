import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col, Badge, Card,Form} from "react-bootstrap";
import "./ViewTable.css";
import AddModal from "../AddModal/AddModal";
import ViewModal from "../ViewModal/ViewModal";
import UpdateModal from "../UpdateModal/UpdateModal";
import DeleteData from "../DeleteData/DeleteData";
import { ToastContainer} from "react-toastify";

const ViewTable = () => {
  const columns = [
    {
      name: "ID",
      selector: "_id",
      sortable: true,
    },
    {
      name: "NAME",
      cell: (row) => (
        <div>
          {row.f_name} {row.l_name}
        </div>
      ),
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: "email",
      sortable: true,
    },
    {
      name: "PHONE",
      selector: "mobile_no",
      sortable: true,
    },
    {
      name: "ROLE",
      selector: "role_opt",
      sortable: true,
    },
    {
      name: "JOIN DATE",
      selector: "join_Date",
      sortable: true,
    },
    {
      name: "STATUS",
      selector: "status",
      cell: (row) => (
        <div>
          <Badge bg={`${row.status === "Active" ? "success" : "danger"}`}>
            {row.status}
          </Badge>
        </div>
      ),
      sortable: true,
    },
    {
      name: "ACTIONS",
      cell: (row) => (
        <div className="d-flex align-items-center justify-content-center">
          <ViewModal row={row}/>
          <UpdateModal row={row}/>
          <DeleteData row={row}/>
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/licensee");
      const json = await response.json();
      setData(json);
      setFilterData(json)
    }
    fetchData();
  }, [data]);

  const Search = (event) => {
    const query = event.target.value;
    const filtered = filterData.filter((item) =>
      item.f_name.toLowerCase().includes(query.toLowerCase())
    );
     setData(filtered);
  };
  useEffect(() => {
    setFilterData(data);
}, [filterData]);

  const paginationRowsPerPageOptions = [7, 14,25];
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-1" lg={12}>
            <Card>
              <Card.Body className="pt-4">
                <div style={{width:'100%'}} className="d-flex ">
                <AddModal />
                <input className="ms-auto me-3 mb-2 ps-2 search_inp" type="text" onChange={Search} placeholder="Search" />
                <div style={{width:'180px'}}>
                <Form.Select
                    className="ms-auto search_inp"
                    aria-label="Default select example"
                    name=""
                  >
                    <option style={{backgroundColor:'#40536e'}} value='' className=" text-white">
                     Filter
                    </option>
                    <option >Active</option>
                    <option >Inactive</option>
                  </Form.Select>
                </div>
                </div>
                <DataTable
                  columns={columns}
                  data={filterData}
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
      <ToastContainer /> 
    </>
  );
};

export default ViewTable;
