import ParticlesAuth from 'pages/AuthenticationInner/ParticlesAuth'
import React from 'react'

import cmgsn from "assets/images/comingsoon.png";
import { Button, Card } from 'react-bootstrap';

//Import Countdown
import Countdown from "react-countdown"

const ComingSoon = () => {

    const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
        if (completed) {
            // Render a completed state
            return <span>You are good to go!</span>
        } else {
            return (
                <>
                    <div className="countdownlist-item">
                        <div className="count-title">Days</div>
                        <div className='count-num'>{days}</div>
                    </div>

                    <div className="countdownlist-item">
                        <div className="count-title">Hours</div>
                        <div className='count-num'>{hours}</div>
                    </div>
                    <div className="countdownlist-item">
                        <div className="count-title">Minutes</div>
                        <div className='count-num'>{minutes}</div>
                    </div>
                    <div className="countdownlist-item">
                        <div className="count-title">Seconds</div>
                        <div className='count-num'>{seconds}</div>
                    </div>
                </>
            )
        }
    }

    document.title = " Coming Soon | Steex - Admin & Dashboard Template"

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div id="countDownText">
                                <div className="mb-sm-5 pb-sm-0 pb-5 text-center">
                                    <img src={cmgsn} alt="" height="110" className="move-animation" />
                                </div>
                                <div className="mb-5 text-center">
                                    <h1>Coming Soon</h1>
                                </div>
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-10">
                                        <div className="countdownlist">
                                            <Countdown date="Oct 30, 2025" className="countdownlist" renderer={renderer} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h4>Get notified when we launch</h4>
                                    <p className="text-muted">Don't worry we will not spam you 😊</p>
                                </div>

                                <form action="#!">
                                    <div className="countdown-input-subscribe mx-auto my-4">
                                        <input type="email" className="form-control" placeholder="Enter your email address" required />
                                        <Button className="btn btn-primary" type="submit" id="button-email">Send<i className="ri-send-plane-2-fill align-bottom ms-2"></i></Button>
                                    </div>
                                </form>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default ComingSoon