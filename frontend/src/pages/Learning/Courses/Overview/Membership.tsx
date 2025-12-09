import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Membership = () => {
  return (
    <React.Fragment>
      <Card className="card-primary file-manager-widgets">
        <Card.Body>
            <h6 className="card-title text-reset"> Join Membership</h6>
            <p className="text-white-50 mb-5">Access all course anywhere and any time</p>
            <div className="mt-4">
                <Link to="/pages-pricing" className="btn btn-light w-md">Join Now</Link>
            </div>
        </Card.Body>
    </Card>
    </React.Fragment>
  )
}

export default Membership
