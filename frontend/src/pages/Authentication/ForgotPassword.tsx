import React from 'react';
import { Card, Form, Button, Image, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authemail from "assets/images/auth/email.png";
import ParticlesAuth from '../AuthenticationInner/ParticlesAuth';
import { useSelector, useDispatch } from "react-redux";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { userForgetPassword } from "slices/thunk";
import { createSelector } from 'reselect';

const ForgotPassword = (props: any) => {

    document.title = " Reset Password | Steex Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
        }),
        onSubmit: (values) => {
            dispatch(userForgetPassword(values, props.history));
        }
    });

    const selectForgetPassword = createSelector(
        (state: any) => state.ForgetPassword,
        (forgetPassword) => ({
            forgetError: forgetPassword.forgetError,
            forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
        })
    );

    const { forgetError, forgetSuccessMsg } = useSelector(selectForgetPassword);

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="card mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center mt-2">
                                <h5 className="fs-3xl">Forgot Password?</h5>
                                <p className="text-muted mb-4">Reset password with Steex</p>
                                <div className="pb-4">
                                    <Image src={authemail} alt="" className="avatar-md" />
                                </div>
                            </div>

                            <Alert className="border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                Enter your email and instructions will be sent to you!
                            </Alert>
                            <div className="p-2">
                                {forgetError && forgetError ? (
                                    <Alert variant="danger" style={{ marginTop: "13px" }}>
                                        {forgetError}
                                    </Alert>
                                ) : null}
                                {forgetSuccessMsg ? (
                                    <Alert variant="success" style={{ marginTop: "13px" }}>
                                        {forgetSuccessMsg}
                                    </Alert>
                                ) : null}
                                <Form onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}>
                                    <div className="mb-4">
                                        <Form.Label className="form-label">Email</Form.Label>
                                        <Form.Control type="email" className="form-control password-input" id="email" placeholder="Enter Email" required
                                            name="email"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.email || ""}
                                            isInvalid={
                                                validation.touched.email && validation.errors.email ? true : false
                                            }
                                        />
                                        {validation.touched.email && validation.errors.email ? (
                                            <Form.Control.Feedback type="invalid"><div>{validation.errors.email}</div></Form.Control.Feedback>
                                        ) : null}
                                    </div>

                                    <div className="text-center mt-4">
                                        <Button className="btn btn-primary w-100" type="submit">Send Reset Link</Button>
                                    </div>
                                </Form>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="mb-0">Wait, I remember my password...
                                    <Link to={process.env.PUBLIC_URL + "/login"} className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default ForgotPassword;