import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ProductInformation } from "./ProductInfo";
import { Productgeneralinformation } from "./GeneralInfo";
import BreadCrumb from "Common/BreadCrumb";

const CreateProduct = () => {
    document.title = "Add Product | Steex - Admin & Dashboard Template";

    const [selectfeils, setSelectfeils] = useState([]);
    const [selectgalleryfeils, setSelectgalleryfeils] = useState([]);


    const handleAcceptfiles = (files: any) => {
        files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        })
        setSelectfeils(files);
    }

    function formatBytes(bytes: any, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    const handleAcceptgalleryfiles = (files: any) => {
        files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        })
        setSelectgalleryfeils(files);
    }
    
    //ck editor
    const editorRef : any = useRef();

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.editor
          .create(document.querySelector('#editor'), {
            // Configuration options
            // ...
          })
          .then((editor : any) => {
            // Editor instance is created successfully
            editorRef.current = editor;
          })
          .catch((error : any) => {
            // Handle initialization error
          });
      }
    }, []);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Add Product" pageTitle="Ecommerce" />
                    <ProductInformation />
                    <Row>
                        <Col lg={12} >
                            <Card >
                                <Card.Body >
                                    <Row >
                                        <Col xxl={4}>
                                            <Card.Title className="mb-3">Description</Card.Title>
                                            <p className="text-muted">Product Information refers to any information held by an organization about the products it produces, buys, sells or distributes.</p>
                                        </Col>
                                        <Col xxl={8}>
                                            <Form.Label>Product Description <span className="text-danger">*</span></Form.Label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data="<p>Hello from CKEditor 5!</p>"
                                                onReady={(editor : any) => {
                                                    // You can store the "editor" and use it when needed.
                                                    editorRef.current = editor;
                                                    console.log('Editor is ready to use!', editor);
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xxl={4}>
                                            <Card.Title className="mb-3">Images</Card.Title>
                                            <p className="text-muted">Product Information refers to any information held by an organization about the products it produces, buys, sells or distributes.</p>
                                        </Col>
                                        <Col xxl={8}>
                                            <div className="mb-3">
                                                <Form.Label>Product Images <span className="text-danger">*</span></Form.Label>
                                                <Dropzone
                                                    onDrop={(acceptfiles: any) => {
                                                        handleAcceptfiles(acceptfiles)
                                                    }}>
                                                    {({ getRootProps }: any) => (
                                                        <div className="dropzone dz-clickable text-center">
                                                            <div
                                                                className="dz-message needsclick"
                                                                {...getRootProps()}
                                                            >
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                                </div>
                                                                <h4>Drop product images here or click to upload.</h4>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Dropzone>
                                                <ul className="list-unstyled mb-0" id="dropzone-preview">
                                                    {
                                                        (selectfeils || [])?.map((file: any, index: number) => {
                                                            return (
                                                                <li className="mt-2 dz-processing dz-image-preview dz-success dz-complete">
                                                                    <div className="border rounded">
                                                                        <div className="d-flex p-2">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <div className="avatar-sm bg-light rounded">
                                                                                    <img className="img-fluid rounded d-block" src={file.priview} alt={file.name} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-grow-1">
                                                                                <div className="pt-1">
                                                                                    <h5 className="fs-md mb-1" data-dz-name>{file.path}</h5>
                                                                                    <p className="fs-sm text-muted mb-0" data-dz-size><strong>{file.formattedSize}</strong></p>
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
                                                <div className="mb-3">
                                                    <Form.Label>Gallery Images  <span className="text-danger">*</span></Form.Label>
                                                    <Dropzone
                                                        onDrop={(acceptfiles: any) => {
                                                            handleAcceptgalleryfiles(acceptfiles)
                                                        }}>
                                                        {({ getRootProps }: any) => (
                                                            <div className="dropzone dz-clickable text-center">
                                                                <div
                                                                    className="dz-message needsclick"
                                                                    {...getRootProps()}
                                                                >
                                                                    <div className="mb-3">
                                                                        <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                                    </div>
                                                                    <h4>Drop gallery images here or click to upload.</h4>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Dropzone>
                                                    <ul className="list-unstyled mb-0" id="dropzone-preview">
                                                        {
                                                            (selectgalleryfeils || [])?.map((file: any, index: number) => {
                                                                return (
                                                                    <li className="mt-2 dz-processing dz-image-preview dz-success dz-complete">
                                                                        <div className="border rounded">
                                                                            <div className="d-flex p-2">
                                                                                <div className="flex-shrink-0 me-3">
                                                                                    <div className="avatar-sm bg-light rounded">
                                                                                        <img className="img-fluid rounded d-block" src={file.priview} alt={file.name} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-grow-1">
                                                                                    <div className="pt-1">
                                                                                        <h5 className="fs-md mb-1" data-dz-name>{file.path}</h5>
                                                                                        <p className="fs-sm text-muted mb-0" data-dz-size><strong>{file.formattedSize}</strong></p>
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
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Productgeneralinformation />
                    <div className="hstack gap-2 justify-content-end mb-3">
                        <Button variant="danger"><i className="ph-x align-middle"></i> Cancel</Button>
                        <Button variant="primary">Submit</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment >
    );
}

export default CreateProduct;