import React, { useEffect, useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubscriptionTable from './SubscriptionTable';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionList } from 'slices/thunk';
import { createSelector } from 'reselect';

const MySubsciptions = () => {
    document.title = "My Subsciptions | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();
    const [subscriptionTable, setSubscriptionTable] = useState<any>();
    
    const selectSubscriptionsList = createSelector(
        (state: any) => state.Learning,
            (learning) => ({
                subscriptionsList: learning.subscriptionList
            })
    );
        
    const { subscriptionsList } = useSelector(selectSubscriptionsList);

    //search
    const handlesearchdata = (ele: any) => {
        let search = ele.target.value;

        if (search) {
            // search = search?.toLowerCase();
            setSubscriptionTable(subscriptionsList.filter((data: any) => data.coursename?.toLowerCase().includes(search)));
        } else {
            setSubscriptionTable(subscriptionsList);
        }
    };


    useEffect(() => {
        dispatch(getSubscriptionList());
    }, [dispatch]);

    useEffect(() => {
        setSubscriptionTable(subscriptionsList)
    }, [subscriptionsList])
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="My Subscriptions" pageTitle="Students" />

                    <Row id="subscriptionList">
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center g-3">
                                        <Col xxl={3} lg={6} className="me-auto">
                                            <h6 className="card-title">My Subscriptions</h6>
                                            <p className="text-muted mb-0">Monthly: <b className="text-primary-emphasis">$326.95</b> Yearly: <b className="text-primary-emphasis">$1452.32</b></p>
                                        </Col>
                                        <Col xxl={3}>
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search courses ..." onChange={handlesearchdata} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-xxl-auto col-auto">
                                            <Link to="/apps-learning-list" className="btn btn-primary"><i className="bi bi-plus-circle align-baseline me-1"></i> Add New</Link>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={12}>
                            <SubscriptionTable subscriptionsList={subscriptionTable} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MySubsciptions;
