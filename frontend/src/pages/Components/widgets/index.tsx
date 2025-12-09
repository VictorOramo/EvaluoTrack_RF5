import React from 'react';
import { Container } from 'react-bootstrap';
import TileBox1 from './TileBox1';
import Otherwidgets from './Otherwidgets';
import Chartmap from './Chartmap';
import SalebyCountries from './SalebyCountries';

const Widgets = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
              <TileBox1 />
              <Otherwidgets />
              <Chartmap />
              <SalebyCountries />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default Widgets