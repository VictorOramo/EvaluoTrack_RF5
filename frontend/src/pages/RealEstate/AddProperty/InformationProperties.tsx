import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

const InformationProperties = () => {

    const [selectfeils, setSelectfeils] = useState<any>([]);

    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
            })
        })
        setSelectfeils([...selectfeils, ...newImages]);
    }

    return (
        <React.Fragment>
            <Col lg={9}>
                <Card>
                    <Card.Header>
                        <h5 className="card-title mb-0">Information Properties</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form action="#!">
                            <div className="mb-3">
                                <label className="form-label">Property Images<span className="text-danger">*</span></label>
                                <Dropzone
                                    onDrop={(acceptedFiles: any) => {
                                        handleAcceptfiles(acceptedFiles);
                                    }}
                                >
                                    {({ getRootProps }: any) => (
                                        <div className="dropzone course-dropzone border border-1 border-dashed text-center" style={{ "minHeight": "80px" }}>
                                            <div className="dz-message needsclick"
                                                {...getRootProps()}
                                            >
                                                <div className="mb-3">
                                                    <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                </div>
                                                <h4>Drop files here or click to upload.</h4>
                                            </div>
                                        </div>
                                    )}
                                </Dropzone>
                                <ul className="list-unstyled mb-0" id="dropzone-preview">
                                    {
                                        (selectfeils || [])?.map((file: any, index: number) => {
                                            return (
                                                <li className="mt-2 dz-image-preview" key="">
                                                    <div className="border rounded">
                                                        <div className="d-flex flex-wrap gap-2 p-2">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar-sm bg-light rounded p-2">
                                                                    <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file.priview} alt={file.name} />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div className="pt-1">
                                                                    <h5 className="fs-md mb-1" data-dz-name>{file.path}</h5>
                                                                    <p className="fs-sm text-muted mb-0" data-dz-size=""><strong>{file?.size?.toString()?.charAt(0)}</strong> KB</p>
                                                                    <strong className="error text-danger" data-dz-errormessage></strong>
                                                                </div>
                                                            </div>
                                                            <div className="flex-shrink-0 ms-3">
                                                                <Button variant="danger" size="sm" onClick={() => {
                                                                    const newImages = [...selectfeils];
                                                                    newImages.splice(index, 1);
                                                                    setSelectfeils(newImages);
                                                                }}>Delete</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <Row>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="Property-title-input">Property title<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="Property-title-input" placeholder="Enter property title" required />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="Property-type-input">Property Type<span className="text-danger">*</span></Form.Label>

                                        <Form.Select id="Property-type-input">
                                            <option value="">Select Property Type</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Residency">Residency</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Others">Other</option>
                                        </Form.Select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="bedroom-input">Bedroom<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" id="bedroom-input" placeholder="Enter Bedroom" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="bathroom-input">Bathroom<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" id="bathroom-input" placeholder="Enter Bathroom" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="sqft-input">SQFT<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" id="sqft-input" placeholder="Enter sqft" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="Property-price-input">Price<span className="text-danger">*</span></Form.Label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <Form.Control type="number" id="Property-price-input" placeholder="Enter price" required />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="street-address">Street Address<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="street-address" placeholder="Enter street address" required />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="state-input">State<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="state-input" placeholder="Enter state" required />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="country-input" className="form-label">Country<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="country-input" placeholder="Enter country" required />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="zipcode-input" className="form-label">Zipcode<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="zipcode-input" placeholder="254 325" required />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures">Swimming pool</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures2" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures2">Air conditioning</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures3" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures3">Electricity</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures4" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures4">Near Green Zone</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures5" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures5">Near Shop</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures6" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures6">Near School</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures7" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures7">Parking Available</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures8" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures8">Internet</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="additionalFeatures9" />
                                        <Form.Label className="form-check-label" htmlFor="additionalFeatures9">Balcony</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="hstack gap-2 justify-content-end">
                                        <Button variant="secondary"><i className="bi bi-repeat align-baseline me-1"></i> Reset</Button>
                                        <Button variant="primary" className="btn btn-primary"><i className="bi bi-clipboard2-check align-baseline me-1"></i> Save</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default InformationProperties
