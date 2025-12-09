import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Col, Card, Button, Table, Badge, Form } from 'react-bootstrap';
import SimpleBar from "simplebar-react";

//img
import avatar5 from "assets/images/users/48/avatar-5.jpg";
import { coustomerdatailsdata } from "Common/data/customerList";

const CustomerDatails = () => {
    const handleFollow = (event: any) => {
        if (event.closest("button").classList.contains('active')) {
            event.closest("button").classList.remove('active')
        } else {
            event.closest("button").classList.add('active')
        }
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
            <Col xxl={4}>
                <Card id="overview-card">
                    <Card.Body>
                        <div className="d-flex gap-3 align-items-center flex-wrap">
                            <div className="flex-shirnk-0">
                                <img src={avatar5} alt="" className="avatar-sm rounded overview-img" />
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="fs-lg overview-name">Verona Mosciski</h6>
                                <p className="text-muted mb-0"><Link to="#" className="overview-nick-name">@mosciski</Link></p>
                            </div>
                            <div className="flex-shrink-0 d-flex gap-1">
                                <Button type="button" variant="subtle-primary" className="custom-toggle active" onClick={(e) => handleFollow(e.target)}>
                                    <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span>
                                    <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                </Button>
                                <Button variant="subtle-danger" className="btn-icon"><i className="ph-trash"></i></Button>
                            </div>
                        </div>
                        <ul className="d-flex align-items-center gap-2 list-unstyled mt-4">
                            <li>Social Media:</li>
                            <li>
                                <Link to="#" className="btn btn-subtle-success btn-icon btn-sm"><i className="bi bi-whatsapp"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-primary btn-icon btn-sm"><i className="bi bi-facebook"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm"><i className="bi bi-github"></i></Link>
                            </li>
                        </ul>
                        <div>
                            <Table className="table-sm table-borderless">
                                <tbody>
                                    <tr>
                                        <th>Email</th>
                                        <td className="overview-email">vmosciski@steex.com</td>
                                    </tr>
                                    <tr>
                                        <th>Contact</th>
                                        <td className="overview-contact">+(253) 12345 67890</td>
                                    </tr>
                                    <tr>
                                        <th>Joining Date</th>
                                        <td className="overview-date">20 Feb, 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td className="overview-status">
                                            <Badge text="danger" className="bg-danger-subtle">Block</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="mt-4">
                            <Form.Label className="fs-md">Private Notes</Form.Label>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={(editor : any) => {
                                    // You can store the "editor" and use it when needed.
                                    editorRef.current = editor;
                                    console.log('Editor is ready to use!', editor);
                                }}
                            />
                        </div>
                    </Card.Body>
                    <Card.Body className="px-0 pt-0">
                        <h6 className="fs-md px-4 mb-3">Order History</h6>
                        <SimpleBar className="px-4 simplebar-scrollable-y" style={{ maxHeight: "333px" }}>
                            <div className="vstack gap-2" >
                                {
                                    (coustomerdatailsdata || [])?.map((item: any) => {
                                        return (
                                            <div className="p-2 border border-dashed" key={item.id}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <div className="avatar-title bg-light rounded">
                                                            <img src={item.img} alt="" className="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <Link to="#">
                                                            <h6 className="fs-md mb-2">{item.title}</h6>
                                                        </Link>
                                                        <ul className="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                            <li>
                                                                <i className="ph-star align-baseline"></i> {item.star}
                                                            </li>
                                                            <li>
                                                                <i className="ph-shopping-cart align-baseline"></i> {item.cart}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="fs-md text-primary mb-0">${item.price}</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <Button className="btn btn-secondary btn-icon btn-sm">
                                                            <i className="ph-arrow-right"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default CustomerDatails;