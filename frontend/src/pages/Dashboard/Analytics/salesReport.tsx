import React from 'react'
import { Button, Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import { SalesReportCharts } from './charts';
import { SalesReportSeries } from 'Common/data';

const SalesReport = () => {
    const periodData = SalesReportSeries

    return (
        <React.Fragment>

            <Card className="card-height-100">
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">Sales Report</h5>
                    <div className="flex-shrink-0">
                        <Button className="btn-subtle-info btn-sm"><i className="bi bi-file-earmark-text me-1 align-baseline"></i> Generate Reports</Button>
                    </div>
                </Card.Header>
                <Card.Body className="pb-0">
                    <h4>$<span className="counter-value">
                        <CountUp start={0} end={452.32} separator="," decimals={2} />
                    </span>M <span className="text-success fw-normal fs-sm"><i className="bi bi-arrow-up"></i> +23.57%</span></h4>
                    <p className="text-muted mb-0">($215.32 Avg. revenue monthly)</p>
                </Card.Body>
                <Card.Body className="pt-0 pb-2 ps-0 mt-2 mt-lg-n3 sales-report-chart">
                    <SalesReportCharts periodData={periodData} dataColors='["--tb-primary", "--tb-secondary"]' />
                </Card.Body>
            </Card>

        </React.Fragment>
    );
};

export default SalesReport;
