import React, { useState, useEffect, useRef } from 'react'
import { Accordion, Button, Card, Col, Collapse, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CreatableSelect from 'react-select/creatable';

// Import Images
import avatar1 from 'assets/images/users/32/avatar-1.jpg'
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'

import img2 from 'assets/images/small/img-2.jpg'
import img6 from 'assets/images/small/img-6.jpg'

//redux
import { useSelector, useDispatch } from "react-redux";
import { getMailDetails, deleteMail } from 'slices/thunk';

import classnames from "classnames";
import SimpleBar from 'simplebar-react';
import { ToastContainer } from "react-toastify";
import { createSelector } from 'reselect';

const Email = () => {
    document.title = "Email | Steex Admin & Dashboard Template";

    const dispatch = useDispatch();

    const selectMailboxData = createSelector(
        (state: any) => state.Mailbox.mailDetails,
        (state: any) => state.Mailbox.isLoader,
        (mailDetails, isLoader) => ({
            mailDetails,
            isLoader
        })
    );

    const { mailDetails, isLoader } = useSelector(selectMailboxData);

    useEffect(() => {
        dispatch(getMailDetails());
    }, [dispatch]);

    // Delete Email
    const removeEmail = () => {
        const element = document.querySelectorAll(".message-list li");
        const ele: any = document.getElementById("email-topbar-actions");
        const checkall: any = document.getElementById("checkall");
        element.forEach((element) => {

            if (element.classList.contains('active')) {
                var checkinput: any = element.querySelector('.form-check-input')
                var forId = checkinput.value;
                dispatch(deleteMail(forId));
            }
            var checkinput1: any = element.querySelector('.form-check-input')
            element.classList.remove("active");
            checkinput1.checked = false;

        });
        checkall.checked = false;
        ele.style.display = 'none';
    };

    // Checked All Email
    const checkedAll = () => {
        const checkall: any = document.getElementById("checkall");
        const element: any = document.querySelectorAll(".message-list li");
        const ele: any = document.getElementById("email-topbar-actions");
        ele.style.display = 'block';

        if (checkall.checked) {
            element.forEach((node: any) => {
                node.classList.add("active");
                node.firstChild.firstChild.firstChild.checked = true;
            });
        } else {
            ele.style.display = 'none';
            element.forEach((node: any) => {
                node.classList.remove("active");
                node.firstChild.firstChild.firstChild.checked = false;
            });
        }
    };
    const editorRef: any = useRef();
    const [mailList, setMailList] = useState<any>([]);
    const [activeTabs, setActive] = useState("all");
    const [isLabelTab, setIsLabelTab] = useState("");
    const [isTypeTab, setIsTypeTab] = useState("primary");
    const [displayCategory, setCategory] = useState("all");
    const [displaytype, settype] = useState("all");
    const [displaylabel, setLabel] = useState("all");
    const [composeModal, setComposeModal] = useState<boolean>(false);
    const [ccCollapse, setCcCollapse] = useState<boolean>(false);
    const [bccCollapse, setBccCollapse] = useState<boolean>(false);
    useEffect(() => {
        setMailList(mailDetails);
    }, [mailDetails]);

    const toggleTab = (ncategory: any, ntype: any, nlabel: any) => {
        var element: any = document.getElementById("mail-filter-navlist");
        if (ncategory === "all" || ncategory === "inbox") {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        if (activeTabs !== ncategory) {
            setActive(ncategory);
        }
        if (isLabelTab !== nlabel) {
            setIsLabelTab(nlabel);
        }
        if (isTypeTab !== ntype) {
            setIsTypeTab(ntype);
        }
        setCategory(ncategory);
        settype(ntype);
        setLabel(nlabel);
    };

    // SideBar Open
    function sidebarOpen(value: any, ele: any) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.add(value);
        ele.closest("li").classList.remove("unread");
    }

    // SideBar Close
    function sidebarClose(value: any) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.remove(value);
    }

    //mobile screen menu bar
    const [show, setShow] = useState(false);
    const menuBarRef: any = useRef(null);

    const handleToggleMenuBar = () => {
        setShow(!show);
    };

    const handleClickOutside = (event: any) => {
        if (menuBarRef.current && !menuBarRef.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const element = document.getElementById('email-menu-sidebar');
        if (element) {
            if (show) {
                element.classList.add('menubar-show');
            } else {
                element.classList.remove('menubar-show');
            }
        }
    }, [show]);

    // Chat Box
    const chatBox = (value: any) => {
        const element: any = document.getElementById("emailchat-detailElem");
        element.style.display = value;
    };

    const [modal, setModal] = useState<any>(false);

    const toggle = () => {
        if (modal) {
            setModal(false);
        } else {
            setModal(true);
        }
    };

    // delete button toggle
    const onChangeCheckBox = (value: any, check: any) => {
        const element: any = document.getElementById("email-topbar-actions");
        const checkedCount = document.querySelectorAll('.checkbox-wrapper-mail input:checked').length;
        const activeList: any = document.getElementById(value);

        if (checkedCount >= 1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }

        if (check) {
            activeList.classList.add("active");
        } else {
            activeList.classList.remove("active");
        }
    };

    // Mark all as Read
    const readAll = () => {

        if (document.querySelectorAll(".message-list li.unread").length === 0) {
            (document.getElementById("unreadConversations") as HTMLElement).style.display = "block";
            setTimeout(function () { (document.getElementById("unreadConversations") as HTMLElement).style.display = "none"; }, 1000);
        }

        document.querySelectorAll(".message-list li.unread").forEach(function (element) {
            if (element.classList.contains("unread")) { element.classList.remove("unread"); }
        });
    };

    const chatData = [
        { id: 1, img: avatar2, name: "Scott Median", caption: "Hello ! are you there?" },
        { id: 2, img: avatar4, name: "Julian Rosa", caption: "What about our next.." },
        { id: 3, img: avatar3, name: "David Medina", caption: "Yeah everything is fine" },
        { id: 4, img: avatar5, name: "Jay Baker", caption: "Wow that's great" },
    ];

    const [info, setInfo] = useState<any>(chatData[0]);

    const [emailinfo, setEmailinfo] = useState<any>([]);

    // delete order
    const [deleteModal, setDeleteModal] = useState<boolean>(false);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.editor
                .create(document.querySelector('#editor'), {
                    // Configuration options
                    // ...
                })
                .then((editor: any) => {
                    // Editor instance is created successfully
                    editorRef.current = editor;
                })
                .catch((error: any) => {
                    // Handle initialization error
                });
        }
    }, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="email-wrapper d-lg-flex gap-1 mx-n3 mt-n3 p-1">
                        <div className="email-panel p-3 pt-4 d-none d-lg-flex flex-column">
                            <div className="text-center">
                                <Link to="#!" className="btn btn-icon btn-primary btn-sm fs-lg toggle-email-panel"><i className="ph-list"></i></Link>
                            </div>

                            <div className="panel-list mt-3">
                                <Link to="#" className="active"><i className="bi bi-envelope"></i><span>Email</span></Link>
                                <Link to={"/apps-chat"}><i className="bi bi-chat-dots"></i> <span>Chat</span></Link>
                                <Link to={"/apps-chat"}><i className="bi bi-camera-video"></i> <span>Meet</span></Link>
                                <Link to="/apps-file-manager"><i className="bi bi-database"></i> <span>Storage</span></Link>
                            </div>
                            <div className="text-center mt-auto">
                                <Dropdown className="mail-user-dropdown">
                                    <Dropdown.Toggle as='a' bsPrefix="d-inline-block">
                                        <img src={avatar1} alt="" className="avatar-xs rounded mail-profile-img" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' className="active">
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src={avatar1} alt="" className="avatar-xxs rounded-circle mail-user-img" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0">everett@themesbrand.com</p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item as='li'>
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src={avatar3} alt="" className="avatar-xxs rounded-circle mail-user-img" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0">johnny@themesbrand.com</p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item as='li'>
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src={avatar5} alt="" className="avatar-xxs rounded-circle mail-user-img" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0">michelle@themesbrand.com</p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="email-menu-sidebar" id="email-menu-sidebar" ref={menuBarRef}>
                            <div className="p-4 d-flex flex-column h-100">
                                <div className="pb-3">
                                    <Button className="btn-subtle-primary w-100" onClick={() => setComposeModal(true)}><i className="bi bi-plus-lg me-1 align-baseline"></i> Compose</Button>
                                </div>

                                <SimpleBar className="mx-n4 px-4 email-menu-sidebar-scroll simplebar-scrollable-y" data-simplebar="init">
                                    <div className="mail-list mt-3">
                                        <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                            <i className="bi bi-envelope me-3 align-baseline"></i>
                                            <span className="mail-list-link">All{" "}</span>
                                            <span className="badge bg-secondary-subtle text-secondary ms-auto  ">5</span>
                                        </Link>
                                        <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                            <i className="bi bi-archive me-3 align-baseline"></i>
                                            <span className="mail-list-link">Inbox {" "}</span>
                                            <span className="badge bg-secondary-subtle text-secondary ms-auto">5</span>
                                        </Link>
                                        <Link to="#" onClick={() => { toggleTab("sent", "all", "all"); }} className={activeTabs === "sent" ? "active" : " "}>
                                            <i className="bi bi-send me-3 align-baseline"></i>
                                            <span className="mail-list-link">Sent</span>
                                        </Link>
                                        <Link to="#" onClick={() => { toggleTab("draft", "all", "all"); }} className={activeTabs === "draft" ? "active" : " "}>
                                            <i className="bi bi-pencil-square me-3 align-baseline"></i>
                                            <span className="mail-list-link">Draft</span>
                                        </Link>
                                        <Link to="#" onClick={() => { toggleTab("spam", "all", "all"); }} className={activeTabs === "spam" ? "active" : " "}>
                                            <i className="bi bi-exclamation-diamond me-3 align-baseline"></i>
                                            <span className="mail-list-link">Spam</span>
                                        </Link>
                                        <Link to="#" onClick={() => { toggleTab("trash", "all", "all"); }} className={activeTabs === "trash" ? "active" : " "}>
                                            <i className="bi bi-trash3 me-3 align-baseline"></i>
                                            <span className="mail-list-link">Trash</span>
                                        </Link>
                                        <Link to="#" onClick={() => { toggleTab("starred", "all", "all"); }} className={activeTabs === "starred" ? "active" : " "}>
                                            <i className="bi bi-bookmark-star me-3 align-baseline"></i>
                                            <span className="mail-list-link">Starred</span>
                                        </Link>
                                        <Link to="#" onClick={() => { toggleTab("important", "all", "all"); }} className={activeTabs === "important" ? "active" : " "}>
                                            <i className="bi bi-tags me-3 align-baseline"></i>
                                            <span className="mail-list-link">Important</span>
                                        </Link>
                                    </div>

                                    <div>
                                        <h5 className="fs-xs text-uppercase text-muted mt-4">Labels</h5>
                                        <div className="mail-list mt-1">
                                            <Link to="#" onClick={() => { toggleTab("all", "all", "support"); }} className={isLabelTab === "support" ? "active" : " "}>
                                                <span className="ri-checkbox-blank-circle-line me-2 text-info"></span>{" "}
                                                <span className="mail-list-link" data-type="label">Support{" "}</span>
                                                <span className="badge bg-secondary-subtle text-secondary ms-auto">3</span>
                                            </Link>
                                            <Link to="#" onClick={() => { toggleTab("all", "all", "freelance"); }} className={isLabelTab === "freelance" ? "active" : " "}>
                                                <span className="ri-checkbox-blank-circle-line me-2 text-warning"></span>{" "}
                                                <span className="mail-list-link" data-type="label">Freelance{" "}</span>
                                            </Link>
                                            <Link to="#" onClick={() => { toggleTab("all", "all", "social"); }} className={isLabelTab === "social" ? "active" : " "}>
                                                <span className="ri-checkbox-blank-circle-line me-2 text-primary"></span>{" "}
                                                <span className="mail-list-link" data-type="label">Social{" "}</span>
                                            </Link>
                                            <Link to="#" onClick={() => { toggleTab("all", "all", "friend"); }} className={isLabelTab === "friend" ? "active" : " "}>
                                                <span className="ri-checkbox-blank-circle-line me-2 text-danger"></span>{" "}
                                                <span className="mail-list-link" data-type="label">Friends{" "}</span>
                                                <span className="badge bg-secondary-subtle text-secondary ms-auto">2</span>
                                            </Link>
                                            <Link to="#" onClick={() => { toggleTab("all", "all", "family"); }} className={isLabelTab === "family" ? "active" : " "}>
                                                <span className="ri-checkbox-blank-circle-line me-2 text-success"></span>{" "}
                                                <span className="mail-list-link" data-type="label">Family{" "}</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-top border-top-dashed pt-3 mt-3">
                                        <Link to="#" className="btn btn-icon btn-sm btn-subtle-info btn-rounded float-end"><i className="bx bx-plus fs-lg"></i></Link>
                                        <h5 className="fs-xs text-uppercase text-muted mb-4">Chat</h5>

                                        <div className="mt-2 vstack email-chat-list mx-n4">
                                            {chatData.map((item: any, key: any) => (
                                                <Link to="#" className={info.name === item.name ? 'd-flex align-items-center active' : "d-flex align-items-center"} key={key}>
                                                    <div className="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                                        <img className="img-fluid rounded-circle" src={item.img} alt="" />
                                                    </div>
                                                    <div className="flex-grow-1 chat-user-box overflow-hidden" onClick={() => { chatBox("block"); setInfo(item) }}>
                                                        <h5 className="fs-sm text-truncate mb-0 chatlist-user-name">{item.name}</h5>
                                                        <small className="fs-xs text-muted text-truncate mb-0">{item.caption}</small>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </SimpleBar>
                            </div>
                        </div>

                        <div className="email-content">
                            <div className="p-4 pb-0">
                                <div className="border-bottom border-bottom-dashed">
                                    <Row className="mb-3 mb-sm-0 align-items-center g-3">
                                        <Col lg={5} className="me-auto">
                                            <div className="search-box">
                                                <input type="text" className="form-control border-0" id="searchResultList" placeholder="Search here..." />
                                                <i className="bi bi-search search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-lg-auto">
                                            <div className="d-flex gap-sm-1 email-topbar-link">
                                                <Button onClick={handleToggleMenuBar} className="btn-subtle-success btn-icon btn-sm fs-lg email-menu-btn d-block d-lg-none">
                                                    <i className="ri-menu-2-fill align-bottom"></i>
                                                </Button>
                                                <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg ms-auto">
                                                    <i className="bi bi-arrow-clockwise"></i>
                                                </Button>
                                                <Dropdown>
                                                    <Dropdown.Toggle bsPrefix="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                        <i className="bi bi-three-dots-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <Dropdown.Item href="#">Mark as Unread</Dropdown.Item>
                                                        <Dropdown.Item href="#">Mark as Important</Dropdown.Item>
                                                        <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
                                                        <Dropdown.Item href="#">Add Star</Dropdown.Item>
                                                        <Dropdown.Item href="#">Mute</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Row>

                                    <div className="px-3">
                                        <Col>
                                            <div id="mail-filter-navlist"></div>
                                        </Col>
                                        <Row className="align-items-center mt-3 mb-2 d-flex">
                                            <Col className="col">
                                                <div className="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link ms-1">
                                                    <div className="form-check fs-md m-0">
                                                        <input className="form-check-input" type="checkbox" value="" id="checkall" onChange={() => { checkedAll() }} />
                                                        <label className="form-check-label" htmlFor="checkall"></label>
                                                    </div>
                                                    <div id="email-topbar-actions" style={{ display: "none" }}>
                                                        <div className="hstack gap-sm-1 align-items-center flex-wrap">
                                                            <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                                <i className="bi bi-inbox"></i>
                                                            </Button>
                                                            <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                                <i className="bi bi-exclamation-triangle"></i>
                                                            </Button>
                                                            <div data-bs-toggle="tooltip">
                                                                <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg" onClick={() => { setDeleteModal(true); }}>
                                                                    <i className="bi bi-trash3"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vr align-self-center mx-2"></div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle bsPrefix="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                            <i className="bi bi-tag"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">Support</Dropdown.Item>
                                                            <Dropdown.Item href="#">Freelance</Dropdown.Item>
                                                            <Dropdown.Item href="#">Social</Dropdown.Item>
                                                            <Dropdown.Item href="#">Friends</Dropdown.Item>
                                                            <Dropdown.Item href="#">Family</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <Dropdown>
                                                        <Dropdown.Toggle bsPrefix="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end">
                                                            <Dropdown.Item href="#" id="mark-all-read" onClick={() => readAll()}>Mark all as Read</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div className="alert alert-warning alert-dismissible unreadConversations-alert px-4 fade show " id="unreadConversations" role="alert">
                                                        No Unread Conversations
                                                    </div>
                                                </div>
                                            </Col>
                                            <div className="col-auto">
                                                <div className="text-muted mb-0">1-50 of 154</div>
                                            </div>
                                        </Row>
                                    </div>
                                </div>

                                <div>
                                    <div className="mail-primary">
                                        <div className="message-list-content mx-n4 px-4 message-list-scroll">
                                            {isLoader ? <div id="elmLoader">
                                                <div className="spinner-border text-primary avatar-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div> :
                                                <ul className="message-list" id="mail-list">
                                                    {mailList.filter(({ category, type, label }: any) => displayCategory === category || (displayCategory === "all" && (displaytype === type || displaytype === 'all') && (displaylabel === label || displaylabel === 'all'))).map((item: any, key: any) => (
                                                        <li className={item.unread ? "unread" : " "} key={key} id={item.forId}>
                                                            <div className="col-mail col-mail-1">
                                                                <div className="form-check checkbox-wrapper-mail fs-md">
                                                                    <input
                                                                        onChange={(e) => {
                                                                            onChangeCheckBox(e.target.value, e.target.checked);
                                                                        }}
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        value={item.forId}
                                                                        id={item.forId}
                                                                    />
                                                                    <label className="form-check-label" htmlFor={item.forId}></label>
                                                                </div>
                                                                <Link to="#" type="button" className="btn avatar-xs p-0 favorite-btn fs-md">
                                                                    <i className='ri-star-fill' />
                                                                </Link>
                                                                <Link to="#" className="title" onClick={(e) => { sidebarOpen("email-detail-show", e.target); setEmailinfo(item); }}>{item.name} {" "} {item.number}</Link>
                                                            </div>
                                                            <div className="col-mail col-mail-2" onClick={(e) => { sidebarOpen("email-detail-show", e.target); setEmailinfo(item); }}>
                                                                <Link to="#" className="subject"> {item.badge ? <span className={"badge me-2 bg-" + item.badgeClass}>{item.badge}</span> : null} {item.subject} - <span className="teaser">{item.teaser}</span>
                                                                </Link>
                                                                <div className="date">{item.date}</div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="email-detail-content">
                            <div className="p-4 d-flex flex-column h-100">
                                <div className="pb-4 border-bottom border-bottom-dashed">
                                    <Row>
                                        <Col>
                                            <div className="">
                                                <Button className="btn-subtle-danger btn-icon btn-sm fs-lg close-btn-email" id="close-btn-email" onClick={() => sidebarClose("email-detail-show")}>
                                                    <i className="ri-close-fill align-bottom"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col className="col-auto">
                                            <div className="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                                <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                    <i className="ri-printer-fill align-bottom"></i>
                                                </Button>
                                                <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg remove-mail" onClick={() => { setDeleteModal(true); }}>
                                                    <i className="ri-delete-bin-5-fill align-bottom"></i>
                                                </Button>
                                                <Dropdown>
                                                    <Dropdown.Toggle className="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                        <i className="ri-more-2-fill align-bottom"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <Dropdown.Item href="#">Mark as Unread</Dropdown.Item>
                                                        <Dropdown.Item href="#">Mark as Important</Dropdown.Item>
                                                        <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
                                                        <Dropdown.Item href="#">Add Star</Dropdown.Item>
                                                        <Dropdown.Item href="#">Mute</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <SimpleBar className="mx-n4 px-4 email-detail-content-scroll" data-simplebar="init">
                                    <div className="mt-4 mb-3">
                                        <h5 className="fw-bold email-subject-title">{emailinfo.subject}</h5>
                                    </div>

                                    <Accordion defaultActiveKey='0' className="accordion-flush accordion-arrow-none" >
                                        <Accordion.Item eventKey="0" className="border-dashed left">
                                            <Accordion.Header>
                                                <Link role="button" className="btn w-100 text-start px-0 bg-transparent shadow-none collapsed" to="#email-collapseOne">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <img src={emailinfo.img} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-md text-truncate email-user-name mb-0">{emailinfo.name}</h5>
                                                            <div className="text-truncate fs-xs">to: me</div>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start">
                                                            <div className="text-muted fs-xs">09 Jan 2022, 11:12 AM</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Accordion.Body className="text-body px-0">
                                                    <div>
                                                        <p>Hi,</p>
                                                        <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor.</p>
                                                        <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices.</p>
                                                        <p>Sincerly,</p>

                                                        <div className="d-flex gap-3">
                                                            <div className="border rounded avatar-xl h-auto">
                                                                <img src={img2} alt="" className="img-fluid rouned-top" />
                                                                <div className="py-2 text-center">
                                                                    <Link to="" className="d-block fw-semibold">Download</Link>
                                                                </div>
                                                            </div>
                                                            <div className="border rounded avatar-xl h-auto">
                                                                <img src={img6} alt="" className="img-fluid rouned-top" />
                                                                <div className="py-2 text-center">
                                                                    <Link to="" className="d-block fw-semibold">Download</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1' className="border-dashed right">
                                            <Accordion.Header>
                                                <Link role="button" className="btn w-100 text-start px-0 bg-transparent shadow-none collapsed" to="#email-collapseTwo">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <img src={avatar1} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-md text-truncate email-user-name-right mb-0">Richard Marshall</h5>
                                                            <div className="text-truncate fs-xs">to: jackdavis@email.com</div>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start">
                                                            <div className="text-muted fs-xs">09 Jan 2022, 02:15 PM</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Accordion.Header>

                                            <Accordion.Body className="text-body px-0">
                                                <div>
                                                    <p>Hi,</p>
                                                    <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                                    <p>Thank you</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey='2' className="border-dashed left">
                                            <Accordion.Header>
                                                <Link role="button" className="btn w-100 text-start px-0 bg-transparent shadow-none" to="#email-collapseThree">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <img src={emailinfo.img} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-md text-truncate email-user-name mb-0">{emailinfo.name}</h5>
                                                            <div className="text-truncate fs-xs">to: me</div>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start">
                                                            <div className="text-muted fs-xs">10 Jan 2022, 10:08 AM</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Accordion.Header>

                                            <Accordion.Body className="text-body px-0">
                                                <div>
                                                    <p>Hi,</p>
                                                    <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar pronunciation.</p>
                                                    <p>Thank you</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </SimpleBar>

                                <div className="mt-auto">
                                    <form className="mt-2">
                                        <div>
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Reply :</label>
                                            <textarea className="form-control border-bottom-0 rounded-top rounded-0 border" id="exampleFormControlTextarea1" placeholder="Enter message"></textarea>
                                            <div className="bg-light px-2 py-1 rouned-bottom border">
                                                <Row>
                                                    <Col>
                                                        <div className="btn-group" role="group">
                                                            <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Bold" data-bs-original-title="Bold"><i className="ri-bold align-bottom"></i></Button>
                                                            <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Italic" data-bs-original-title="Italic"><i className="ri-italic align-bottom"></i></Button>
                                                            <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Link" data-bs-original-title="Link"><i className="ri-link align-bottom"></i></Button>
                                                            <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Image" data-bs-original-title="Image"><i className="ri-image-2-line align-bottom"></i></Button>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-auto">
                                                        <div className="btn-group">
                                                            <Button className="btn-sm btn-success"><i className="ri-send-plane-2-fill align-bottom"></i></Button>
                                                            <Button className="btn-sm btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span className="visually-hidden">Toggle Dropdown</span>
                                                            </Button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><Link className="dropdown-item" to="#"><i className="ri-timer-line text-muted me-1 align-bottom"></i> Schedule Send</Link></li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="email-chat-detail" id="emailchat-detailElem" style={{ display: "block" }}>
                        <Card className="mb-0 overflow-hidden">
                            <Card.Header className="align-items-center d-flex bg-primary text-white-50 p-3">
                                <div className="flex-grow-1">
                                    <h5 className="fs-md text-white profile-username">{info.name || "Scott Median"}</h5>
                                    <p className="mb-0 fs-sm lh-1">Active</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="mt-n1">
                                        <Button type="button" className="btn-link btn-icon btn-sm text-white fs-lg text-decoration-none rounded-circle bg-white bg-opacity-10" id="emailchat-btn-close" onClick={() => chatBox("none")}><i className="ri-close-fill"></i></Button>
                                    </div>
                                </div>
                            </Card.Header>

                            <Card.Body className="p-0">
                                <div id="users-chat">
                                    <SimpleBar className="chat-conversation p-3" id="chat-conversation" data-simplebar style={{ height: "250px" }}>
                                        <ul className="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                            <li className="chat-list left">
                                                <div className="conversation-list">
                                                    <div className="chat-avatar">
                                                        <img src={info.img || avatar2} alt="" />
                                                    </div>
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Good morning 😊</p>
                                                            </div>

                                                            <Dropdown className="align-self-start message-box-drop curser-pointer">
                                                                <Dropdown.Toggle as='ul'>
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                    <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                    <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:07 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-list right">
                                                <div className="conversation-list">
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Good morning, How are you? What about our next meeting?</p>
                                                            </div>
                                                            <Dropdown className="align-self-start message-box-drop curser-pointer">
                                                                <Dropdown.Toggle as='ul'>
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                    <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                    <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:08 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-list left">
                                                <div className="conversation-list">
                                                    <div className="chat-avatar">
                                                        <img src={info.img || avatar2} alt="" />
                                                    </div>
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                                                            </div>

                                                            <Dropdown className="align-self-start message-box-drop curser-pointer">
                                                                <Dropdown.Toggle as='ul'>
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                    <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                    <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:10 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-list right">
                                                <div className="conversation-list">
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Wow that's great</p>
                                                            </div>
                                                            <Dropdown className="align-self-start message-box-drop curser-pointer">
                                                                <Dropdown.Toggle as='ul'>
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                    <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                    <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:12 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                </div>

                                <div className="border-top border-top-dashed">
                                    <Row className="g-2 mx-3 mt-2 mb-3">
                                        <Col>
                                            <div className="position-relative">
                                                <input type="text" className="form-control border-light bg-light" placeholder="Enter Message..." />
                                            </div>
                                        </Col>
                                        <div className="col-auto">
                                            <Button variant='secondary' type="submit"><i className="mdi mdi-send"></i></Button>
                                        </div>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* <!-- removeItemModal --> */}
                    <Modal show={deleteModal} onHide={toggle} id="removeItemModal" className="fade zoomIn" dialogClassName="modal-dialog-centered">
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <div className="mt-2 text-center">
                                <div className="text-danger display-5">
                                    <i className="bi bi-trash3"></i>
                                </div>
                                <div className="mt-4 pt-2 fs-lg mx-4 mx-sm-5">
                                    <h4>Are you Sure ?</h4>
                                    <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                <Button type="button" className="w-sm btn-light" data-bs-dismiss="modal"
                                    onClick={() => {
                                        setDeleteModal(false);
                                    }}>Close</Button>
                                <Button type="button" className="w-sm btn-danger" id="delete-record"
                                    onClick={() => {
                                        removeEmail();
                                        setDeleteModal(false);
                                    }} >Yes, Delete It!</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>

            <Modal show={composeModal} onHide={() => setComposeModal(false)}>
                <Modal.Header className="p-3 bg-light" closeButton>
                    <Modal.Title as="h5" id="composemodalTitle">New Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='mb-3 position-relative'>
                            <CreatableSelect isMulti />
                            <div className="position-absolute top-0 end-0">
                                <div className="d-flex">
                                    <button className="btn btn-link text-reset fw-semibold px-2" type="button" onClick={() => setCcCollapse(!ccCollapse)}>
                                        Cc
                                    </button>
                                    <button className="btn btn-link text-reset fw-semibold px-2" type="button" onClick={() => setBccCollapse(!bccCollapse)}>
                                        Bcc
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Collapse in={ccCollapse}>
                            <div className="mb-3">
                                <label>Cc:</label>
                                <Form.Control type="text" placeholder="Cc recipients" />
                            </div>
                        </Collapse>
                        <Collapse in={bccCollapse}>
                            <div className="mb-3">
                                <label>Bcc:</label>
                                <Form.Control type="text" placeholder="Bcc recipients" />
                            </div>
                        </Collapse>
                        <div className="mb-3">
                            <Form.Control type="text" placeholder="Subject" />
                        </div>
                        {/* <div className="ck-editor-reverse">
                            <div id="email-editor"></div>
                        </div> */}
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={(editor: any) => {
                                // You can store the "editor" and use it when needed.
                                editorRef.current = editor;
                                console.log('Editor is ready to use!', editor);
                            }}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-ghost-danger" data-bs-dismiss="modal" onClick={() => setComposeModal(false)}>Discard</button>

                    <div className="btn-group">
                        <button type="button" className="btn btn-success">Send</button>
                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#"><i className="ri-timer-line text-muted me-1 align-bottom"></i> Schedule Send</a></li>
                        </ul>
                    </div>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </React.Fragment >
    );
};

export default Email;
