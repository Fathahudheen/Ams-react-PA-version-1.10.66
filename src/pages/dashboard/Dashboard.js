import { React, useState, useEffect } from 'react'

import { Container, Row, Col, Badge, Card } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/licensee/licensee')
      const json = await response.json()
      setData(json)
    }
    fetchData()
  }, [])

  // ...............Table...................//
  const columns = [
    {
      name: 'NAME',
      cell: (row) => (
        <div>
          {row.f_name} {row.l_name}
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
      selector: 'mobile_no',
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
      name: 'JOIN DATE',
      selector: 'createdAt',
      sortable: true,
    },
  ]

  const paginationRowsPerPageOptions = [7, 14, 25]

  // ...............Table Ends...................//
  return (
    <>
      <WidgetsDropdown />

      <Container fluid>
        
        <Row>
          
          <Col className="p-1" lg={12}>
            <Card>
              
              <Card.Body className="pt-4">
                <h4>Licensee</h4>
                <div style={{ width: '100%' }} className="d-flex "></div>

                <DataTable
                  columns={columns}
                  data={data}
                  paginationRowsPerPageOptions={paginationRowsPerPageOptions}
                  pagination
                  paginationPerPage={7}
                  fixedHeader
                  selectableRowsHighlight
                  fixedHeaderScrollHeight="400px"
                  highlightOnHover
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
