import React from 'react'
import { Card, Nav, Tab } from 'react-bootstrap';

// import Charts
import { ClicksChart, ConversationsChart, PageviewChart } from "./charts";
import { pageViewChartSeries, ClicksSeries, Conversationsseries } from 'Common/data'

const Overview = () => {

    const periodData = pageViewChartSeries
    const periodData1 = ClicksSeries
    const periodData2 = Conversationsseries

    return (
        <React.Fragment>
            <Tab.Container defaultActiveKey='1'>
                <Card>
                    <Card.Header className="d-flex align-items-center flex-wrap gap-3">
                        <h5 className="card-title mb-0 flex-grow-1">Performance Overview</h5>
                        <Nav className="nav-pills flex-shrink-0" role="tablist">
                            <Nav.Item role="presentation">
                                <Nav.Link eventKey='1'>
                                    Pageviews
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item role="presentation">
                                <Nav.Link eventKey='2'>
                                    Clicks
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item role="presentation">
                                <Nav.Link eventKey='3'>
                                    Conversations
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body className="ps-0">
                        <Tab.Content className="text-muted">
                            <Tab.Pane eventKey='1' id="pageViews">
                                <PageviewChart periodData={periodData} dataColors='["--tb-light", "--tb-primary", "--tb-secondary"]' />
                            </Tab.Pane>
                            <Tab.Pane eventKey='2' id="Clicks">
                                <ClicksChart periodData={periodData1} dataColors='["--tb-light", "--tb-secondary", "--tb-primary"]' />
                            </Tab.Pane>
                            <Tab.Pane eventKey='3' id="conversations">
                                <ConversationsChart periodData={periodData2} dataColors='["--tb-primary-text-emphasis"]' />
                            </Tab.Pane>
                        </Tab.Content>
                    </Card.Body>
                </Card>
            </Tab.Container>

        </React.Fragment>
    );
};

export default Overview;
