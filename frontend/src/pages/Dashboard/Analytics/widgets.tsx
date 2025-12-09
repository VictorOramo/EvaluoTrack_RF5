import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import CountUp from 'react-countup'

// Import Charts
import { WidgetsCharts } from './charts'

import { analyticsData } from 'Common/data'

const Widgets = () => {

  return (
    <React.Fragment>
      {(analyticsData || []).map((item: any, key: number) => (
        <Col xl={3} sm={6} key={key}>
          <Card>
            <Card.Body>
              <Dropdown className="float-end cursor-pointer">
                <Dropdown.Toggle as='ul' className="text-reset arrow-none">
                  <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                  <Dropdown.Item href="#">Today</Dropdown.Item>
                  <Dropdown.Item href="#">Last Week</Dropdown.Item>
                  <Dropdown.Item href="#">Last Month</Dropdown.Item>
                  <Dropdown.Item href="#">Current Year</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p className="fs-md text-muted mb-0">{item.name}</p>

              <Row className="mt-4 align-items-end">
                <Col lg={6}>
                  <h3 className="mb-4">
                    <span className="counter-value">
                      <CountUp start={0} end={item.amount} separator="," suffix={item.suffix} decimals={item.decimal} />
                    </span>
                  </h3>
                  <p className={item.isArrow ? "text-success mb-0" : "text-danger mb-0"}>
                    <i className={item.isArrow ? "bi bi-arrow-up me-1" : "bi bi-arrow-down me-1"}></i>{item.percentage}
                  </p>
                </Col>
                <Col lg={6}>
                  <div className='apex-charts m-n3 mt-n4'>
                    <WidgetsCharts periodData={item.widgetsSeries} dataColors={item.dataColors} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default Widgets;
