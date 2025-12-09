import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Breadcrumb from 'Common/BreadCrumb';
//import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
// import './google-map.scss';



const mapStyles = {
  width: '100%',
  height: '100%',
};

const LoadingContainer = () => <div>Loading...</div>
const GoogleMap = (props: any) => {

  document.title = " Google Maps | Steex Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Maps" pageTitle="Google Maps" />
          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Markers</h4>
                </Card.Header>

                <Card.Body>
                  <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Overlays</h4>
                </Card.Header>

                <Card.Body>
                  <div id="gmaps-overlay" className="gmaps" style={{ position: "relative" }}>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Street View Panoramas</h4>
                </Card.Header>

                <Card.Body>
                  <div id="panorama" className="gmaps-panaroma" style={{ position: "relative" }}>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Map Types</h4>
                </Card.Header>

                <Card.Body>
                  <div className="card-body">
                    <div id="gmaps-types" className="gmaps" style={{ position: "relative" }}>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </div >
    </React.Fragment >
  )
}

/*export default (
  GoogleApiWrapper({
      apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
      LoadingContainer: LoadingContainer,
      v: "3",
  })(GoogleMap)
)
*/


