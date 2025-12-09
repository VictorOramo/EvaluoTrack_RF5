import React from 'react'
import ParticlesAuth from '../ParticlesAuth'
import { Button, Card, Image } from 'react-bootstrap';

import offauth from "assets/images/auth/offline-page.gif"

const OfflinePage = () => {

    document.title=" Offline Page | Steex Admin & Dashboard Template";


    function handleRefreshClick() {
        window.location.reload();
      }

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="mt-2 text-center">
                                <div className="error-img text-center px-5">
                                    <Image src={offauth} className="img-fluid" alt="" />
                                </div>
                                <h3 className="mt-2 fw-semibold">We're Currently Offline</h3>
                                <p className="text-muted mb-4">We can't show you this images because you aren't connected to the internet. When you’re back online refresh the page or hit the button below</p>
                                <Button className="btn btn-primary" onClick={handleRefreshClick}><i className="ri-refresh-line align-bottom"></i> Refresh</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default OfflinePage;