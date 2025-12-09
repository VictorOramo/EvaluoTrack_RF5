import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Saleprice = () => {
  return (
    <React.Fragment>
        <Col lg={12} className="col-lg-12">
            <Card className="card-primary text-center">
                <Card.Body>
                    <h4 className="text-reset fw-normal">$7000 - $8000</h4>
                    <p className="text-white-75 fs-md mb-0">Sale Price</p>
                </Card.Body>
            </Card>
        </Col>
    </React.Fragment>
  )
}

export default Saleprice;
