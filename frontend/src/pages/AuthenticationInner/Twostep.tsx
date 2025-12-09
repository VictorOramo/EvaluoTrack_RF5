import React, { useRef } from 'react';
import ParticlesAuth from './ParticlesAuth';
import { Link } from 'react-router-dom';
import { Button, Card, Form, Image, Row } from 'react-bootstrap';


import authper from "assets/images/auth/permission.png"

const Twostep = () => {

    document.title=" Two Step Verification | Steex Admin & Dashboard Template";

    const digit1Ref = useRef<HTMLInputElement>(null);
    const digit2Ref = useRef<HTMLInputElement>(null);
    const digit3Ref = useRef<HTMLInputElement>(null);
    const digit4Ref = useRef<HTMLInputElement>(null);


    function moveToNext(index: number, event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const target = event.target as HTMLInputElement;
        if (target.value.length === 1) {
            switch (index) {
                case 1:
                    digit2Ref.current?.focus();
                    break;
                case 2:
                    digit3Ref.current?.focus();
                    break;
                case 3:
                    digit4Ref.current?.focus();
                    break;
                case 4:
                    digit4Ref.current?.blur();
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="p-2 mt-4">
                                <div className="text-muted text-center mb-4 pb-2 mx-lg-3">
                                    <div className="mb-4">
                                        <Image src={authper} alt="" className="avatar-md" />
                                    </div>
                                    <h4>Verify Your Email</h4>
                                    <p>Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span></p>
                                </div>

                                <Form autoComplete="off">
                                    <Row>
                                        <div className="col-3">
                                            <div className="mb-3">
                                                <Form.Label htmlFor="digit1-input" className="visually-hidden">Digit 1</Form.Label>
                                                <Form.Control type="text" className="form-control-lg text-center" placeholder="0" onKeyUp={(event) => moveToNext(1, event)} maxLength={1} id="digit1-input" ref={digit1Ref} />
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="mb-3">
                                                <Form.Label htmlFor="digit2-input" className="visually-hidden">Digit 2</Form.Label>
                                                <Form.Control type="text" className="form-control-lg text-center" placeholder="0" onKeyUp={(event) => moveToNext(2, event)} maxLength={1} id="digit2-input" ref={digit2Ref} />
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="mb-3">
                                                <Form.Label htmlFor="digit3-input" className="visually-hidden">Digit 3</Form.Label>
                                                <Form.Control type="text" className="form-control-lg text-center" placeholder="0" onKeyUp={(event) => moveToNext(3, event)} maxLength={1} id="digit3-input" ref={digit3Ref} />
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="mb-3">
                                                <Form.Label htmlFor="digit4-input" className="visually-hidden">Digit 4</Form.Label>
                                                <Form.Control type="text" className="form-control-lg text-center" placeholder="0" onKeyUp={(event) => moveToNext(4, event)} maxLength={1} id="digit4-input" ref={digit4Ref} />
                                            </div>
                                        </div>
                                    </Row>
                                </Form>


                                <div className="mt-3">
                                    <Button type="button" className="btn btn-primary w-100">Confirm</Button>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="mb-0">Didn't receive a code ? <Link to={process.env.PUBLIC_URL + "/auth-pass-reset"} className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default Twostep