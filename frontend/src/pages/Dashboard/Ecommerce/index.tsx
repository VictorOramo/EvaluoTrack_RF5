import React from 'react'
import { Container, Row } from 'react-bootstrap';

// Import Components
import Orders from './orders';
import OrdersStatus from './ordersStatus';
import PopularProducts from './popularProducts';
import RecentActivity from './recentActivity';
import RecentSales from './recentSales';
import LatestOrders from './latestOrders';
import Revenue from './revenue';
import Sales from './sales';
import TrafficSource from './trafficSource';
import Insight from './insight';

const Ecommerce = () => {
  document.title="Dashboard | Steex Admin & Dashboard Template";

  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <Row>
                    <Orders />
                    <Revenue />
                </Row>
                <Row>
                    <Sales />
                    <TrafficSource />
                    <RecentSales />
                </Row>
                <Row>
                    <LatestOrders />
                    <PopularProducts />
                </Row>
                <Row>
                    <OrdersStatus />
                    <RecentActivity />
                    <Insight />
                </Row>
            </Container>
        </div>
    </React.Fragment>
  )
}

export default Ecommerce;
