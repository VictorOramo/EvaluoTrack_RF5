import React from "react";
import { Container } from "react-bootstrap";
import FileManagerWrappe from "./FileManagerWrappe";
import FileManagerContentWrappe from "./FileManagerContentWrappe";
import FileManagerRightWrapper from "./FileManagerRightWrapper";

const FileManager = () => {
    document.title = "File Manager | Steex - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="m-n2">
                        <div className="d-flex">
                            <FileManagerWrappe />
                            <FileManagerContentWrappe />
                            <FileManagerRightWrapper />
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FileManager;