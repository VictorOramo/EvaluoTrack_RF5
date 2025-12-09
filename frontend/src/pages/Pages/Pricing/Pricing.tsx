import BreadCrumb from 'Common/BreadCrumb';
import { pricingdata } from 'Common/data/pricingdata';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const PricingOne = () => {

    document.title = "Pricing | Steex - Admin & Dashboard Template"

    return (
        <React.Fragment>
            <BreadCrumb title="Pricing" pageTitle="Pages" />
            <Row className=" justify-content-center mt-4">
                <Col lg={5}>
                    <div className="text-center mb-5">
                        <h4 className="fw-semibold fs-4xl">Plans & Pricing</h4>
                        <p className="text-muted mb-4 fs-base">Simple pricing. No hidden fees. Advanced features for you business.</p>
                    </div>
                </Col>
            </Row>
            <Row className=" justify-content-center">
                <Col xxl={9}>
                    <Row>
                        {(pricingdata || []).map((elem: any) => (
                            <Col xxl={4} lg={6} className="g-3" key={elem.id}>
                                <Card className="pricing-box ribbon-box right">
                                    {elem.ribbon === true ? <div className="ribbon ribbon-danger vertical-shape"><span>Popular</span></div> : ""}
                                    <Card.Body className="p-4">
                                        <div className="d-flex gap-3 align-items-center mb-4 pb-2">
                                            <div className="avatar-sm flex-shrink-0">
                                                <div className="avatar-title bg-success-subtle text-success fs-3 rounded">
                                                    <i className="ph ph-telegram-logo"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="mb-2">{elem.plan}</h5>
                                                <p className="text-muted mb-0">{elem.start}</p>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="mb-0 me-2">{elem.price} <small className="fw-normal text-muted fs-xs">/Monthly</small></h3>
                                        </div>

                                        <div className="mt-4">
                                            <ul className="ps-3 vstack gap-3">
                                                {(elem.actext || []).map((subitem: any) => (
                                                    <React.Fragment key={subitem.id}>
                                                        <li className="active"><b> 3 </b> {subitem.act1}</li>
                                                        <li className="active"><b>299</b> {subitem.act2}</li>
                                                        <li className="active">{subitem.act3}</li>
                                                        <li className="active"><b>0</b> {subitem.act4}</li>
                                                    </React.Fragment>
                                                ))}
                                                {(elem.mutetext || []).map((item: any) => (
                                                    <React.Fragment key={item.id}>
                                                        <li className={`${item.design} ${item.active1}`}>{item.details1}</li>
                                                        <li className={`${item.design} ${item.active1}`}><b>5</b> {item.details2}</li>
                                                        <li className={`${item.design} ${item.active1}`}>{item.details3}</li>
                                                        <li className={`${item.design} ${item.active1}`}>{item.details4}</li>
                                                        <li className={`${item.design1} ${item.active}`}>{item.details5}</li>
                                                        <li className={`${item.design1} ${item.active}`}>{item.details6}</li>
                                                    </React.Fragment>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-4">
                                            <Button className={`btn-${elem.button} w-100`}>{elem.value}</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default PricingOne;
