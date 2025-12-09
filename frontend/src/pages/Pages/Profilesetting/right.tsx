import React from 'react'
import { Card, Col } from 'react-bootstrap'

import small7 from "assets/images/small/img-7.jpg";
import avatar1 from "assets/images/users/avatar-1.jpg";
import { Link } from 'react-router-dom';

const Right = () => {
  return (
    <React.Fragment>
      <Col xxl={3}>
        <Card className=" overflow-hidden">
          <div>
            <img src={small7} alt="" className="card-img-top profile-wid-img object-fit-cover" style={{ height: "200px" }} />
            <div>
              <input id="profile-foreground-img-file-input" type="file" className="profile-foreground-img-file-input d-none" />
              <label htmlFor="profile-foreground-img-file-input" className="profile-photo-edit btn btn-light btn-sm position-absolute end-0 top-0 m-3">
                <i className="ri-image-edit-line align-bottom me-1"></i> Edit Cover Images
              </label>
            </div>
          </div>
          <Card.Body className="pt-0 mt-n5">
            <div className="text-center">
              <div className="profile-user position-relative d-inline-block mx-auto">
                <img src={avatar1} alt="" className="avatar-lg rounded-circle object-fit-cover border-0 img-thumbnail user-profile-image" />
                <div className="avatar-xs p-0 rounded-circle profile-photo-edit position-absolute end-0 bottom-0">
                  <input id="profile-img-file-input" type="file" className="profile-img-file-input d-none" />
                  <label htmlFor="profile-img-file-input" className="profile-photo-edit avatar-xs">
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="bi bi-camera"></i>
                    </span>
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <h5>Richard Marshall <i className="bi bi-patch-check-fill align-baseline text-info ms-1"></i></h5>
                <p className="text-muted">Web Developer</p>
              </div>
            </div>
          </Card.Body>
          <Card.Body className="border-top">
            <div className="d-flex align-items-center mb-4 pb-2">
              <div className="flex-grow-1">
                <h5 className="card-title mb-0">Complete Your Profile</h5>
              </div>
              <div className="flex-shrink-0">
                <Link to="#" className="badge bg-light text-secondary"><i className="ri-edit-box-line align-bottom me-1"></i> Edit</Link>
              </div>
            </div>

            <div className="progress animated-progress custom-progress progress-label">
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${30}%` }}
                aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                <div className="label">30%</div>
              </div>

            </div>
          </Card.Body>
          <Card.Body className="border-top">
            <div className="d-flex align-items-center mb-4">
              <div className="flex-grow-1">
                <h5 className="card-title mb-0">Portfolio</h5>
              </div>
              <div className="flex-shrink-0">
                <Link to="#" className="badge bg-info-subtle text-info fs-xs"><i className="ri-add-fill align-bottom me-1"></i> Add</Link>
              </div>
            </div>
            <div className="mb-3 d-flex">
              <div className="avatar-xs d-block flex-shrink-0 me-3">
                <span className="avatar-title rounded-circle bg-dark-subtle text-dark">
                  <i className="bi bi-github"></i>
                </span>
              </div>
              <input type="email" className="form-control" id="gitUsername" placeholder="Username" defaultValue="@richardmarshall" />
            </div>
            <div className="mb-3 d-flex">
              <div className="avatar-xs d-block flex-shrink-0 me-3">
                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                  <i className="bi bi-facebook"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="websiteInput" placeholder="www.example.com" defaultValue="www.steex.com" />
            </div>
            <div className="mb-3 d-flex">
              <div className="avatar-xs d-block flex-shrink-0 me-3">
                <span className="avatar-title rounded-circle bg-success-subtle text-success">
                  <i className="bi bi-dribbble"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="dribbleName" placeholder="Username" defaultValue="@richard_marshall" />
            </div>
            <div className="d-flex">
              <div className="avatar-xs d-block flex-shrink-0 me-3">
                <span className="avatar-title rounded-circle bg-danger-subtle text-danger">
                  <i className="bi bi-instagram"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="pinterestName" placeholder="Username" defaultValue="Richard Marshall" />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment >
  )
}

export default Right