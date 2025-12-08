import React from 'react'
import { Card, Col, Table } from 'react-bootstrap';
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../../assets/images/users/avatar-7.jpg";

const OwnerDetails = () => {
  return (
    <React.Fragment>
      <Col lg={12}>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Owner History</h4>
                </Card.Header>
                <Card.Body>                    
                        <Table className="table-responsive table-card pt-2 mb-0">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-1">
                                            <div className="flex-shrink-0">
                                                <img src={avatar1} alt="" className="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="fs-md mb-1">Jerry Emard</h6>
                                                <p className="text-muted mb-0">03 Nav, 2022 - Present</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <p className="fs-md mb-0 text-muted"><i className="bi bi-star-half text-warning align-baseline me-1"></i> 4.9</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-1">
                                            <div className="flex-shrink-0">
                                                <img src={avatar7} alt="" className="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="fs-md mb-1">Sonia Conn</h6>
                                                <p className="text-muted mb-0">24 March, 2022 - 03 Nav, 2022</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <p className="fs-md mb-0 text-muted"><i className="bi bi-star-half text-warning align-baseline me-1"></i> 4.8</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-1">
                                            <div className="flex-shrink-0">
                                                <img src={avatar4} alt="" className="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="fs-md mb-1">Talon Bradtke</h6>
                                                <p className="text-muted mb-0">27 Aug, 2021 - 24 March, 2022</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <p className="fs-md mb-0 text-muted"><i className="bi bi-star-half text-warning align-baseline me-1"></i> 4.4</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-1">
                                            <div className="flex-shrink-0">
                                                <img src={avatar5} alt="" className="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="fs-md mb-1">Tyrell Kerluke</h6>
                                                <p className="text-muted mb-0">09 June, 2019 - 27 Aug, 2021</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <p className="fs-md mb-0 text-muted"><i className="bi bi-star-half text-warning align-baseline me-1"></i> 4.6</p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                  
                </Card.Body>
            </Card>
        </Col>
    </React.Fragment>
  )
}

export default OwnerDetails
