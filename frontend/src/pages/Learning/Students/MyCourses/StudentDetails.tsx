import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';

//Import Images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg"

const StudentDetails = () => {
    return (
        <React.Fragment>

            <Card>
                <Card.Body>
                    <div className="text-center mb-4 pb-2">
                        <img src={avatar1} alt="" className="avatar-md rounded-circle d-block mx-auto" />
                        <div className="mt-3">
                            <Link to="/pages-profile">
                                <h5>Josefa Weissna</h5>
                            </Link>
                            <p className="text-muted mb-0">Student</p>
                        </div>
                    </div>
                    <div className="upcoming-scheduled pt-4">
                        <Flatpickr
                            data-inline-date="true"
                            className="form-control"
                            options={{
                                dateFormat: "d M, Y",
                                inline: true
                            }}
                        />
                    </div>
                </Card.Body>
            </Card>

        </React.Fragment>
    )
}

export default StudentDetails;
