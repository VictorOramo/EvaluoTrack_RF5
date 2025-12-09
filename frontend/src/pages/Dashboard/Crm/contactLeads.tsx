import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import { ContactTable } from "./contactTable";

const ContactLeads = () => {
    return (
        <React.Fragment>
            <Col xl={6}>
                <Card id="leadsList">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Contact Leads</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown sortble-dropdown cursor-pointer">
                                <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                    <span className="fw-semibold text-uppercase fs-12">Sort by: </span>
                                    <span className="text-muted dropdown-title">Leads Score</span> <i className="mdi mdi-chevron-down ms-1"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <li><Dropdown.Item href="#">Leads Score</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Contact Name</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Phone Number</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <ContactTable />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
};

export default ContactLeads;
