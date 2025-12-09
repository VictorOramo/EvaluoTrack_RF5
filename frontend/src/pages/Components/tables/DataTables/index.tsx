import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import Datatable from './Datatable'
import BreadCrumb from 'Common/BreadCrumb'

const Datatables = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb pageTitle="Table" title="Datatables" />
            <Alert className="alert-danger">
              This is <strong>Datatable</strong> page in wihch we have used <b>jQuery</b> with cdn link!
            </Alert >
          <Datatable />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Datatables;