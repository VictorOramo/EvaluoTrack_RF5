import React from 'react';

import reactImg from "../../../../assets/images/learning/react.png";
import { Card,Button } from 'react-bootstrap';

const DiscountCard = () => {
  return (
    <React.Fragment>
      <Card className="overflow-hidden ribbon-box">
            <span className="ribbon ribbon-danger rounded-end">Off 20%</span>
            <Card.Body className="bg-info-subtle text-center learning-widgets d-flex align-items-center justify-content-center">
                <img src={reactImg} alt="" className="avatar-lg" />
                <img src={reactImg} alt="" className="effect" />
            </Card.Body>
            <Card.Body>
                <h4 className="text-truncate text-capitalize">$245.95 <small className="text-decoration-line-through fs-xs text-muted align-baseline">499.99</small></h4>
                <p className="text-danger"><i className="bi bi-clock me-2"></i> <b>10</b> days left at this price</p>
                <div className="hstack gap-2">
                    <Button variant="secondary" className="w-100">Free Trial</Button>
                    <Button variant="primary" className="w-100"><i className="bi bi-bag align-baseline me-1"></i> Buy Now</Button>
                </div>
            </Card.Body>
        </Card>
    </React.Fragment>
  )
}

export default DiscountCard
