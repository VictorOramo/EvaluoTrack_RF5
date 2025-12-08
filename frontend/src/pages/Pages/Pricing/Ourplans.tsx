import { ourplandata } from 'Common/data/pricingdata';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Ourplans = () => {
    return (
        <React.Fragment>
            <Row className="justify-content-center mt-5">
                <Col lg={5}>
                    <div className="text-center mb-5">
                        <h3 className="fw-semibold fs-4xl">Our plans for your Business</h3>
                        <p className="text-muted fs-base">Simple pricing. No hidden fees. Advanced features for you business.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {(ourplandata || []).map((item: any) => (
                    <Col xxl={3} lg={6} key={item.id}>
                        <Card className={`card-animate border-0 border-top border-2 border-${item.color} rounded-0 rounded-bottom`}>
                            <div className={`${item.style}`}><span><i className={`${item.icon}`}></i> {item.pop}</span></div>
                            <Card.Body className="m-2 p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-0 fw-semibold">{item.plan}</h5>
                                    </div>
                                    <div className="ms-auto">
                                        <h2 className="mb-0">{item.price} <small className="fs-sm text-muted">/Month</small></h2>
                                    </div>
                                </div>

                                <p className="text-muted">{item.info}</p>
                                <ul className="list-unstyled vstack gap-3">
                                    <li>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 text-success me-1">
                                                <i className="ri-checkbox-circle-fill fs-lg align-middle"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <b>3</b> {item.pro}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 text-success me-1">
                                                <i className="ri-checkbox-circle-fill fs-lg align-middle"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <b>299</b> {item.custom}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 text-success me-1">
                                                <i className="ri-checkbox-circle-fill fs-lg align-middle"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                {item.width}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 text-success me-1">
                                                <i className="ri-checkbox-circle-fill fs-lg align-middle"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <b>5</b> {item.ftp}
                                            </div>
                                        </div>
                                    </li>
                                    {
                                        item.support
                                            ? <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-lg align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>24/7</b> {item.support}
                                                </div>
                                            </div>
                                        </li>
                                        :''
                                    }
                                    {
                                        item.unlimit
                                            ? <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-lg align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>{item.unlimit}</b> {item.store}
                                                </div>
                                            </div>
                                        </li>
                                        :''
                                    }
                                    {
                                        item.domain
                                            ? <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-lg align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                 {item.domain}
                                                </div>
                                            </div>
                                        </li>
                                        :''
                                    }
                                </ul>
                                <div className="mt-3 pt-2">
                                    <a href="/#" className={`btn btn-${item.button} ${item.able} w-100`}>{item.value}</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default Ourplans;