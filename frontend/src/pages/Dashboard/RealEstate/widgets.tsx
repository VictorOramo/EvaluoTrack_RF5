import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

import { WidgetsChart } from './charts'
import { RealEstateData } from 'Common/data'

const Widgets = () => {

  return (
    <React.Fragment>
      <Row>
        {(RealEstateData || []).map((item: any, key: number) => (
          <Col xxl={3} md={6} key={key}>
            <Card>
              <Card.Body>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <div className="d-flex flex-column h-100">
                      <p className="fs-md text-muted mb-4">{item.name}</p>
                      <h3 className="mb-0 mt-auto">
                        <span>
                        <CountUp start={0} end={item.amount} suffix={item.suffix} decimals={item.decimal && 2} /> {" "}
                        </span>
                        <small className={item.isArrow ? "text-success mb-0 fs-xs" : "text-danger mb-0 fs-xs"}>
                          <i className={item.isArrow ? "bi bi-arrow-up me-1" : "bi bi-arrow-down me-1"}></i> {item.perstange}
                        </small>
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <WidgetsChart periodData={item.widgetsSeries} dataColors={item.dataColors} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Widgets;
