import React, { useEffect, useState } from "react";
import { Col, Row, Tab, Nav, Dropdown } from "react-bootstrap";
import AgentInfo from "../Agent/AgentInfo";
import GridProperty from "../ListingGrid/gridProperty";
import {
    getRealestateAgencyOverview as onGetRealestateAgencyOverview,
    getAgentGridList as onGetAgentGridList,
    deleteAgentGridList as onDeleteAgentGridList
} from "slices/realestate/thunk";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal } from "Common/DeleteModal";
import { createSelector } from "reselect";

const OverviewList = () => {
    const dispatch = useDispatch<any>();

    const [delet, setDelet] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<number>();

    const selectAgencyOverviewList = createSelector(
        (state: any) => state.RealEstate.realEstateAgencyOverview,
        (agencyOverviewList) => agencyOverviewList
    );

    const selectAgentgridList = createSelector(
        (state: any) => state.RealEstate.agentGridList,
        (agentgridList) => agentgridList
    );

    const { agencyOverviewList, agentgridList } = useSelector((state: any) => ({
        agencyOverviewList: selectAgencyOverviewList(state),
        agentgridList: selectAgentgridList(state)
    }));

    useEffect(() => {
        dispatch(onGetRealestateAgencyOverview());
    }, [dispatch]);

    useEffect(() => {
        dispatch(onGetAgentGridList());
    }, [dispatch]);

    //delete
    const handleClose = () => setDelet(false);
    const handleDeleteShow = (delet: any) => {
        setDeleteId(delet.id)
        setDelet(true)
    }

    const deleteModalFunction = () => {
        if (deleteId) {
            dispatch(onDeleteAgentGridList(deleteId))
        }
        setDelet(false)
    }
    const handleDropdownItemClick = (e: any) => {
        e.stopPropagation();
    };

    return (
        <React.Fragment>
            <Tab.Container defaultActiveKey="nav-home">
                <Row className="justify-content-between align-items-center mb-1">
                    <Col lg={12}>
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <Nav variant="pills" className="nav-secondary mb-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="nav-home">Property</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="nav-profile">Agents</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="flex-shrink-0">
                                <Dropdown className="cursor-pointer">
                                    <Dropdown.Toggle bsPrefix="btn btn-light btn-icon" type="button">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item onClick={handleDropdownItemClick}>Action</Dropdown.Item>
                                        <Dropdown.Item onClick={handleDropdownItemClick}>Another action</Dropdown.Item>
                                        <Dropdown.Item onClick={handleDropdownItemClick}>Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Tab.Content>
                    <Tab.Pane eventKey="nav-home">
                        <GridProperty data={agencyOverviewList} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="nav-profile">
                        <AgentInfo
                            data={agentgridList}
                            perPageData={8}
                            handleDeleteShow={handleDeleteShow}
                            rowclassname="row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1"
                        />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <DeleteModal show={delet} handleClose={handleClose} deleteModalFunction={deleteModalFunction} />
        </React.Fragment >
    );
};

export default OverviewList;