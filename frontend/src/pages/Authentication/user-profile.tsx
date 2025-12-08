import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert, Button, Form } from "react-bootstrap";
import { isEmpty } from "lodash";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "Common/withRouter";

//Import Breadcrumb
import Breadcrumb from 'Common/BreadCrumb';

import avatar from "../../assets/images/users/avatar-1.jpg";

// actions
import { editProfile, resetProfileFlag } from "slices/thunk";
import { createSelector } from "reselect";

const UserProfile = () => {

    document.title = "User Profile | Steex Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const [email, setemail] = useState("admin@gmail.com");
    const [name, setname] = useState("Admin");
    const [idx, setidx] = useState(1);

    const selectProfile = createSelector(
        (state: any) => state.Profile,
        (profile) => ({
            user: profile.user,
            success: profile.success,
            error: profile.error,
        })
    );

    const { user, success, error } = useSelector(selectProfile);

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser") || "{}");

            if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
                obj.displayName = user.username;
                setname(obj.displayName || "Admin");
                setemail(obj.email);
                setidx(obj.uid);
            } else if (
                process.env.REACT_APP_DEFAULTAUTH === "fake" ||
                process.env.REACT_APP_DEFAULTAUTH === "jwt"
            ) {

                if (!isEmpty(user)) {
                    obj.data.displayName = user.username;
                    localStorage.removeItem("authUser");
                    localStorage.setItem("authUser", JSON.stringify(obj));
                }
                // setname(obj.data.displayName ? obj.data.displayName : "Admin");
                setname(user?.username || "Admin")
                setemail(obj.email || obj.data.email);
                setidx(obj.uid || obj.data._id);
            }


            setTimeout(() => {
                dispatch(resetProfileFlag());
            }, 3000);
        }
    }, [dispatch, user]);
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            username: name || 'Admin',
            idx: idx || '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your UserName"),
        }),
        onSubmit: (values) => {
            dispatch(editProfile(values));
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumb title="Steex" pageTitle="Accounts" />

                    <Row>
                        <Col lg="12">
                            {error && error ? <Alert variant="danger">{error}</Alert> : null}
                            {success ? <Alert variant="success">Username Updated To {name}</Alert> : null}

                            <Card>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div className="mx-3">
                                            <img
                                                src={avatar}
                                                alt=""
                                                className="avatar-md rounded-circle img-thumbnail"
                                            />
                                        </div>
                                        <div className="flex-grow-1 align-self-center">
                                            <div className="text-muted">
                                                <h5>{name}</h5>
                                                <p className="mb-1">{email}</p>
                                                <p className="mb-0">Id no: #{idx}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <h4 className="card-title mb-4">Change User Name</h4>

                    <Card>
                        <Card.Body>
                            <Form
                                className="form-horizontal"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}
                            >
                                <div className="form-group">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter User Name"
                                        type="text"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.username || ""}
                                        isInvalid={
                                            validation.touched.username && validation.errors.username ? true : false
                                        }
                                    />
                                    {validation.touched.username && validation.errors.username ? (
                                        <Form.Control.Feedback type="invalid">{validation.errors.username}</Form.Control.Feedback>
                                    ) : null}
                                    <Form.Control name="idx" value={idx} type="hidden" />
                                </div>
                                <div className="text-center mt-4">
                                    <Button type="submit" variant="danger">
                                        Update User Name
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withRouter(UserProfile);
