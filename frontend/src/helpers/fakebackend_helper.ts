import { APIClient } from "./api_helper";

import * as url from "./url_helper"

const api = new APIClient();
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data: any) => api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data: any) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data: any) => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data: any) => api.create(url.POST_EDIT_JWT_PROFILE, data);

// export const postFakeProfile = (data: any) => api.create(url.POST_EDIT_PROFILE, data);
export const postFakeProfile = (data: any) => api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data);

// Register Method
export const postJwtRegister = (url: any, data: any) => {
  return api.create(url, data)
    .catch((err: any) => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};
// Login Method
export const postJwtLogin = (data: any) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data: any) => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data: any) => api.create(url.SOCIAL_LOGIN, data);

// get Events
export const getEvents = () => api.get(url.GET_EVENTS, null);

// get Events
export const getCategories = () => api.get(url.GET_CATEGORIES, null);

// get Upcomming Events
export const getUpCommingEvent = () => api.get(url.GET_UPCOMMINGEVENT, null);

// add Events
export const addNewEvent = (event: any) => api.create(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = (event: any) => api.update(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = (event: any) => api.delete(url.DELETE_EVENT, { headers: { event } });

// API Key
export const getAPIKey = () => api.get(url.GET_API_KEY, null);

// add API Key
export const addNewAPIKey = (apikey: any) => api.create(url.ADD_NEW_API_KEY, apikey);

// update API Key
export const updateAPIKey = (apikey: any) => api.update(url.UPDATE_API_KEY, apikey);

// delete API Key
export const deleteAPIKey = (apikey: any) => api.delete(url.DELETE_API_KEY, { headers: { apikey } });


// Contacts
export const getContacts = () => api.get(url.GET_CONTACTS, null);

// add Contacts
export const addNewContact = (contact: any) => api.create(url.ADD_NEW_CONTACT, contact);

// update Contacts
export const updateContact = (contact: any) => api.update(url.UPDATE_CONTACT, contact);

// delete Contacts
export const deleteContact = (contact: any) => api.delete(url.DELETE_CONTACT, { headers: { contact } });

// Team
export const getTeam = () => api.get(url.GET_TEAM, null);

// add Team Member
export const addNewMember = (member: any) => api.create(url.ADD_NEW_MEMBER, member);

// update Team Member
export const updateMember = (member: any) => api.update(url.UPDATE_MEMBER, member);

// delete Team Member
export const deleteMember = (member: any) => api.delete(url.DELETE_MEMBER, { headers: { member } });

// dashboard Data
export const getChartData = (data: any) => api.get(url.GET_ALL_DATA, null);
export const getMonthlyData = (data: any) => api.get(url.GET_MONTHLY_DATA, null);
export const getHalfYearlyData = (data: any) => api.get(url.GET_HALFYEARLY_DATA, null);
export const getYearlyData = (data: any) => api.get(url.GET_YEARLY_DATA, null);

//Learning
//Course
export const getCourseList = () => api.get(url.GET_COURSE_LIST, null);
export const addCourseList = (data: any) => api.create(url.ADD_COURSE_LIST, data);
export const updateCourseList = (data: any) => api.update(url.UPDATE_COURSE_LIST, data);
export const deleteCourseList = (coursegrid: any) => api.delete(url.DELETE_COURSE_LIST, { headers: { coursegrid } });

//grid
export const getCourseGridList = () => api.get(url.GET_COURSE_GRID_LIST, null);
export const addCourseGridList = (data: any) => api.create(url.ADD_COURSE_GRID_LIST, data);
export const updateCourseGridList = (data: any) => api.update(url.UPDATE_COURSE_GRID_LIST, data);
export const deleteCourseGridList = (coursegrid: any) => api.delete(url.DELETE_COURSE_GRID_LIST, { headers: { coursegrid } });

//Instructor
export const getInstructorGridList = () => api.get(url.GET_INSTRUCTOR_GRID_LIST, null);
export const addInstructorGridList = (data: any) => api.create(url.ADD_INSTRUCTOR_GRID_LIST, data);
export const updateInstructorGridList = (data: any) => api.update(url.UPDATE_INSTRUCTOR_GRID_LIST, data);
export const deleteInstructorGridList = (instructorgrid: any) => api.delete(url.DELETE_INSTRUCTOR_GRID_LIST, { headers: { instructorgrid } });

export const getInstructorList = () => api.get(url.GET_INSTRUCTOR_LIST, null);
export const addInstructorList = (data: any) => api.create(url.ADD_INSTRUCTOR_LIST, data);
export const updateInstructorList = (data: any) => api.update(url.UPDATE_INSTRUCTOR_LIST, data);
export const deleteInstructorList = (instructorlist: any) => api.delete(url.DELETE_INSTRUCTOR_LIST, { headers: { instructorlist } });

export const getInstructorCourseList = () => api.get(url.GET_INSTRUCTOR_COURSE_LIST, null);
export const deleteInstructorCourseList = (instructorcourselist: any) => api.delete(url.DELETE_INSTRUCTOR_COURSE_LIST, { headers: { instructorcourselist } });
export const getInstructorStudentList = () => api.get(url.GET_INSTRUCTOR_STUDENTS_LIST, null);
export const deleteInstructorStudentList = (instructorstudentlist: any) => api.delete(url.DELETE_INSTRUCTOR_STUDENT_LIST, { headers: { instructorstudentlist } });


//Category
export const getCategoryList = () => api.get(url.GET_CATEGORY, null);
export const addCategoryList = (data: any) => api.create(url.ADD_CATEGORY, data);

//Student
export const getSubscriptionList = () => api.get(url.GET_SUBSCRIPTIONS_LIST, null);

//E commerce
export const getProductGridList = () => api.get(url.GET_PRODUCT_GRID_LIST, null);
export const deleteProductGridList = (productgrid: any) => api.delete(url.DELETE_PRODUCT_GRID_LIST, { headers: { productgrid } });

//Real Estate

//listing grid
export const getRealEstateGridList = () => api.get(url.GET_REALESTATE_GRID_LIST, null);
export const addRealEstateGridList = (data: any) => api.create(url.ADD_REALESTATE_GRID_LIST, data);
export const updateRealEstateGridList = (data: any) => api.update(url.UPDATE_REALESTATE_GRID_LIST, data);
export const deleteRealEstateGridList = (realestategrid: any) => api.delete(url.DELETE_REALESTATE_GRID_LIST, { headers: { realestategrid } });

export const getAgentGridList = () => api.get(url.GET_AGENT_GRID_LIST, null);
export const addAgentGridList = (data: any) => api.create(url.ADD_AGENT_GRID_LIST, data);
export const updateAgentGridList = (data: any) => api.update(url.UPDATE_AGENT_GRID_LIST, data);
export const deleteAgentGridList = (agentgrid: any) => api.delete(url.DELETE_AGENT_GRID_LIST, { headers: { agentgrid } });

//agency overview
export const getRealestateAgencyOverview = () => api.get(url.GET_REALESTATE_AGENCY_OVERVIEW, null);
export const updateRealEstateAgencyOverview = (data: any) => api.update(url.UPDATE_REALESTATE_AGENCY_OVERVIEW, data);
export const deleteRealestateAgencyOverview = (agencyoverview: any) => api.delete(url.DELETE_REALESTATE_AGENCY_OVERVIEW, { headers: { agencyoverview } });

//listing map
export const getRealestateListMap = () => api.get(url.GET_REALESTATE_LIST_MAP, null);
export const addRealEstateListMap = (data: any) => api.create(url.ADD_REALESTATE_LIST_MAP, data);
export const updateRealEstateListMap = (data: any) => api.update(url.UPDATE_REALESTATE_LIST_MAP, data);
export const deleteRealestateListMap = (data: any) => api.delete(url.DELETE_REALESTATE_LIST_MAP, { headers: { data } });

//Earning
export const getEarningList = () => api.get(url.GET_EARNING_LIST, null);

//Agencies
export const getAgenciesList = () => api.get(url.GET_AGENCIES_LIST, null);
export const addAgenciesList = (data: any) => api.create(url.ADD_AAGENCIES_LIST, data);
export const updateAgenciesList = (data: any) => api.update(url.UPDATE_AAGENCIES_LIST, data);
export const deleteAgenciesList = (agencieslist: any) => api.delete(url.DELETE_AGENCIES_LIST, { headers: { agencieslist } });

//Agent
export const getAgentList = () => api.get(url.GET_AGENT_LIST, null);
export const addAgentList = (data: any) => api.create(url.ADD_AGENT_LIST, data);
export const updateAgentList = (data: any) => api.update(url.UPDATE_AGENT_LIST, data);
export const deleteAgentList = (agentlist: any) => api.delete(url.DELETE_AGENT_LIST, { headers: { agentlist } });

//Listing List
export const getRealEstateListingList = () => api.get(url.GET_REALESTATE_LISTING_LIST, null);
export const addRealEstateListingList = (data: any) => api.create(url.ADD_REALESTATE_LISTING_LIST, data);
export const updateRealEstateListingList = (data: any) => api.update(url.UPDATE_REALESTATE_LISTING_LIST, data);
export const deleteRealEstateListingList = (listinglist: any) => api.delete(url.DELETE_REALESTATE_LISTING_LIST, { headers: { listinglist } });

//Support Tickets
export const getSupportTicketList = () => api.get(url.GET_SUPPORTTICKETS_LIST, null);
export const addSupportTicketList = (data: any) => api.create(url.ADD_SUPPORTTICKETS_LIST, data);
export const updateSupportTicketList = (data: any) => api.update(url.UPDATE_SUPPORTTICKETS_LIST, data);
export const deleteSupportTicketList = (supportticketlist: any) => api.delete(url.DELETE_SUPPORTTICKETS_LIST, { headers: { supportticketlist } });

//Invoice
export const getInvoiceList = () => api.get(url.GET_INVOICE_LIST, null);
export const addInvoiceList = (data: any) => api.create(url.ADD_INVOICE_LIST, data);
export const updateInvoiceList = (data: any) => api.update(url.UPDATE_INVOICE_LIST, data);
export const deleteInvoiceList = (invoicelist: any) => api.delete(url.DELETE_INVOICE_LIST, { headers: { invoicelist } });



//Ecommerce
// product 
export const getProducts = () => api.get(url.GET_PRODUCT, null);
export const addNewProduct = (data: any) => api.create(url.ADD_NEW_PRODUCT, data);
export const updateProduct = (data: any) => api.update(url.UPDATE_PRODUCT, data);
export const deleteProducts = (data: any) => api.delete(url.DELETE_PRODUCT, { headers: { data } });

//product grid
export const getProductsGrid = () => api.get(url.GET_PRODUCT_GRID, null);
export const deleteProductsGrid = (data: any) => api.delete(url.DELETE_GRID, { headers: { data } });
// product detail
export const getProductDetails = () => api.get(url.GET_PRODUCT_DETAILS, null);
export const addNewProductRiview = (data: any) => api.create(url.ADD_NEW_PRODUCT_DETAILS, data);
export const updateProductRiview = (data: any) => api.update(url.UPDATE_PRODUCT_DETAILS, data);
export const deleteProductsRiview = (data: any) => api.delete(url.DELETE_PRODUCT_DETAILS, { headers: { data } });

//order
export const getOrder = () => api.get(url.GET_ORDER, null);
export const addNeworder = (data: any) => api.create(url.ADD_NEW_ORDER, data);
export const updateOrder = (data: any) => api.update(url.UPDATE_ORDER, data);
export const deleteOrder = (data: any) => api.delete(url.DELETE_ORDER, { headers: { data } });

//customer
export const getCustomer = () => api.get(url.GET_CUSTOMER, null);
export const addNewCustomer = (data: any) => api.create(url.ADD_NEW_CUSTOMER, data);
export const updateCustomer = (data: any) => api.update(url.UPDATE_CUSTOMER, data);
export const deleteCustomer = (data: any) => api.delete(url.DELETE_CUSTOMER, { headers: { data } });

//checkout
export const getCheckout = () => api.get(url.GET_CHECKOUT, null);
export const addNewCheckout = (data: any) => api.create(url.ADD_NEW_CHECKOUT, data);
export const updateCheckout = (data: any) => api.update(url.UPDATE_CHECKOUT, data);
export const deleteCheckout = (data: any) => api.delete(url.DELETE_CHECKOUT, { headers: { data } });

//sellers
export const getSellers = () => api.get(url.GET_SELLERTS, null);
export const addNewSellers = (data: any) => api.create(url.ADD_NEW_SELLERTS, data);
export const updateSellers = (data: any) => api.update(url.UPDATE_SELLERTS, data);
export const deleteSellers = (data: any) => api.delete(url.DELETE_SELLERTS, { headers: { data } });


// Chat
// get Contact
export const getDirectContact = () => api.get(url.GET_DIRECT_CONTACT, null);
// get Channels
export const getChannels = () => api.get(url.GET_CHANNELS, null);
// get Messages
export const getMessages = (roomId: any) => api.get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

// add Message
export const addMessage = (message: any) => api.create(url.ADD_MESSAGE, message);

// add Message
export const deleteMessage = (message: any) => api.delete(url.DELETE_MESSAGE, { headers: { message } });

//get Mail
export const getMailDetails = () => api.get(url.GET_MAIL_DETAILS, null);

// delete Mail
export const deleteMail = (forId: any) => api.delete(url.DELETE_MAIL, { headers: { forId } });

