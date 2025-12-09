import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Modal, Row, Col, Button } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import listPlugin from '@fullcalendar/list';
import Flatpickr from "react-flatpickr";

import * as Yup from "yup";
import { useFormik } from "formik";

import UpcommingEvents from './UpcommingEvents';

//redux
import { useSelector, useDispatch } from "react-redux";

import {
    getEvents as onGetEvents,
    getCategories as onGetCategories,
    addNewEvent as onAddNewEvent,
    deleteEvent as onDeleteEvent,
    updateEvent as onUpdateEvent,
    resetCalendar,
} from "../../slices/thunk";
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';

const Calendar = () => {
    document.title = "Calendar | Steex Admin & Dashboard Template";

    const dispatch: any = useDispatch();
    const [event, setEvent] = useState<any>({});
    const [modal, setModal] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<any>(0);
    const [selectedNewDay, setSelectedNewDay] = useState<any>(0);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isEditButton, setIsEditButton] = useState<boolean>(true);
    const [upcommingevents, setUpcommingevents] = useState<any>([]);

    const selectCalendar = createSelector(
        (state: any) => state.Calendar,
        (calendar) => ({
            events: calendar.events,
            categories: calendar.categories,
            isEventUpdated: calendar.isEventUpdated,
        })
    );

    const { events, categories, isEventUpdated } = useSelector(selectCalendar);

    useEffect(() => {
        dispatch(onGetEvents());
        dispatch(onGetCategories());
        const externalEvents = document.getElementById("external-events") as HTMLElement;
        new Draggable(externalEvents, {
            itemSelector: ".external-event",
        });
    }, [dispatch]);

    useEffect(() => {
        setUpcommingevents(events);
        upcommingevents.slice().sort(function (o1: any, o2: any) {
            return Math.abs(new Date(o1.start).getTime() - new Date(o2.start).getTime());
        });
    }, [events, upcommingevents]);

    useEffect(() => {
        if (isEventUpdated) {
            setIsEdit(false);
            setEvent({});
            setTimeout(() => {
                dispatch(resetCalendar(false));
            }, 500);
        }
    }, [dispatch, isEventUpdated]);

    // Handling the modal state
    const toggle = () => {
        if (modal) {
            setModal(false);
            setEvent(null);
            setIsEdit(false);
            setIsEditButton(true);
        } else {
            setModal(true);
        }
    };

    // Handling date click on calendar
    const handleDateClick = (arg: any) => {
        const date = arg["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const modifiedData = { ...arg, date: modifiedDate };

        setSelectedNewDay(date);
        setSelectedDay(modifiedData);
        toggle();
    };

    const str_dt = function formatDate(date: any) {
        var monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var d = new Date(date),
            month = "" + monthNames[d.getMonth()],
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [day + " " + month, year].join(",");
    };

    const str_ti = (params: any) => {
        let hours = params.getHours();
        let minutes = params.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };

    const date_r = function formatDate(date: any) {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    };

    const [deleteEvent, setDeleteEvent] = useState<any>('');

    // Handling click on event on calendar
    const handleEventClick = (arg: any) => {
        const event = arg.event;

        const st_date = event.start;
        const ed_date = event.end;

        const r_date =
            ed_date == null ? str_dt(st_date) : str_dt(st_date) + " to " + str_dt(ed_date);

        const er_date =
            ed_date == null
                ? date_r(st_date)
                : date_r(st_date) + " to " + date_r(ed_date);

        const r_time =
            ed_date == null ? "All Day" : str_ti(st_date) + " to " + str_ti(ed_date);

        setEvent({
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            className: event.classNames,
            category: event.classNames[0],
            location: event._def.extendedProps.location,
            description: event._def.extendedProps.description,
            defaultDate: er_date,
            datetag: r_date,
            timetag: r_time
        });
        setDeleteEvent(event.id)

        setIsEdit(true);
        setIsEditButton(true);
        toggle();
    };

    // On delete event
    const handleDeleteEvent = () => {
        if (deleteEvent) {
            dispatch(onDeleteEvent(deleteEvent));
            toggle();
        }
    };

    // events validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: (event && event.title) || "",
            category: (event && event.category) || "bg-warning-subtle",
            location: (event && event.location) || "No Location",
            description: (event && event.description) || "No Description",
            defaultDate: (event && event.defaultDate) || [],
            datetag: (event && event.datetag) || "",
        },

        validationSchema: Yup.object({
            // title: Yup.string().required("Please Enter Customer Name"),
            // category: Yup.string().required("Please Select Your Category"),
            // location: Yup.string().required("Please Add location"),
            // description: Yup.string().required("Please Add description"),
            title: Yup.string().required("Please Enter Your Event Name"),
            category: Yup.string().required("Please Select Your Category"),
            location: Yup.string().required("Please Enter Your Location"),
            description: Yup.string().required("Please Enter Your Description"),
            // start: Yup.date().required('Start Time is required'),
            // end: Yup.date().required('End Time is required'),
            defaultDate: Yup.array().of(Yup.date()).required('Date range is required').min(2, 'Select at least two dates'),
        }),
        onSubmit: (values) => {
            var updatedDay: any = "";
            if (selectedNewDay) {
                updatedDay = new Date(selectedNewDay[1]);
                updatedDay.setDate(updatedDay.getDate() + 1);
            }

            if (isEdit) {
                const updateEvent = {
                    id: event.id,
                    title: values.title,
                    className: values.category,
                    start: selectedNewDay ? selectedNewDay[0] : event.start,
                    end: selectedNewDay ? updatedDay : event.end,
                    location: values.location,
                    description: values.description,
                };
                // update event
                dispatch(onUpdateEvent(updateEvent));
                validation.resetForm();
            } else {
                const newEvent = {
                    id: Math.floor(Math.random() * 100),
                    title: values["title"],
                    start: selectedDay ? selectedNewDay[0] : new Date(),
                    end: selectedDay ? updatedDay : new Date(),
                    className: values.category,
                    location: values["location"],
                    description: values["description"],
                };
                // save new event
                dispatch(onAddNewEvent(newEvent));
                validation.resetForm();
            }
            setSelectedDay(null);
            setSelectedNewDay(null);
            toggle();
        },
    });

    const submitOtherEvent = () => {
        document.getElementById("form-event")?.classList.remove("view-event");

        document.getElementById("btn-edit-event")?.classList.replace("d-none", "d-block");

        document.getElementById("cancel-event-btn")?.classList.replace("d-none", "d-inline");
        document.getElementById("edit-event-btn")?.classList.replace("d-inline", "d-none");

        document.getElementById("event-title")?.classList.replace("d-none", "d-block");
        document.getElementById("event-category")?.classList.replace("d-none", "d-block");
        (document.getElementById("event-start-date")?.parentNode as HTMLElement).classList.remove("d-none");
        document.getElementById("event-start-date")?.classList.replace("d-none", "d-block");
        document.getElementById("event-location")?.classList.replace("d-none", "d-block")
        document.getElementById("event-timepicker1-tag")?.classList.replace("d-none", "d-block")
        document.getElementById("event-description")?.classList.replace("d-none", "d-block");
        document.getElementById("event-start-date-tag")?.classList.replace("d-block", "d-none");
        document.getElementById("event-location-tag")?.classList.replace("d-block", "d-none");
        document.getElementById("event-description-tag")?.classList.replace("d-block", "d-none");

        setIsEditButton(true);
    };

    /**
    * On category darg event
    */
    const onDrag = (event: any) => {
        event.preventDefault();
    };

    // On calendar drop event
    const onDrop = (event: any) => {
        const date = event["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const draggedEl = event.draggedEl;
        const draggedElclass = draggedEl.className;
        const color = draggedEl && draggedEl.getAttribute('data-color');
        if (
            draggedEl.classList.contains("external-event") &&
            draggedElclass.indexOf("fc-event-draggable") === -1
        ) {
            const modifiedData = {
                id: Math.floor(Math.random() * 1000),
                title: draggedEl.innerText,
                start: modifiedDate,
                className: "bg-" + color + "-subtle",
            };
            dispatch(onAddNewEvent(modifiedData));
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <div className='calendar-wrapper d-xl-flex gap-4'>
                        <div className="w-100">
                            <Card className="card-h-100">
                                <div id="calendar">
                                    <FullCalendar
                                        plugins={[
                                            BootstrapTheme,
                                            dayGridPlugin,
                                            interactionPlugin,
                                            listPlugin
                                        ]}
                                        initialView="dayGridMonth"
                                        slotDuration={"00:15:00"}
                                        handleWindowResize={true}
                                        themeSystem="bootstrap"
                                        headerToolbar={{
                                            left: 'prev,next today',
                                            center: "title",
                                            right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                                        }}
                                        events={events}
                                        editable={true}
                                        droppable={true}
                                        selectable={true}
                                        dateClick={handleDateClick}
                                        eventClick={handleEventClick}
                                        drop={onDrop}
                                    />
                                </div>
                            </Card>
                        </div>
                        <Card className="mb-0 calendar-event-card">
                            <Card.Body>
                                <Button variant='primary' className="w-100 mb-4" id='btn-new-event' onClick={toggle}><i className="mdi mdi-plus"></i> Create New Event</Button>
                                <UpcommingEvents
                                    categories={categories}
                                    onDrag={onDrag}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>

            <Modal show={modal} id="event-modal" onHide={toggle} centered>
                <Modal.Header className="p-3 bg-info-subtle" closeButton>
                    <Modal.Title>
                        {!!isEdit ? (event.title || "Edit Event") : "Add Event"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form className={!!isEdit ? "needs-validation view-event" : "needs-validation"} name="event-form" id="form-event"
                        onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                        {!!isEdit ? (<div className="text-end">
                            <Link to="#" className="btn btn-sm btn-subtle-primary d-inline" id="edit-event-btn" onClick={(e) => { e.preventDefault(); submitOtherEvent(); return false; }} > Edit </Link>
                            <Link to="#" className="btn btn-sm btn-subtle-primary d-none" id="cancel-event-btn" onClick={() => setModal(false)} > Cancel </Link>
                        </div>) : null}

                        <div className="event-details">
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1 d-flex align-items-center">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="ri-calendar-event-line text-muted fs-lg"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="d-block fw-semibold mb-0" id="event-start-date-tag">
                                            {event ? event.datetag : ""}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-3">
                                    <i className="ri-time-line text-muted fs-lg"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="d-block fw-semibold mb-0"> <span id="event-timepicker1-tag">{event ? event.timetag : " "}</span></h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-3">
                                    <i className="ri-map-pin-line text-muted fs-lg"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="d-block fw-semibold mb-0">
                                        {" "}
                                        <span id="event-location-tag">
                                            {event && event.location !== undefined ? event.location : "No Location"}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0 me-3">
                                    <i className="ri-discuss-line text-muted fs-lg"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <p
                                        className="d-block text-muted mb-0"
                                        id="event-description-tag"
                                    >
                                        {event && event.description !== undefined ? event.description : "No Description"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Row className="event-form">
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Type</Form.Label>
                                    <Form.Select
                                        className={!!isEdit ? "form-select d-none" : "form-select d-block"}
                                        id="event-category"
                                        name="category"
                                        value={validation.values.category || ""}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        isInvalid={!!validation.errors.category}
                                    >
                                        <option value="bg-info-subtle">Info</option>
                                        <option value="bg-warning-subtle">Warning</option>
                                        <option value="bg-success-subtle">Success</option>
                                        <option value="bg-danger-subtle">Danger</option>
                                    </Form.Select>
                                    {validation.touched.category && validation.errors.category ? (
                                        <Form.Control.Feedback type="invalid" className='d-block'> {validation.errors.category}
                                        </Form.Control.Feedback>) : null}
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Event Name</Form.Label>
                                    <Form.Control className={!!isEdit ? "form-control d-none" : "form-control d-block"} placeholder="Enter Event name" type="text" name="title" id="event-title" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.title || ""}
                                        isInvalid={validation.touched.title && validation.errors.title ? true : false} />
                                    {validation.touched.title && validation.errors.title ? (<Form.Control.Feedback type="invalid">{validation.errors.title}</Form.Control.Feedback>) : null}
                                </div>
                            </Col>

                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label>Event Date</Form.Label>
                                    <div className={!!isEdit ? "input-group d-none" : "input-group"}>
                                        <Flatpickr
                                            className="form-control"
                                            data-enable-time
                                            id="event-start-date"
                                            name="defaultDate"
                                            placeholder="Select Date"
                                            value={validation.values.defaultDate || ""}
                                            options={{
                                                mode: "range",
                                                dateFormat: "Y-m-d",
                                            }}
                                            onChange={(date: any) => {
                                                setSelectedNewDay(date);
                                                validation.setFieldValue('defaultDate', date);
                                            }}
                                        />
                                        <span className="input-group-text"> <i className="ri-calendar-event-line"></i> </span>
                                    </div>
                                    {validation.touched.defaultDate && validation.errors.defaultDate ? (
                                        <Form.Control.Feedback type="invalid" className='d-block'>{validation.errors.defaultDate}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            {!!isEdit &&
                                <>
                                    <Col xs={6} className={!!isEdit ? "d-none" : ""}>
                                        <div className="mb-3">
                                            <Form.Label className={!!isEdit ? "d-none" : ""}>Start Time</Form.Label>
                                            <div className={!!isEdit ? "input-group d-none" : "input-group"}>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                        enableTime: true,
                                                        noCalendar: true,
                                                        dateFormat: "H:i",
                                                    }}
                                                />
                                                <span className="input-group-text"> <i className="ri-calendar-event-line"></i> </span>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={6} className={!!isEdit ? "d-none" : ""}>
                                        <div className="mb-3">
                                            <Form.Label className={!!isEdit ? "d-none" : ""}>End Time</Form.Label>
                                            <div className={!!isEdit ? "input-group d-none" : "input-group"}>
                                                <Flatpickr
                                                    className="form-control input-group"
                                                    options={{
                                                        enableTime: true,
                                                        noCalendar: true,
                                                        dateFormat: "H:i",
                                                    }}
                                                />
                                                <span className="input-group-text"> <i className="ri-calendar-event-line"></i> </span>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            }
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="event-location">Location</Form.Label>
                                    <div>
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            name="location"
                                            id="event-location"
                                            placeholder="Event location"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.location}
                                            isInvalid={validation.touched.location && validation.errors.location ? true : false} />
                                        {validation.touched.location && validation.errors.location ? (
                                            <Form.Control.Feedback type="invalid">{validation.errors.location}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Description</Form.Label>
                                    <Form.Control as="textarea"
                                        className="form-control"
                                        id="event-description"
                                        name="description"
                                        placeholder="Enter a description"
                                        rows={3}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.description}
                                        isInvalid={validation.touched.description && validation.errors.description ? true : false}
                                    ></Form.Control>
                                    {validation.touched.description && validation.errors.description ? (
                                        <Form.Control.Feedback type="invalid">{validation.errors.description}
                                        </Form.Control.Feedback>) : null}
                                </div>
                            </Col>
                        </Row>
                        <div className="hstack gap-2 justify-content-end">
                            {!!isEdit && (<Button className='btn-subtle-danger' type="button" id="btn-delete-event" onClick={() => handleDeleteEvent()}> <i className="ri-close-line align-bottom"></i> Delete </Button>)}
                            {!!isEditButton && !!isEdit ? (<Button variant="success" type="submit" id="btn-edit-event" className='d-none' > Edit Event </Button>) : (<Button variant="success" type="submit" id="btn-save-event" > Add Event </Button>)}
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Calendar;