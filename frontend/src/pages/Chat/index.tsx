import React, { useState, useEffect, useRef } from 'react'
import { Button, Card, Col, Container, Dropdown, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import EmojiPicker from 'emoji-picker-react';

// Import Images
import avatar1 from 'assets/images/users/48/avatar-1.jpg'
import avatar2 from 'assets/images/users/32/avatar-2.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'
import avatar7 from 'assets/images/users/avatar-7.jpg'

import userDummy from 'assets/images/users/user-dummy-img.jpg'
import chatUser from 'assets/images/chat-user.jpeg'

import { map } from "lodash";

// import Components
import { chatData, ChannelsData, chatContactData, callsData, bookmarkData, attachementsData } from 'Common/data/chat'

// redux
import { useSelector, useDispatch } from "react-redux";
import {
	getDirectContact as onGetDirectContact,
	getMessages,
	getChannels as onGetChannels,
	addMessage as onAddMessage,
	deleteMessage as onDeleteMessage
} from "slices/thunk";
import { createSelector } from 'reselect';

const Chat = () => {
	document.title = "Chat | Steex Admin & Dashboard Template";

	const dispatch = useDispatch<any>();
	const userChatShow: any = useRef();
	const [Chat_Box_Username, setChat_Box_Username] = useState("Lisa Parker");
	const [Chat_Box_Image, setChat_Box_Image] = useState(avatar2);
	const [currentRoomId, setCurrentRoomId] = useState<any>(1);
	const [curMessage, setcurMessage] = useState("");
	const [emojiPicker, setemojiPicker] = useState<boolean>(false);

	const currentUser = {
		name: "Anna Adame",
		isActive: true,
	};

	const selectChat = createSelector(
		(state: any) => state.Chat,
		(chat) => ({
			chats: chat.chats,
			messages: chat.messages,
			channels: chat.channels,
		})
	);

	const { messages } = useSelector(selectChat);
	useEffect(() => {
		dispatch(onGetDirectContact());
		dispatch(onGetChannels());
		dispatch(getMessages(currentRoomId));
	}, [dispatch, currentRoomId]);

	// Chat Box
	const userChatOpen = (id: any, name: any, status: any, roomId: any, image: any) => {
		setChat_Box_Username(name);
		setCurrentRoomId(roomId);
		setChat_Box_Image(image);
		dispatch(getMessages(roomId));
		if (window.innerWidth < 988) {
			userChatShow.current.classList.add("user-chat-show");
		}
		//removes unread badge if user clicks
		var unread: any = document.getElementById("unread-msg-user" + id);
		if (unread) {
			unread.style.display = "none";
		}
	};

	const backToUserChat = () => {
		userChatShow.current.classList.remove("user-chat-show");
	}

	const onKeyDownPress = (e: any) => {
		const { key, value } = e;
		if (key === "Enter") {
			e.preventDefault();
			setcurMessage(value);
			addMessage(currentRoomId, currentUser.name);
		}
	}

	const addMessage = (roomId: any, sender: any) => {
		const currentTime = new Date();
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		const ampm = hours >= 12 ? 'pm' : 'am';
		if (curMessage !== "") {
			const message = {
				id: Math.floor(Math.random() * 100),
				roomId,
				sender,
				message: curMessage,
				createdAt: `${hours}:${minutes} ${ampm}`,
			};
			dispatch(onAddMessage(message))
		}

		setcurMessage("");
		setemojiPicker(false);
	};

	// scroll simple bar add data
	const chatRef = useRef<any>(null);
	useEffect(() => {
		if (chatRef.current.el) {
			chatRef.current.getScrollElement().scrollTop = chatRef.current.getScrollElement().scrollHeight;
		}
	}, [messages])

	// Copy Message
	const handleClick = (ele: HTMLElement) => {
		const copy = ele.closest(".chat-list")?.querySelector('.ctext-content')?.innerHTML;
		if (copy) {
			navigator.clipboard.writeText(copy);
		}
		const copyClipboardElement = document.getElementById("copyClipBoard");
		if (copyClipboardElement) {
			copyClipboardElement.style.display = "block";
			setTimeout(() => {
				copyClipboardElement.style.display = "none";
			}, 1000);
		}
	};

	// delete
	const [deleteMsg, setDeleteMsg] = useState<boolean>(false);
	const toggle_deleMsg = (id: any) => {
		setDeleteMsg(!deleteMsg);
		dispatch(onDeleteMessage(id))
	};

	//Search Message
	const searchMessages = () => {
		const searchInput = document.getElementById("searchMessage") as HTMLInputElement;
		const searchFilter = searchInput.value.toUpperCase();
		const searchUL = document.getElementById("users-conversation") as HTMLInputElement;
		const searchLI = searchUL.getElementsByTagName("li");

		Array.prototype.forEach.call(searchLI, (search: HTMLElement) => {
			const a = search.getElementsByTagName("p")[0] as HTMLParagraphElement | undefined;
			const txtValue = a?.textContent || a?.innerText || '';

			if (txtValue.toUpperCase().indexOf(searchFilter) > -1) {
				search.style.display = "";
			} else {
				search.style.display = "none";
			}
		});
	};

	// emoji
	const [emojiArray, setemojiArray] = useState<any>("");
	const onEmojiClick = (event: any, emojiObject: any) => {
		setemojiArray([...emojiArray, emojiObject.emoji]);
		setcurMessage((prevInput) => prevInput + event.emoji);
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid={true}>
					<div className="chat-wrapper d-lg-flex gap-1 p-1 mb-3">
						<Tab.Container defaultActiveKey='Chats'>
							<div className="chat-wrapper-menu p-3 d-flex flex-column rounded">
								<div className="mb-3 position-relative d-none d-lg-block">
									<Link to="#!"><img src={avatar1} alt="" className="avatar-sm rounded" /></Link>
									<span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1">
										<span className="visually-hidden">unread messages</span>
									</span>
								</div>
								<Nav as='ul' className="chat-menu list-unstyled text-center nav nav-pills justify-content-center">
									<Nav.Item as='li'>
										<Nav.Link eventKey="Chats"><i className="bi bi-chat-dots"></i></Nav.Link>
									</Nav.Item>
									<Nav.Item as='li'>
										<Nav.Link eventKey="contacts"><i className="bi bi-people"></i></Nav.Link>
									</Nav.Item>
									<Nav.Item as='li'>
										<Nav.Link eventKey="calls"><i className="bi bi-telephone"></i></Nav.Link>
									</Nav.Item>
									<Nav.Item as='li'>
										<Nav.Link eventKey="bookmark"><i className="bi bi-star"></i></Nav.Link>
									</Nav.Item>
									<Nav.Item as='li'>
										<Nav.Link eventKey="attachment"><i className="bi bi-file-earmark-richtext"></i></Nav.Link>
									</Nav.Item>
								</Nav>
								<div className="mt-auto text-center d-none d-lg-block">
									<Link to="#!" className="btn btn-secondary btn-icon"><i className="bi bi-gear"></i></Link>
								</div>
							</div>
							<div className="chat-leftsidebar">
								<Tab.Content>
									<Tab.Pane eventKey='Chats' className="fade" id="pills-chats">
										<div className="p-4">
											<div className="d-flex align-items-start">
												<div className="flex-grow-1">
													<h5 className="mb-4">Chats</h5>
												</div>
												<div className="flex-shrink-0">
													<div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" aria-label="Add Contact" data-bs-original-title="Add Contact">
														<Button className="btn-subtle-primary btn-sm">
															<i className="ri-add-line align-bottom"></i>
														</Button>
													</div>
												</div>
											</div>
											<div className="search-box">
												<Form.Control type="text" className="bg-light border-light" placeholder="Search here..." />
												<i className="ri-search-2-line search-icon"></i>
											</div>
										</div>

										<SimpleBar className="chat-room-list simplebar-scrollable-y simplebar-mouse-entered">
											<div className="chat-message-list">
												<ul className="list-unstyled chat-list chat-user-list" id="userList">
													{chatData.map((value: any, key: number) => (
														<li id="contact-id-1" key={key} data-name="direct-message" className={Chat_Box_Username === value.name ? 'active' : ''}>
															<Link to="#"
																onClick={() => {
																	userChatOpen(
																		value.id,
																		value.name,
																		value.status,
																		value.roomId,
																		value.image
																	);
																}}>
																<div className="d-flex align-items-center">
																	<div className="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
																		<div className="avatar-xxs">
																			{value.isImg ? (
																				<span className="avatar-title rounded-circle bg-primary text-white fs-xxs">
																					{value.profile}
																				</span>
																			) : (
																				<div className="align-self-center me-3">
																					<img
																						src={value.image}
																						className="rounded-circle avatar-xxs"
																						alt=""
																					/>
																				</div>
																			)}
																			<span className="user-status"></span>
																		</div>
																	</div>
																	<div className="flex-grow-1 overflow-hidden">
																		<p className="text-truncate mb-0">{value.name}</p>
																	</div>
																	<div>
																		<div className="flex-shrink-0 ms-2" id={"unread-msg-user" + value.id}>
																			<span className="badge bg-dark-subtle text-dark rounded p-1">{value.Channels}</span>
																		</div>
																	</div>
																</div>
															</Link>
														</li>
													))}
												</ul>
											</div>

											<div className="d-flex align-items-center px-4 mt-4 pt-4 mb-2">
												<div className="flex-grow-1">
													<h4 className="mb-0 fs-xs text-muted text-uppercase">Channels</h4>
												</div>
												<div className="flex-shrink-0">
													<div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" aria-label="Create group" data-bs-original-title="Create group">
														<Button className="btn-subtle-success btn-sm">
															<i className="ri-add-line align-bottom"></i>
														</Button>
													</div>
												</div>
											</div>

											<div className="chat-message-list">
												<ul className="list-unstyled chat-list chat-user-list mb-0" id="channelList">
													{ChannelsData.map((value: any, key: number) => (
														<li id="contact-id-10" data-name="channel" key={key}>
															<Link to="#" className="unread-msg-user">
																<div className="d-flex align-items-center">
																	<div className="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
																		<div className="avatar-xxs">
																			<div className="avatar-title bg-light rounded-circle text-body">#</div>
																		</div>
																	</div>
																	<div className="flex-grow-1 overflow-hidden">
																		<p className="text-truncate mb-0">{value.name}</p>
																	</div>
																	<div>
																		<div className="flex-shrink-0 ms-2">
																			<span className="badge bg-dark-subtle text-dark rounded p-1">{value.Channels}</span>
																		</div>
																	</div>
																</div>
															</Link>
														</li>
													))}
												</ul>
											</div>
										</SimpleBar>
									</Tab.Pane>

									<Tab.Pane eventKey='contacts' className="fade" id="pills-contacts">
										<div>
											<div className="p-4">
												<div className="d-flex align-items-start">
													<div className="flex-grow-1">
														<h5 className="mb-4">Contacts</h5>
													</div>
													<div className="flex-shrink-0">
														<div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" aria-label="Add Contact" data-bs-original-title="Add Contact">
															<Button className="btn-subtle-primary btn-sm">
																<i className="ri-add-line align-bottom"></i>
															</Button>
														</div>
													</div>
												</div>
												<div className="search-box">
													<input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
													<i className="ri-search-2-line search-icon"></i>
												</div>
											</div>
											<div>
												<SimpleBar className="chat-room-list" data-simplebar="init">
													<div className="simplebar-wrapper" style={{ margin: "0px" }}>
														<div className="sort-contact">
															{chatContactData.map((value: any, key: number) => (
																<div className="mt-3" key={key}>
																	<div className="contact-list-title">{value.title}</div>
																	<ul id="contact-sort-A" className="list-unstyled contact-list">
																		{value.contacts.map((contacts: any, key: number) => (
																			<li key={key}>
																				<div className="d-flex align-items-center">
																					<div className="flex-shrink-0 me-2">
																						{contacts.isImg ? (
																							<div className="avatar-xxs">
																								<span className="avatar-title rounded-circle bg-primary fs-xxs">
																									{contacts.profile}
																								</span>
																							</div>
																						) : (
																							<div className="avatar-xxs">
																								<img
																									src={contacts.image}
																									className="img-fluid rounded-circle"
																									alt=""
																								/>
																							</div>
																						)}
																					</div>
																					<div className="flex-grow-1">
																						<p className="text-truncate contactlist-name mb-0">{contacts.name}</p>
																					</div>
																					<div className="flex-shrink-0">
																						<Dropdown className="cursor-pointer">
																							<Dropdown.Toggle as='a' className="text-muted">
																								<i className="bi bi-three-dots-vertical"></i>
																							</Dropdown.Toggle>
																							<Dropdown.Menu className="dropdown-menu-end">
																								<Dropdown.Item><i className="bi bi-pencil text-muted me-2 align-bottom"></i>Edit</Dropdown.Item>
																								<Dropdown.Item><i className="bi bi-slash-circle text-muted me-2 align-bottom"></i>Block</Dropdown.Item>
																								<Dropdown.Item><i className="bi bi-trash3 text-muted me-2 align-bottom"></i>Remove</Dropdown.Item>
																							</Dropdown.Menu>
																						</Dropdown>
																					</div>
																				</div>
																			</li>
																		))}
																	</ul>
																</div>
															))}
														</div>
													</div>
												</SimpleBar>
											</div>
										</div>
									</Tab.Pane>

									<Tab.Pane eventKey='calls' className="fade" id="pills-calls">
										<div>
											<div className="px-4 pt-4">
												<h5 className="mb-4">Calls</h5>
											</div>
											<SimpleBar className="chat-message-list chat-call-list" data-simplebar="init">
												<ul className="list-unstyled chat-list">
													{callsData.map((value: any, key: number) => (
														<li key={key}>
															<div className="d-flex align-items-center">
																<div className="chat-user-img flex-shrink-0 me-2">
																	{value.isImg ? (
																		<div className="avatar-xxs">
																			<span className="avatar-title rounded-circle bg-primary fs-xxs">
																				{value.profile}
																			</span>
																		</div>
																	) : (
																		<div className="chat-user-img flex-shrink-0">
																			<div className="avatar-xxs">
																				<img
																					src={value.image}
																					className="rounded-circle img-fluid"
																					alt=""
																				/>
																			</div>
																		</div>
																	)}
																</div>
																<div className="flex-grow-1 overflow-hidden">
																	<p className="fw-medium text-truncate mb-0">{value.name}</p>
																	<div className="text-muted fs-xs text-truncate">
																		<i className={value.isArrow ? "bi bi-arrow-down-left text-success" : "bi bi-arrow-up-right text-danger"}></i> {value.date}
																	</div>
																</div>
																<div className="flex-shrink-0 ms-3">
																	<div className="d-flex align-items-center gap-3">
																		<div>
																			<h5 className="mb-0 fs-xs text-muted">{value.time}</h5>
																		</div>
																		<div>
																			<Button variant='link' className="btn-link p-0 fs-lg stretched-link">
																				<i className={value.icon}></i>
																			</Button>
																		</div>
																	</div>
																</div>
															</div>
														</li>
													))}
												</ul>
											</SimpleBar>
										</div>
									</Tab.Pane>

									<Tab.Pane eventKey='bookmark' className="fade" id="pills-bookmark">
										<div>
											<div className="px-4 pt-4">
												<h5 className="mb-4">Bookmark</h5>
											</div>
											<SimpleBar>
												<ul className="list-unstyled chat-list">
													{bookmarkData.map((value: any, key: number) => (
														<li key={key} className='m-4'>
															<div className="d-flex align-items-center">
																<div className="flex-shrink-0 avatar-xs ms-1 me-3">
																	<div className="avatar-title bg-primary-subtle text-primary rounded-circle">
																		<i className={value.icon}></i>
																	</div>
																</div>
																<div className="flex-grow-1 overflow-hidden">
																	<h5 className="mb-1"><Link to="#" className="text-truncate p-0">{value.fileName}</Link></h5>
																	<p className="text-muted text-truncate fs-xs mb-0">{value.size}</p>
																</div>

																<div className="flex-shrink-0 ms-3">
																	<Dropdown>
																		<Dropdown.Toggle as='a' className="fs-md text-muted px-1">
																			<i className="bi bi-three-dots"></i>
																		</Dropdown.Toggle>
																		<Dropdown.Menu className="dropdown-menu-end">
																			<Dropdown.Item className="d-flex align-items-center justify-content-between" href="#">Open <i className="bi bi-file-earmark ms-2 text-muted"></i></Dropdown.Item>
																			<Dropdown.Item className="d-flex align-items-center justify-content-between" href="#">Edit <i className="bi bi-pencil ms-2 text-muted"></i></Dropdown.Item>
																			<div className="dropdown-divider"></div>
																			<Dropdown.Item className="d-flex align-items-center justify-content-between" href="#">Delete <i className="bi bi-trash3 ms-2 text-muted"></i></Dropdown.Item>
																		</Dropdown.Menu>
																	</Dropdown>
																</div>
															</div>
														</li>
													))}
												</ul>
											</SimpleBar>
										</div>
									</Tab.Pane>

									<Tab.Pane eventKey='attachment' className="fade" id="pills-attachment">
										<div>
											<div className="px-4 pt-4">
												<h5 className="mb-4">Attachment</h5>
											</div>

											<SimpleBar className="chat-bookmark-list px-4" data-simplebar="init">
												{attachementsData.map((value: any, key: number) => (
													<Card className="p-2 border mb-2" key={key}>
														<div className="d-flex align-items-center" key={key}>
															<div className="flex-shrink-0 avatar-xs ms-1 me-3">
																<div className="avatar-title bg-primary-subtle text-primary rounded-circle">
																	<i className={value.foldericon}></i>
																</div>
															</div>
															<div className="flex-grow-1 overflow-hidden">
																<h5 className="fs-sm fw-medium text-truncate mb-1">{value.foldername}</h5>
																<p className="text-muted fs-xs mb-0">{value.foldersize}</p>
															</div>

															<div className="flex-shrink-0 ms-3">
																<div className="d-flex gap-2">
																	<div>
																		<Link to="#" className="text-muted px-1">
																			<i className="bi bi-download"></i>
																		</Link>
																	</div>
																	<Dropdown>
																		<Dropdown.Toggle as='a' className="text-muted px-1">
																			<i className="bi bi-three-dots"></i>
																		</Dropdown.Toggle>
																		<Dropdown.Menu className="dropdown-menu-end">
																			<Dropdown.Item className="d-flex align-items-center justify-content-between" href="#">Share <i className="bi bi-share ms-2 text-muted"></i></Dropdown.Item>
																			<Dropdown.Item className="d-flex align-items-center justify-content-between" href="#">Bookmark <i className="bi bi-bookmarks text-muted ms-2"></i></Dropdown.Item>
																			<div className="dropdown-divider"></div>
																			<Dropdown.Item className="d-flex align-items-center justify-content-between" href="#">Delete <i className="bi bi-trash3 ms-2 text-muted"></i></Dropdown.Item>
																		</Dropdown.Menu>
																	</Dropdown>
																</div>
															</div>
														</div>
													</Card>
												))}
											</SimpleBar>
										</div>
									</Tab.Pane>
								</Tab.Content>
							</div>
						</Tab.Container>

						<div className="user-chat w-100 overflow-hidden" ref={userChatShow}>
							<div className="d-none flex-column justify-content-between h-100 video-content">
								<div className="p-3 user-chat-topbar border-bottom border-2">
									<Row className="align-items-center justify-content-between flex-nowrap">
										<Col sm={4} className="col">
											<div className="d-flex align-items-center">
												<div className="flex-shrink-0 d-block d-lg-none me-3">
													<Link to="#" className="user-chat-remove fs-lg p-1"><i className="ri-arrow-left-s-line align-bottom"></i></Link>
												</div>
												<div className="flex-grow-1 overflow-hidden">
													<div className="d-flex align-items-center">
														<div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
															<img src={userDummy} className="rounded-circle avatar-xs" alt="" />
															<span className="user-status"></span>
														</div>
														<div className="flex-grow-1 overflow-hidden">
															<h5 className="text-truncate mb-1 fs-lg"><Link className="text-reset username" data-bs-toggle="offcanvas" to="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">Lisa Parker</Link></h5>
															<p className="text-truncate text-muted fs-md mb-0 userStatus"><small>Creative Desginer</small></p>
														</div>
													</div>
												</div>
											</div>
										</Col>
										<Col lg={4} className="col-auto">
											<div className="text-end">
												<Button variant="primary" data-bs-toggle="modal" data-bs-target="#inviteMembersModal"><i className="bi bi-plus d-block d-sm-none"></i> <span className="ms-1 d-none d-sm-block">Add Participant</span></Button>
											</div>
										</Col>
									</Row>
								</div>

								<div className="p-3 chat-conversation" data-simplebar="init">
									<SimpleBar>
										<Row className="g-3">
											<Col lg={9}>
												<div className="position-relative">
													<Link to="#!">
														<img src={chatUser} alt="" className="object-fit-cover w-100 rounded" height="515" />
													</Link>
													<div className="btn-group position-absolute top-0 end-0 bg-white bg-opacity-50 p-1 m-3" role="group" aria-label="Basic example">
														<Button type="button" className="btn-close"></Button>
													</div>
													<div className="badge bg-danger d-inline-block position-absolute bottom-0 end-0 m-3 fs-lg fw-normal">
														<span id="outputt" className="timerClock" defaultValue="00:00:00">00:00:00</span>
													</div>
												</div>
											</Col>
											<Col lg={3}>
												<Row className="g-3">
													<Col lg={12}>
														<div className="position-relative">
															<Link to="#!">
																<img src={avatar5} alt="" className="w-100 object-fit-cover rounded" height="250" />
															</Link>
														</div>
													</Col>
													<Col lg={12}>
														<div className="position-relative">
															<Link to="#!">
																<img src={avatar7} alt="" className="w-100 object-fit-cover rounded" height="250" />
															</Link>
														</div>
													</Col>
												</Row>
											</Col>
										</Row>
									</SimpleBar>
								</div>

								<div className="p-3 chat-input-section border-top border-2">
									<Row className="align-items-center justify-content-between">
										<Col lg={12}>
											<div className="hstack gap-2 justify-content-center">
												<Button className="btn-subtle-secondary fs-lg btn-icon rounded-circle"><i className="ph-video-camera-slash"></i></Button>
												<Button variant='danger' className="fs-lg btn-icon rounded-circle call-disconnect"><i className="ph-phone-disconnect"></i></Button>
												<Button className="btn-subtle-secondary fs-lg btn-icon rounded-circle"><i className="ph-microphone-slash"></i></Button>
											</div>
										</Col>
									</Row>
								</div>
							</div>

							<div className="chat-content d-lg-flex">
								<div className="w-100 overflow-hidden position-relative">
									<div className="position-relative">
										<div className="position-relative" id="users-chat" style={{ display: "block" }}>
											<div className="p-3 user-chat-topbar border-bottom border-2">
												<Row className="align-items-center flex-nowrap">
													<Col sm={4} className="col">
														<div className="d-flex align-items-center">
															<div className="flex-shrink-0 d-block d-lg-none me-3">
																<Link to="#" onClick={backToUserChat} className="user-chat-remove fs-lg p-1"><i className="ri-arrow-left-s-line align-bottom"></i></Link>
															</div>
															<div className="flex-grow-1 overflow-hidden">
																<div className="d-flex align-items-center">
																	<div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
																		<img src={Chat_Box_Image || userDummy} className="rounded-circle avatar-xs" alt="" />
																		<span className="user-status"></span>
																	</div>
																	<div className="flex-grow-1 overflow-hidden">
																		<h5 className="text-truncate mb-1 fs-lg"><Link className="text-reset username" data-bs-toggle="offcanvas" to="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">{Chat_Box_Username}</Link></h5>
																		<p className="text-truncate text-muted fs-md mb-0 userStatus"><small>Online</small></p>
																	</div>
																</div>
															</div>
														</div>
													</Col>
													<Col sm={8} className="col-auto">
														<ul className="list-inline user-chat-nav text-end mb-0">
															<li className="list-inline-item m-0">
																<Dropdown>
																	<Dropdown.Toggle bsPrefix="btn-ghost-secondary btn-icon" type="button">
																		<i className="bi bi-search"></i>
																	</Dropdown.Toggle>
																	<Dropdown.Menu className="p-0 dropdown-menu-end dropdown-menu-lg">
																		<div className="p-2">
																			<div className="search-box">
																				<Form.Control type="text" className="bg-light border-light" placeholder="Search here..." id="searchMessage" onKeyUp={searchMessages} />
																				<i className="ri-search-2-line search-icon"></i>
																			</div>
																		</div>
																	</Dropdown.Menu>
																</Dropdown>
															</li>

															<li className="list-inline-item d-none d-lg-inline-block m-0">
																<Button type="button" className="btn-ghost-secondary fs-lg btn-icon video-icon">
																	<i className="bi bi-camera-video"></i>
																</Button>
															</li>

															<li className="list-inline-item d-none d-lg-inline-block m-0">
																<Button type="button" className="btn-ghost-secondary fs-lg btn-icon" data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
																	<i className="bi bi-telephone"></i>
																</Button>
															</li>

															<li className="list-inline-item m-0">
																<Dropdown>
																	<Dropdown.Toggle bsPrefix="btn-ghost-secondary fs-lg btn-icon">
																		<i className="bi bi-three-dots-vertical"></i>
																	</Dropdown.Toggle>
																	<Dropdown.Menu className="dropdown-menu-end">
																		<Dropdown.Item className="d-block d-lg-none user-profile-show" href="#"><i className="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</Dropdown.Item>
																		<Dropdown.Item href="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive</Dropdown.Item>
																		<Dropdown.Item href="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</Dropdown.Item>
																		<Dropdown.Item href="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</Dropdown.Item>
																	</Dropdown.Menu>
																</Dropdown>
															</li>
														</ul>
													</Col>
												</Row>
											</div>

											<SimpleBar ref={chatRef} className="chat-conversation p-3 p-lg-4 simplebar-scrollable-y" id="chat-conversation" data-simplebar="init">
												<ul className="list-unstyled chat-conversation-list" id="users-conversation">
													{messages && map(messages, (message: any, key: number) => (
														<li className={
															message.sender === Chat_Box_Username
																? " chat-list left"
																: "chat-list right"
														} key={key}>
															<div className="conversation-list">
																{message.sender === Chat_Box_Username && (
																	<div className="chat-avatar">
																		{Chat_Box_Image === undefined ?
																			<img
																				src={avatar2}
																				alt=""
																			/>
																			:
																			<img
																				src={Chat_Box_Image}
																				alt=""
																			/>
																		}
																	</div>
																)}
																<div className="user-chat-content">
																	<div className="ctext-wrap">
																		<div className="ctext-wrap-content">
																			<p className="mb-0 ctext-content">
																				{message.message}
																			</p>
																		</div>
																		<Dropdown className="align-self-start message-box-drop">
																			<Dropdown.Toggle as='a'>
																				<i className="bi bi-three-dots-vertical"></i>
																			</Dropdown.Toggle>
																			<Dropdown.Menu>
																				<Dropdown.Item className="reply-message" href="#"><i className="bi bi-reply me-2 text-muted"></i>Reply</Dropdown.Item>
																				<Dropdown.Item href="#"><i className="bi bi-share me-2 text-muted"></i>Forward</Dropdown.Item>
																				<Dropdown.Item className="copy-message" href="#" onClick={(e: any) => handleClick(e.target)}><i className="bi bi-clipboard-check me-2 text-muted"></i>Copy</Dropdown.Item>
																				<Dropdown.Item href="#"><i className="bi bi-bookmarks me-2 text-muted"></i>Bookmark</Dropdown.Item>
																				<Dropdown.Item className="delete-item" href="#" onClick={() => toggle_deleMsg(message.id)}><i className="bi bi-trash3 me-2 text-muted"></i>Delete</Dropdown.Item>
																			</Dropdown.Menu>
																		</Dropdown>
																	</div>
																	<div className="conversation-name">
																		<span className="d-none name">{message.sender}</span>
																		<small className="text-muted time">{message.createdAt}</small>
																		<span className="text-success check-message-icon"><i className="bx bx-check-double"></i></span>
																	</div>
																</div>
															</div>
														</li>
													))}
												</ul>
											</SimpleBar>
											<div className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoard" role="alert">
												Message copied
											</div>
										</div>

										<div className="position-relative d-none" id="channel-chat">
											<div className="p-3 user-chat-topbar border-bottom border-2">
												<Row className="align-items-center flex-nowrap">
													<Col sm={4} className="col">
														<div className="d-flex align-items-center">
															<div className="flex-shrink-0 d-block d-lg-none me-3">
																<Link to="#" className="user-chat-remove fs-lg p-1"><i className="ri-arrow-left-s-line align-bottom"></i></Link>
															</div>
															<div className="flex-grow-1 overflow-hidden">
																<div className="d-flex align-items-center">
																	<div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
																		<img src={avatar2} className="rounded-circle avatar-xs" alt="" />
																	</div>
																	<div className="flex-grow-1 overflow-hidden">
																		<h5 className="text-truncate mb-0 fs-lg"><Link className="text-reset username" data-bs-toggle="offcanvas" to="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">Lisa Parker</Link></h5>
																		<p className="text-truncate text-muted fs-md mb-0 userStatus"><small>24 Members</small></p>
																	</div>
																</div>
															</div>
														</div>
													</Col>
													<Col sm={8} className="col-auto">
														<ul className="list-inline user-chat-nav text-end mb-0">
															<li className="list-inline-item m-0">
																<div className="dropdown">
																	<Button className="btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																		<i className="bi bi-search"></i>
																	</Button>
																	<div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
																		<div className="p-2">
																			<div className="search-box">
																				<input type="text" className="form-control bg-light border-light" placeholder="Search here..." id="searchMessage" />
																				<i className="ri-search-2-line search-icon"></i>
																			</div>
																		</div>
																	</div>
																</div>
															</li>

															<li className="list-inline-item d-none d-lg-inline-block m-0">
																<Button type="button" className="btn-ghost-secondary btn-icon" data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
																	<i data-feather="info" className="icon-sm"></i>
																</Button>
															</li>

															<li className="list-inline-item m-0">
																<div className="dropdown">
																	<Button className="btn-ghost-secondary fs-lg btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																		<i className="bi bi-three-dots-vertical"></i>
																	</Button>
																	<div className="dropdown-menu dropdown-menu-end">
																		<Link className="dropdown-item d-block d-lg-none user-profile-show" to="#"><i className="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</Link>
																		<Link className="dropdown-item" to="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive</Link>
																		<Link className="dropdown-item" to="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</Link>
																		<Link className="dropdown-item" to="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</Link>
																	</div>
																</div>
															</li>
														</ul>
													</Col>
												</Row>
											</div>

											<div className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoardChannel" role="alert">
												Message copied
											</div>
										</div>
										{emojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} width={250} height={382} />}
										<div className="chat-input-section p-3 p-lg-4 border-top border-2">
											<form id="chatinput-form">
												<Row className="g-0 align-items-center">
													<Col className="col-auto">
														<div className="chat-input-links me-2">
															<div className="links-list-item">
																<Button variant='link' type="button" className="btn-link text-decoration-none emoji-btn" id="emoji-btn" onClick={() => setemojiPicker(!emojiPicker)}>
																	<i className="bx bx-smile align-middle"></i>
																</Button>
															</div>
														</div>
													</Col>

													<Col>
														<div className="chat-input-feedback">
															Please Enter a Message
														</div>
														<Form.Control
															type="text"
															value={curMessage}
															onKeyDown={onKeyDownPress}
															onChange={e => setcurMessage(e.target.value)}
															className="chat-input bg-light border-light"
															id="chat-input"
															placeholder="Type your message..."
															autoComplete="off"
														/>
													</Col>
													<div className="col-auto">
														<div className="chat-input-links ms-2">
															<div className="links-list-item">
																<Button variant='dark' onClick={() => { addMessage(currentRoomId, currentUser.name); setemojiPicker(false); }} className="chat-send waves-effect waves-light">
																	<i className="ph-paper-plane-right align-middle"></i>
																</Button>
															</div>
														</div>
													</div>

												</Row>
											</form>
										</div>

										<div className="replyCard">
											<Card className="mb-0">
												<Card.Body className="py-3">
													<div className="replymessage-block mb-0 d-flex align-items-start">
														<div className="flex-grow-1">
															<h5 className="conversation-name">ABC</h5>
															<p className="mb-0"></p>
														</div>
														<div className="flex-shrink-0">
															<Button type="button" id="close_toggle" className="btn-sm btn-link mt-n2 me-n3 fs-lg">
																<i className="bx bx-x align-middle"></i>
															</Button>
														</div>
													</div>
												</Card.Body>
											</Card>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div >
		</React.Fragment >
	);
};

export default Chat;
