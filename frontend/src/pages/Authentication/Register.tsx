import React, { useEffect, useState } from 'react';
import { Form, Button, InputGroup, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ParticlesAuth from '../AuthenticationInner/ParticlesAuth';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { registerUser, apiError, resetRegisterFlag } from "slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';

const Register = () => {

    document.title = " Register | Steex Admin & Dashboard Template";

    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const [passwordShow, setPasswordShow] = useState<any>(false);
    const [timer, setTimer] = useState<number>(0);
    const [loader, setLoader] = useState<boolean>(false);


    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Email"),
            username: Yup.string().required("Please Enter Username"),
            password: Yup.string().required("Please Enter Password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        }),
        onSubmit: (values) => {
            dispatch(registerUser(values));
            setLoader(true)
        }
    });
    const selectAccount = createSelector(
        (state: any) => state.Account,
        (account) => ({
            success: account.success,
            error: account.error,
        })
    );

    const { error, success } = useSelector(selectAccount);

    useEffect(() => {
        dispatch(apiError());
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            setTimeout(() => navigate("/login"), 3000);
            setTimer(3)
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

        setLoader(false)
    }, [dispatch, success, error, navigate]);


    useEffect(() => {
        if (timer) {
            setInterval(() => setTimer(timer - 1), 1000);
        }
    }, [timer])

    return (
        <ParticlesAuth>
            <React.Fragment>

                <div className="col-xxl-6 mx-auto">
                    <div className="card mb-0 border-0 shadow-none mb-0">
                        <div className="card-body p-sm-5 m-lg-4">
                            <div className="text-center mt-2">
                                <h5 className="fs-3xl">Create your free account</h5>
                                <p className="text-muted">Get your free Steex account now</p>
                            </div>
                            <div className="p-2 mt-5">
                                {success && <Alert variant="success">Your Redirect to Login Page in {timer} Seconds</Alert>}
                                <Form className="needs-validation" action="#" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="useremail">Email <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" id="useremail" placeholder="Enter email address"
                                            name="email"
                                            className="form-control"
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
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="username">Username <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="username" placeholder="Enter username"
                                            name="username"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.username || ""}
                                            isInvalid={
                                                validation.touched.username && validation.errors.username ? true : false
                                            }
                                        />
                                        {validation.touched.username && validation.errors.username ? (
                                            <Form.Control.Feedback type="invalid"><div>{validation.errors.username}</div></Form.Control.Feedback>
                                        ) : null}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="password-input">Password <span className="text-danger">*</span></Form.Label>
                                        <InputGroup className="position-relative auth-pass-inputgroup">
                                            <Form.Control onPaste={(e) => e.preventDefault()} placeholder="Enter password" id="password-input" type={!passwordShow ? "password" : "text"}
                                                name="password"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.password || ""}
                                                isInvalid={
                                                    validation.touched.password && validation.errors.password ? true : false
                                                }
                                            />
                                            <Button variant="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></Button>
                                            {validation.touched.password && validation.errors.password ? (
                                                <Form.Control.Feedback type="invalid"><div>{validation.errors.password}</div></Form.Control.Feedback>
                                            ) : null}
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <p className="mb-0 fs-xs text-muted fst-italic">By registering you agree to the Steex <a href={process.env.PUBLIC_URL + "pages-term-conditions"} className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</a></p>
                                    </Form.Group>
                                    <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                        <h5 className="fs-sm">Password must contain:</h5>
                                        <p id="pass-length" className="invalid fs-xs mb-2">Minimum <b>8 characters</b></p>
                                        <p id="pass-lower" className="invalid fs-xs mb-2">At <b>lowercase</b> letter (a-z)</p>
                                        <p id="pass-upper" className="invalid fs-xs mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                        <p id="pass-number" className="invalid fs-xs mb-0">A least <b>number</b> (0-9)</p>
                                    </div>

                                    <div className="mt-4">
                                        <Button className="btn btn-primary w-100" type="submit" disabled={loader}>
                                            {loader && <Spinner size="sm" animation="border" />} {"  "}
                                            Sign Up
                                        </Button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <div className="signin-other-title position-relative">
                                            <h5 className="fs-sm mb-4 title text-muted">
                                                Create account with
                                            </h5>
                                        </div>

                                        <div className="pt-1 hstack gap-1 justify-content-center">
                                            <button type="button" className="btn btn-subtle-primary btn-icon"><i className="ri-facebook-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-danger btn-icon"><i className="ri-google-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-dark btn-icon"><i className="ri-github-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-info btn-icon"><i className="ri-twitter-fill fs-lg"></i></button>
                                        </div>
                                    </div>
                                </Form>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">
                                        Already have an account ?{' '}
                                        <Link to={process.env.PUBLIC_URL + "/login"} className="fw-semibold text-primary text-decoration-underline">
                                            Signin
                                        </Link>{' '}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}
export default Register;