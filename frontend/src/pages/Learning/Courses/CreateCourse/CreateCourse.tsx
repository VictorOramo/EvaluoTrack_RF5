import React, { useEffect, useRef, useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import Dropzone from 'react-dropzone';
import { Card, Col, Container, Form, Nav, Row, Tab, ProgressBar, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Import Images
import successImg from "../../../../assets/images/success-img.png"

const CreateCourse = () => {
    document.title = "Create Course | Steex - Admin & Dashboard Template";

    const [activeArrowTab, setactiveArrowTab] = useState<number>(0);

    const [selectedFiles, setselectedFiles] = useState<any>([]);

    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        );
        setselectedFiles(files);
    }

    function formatBytes(bytes: any, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    //DropZone
    const editorRef = useRef<any>();
    const [editor, setEditor] = useState(false);
    const { CKEditor, ClassicEditor }: any = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        };
        setEditor(true);
    }, []);

    const [data, setData] = useState<any>('');

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="Create Course" pageTitle="Courses" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h5>Create Course</h5>
                                </Card.Header>
                                <Card.Body className="form-steps">
                                    <Form action="#">
                                        <Tab.Container activeKey={activeArrowTab}>
                                            <div id="custom-progress-bar" className="progress-nav mb-4">
                                                <div>
                                                    <ProgressBar now={activeArrowTab * 50} style={{ height: "1px" }}></ProgressBar>
                                                </div>

                                                <Nav as="ul" variant="pills" className="progress-bar-tab custom-nav">
                                                    <Nav.Item as="li">
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip id="tooltip-top"> Courses Details </Tooltip>}
                                                        >
                                                            <Nav.Link as="button" eventKey="0" onClick={() => setactiveArrowTab(0)} className="rounded-pill">1</Nav.Link>
                                                        </OverlayTrigger>
                                                    </Nav.Item>

                                                    <Nav.Item as="li">
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip id="tooltip-top"> Course media </Tooltip>}
                                                        >
                                                            <Nav.Link as="button" eventKey="1" onClick={() => setactiveArrowTab(1)} className="rounded-pill">2</Nav.Link>
                                                        </OverlayTrigger>
                                                    </Nav.Item>

                                                    <Nav.Item as="li">
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip id="tooltip-top"> Successfully </Tooltip>}
                                                        >
                                                            <Nav.Link as="button" eventKey="2" onClick={() => setactiveArrowTab(2)} className="rounded-pill">3</Nav.Link>
                                                        </OverlayTrigger>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>

                                            <Tab.Content>
                                                <Tab.Pane eventKey="0" className="fade">
                                                    <h5 className="card-title mb-3">Course details</h5>
                                                    <Row className="g-3 align-items-center">
                                                        <Col lg={12}>
                                                            <div>
                                                                <Form.Label htmlFor="course-title-input">Course title<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control  type="text" id="course-title-input" placeholder="Enter course title" required />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div>
                                                                <Form.Label htmlFor="course-category-input">Course Category<span className="text-danger">*</span></Form.Label>
                                                                <Form.Select id="course-category-input">
                                                                    <option value="all">Select Course Category</option>
                                                                    <option value="Marketing & Management">Marketing & Management</option>
                                                                    <option value="React Development">React Development</option>
                                                                    <option value="Shopify Development">Shopify Development</option>
                                                                    <option value="Graphic Design">Graphic Design</option>
                                                                    <option value="Laravel Development">Laravel Development</option>
                                                                    <option value="Flask Development">Flask Development</option>
                                                                    <option value="Web Design">Web Design</option>
                                                                    <option value="Asp.Net Development">Asp.Net Development</option>
                                                                    <option value="Marketing & Management">Marketing & Management</option>
                                                                    <option value="PHP Development">PHP Development</option>
                                                                    <option value="Graphic Design">Graphic Design</option>
                                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                                    <option value="Data Science">Data Science</option>
                                                                </Form.Select>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div>
                                                                <Form.Label htmlFor="lavel-input">Courses Level<span className="text-danger">*</span></Form.Label>
                                                                <Form.Select id="lavel-input">
                                                                    <option value="all">Select Level</option>
                                                                    <option value="Beginner">Beginner</option>
                                                                    <option value="Advanced">Advanced</option>
                                                                    <option value="Intermediate">Intermediate</option>
                                                                    <option value="Expert">Expert</option>
                                                                </Form.Select>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div>
                                                                <Form.Label htmlFor="language-input">Language<span className="text-danger">*</span></Form.Label>
                                                                <Form.Select id="language-input">
                                                                    <option value="all">Select Language</option>
                                                                    <option value="English">English</option>
                                                                    <option value="Hindi">Hindi</option>
                                                                    <option value="France">France</option>
                                                                    <option value="Expert">Expert</option>
                                                                </Form.Select>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div>
                                                                <Form.Label htmlFor="lessons-input">Lessons<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control  type="number" id="lessons-input" placeholder="Lessons" required />
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <div>
                                                                <Form.Label htmlFor="price-input">Course price<span className="text-danger">*</span></Form.Label>
                                                                <InputGroup>
                                                                    <InputGroup.Text>$</InputGroup.Text>
                                                                    <Form.Control  type="number" id="price-input" placeholder="0.00" required />
                                                                </InputGroup>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <div>
                                                                <Form.Label htmlFor="discount-input">Discount price<span className="text-danger">*</span></Form.Label>
                                                                <InputGroup >
                                                                    <InputGroup.Text>%</InputGroup.Text>
                                                                    <Form.Control  type="number" id="discount-input" placeholder="00" required />
                                                                </InputGroup>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <Form.Check>
                                                                <Form.Check.Input type="checkbox" id="checkBox1" defaultChecked />
                                                                <Form.Check.Label htmlFor="checkBox1">
                                                                    Enable this Discount
                                                                </Form.Check.Label>
                                                            </Form.Check>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <div>
                                                                <Form.Label htmlFor="shortDescription">Short Description<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control  as="textarea" id="shortDescription" rows={3} placeholder="Enter description"></Form.Control>
                                                            </div>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <Form.Label>Add Description<span className="text-danger">*</span></Form.Label>
                                                            {editor ? <CKEditor
                                                                editor={ClassicEditor}
                                                                data={data}
                                                                onReady={(editor: any) => {
                                                                    // You can store the "editor" and use when it is needed.
                                                                    console.log('Editor is ready to use!', editor);
                                                                }}
                                                                onChange={(event: any, editor: any) => {
                                                                    const data = editor.getData();
                                                                    setData(data);
                                                                }}
                                                            /> : <p>ckeditor5</p>}
                                                        </Col>
                                                    </Row>
                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <button className="btn btn-primary btn-label right ms-auto nexttab nexttab" data-nexttab="pills-info-desc-tab" onClick={() => setactiveArrowTab(1)}>
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i> Next Step</button>
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="1" id="pills-info-desc" role="tabpanel" aria-labelledby="pills-info-desc-tab">

                                                    <Form.Label >Main Course Image<span className="text-danger">*</span></Form.Label>
                                                    <Dropzone
                                                        onDrop={(acceptedFiles: any) => {
                                                            handleAcceptedFiles(acceptedFiles);
                                                        }}
                                                    >
                                                        {({ getRootProps }: any) => (
                                                            <div className="dropzone course-dropzone border border-1 border-dashed text-center">
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

                                                    <div className="list-unstyled mb-0" id="dropzone-previews">
                                                        {selectedFiles.map((f: any, i: number) => {
                                                            return (
                                                                <Card
                                                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                    key={i + "-file"}
                                                                >
                                                                    <div className="p-2">
                                                                        <Row className="align-items-center">
                                                                            <Col className="col-auto">
                                                                                <img
                                                                                    data-dz-thumbnail=""
                                                                                    height="80"
                                                                                    className="avatar-sm rounded bg-light"
                                                                                    alt={f.name}
                                                                                    src={f.preview}
                                                                                />
                                                                            </Col>
                                                                            <Col>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="text-muted font-weight-bold"
                                                                                >
                                                                                    {f.name}
                                                                                </Link>
                                                                                <p className="mb-0">
                                                                                    <strong>{f.formattedSize}</strong>
                                                                                </p>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Card>
                                                            );
                                                        })}

                                                    </div>
                                                    <div className="mt-4">
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="videoURL">Video URL</Form.Label>
                                                            <Form.Control  type="url" id="videoURL" placeholder="Enter url" />
                                                        </div>
                                                        <div>
                                                            <Form.Label>Upload Video<span className="text-danger">*</span></Form.Label>
                                                            <Dropzone
                                                                onDrop={(acceptedFiles: any) => {
                                                                    handleAcceptedFiles(acceptedFiles);
                                                                }}
                                                            >
                                                                {({ getRootProps }: any) => (
                                                                    <div className="dropzone course-dropzone border border-1 border-dashed text-center">
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

                                                            <div className="list-unstyled mb-0" id="dropzone-previews">
                                                                {selectedFiles.map((f: any, i: number) => {
                                                                    return (
                                                                        <Card
                                                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                            key={i + "-file"}
                                                                        >
                                                                            <div className="p-2">
                                                                                <Row className="align-items-center">
                                                                                    <Col className="col-auto">
                                                                                        <img
                                                                                            data-dz-thumbnail=""
                                                                                            height="80"
                                                                                            className="avatar-sm rounded bg-light"
                                                                                            alt={f.name}
                                                                                            src={f.preview}
                                                                                        />
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="text-muted font-weight-bold"
                                                                                        >
                                                                                            {f.name}
                                                                                        </Link>
                                                                                        <p className="mb-0">
                                                                                            <strong>{f.formattedSize}</strong>
                                                                                        </p>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </Card>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <button type="button" className="btn btn-link text-decoration-none btn-label previestab" onClick={() => setactiveArrowTab(0)}><i className="ri-arrow-left-line label-icon align-middle fs-lg me-2"></i> Back to Course Details</button>
                                                        <button type="button" className="btn btn-primary btn-label right ms-auto nexttab nexttab" onClick={() => setactiveArrowTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Submit</button>
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="2" className="fade" id="pills-success" role="tabpanel" aria-labelledby="pills-success-tab">
                                                    <div>
                                                        <div className="text-center">
                                                            <div className="my-4">
                                                                <img src={successImg} alt="" height="150" />
                                                            </div>
                                                            <h4>Well Done !</h4>
                                                            <p className="text-muted mb-0">You have added successfully course</p>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </Form>
                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default CreateCourse
