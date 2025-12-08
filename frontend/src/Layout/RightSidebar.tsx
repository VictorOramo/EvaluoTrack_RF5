import React, { useState, useEffect } from 'react'
import { Col, Collapse, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import sidebarImg1 from "../assets/images/sidebar/img-sm-1.jpg";
import sidebarImg2 from "../assets/images/sidebar/img-sm-2.jpg";
import sidebarImg3 from "../assets/images/sidebar/img-sm-3.jpg";
import sidebarImg4 from "../assets/images/sidebar/img-sm-4.jpg";

import lightMode from "assets/images/custom-theme/light-mode.png";
import darkMode from "assets/images/custom-theme/dark-mode.png";
import brandMode from "assets/images/custom-theme/brand-mode.png";
import material from "assets/images/custom-theme/material.png";
import creative from "assets/images/custom-theme/creative.png";
import minimal from "assets/images/custom-theme/minimal.png";
import modern from "assets/images/custom-theme/modern.png";
import interaction from "assets/images/custom-theme/interaction.png";

import classnames from "classnames";
import SimpleBar from 'simplebar-react';

//redux
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType,
    changeSidebarImageType,
} from "slices/thunk";

//import Constant
import {
    LAYOUT_TYPES,
    LAYOUT_MODE_TYPES,
    LAYOUT_SIDEBAR_TYPES,
    LAYOUT_WIDTH_TYPES,
    LAYOUT_POSITION_TYPES,
    LAYOUT_TOPBAR_THEME_TYPES,
    LEFT_SIDEBAR_SIZE_TYPES,
    LEFT_SIDEBAR_VIEW_TYPES,
    LEFT_SIDEBAR_IMAGE_TYPES,
    PERLOADER_TYPES,
    LAYOUT_THEME_TYPES
} from "Common/constants/layout";
import { changePreLoader } from 'slices/layouts/thunk';
import { changeLayoutTheme } from 'slices/layouts/thunk';
import { createSelector } from 'reselect';

const RightSidebar = () => {
    const dispatch = useDispatch<any>();
    const [open, setOpen] = useState<boolean>(false);

    //left Sidebar color view  
    const [show, setShow] = useState(false);

    function tog_show() {
        setShow(!show);
        dispatch(changeSidebarTheme("gradient"));
    }

    // open offcanvas
    const toggleLeftCanvas = () => { setOpen(!open) };

    const selectLayoutProperties = createSelector(
        (state: any) => state.Layout,
        (layout) => ({
          layoutType: layout.layoutType,
          layoutThemeType: layout.layoutThemeType,
          leftSidebarType: layout.leftSidebarType,
          layoutModeType: layout.layoutModeType,
          layoutWidthType: layout.layoutWidthType,
          layoutPositionType: layout.layoutPositionType,
          topbarThemeType: layout.topbarThemeType,
          leftsidbarSizeType: layout.leftsidbarSizeType,
          leftSidebarViewType: layout.leftSidebarViewType,
          leftSidebarImageType: layout.leftSidebarImageType,
          preloader: layout.preloader,
        })
      );
      
      const {
        layoutType,
        layoutThemeType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        preloader,
      } = useSelector(selectLayoutProperties);

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const pathName = useLocation().pathname;

    useEffect(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.opacity = "1";
            preloader.style.visibility = "visible";
            setTimeout(function () {
                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
            }, 1000);
        }
    }, [preloader, pathName]);



    return (
        <React.Fragment>
            <button
                onClick={() => toTop()}
                className="btn btn-dark btn-icon" id="back-to-top">
                <i className="bi bi-caret-up fs-3xl"></i>
            </button>

            {preloader === "enable" && <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>}

            <div className="customizer-setting d-none d-md-block">
                <div className="btn btn-info p-2 text-uppercase rounded-end-0 shadow-lg" onClick={toggleLeftCanvas}>
                    <i className="bi bi-gear mb-1"></i> Customizer
                </div>
            </div>
            <Offcanvas className="offcanvas-end border-0" show={open} onHide={toggleLeftCanvas} placement="end">
                <Offcanvas.Header className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
                    <div className="me-2">
                        <h5 className="mb-1 text-white">Steex Builder</h5>
                        <p className="text-white text-opacity-75 mb-0">Choose your themes &amp; layouts etc.</p>
                    </div>
                    <button
                        onClick={toggleLeftCanvas}
                        type="button"
                        className="btn-close btn-close-white ms-auto"
                    ></button>
                </Offcanvas.Header>
                <div className="offcanvas-body p-0">
                        <SimpleBar className="h-100">
                            <div className="p-4">
                                <h6 className="fs-md mb-1">Layout</h6>
                                <p className="text-muted fs-sm">Choose your layout</p>
                                <Row>
                                    <div className="col-4">
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-layout01"
                                                name="data-layout"
                                                type="radio"
                                                value={LAYOUT_TYPES.VERTICAL}
                                                checked={layoutType === LAYOUT_TYPES.VERTICAL}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayout(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout01">
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Vertical</h5>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-layout02"
                                                name="data-layout"
                                                type="radio"
                                                value={LAYOUT_TYPES.HORIZONTAL}
                                                checked={layoutType === LAYOUT_TYPES.HORIZONTAL}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayout(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout02">
                                                <span className="d-flex h-100 flex-column gap-1">
                                                    <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                                        <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                                    </span>
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Horizontal</h5>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-layout03"
                                                name="data-layout"
                                                type="radio"
                                                value={LAYOUT_TYPES.TWOCOLUMN}
                                                checked={layoutType === LAYOUT_TYPES.TWOCOLUMN}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayout(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout03">
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1">
                                                            <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                                            <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>

                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Two Column</h5>
                                    </div>
                                </Row>
                                <h6 className="mt-4 fs-md mb-1">Theme</h6>
                                <p className="text-muted fs-sm">Choose your suitable Theme.</p>
                                <Row>
                                    <Col xs={6}>
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-theme01"
                                                name="data-theme"
                                                type="radio"
                                                value={LAYOUT_THEME_TYPES.DEFAULT}
                                                checked={layoutThemeType === LAYOUT_THEME_TYPES.DEFAULT}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutTheme(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label p-0" htmlFor="customizer-theme01">
                                                <img src={lightMode} alt="" className="img-fluid" />
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Default</h5>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-theme02"
                                                name="data-theme"
                                                type="radio"
                                                value={LAYOUT_THEME_TYPES.MATERIAL}
                                                checked={layoutThemeType === LAYOUT_THEME_TYPES.MATERIAL}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutTheme(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0" htmlFor="customizer-theme02">
                                                <img src={material} alt="" className="img-fluid" />
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Material</h5>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-theme03"
                                                name="data-theme"
                                                type="radio"
                                                value={LAYOUT_THEME_TYPES.CREATIVE}
                                                checked={layoutThemeType === LAYOUT_THEME_TYPES.CREATIVE}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutTheme(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0" htmlFor="customizer-theme03">
                                                <img src={creative} alt="" className="img-fluid" />
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Creative</h5>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-theme04"
                                                name="data-theme"
                                                type="radio"
                                                value={LAYOUT_THEME_TYPES.MINIMAL}
                                                checked={layoutThemeType === LAYOUT_THEME_TYPES.MINIMAL}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutTheme(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0" htmlFor="customizer-theme04">
                                                <img src={minimal} alt="" className="img-fluid" />
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Minimal</h5>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-theme05"
                                                name="data-theme"
                                                type="radio"
                                                value={LAYOUT_THEME_TYPES.MODERN}
                                                checked={layoutThemeType === LAYOUT_THEME_TYPES.MODERN}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutTheme(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0" htmlFor="customizer-theme05">
                                                <img src={modern} alt="" className="img-fluid" />
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Modern</h5>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-theme06"
                                                name="data-theme"
                                                type="radio"
                                                value={LAYOUT_THEME_TYPES.INTERACTION}
                                                checked={layoutThemeType === LAYOUT_THEME_TYPES.INTERACTION}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutTheme(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0" htmlFor="customizer-theme06">
                                                <img src={interaction} alt="" className="img-fluid" />
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Interaction</h5>
                                    </Col>
                                </Row>
                                <h6 className="mt-4 fs-md mb-1">Color Scheme</h6>
                                <p className="text-muted fs-sm">Choose Light or Dark Scheme.</p>
                                <div className="colorscheme-cardradio">
                                    <Row className="g-3">
                                        <Col xs={6}>
                                            <div className="form-check card-radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="data-bs-theme"
                                                    id="layout-mode-light"
                                                    value={LAYOUT_MODE_TYPES.LIGHTMODE}
                                                    checked={layoutModeType === LAYOUT_MODE_TYPES.LIGHTMODE}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changeLayoutMode(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 bg-transparent" htmlFor="layout-mode-light">
                                                    <img src={lightMode} alt="" className="img-fluid" />
                                                </label>
                                            </div>
                                            <h5 className="fs-sm text-center fw-medium mt-2">Light</h5>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="form-check card-radio dark">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="data-bs-theme"
                                                    id="layout-mode-dark"
                                                    value={LAYOUT_MODE_TYPES.DARKMODE}
                                                    checked={layoutModeType === LAYOUT_MODE_TYPES.DARKMODE}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changeLayoutMode(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 bg-transparent" htmlFor="layout-mode-dark">
                                                    <img src={darkMode} alt="" className="img-fluid" />
                                                </label>
                                            </div>
                                            <h5 className="fs-sm text-center fw-medium mt-2">Dark</h5>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="form-check card-radio brand">
                                                <input className="form-check-input" type="radio" name="data-bs-theme" id="layout-mode-brand" value="brand" disabled />
                                                <h6 className="text-danger fs-xl lh-base text-center position-absolute top-50 start-50 translate-middle z-1 mb-0">Coming Soon</h6>
                                                <label className="form-check-label cursor-none p-0 bg-transparent opacity-75" htmlFor="layout-mode-brand">
                                                    <img src={brandMode} alt="" className="img-fluid" />
                                                </label>
                                            </div>
                                            <h5 className="fs-sm text-center fw-medium mt-2">Brand</h5>
                                        </Col>
                                    </Row>
                                </div>

                                {layoutType !== LAYOUT_TYPES.TWOCOLUMN && (
                                <>
                                    <div id="layout-width" style={{ display: "block" }}>
                                        <h6 className="mt-4 fs-md mb-1">Layout Width</h6>
                                        <p className="text-muted fs-sm">Choose Fluid or Boxed layout.</p>
                                        <Row>
                                            <div className="col-4">
                                                <div className="form-check card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-width"
                                                        id="layout-width-fluid"
                                                        value={LAYOUT_WIDTH_TYPES.FLUID}
                                                        checked={layoutWidthType === LAYOUT_WIDTH_TYPES.FLUID}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLayoutWidth(e.target.value));
                                                                dispatch(changeLeftsidebarSizeType("lg"));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="layout-width-fluid">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Fluid</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-width"
                                                        id="layout-width-boxed"
                                                        value={LAYOUT_WIDTH_TYPES.BOXED}
                                                        checked={layoutWidthType === LAYOUT_WIDTH_TYPES.BOXED}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLayoutWidth(e.target.value));
                                                                dispatch(changeLeftsidebarSizeType("sm-hover"));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100 px-2" htmlFor="layout-width-boxed">
                                                        <span className="d-flex gap-1 h-100 border-start border-end">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Boxed</h5>
                                            </div>
                                        </Row>
                                    </div>
                                    <div id="layout-position" style={{ display: "block" }}>
                                        <h6 className="mt-4 fs-md mb-1">Layout Position</h6>
                                        <p className="text-muted fs-sm">Choose Fixed or Scrollable Layout Position.</p>
                                        <div className="btn-group radio" role="group">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="data-layout-position"
                                                id="layout-position-fixed"
                                                value={LAYOUT_POSITION_TYPES.FIXED}
                                                checked={layoutPositionType === LAYOUT_POSITION_TYPES.FIXED}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutPosition(e.target.value));
                                                    }
                                                }}
                                            />
                                            <label className="btn btn-light w-sm" htmlFor="layout-position-fixed">Fixed</label>
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="data-layout-position"
                                                id="layout-position-scrollable"
                                                value={LAYOUT_POSITION_TYPES.SCROLLABLE}
                                                checked={layoutPositionType === LAYOUT_POSITION_TYPES.SCROLLABLE}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutPosition(e.target.value));
                                                    }
                                                }}
                                            />
                                            <label className="btn btn-light w-sm ms-0" htmlFor="layout-position-scrollable">Scrollable</label>
                                        </div>
                                    </div>
                                </>
                                )}


                                <h6 className="mt-4 fs-md mb-1">Topbar Color</h6>
                                <p className="text-muted fs-sm">Choose Light or Dark Topbar Color.</p>
                                <Row>
                                    <div className="col-4">
                                        <div className="form-check card-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="data-topbar"
                                                id="topbar-color-light"
                                                value={LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                                                checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeTopbarTheme(e.target.value));
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-light">
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Light</h5>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check card-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="data-topbar"
                                                id="topbar-color-dark"
                                                value={LAYOUT_TOPBAR_THEME_TYPES.DARK}
                                                checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.DARK}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeTopbarTheme(e.target.value));
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-dark">
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-primary d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-sm text-center fw-medium mt-2">Dark</h5>
                                    </div>
                                </Row>

                                {layoutType === LAYOUT_TYPES.VERTICAL && (
                                <>
                                    <div id="sidebar-size" style={{ display: "block" }}>
                                        <h6 className="mt-4 fs-md mb-1">Sidebar Size</h6>
                                        <p className="text-muted fs-sm">Choose a size of Sidebar.</p>
                                        <Row>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-default"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.DEFAULT}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.DEFAULT}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-default">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Default</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-compact"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.COMPACT}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.COMPACT}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-compact">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Compact</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-small"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.SMALLICON}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.SMALLICON}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-small">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                    <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Small (Icon View)</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-small-hover"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-small-hover">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                    <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Small Hover View</h5>
                                            </div>
                                        </Row>
                                    </div>
                                    <div id="sidebar-view" style={{ display: "block" }}>
                                        <h6 className="mt-4 fs-md mb-1">Sidebar View</h6>
                                        <p className="text-muted fs-sm">Choose Default or Detached Sidebar view.</p>
                                        <Row>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-style"
                                                        id="sidebar-view-default"
                                                        value={LEFT_SIDEBAR_VIEW_TYPES.DEFAULT}
                                                        checked={leftSidebarViewType === LEFT_SIDEBAR_VIEW_TYPES.DEFAULT}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarViewType(e.target.value));
                                                            }
                                                        }}

                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-view-default">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Default</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-style"
                                                        id="sidebar-view-detached"
                                                        value={LEFT_SIDEBAR_VIEW_TYPES.DETACHED}
                                                        checked={leftSidebarViewType === LEFT_SIDEBAR_VIEW_TYPES.DETACHED}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarViewType(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-view-detached">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-flex p-1 gap-1 align-items-center px-2">
                                                                <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                                <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                                <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100 p-1 px-2">
                                                                <span className="flex-shrink-0">
                                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="bg-light d-block p-1 mt-auto px-2"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Detached</h5>
                                            </div>
                                        </Row>
                                    </div>
                                </>
                                )}

                                {layoutType !== LAYOUT_TYPES.HORIZONTAL && (
                                <>
                                    <div id="sidebar-color" style={{ display: "block" }}>
                                        <h6 className="mt-4 fs-md mb-1">Sidebar Color</h6>
                                        <p className="text-muted fs-sm">Choose a color of Sidebar.</p>
                                        <Row>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-light"
                                                        value={LAYOUT_SIDEBAR_TYPES.LIGHT}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.LIGHT}
                                                        onChange={e => {
                                                            setShow(false);
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-color-light">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Light</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-dark"
                                                        value={LAYOUT_SIDEBAR_TYPES.DARK}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.DARK}
                                                        onChange={e => {
                                                            setShow(false);
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-color-dark">
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-primary d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Dark</h5>
                                            </div>

                                            <div className="col-4">
                                                <button
                                                    className={classnames(
                                                        "btn btn-link avatar-md w-100 p-0 overflow-hidden border ",
                                                        { collapsed: !show, active: show === true }
                                                    )}
                                                    data-bs-target="#collapseBgGradient"
                                                    data-bs-toggle="collapse"
                                                    aria-controls="collapseBgGradient"
                                                    aria-expanded={show}
                                                    type="button"
                                                    onClick={tog_show}
                                                >
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-light d-block p-1"></span>
                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </button>
                                                <h5 className="fs-sm text-center fw-medium mt-2">Gradient</h5>
                                            </div>
                                        </Row>
                                        <Collapse in={show}>
                                            <div id="collapseBgGradient">
                                            <div className="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-gradient"
                                                        value={LAYOUT_SIDEBAR_TYPES.GRADIENT}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient">
                                                        <span className="avatar-title rounded-circle bg-vertical-gradient"></span>
                                                    </label>
                                                </div>
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-gradient-2"
                                                        value={LAYOUT_SIDEBAR_TYPES.GRADIENT_2}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT_2}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient-2">
                                                        <span className="avatar-title rounded-circle bg-vertical-gradient-2"></span>
                                                    </label>
                                                </div>
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-gradient-3"
                                                        value={LAYOUT_SIDEBAR_TYPES.GRADIENT_3}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT_3}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient-3">
                                                        <span className="avatar-title rounded-circle bg-vertical-gradient-3"></span>
                                                    </label>
                                                </div>
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-gradient-4"
                                                        value={LAYOUT_SIDEBAR_TYPES.GRADIENT_4}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT_4}
                                                        onChange={e => {
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value));
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient-4">
                                                        <span className="avatar-title rounded-circle bg-vertical-gradient-4"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div id="sidebar-img" style={{ display: "block" }}>
                                        <h6 className="mt-4 fw-semibold fs-lg">Sidebar Images</h6>
                                        <p className="text-muted fs-sm">Choose a image of Sidebar.</p>
                                        <div className="d-flex gap-2 flex-wrap img-switch">
                                            <div className="form-check sidebar-setting card-radio">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="data-sidebar-image"
                                                    id="sidebarimg-none"
                                                    value={LEFT_SIDEBAR_IMAGE_TYPES.NONE}
                                                    checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.NONE}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changeSidebarImageType(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-none">
                                                    <span className="avatar-md w-auto bg-light d-flex align-items-center justify-content-center">
                                                        <i className="ri-close-fill fs-3xl"></i>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="form-check sidebar-setting card-radio">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="data-sidebar-image"
                                                    id="sidebarimg-01"
                                                    value={LEFT_SIDEBAR_IMAGE_TYPES.IMG1}
                                                    checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG1}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changeSidebarImageType(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-01">
                                                    <img src={sidebarImg1} alt="" className="avatar-md w-auto object-cover" />
                                                </label>
                                            </div>
                                            <div className="form-check sidebar-setting card-radio">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="data-sidebar-image"
                                                    id="sidebarimg-02"
                                                    value={LEFT_SIDEBAR_IMAGE_TYPES.IMG2}
                                                    checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG2}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changeSidebarImageType(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-02">
                                                    <img src={sidebarImg2} alt="" className="avatar-md w-auto object-cover" />
                                                </label>
                                            </div>
                                            <div className="form-check sidebar-setting card-radio">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="data-sidebar-image"
                                                    id="sidebarimg-03"
                                                    value={LEFT_SIDEBAR_IMAGE_TYPES.IMG3}
                                                    checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG3}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changeSidebarImageType(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-03">
                                                    <img src={sidebarImg3} alt="" className="avatar-md w-auto object-cover" />
                                                </label>
                                            </div>
                                            <div className="form-check sidebar-setting card-radio">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="data-sidebar-image"
                                                    id="sidebarimg-04"
                                                    value={LEFT_SIDEBAR_IMAGE_TYPES.IMG4}
                                                    checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG4}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changeSidebarImageType(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-04">
                                                    <img src={sidebarImg4} alt="" className="avatar-md w-auto object-cover" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                )}

                                <div id="preloader-menu">
                                    <h6 className="mt-4 fw-semibold fs-lg">Preloader</h6>
                                    <p className="text-muted fs-sm">Choose a preloader.</p>
                                    <Row>
                                        <div className="col-4">
                                            <div className="form-check sidebar-setting card-radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="data-preloader"
                                                    id="preloader-view-custom"
                                                    value={PERLOADER_TYPES.ENABLE}
                                                    checked={preloader === PERLOADER_TYPES.ENABLE}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changePreLoader(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="preloader-view-custom">
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-light d-block p-1"></span>
                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <div className="spinner-border text-primary avatar-xxs m-auto" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <h5 className="fs-sm text-center fw-medium mt-2">Enable</h5>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check sidebar-setting card-radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="data-preloader"
                                                    id="preloader-view-none"
                                                    value={PERLOADER_TYPES.DISABLE}
                                                    checked={preloader === PERLOADER_TYPES.DISABLE}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            dispatch(changePreLoader(e.target.value));
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="preloader-view-none">
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-light d-block p-1"></span>
                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <h5 className="fs-sm text-center fw-medium mt-2">Disable</h5>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            </SimpleBar>
                </div>
                                   
                <div className="offcanvas-footer border-top p-3 text-center">
                    <Row>
                        <Col xs={6}>
                            <button type="button" className="btn btn-light w-100" id="reset-layout">Reset</button>
                        </Col>
                        <Col xs={6}>
                            <a href="#!" target="_blank" className="btn btn-primary w-100">Buy Now</a>
                        </Col>
                    </Row>
                </div>
            </Offcanvas>
        </React.Fragment>
    )
}

export default RightSidebar
