import { mainprice } from 'Common/data/pricingdata';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Simplepricing = () => {
    return (
        <React.Fragment>
            <Row className="justify-content-center mt-5">
                <Col xl={4}>
                    <div className="text-center mb-4 pb-2">
                        <h4 className="fw-semibold fs-4xl">Simple Pricing Plan</h4>
                        <p className="text-muted mb-4 fs-base">Simple pricing. No hidden fees. Advanced features for you business.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {(mainprice || []).map((elem: any, key: any) => (
                    <Col xxl={4} lg={6} key={elem.id}>
                        <Card className="overflow-hidden ribbon-box right">
                        {elem.ribbon === true ? <div className="ribbon ribbon-danger round-shape"><span>Hot</span></div> : ""}
                            <Row className="g-0">
                                <Col lg={5}>
                                    <Card.Body className={`bg-${elem.variant1}-subtle h-100 d-flex flex-column`}>
                                        <div>
                                            <h5>{elem.main}</h5>
                                            <p>{elem.plan}</p>
                                        </div>

                                        <div className="pt-3 mt-auto">
                                            <h2 className={`text-${elem.variant1} mb-0`}>{elem.price} <span className={`fs-xs fw-normal text-${elem.variant2} opacity-7`}> {``}/Per month</span></h2>
                                        </div>
                                    </Card.Body>
                                </Col>
                                {(elem.simpleprice || []).map((item: any, key: any) => (
                                    <Col lg={7} key={item.id}>
                                        <Card.Body className="h-100">
                                            <ul className="list-unstyled vstack gap-3 mb-4">
                                                <li><i className={`bi bi-check2-square text-${item.variant} me-1`}></i> Users: <span className="fw-semibold">{item.user}</span></li>
                                                <li><i className={`bi bi-check2-square text-${item.variant} me-1`}></i> Storage: <span className="fw-semibold">{item.storage} GB</span></li>
                                                <li><i className={`bi bi-check2-square text-${item.variant} me-1`}></i> Domain: <span className="fw-semibold">{item.domain}</span></li>
                                                <li><i className={`bi bi-check2-square text-${item.variant} me-1`}></i> Support: <span className="fw-semibold">{item.support}</span></li>
                                            </ul>
                                            <Button className={`btn-${elem.button} w-100`}>Buy Now</Button>
                                        </Card.Body>
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default Simplepricing;