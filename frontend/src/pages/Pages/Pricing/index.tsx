import React from 'react'
import { Container } from 'react-bootstrap'
import PricingOne from './Pricing'
import Pricingtwo from './Pricingtwo'
import Ourplans from './Ourplans'
import Simplepricing from './Simplepricing'

const Pricing = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <PricingOne />
                    <Pricingtwo />
                    <Ourplans />
                    <Simplepricing />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Pricing