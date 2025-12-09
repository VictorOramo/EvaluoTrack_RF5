import { pricingtwodata } from 'Common/data/pricingdata';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Pricingtwo = () => {
    return (
        <React.Fragment>
            <Row className=" justify-content-center mt-4">
                <Col lg={5}>
                    <div className="text-center mb-5">
                        <h4 className="fw-semibold fs-4xl">Plans & Pricing</h4>
                        <p className="text-muted mb-4 fs-base">Simple pricing. No hidden fees. Advanced features for you business.</p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {(pricingtwodata || []).map((item:any)=>(
                <Col xxl={3} lg={6} key={item.id}>
                    <Card className="ribbon-box right">
                    {item.ribbon === true ? <div className="ribbon ribbon-danger vertical-shape"><span>Popular</span></div> : ""}
                        <Card.Body className=" p-4">
                            <div className="flex-grow-1 mb-4 pb-2">
                                <h5 className="mb-2">{item.plan}</h5>
                                <p className="text-muted mb-0">{item.detail}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="mb-0 me-2">{item.price} <small className="fs-xs text-muted fw-normal">/Monthly</small></h3>
                            </div>
                            <div className="mt-4">
                                <Button className={`btn-${item.variant} w-100`}>{item.button}</Button>
                            </div>
                            <div className="mt-4">
                                <ul className="list-unstyled vstack gap-3 mb-0">
                                    {item.free ?
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                                <p className="mb-0">{item.free}</p>
                                            </div>
                                        </li> : ''
                                    } 
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                            <p className="mb-0"><b>Unlimited</b> {item.pro}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                            <p className="mb-0">Share with <b>5</b> team members</p>
                                        </div>
                                    </li>
                                    {
                                        item.sync 
                                        ?
                                        <li>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                            <p className="mb-0">Sync across devices</p>
                                        </div>
                                    </li>
                                        :
                                        ''
                                    }
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                            <p className="mb-0">Scalable Bandwidth</p>
                                        </div>
                                    </li>
                                    {
                                        item.ftp ?
                                           <li>
                                               <div className="d-flex align-items-center">
                                                   <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                                   <p className="mb-0"><b>5</b> {item.ftp}</p>
                                               </div>
                                           </li>
                                           : ''
                                    }
                                    {
                                        item.member1 
                                        ? 
                                        <li>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                            <p className="mb-0">Share with <b>5</b> team members</p>
                                        </div>
                                    </li>
                                        :
                                        ''
                                     }
                                    {
                                         item.day1 ?
                                            <li >
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                                    <p className="mb-0"><b>30</b> {item.day1}</p>
                                                </div>
                                            </li>
                                            : ''
                                    }
                                    {
                                         item.admin ?
                                            <li >
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-check-lg text-success me-2 align-middle"></i>
                                                    <p className="mb-0">{item.admin}</p>
                                                </div>
                                            </li>
                                            : ''
                                    }
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                 ))} 
            </Row>
        </React.Fragment>
    )
}

export default Pricingtwo