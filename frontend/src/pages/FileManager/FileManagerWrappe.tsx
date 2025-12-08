import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Card, Badge, Image, Button } from "react-bootstrap";

//img
import avatar1 from "assets/images/users/48/avatar-1.jpg";
import technyRocket from "assets/images/techny-rocket.png";

const FileManagerWrappe = () => {
    const [selectfeils, setSelectfeils] = useState([]);

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
    return (
        <React.Fragment>
            <Card className="file-manager-wrapper rounded-end-0 shadow-none">
                <SimpleBar className="h-100">
                    <Card.Body className="d-flex flex-column h-100">
                        <div className="position-relative mb-4 d-flex align-items-center gap-2">
                            <div className="flex-shrink-0 position-relative">
                                <Image src={avatar1} alt="" className="avatar-sm rounded" />
                                <Badge bg="success" className="position-absolute top-0 start-100 translate-middle border border-2 border-white rounded-circle p-1"><span className="visually-hidden">unread messages</span></Badge>
                            </div>
                            <div className="flex-grow-1">
                                <p className="text-muted mb-2">Welcom to file manager</p>
                                <Link to="#" className="stretched-link">
                                    <h6 className="fs-md mb-0">Silene Oliveira</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    handleAcceptfiles(acceptfiles)
                                }}>
                                {({ getRootProps }: any) => (
                                    <div className="dropzone file-dropzone border border-1 border-dashed text-center dz-clickable" style={{ minHeight: "100px", padding: "20px 20px" }}>
                                        <div
                                            className="dz-message needsclick"
                                            {...getRootProps()}
                                        >
                                            <div className="mb-3">
                                                <i className="bi bi-cloud-download fs-1" />
                                            </div>
                                            <h5 className="fs-md mb-0">Drop files here or click to upload.</h5>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                            <ul className="list-unstyled mb-0" id="dropzone-preview">
                                {
                                    (selectfeils || [])?.map((file: any, index: any) => {
                                        return (
                                            <li className="mt-2" id="dropzone-preview-list" key={index}>
                                                <div className="border rounded">
                                                    <div className="d-flex flex-wrap gap-2 p-2">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar-sm bg-light rounded p-2">
                                                                <img data-dz-thumbnail className="img-fluid rounded d-block" src={file.priview} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="pt-1">
                                                                <h5 className="fs-md mb-1" data-dz-name>{file.path}</h5>
                                                                <p className="fs-sm text-muted mb-0" data-dz-size>{file.formattedSize}</p>
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

                        <div className="mb-4">
                            <div className="mb-4">
                                <h6>File Manager</h6>
                                <ul className="file-manager-menu list-unstyled">
                                    <li>
                                        <Link to="#"><i className="bi bi-folder align-baseline me-1"></i> All Folders</Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="bi bi-file-text align-baseline me-1"></i> Documents</Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="bi bi-images align-baseline me-1"></i> Media</Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="bi bi-clock-history align-baseline me-1"></i> Recent File</Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="bi bi-star align-baseline me-1"></i> Important</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Card className="mt-auto mb-0">
                            <Card.Body className="pt-2">
                                <div className="text-center mt-n5">
                                    <Image src={technyRocket} alt="" height="90" />
                                    <p className="text-md mt-4">Upgrade to Pro for unlimited storage</p>
                                    <Link to="#" className="link-effect">Upgrade Now <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </SimpleBar>
            </Card>
        </React.Fragment>
    );
}

export default FileManagerWrappe;