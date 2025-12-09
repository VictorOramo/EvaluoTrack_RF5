//REGISTER
export const POST_FAKE_REGISTER = "/auth/signup";

//LOGIN
export const POST_FAKE_LOGIN = "/auth/signin";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/user";

//CALENDER
export const GET_EVENTS = "/events";
export const GET_CATEGORIES = "/categories";
export const GET_UPCOMMINGEVENT = "/upcommingevents";
export const ADD_NEW_EVENT = "/add/event";
export const UPDATE_EVENT = "/update/event";
export const DELETE_EVENT = "/delete/event";

//Mailbox
export const GET_MAIL_DETAILS = "/mail";
export const DELETE_MAIL = "/delete/mail";

// Chat
export const GET_DIRECT_CONTACT = "/chat";
export const GET_MESSAGES = "/messages";
export const ADD_MESSAGE = "add/message";
export const GET_CHANNELS = "/channels";
export const DELETE_MESSAGE = "delete/message";

// API Key
export const GET_API_KEY = "/api-key";
export const ADD_NEW_API_KEY = "/add/api-key";
export const UPDATE_API_KEY = "/update/api-key";
export const DELETE_API_KEY = "/delete/api-key";

// Contacts
export const GET_CONTACTS = "/get-contacts";
export const ADD_NEW_CONTACT = "/add/contacts";
export const UPDATE_CONTACT = "/update/contacts";
export const DELETE_CONTACT = "/delete/contacts";

// Team
export const GET_TEAM = "/get-team";
export const ADD_NEW_MEMBER = "/add/member";
export const UPDATE_MEMBER = "/update/member";
export const DELETE_MEMBER = "/delete/member";

// Dashboard charts data
export const GET_ALL_DATA = "/all-data";
export const GET_MONTHLY_DATA = "/monthly-data";
export const GET_HALFYEARLY_DATA = "/halfyearly-data";
export const GET_YEARLY_DATA = "/yearly-data";

//Learning
//Course 
//list
export const GET_COURSE_LIST = "/get-courselist";
export const ADD_COURSE_LIST = "/add-courselist";
export const UPDATE_COURSE_LIST = "/edit-courselist";
export const DELETE_COURSE_LIST = "/delete-courselist"

//grid
export const GET_COURSE_GRID_LIST = "/get-coursegridlist";
export const ADD_COURSE_GRID_LIST = "/add-coursegridlist";
export const UPDATE_COURSE_GRID_LIST = "/edit-coursegridlist";
export const DELETE_COURSE_GRID_LIST = "/delete-coursegridlist"
//category
export const GET_CATEGORY = "/get-category";
export const ADD_CATEGORY = "/add-category";
//Instructor
export const GET_INSTRUCTOR_GRID_LIST = "/get-instructorgridlist";
export const ADD_INSTRUCTOR_GRID_LIST = "/add-instructorgridlist";
export const UPDATE_INSTRUCTOR_GRID_LIST = "/edit-instructorgridlist";
export const DELETE_INSTRUCTOR_GRID_LIST = "/delete-instructorgridlist";

export const GET_INSTRUCTOR_LIST = "/get-instructorlist";
export const ADD_INSTRUCTOR_LIST = "/add-instructorlist";
export const UPDATE_INSTRUCTOR_LIST = "/edit-instructorgridlist";
export const DELETE_INSTRUCTOR_LIST = "/delete-instructorlist";

export const GET_INSTRUCTOR_COURSE_LIST = "/get-instructorcourselist";
export const DELETE_INSTRUCTOR_COURSE_LIST = "/delete-instructorcourselist";
export const GET_INSTRUCTOR_STUDENTS_LIST = "/get-instructorstudentlist";
export const DELETE_INSTRUCTOR_STUDENT_LIST = "/delete-instructorstudentlist";

//Students
export const GET_SUBSCRIPTIONS_LIST = "/get-subscriptionslist";

//Ecommerce
export const GET_PRODUCT_GRID_LIST = "/get-productgridlist";
export const DELETE_PRODUCT_GRID_LIST = "/delete-productgridlist";

//Real Estate
//list view
export const GET_REALESTATE_GRID_LIST = "/get-realestatelist";
export const ADD_REALESTATE_GRID_LIST = "/add-realestatelist";
export const UPDATE_REALESTATE_GRID_LIST = "/edit-realestatelist";
export const DELETE_REALESTATE_GRID_LIST = "/delete-realestategridlist";
//agent view
export const GET_AGENT_GRID_LIST = "/get-angentgridlist";
export const ADD_AGENT_GRID_LIST = "/add-angentgridlist";
export const UPDATE_AGENT_GRID_LIST = "/edit-angentgridlist";
export const DELETE_AGENT_GRID_LIST = "/delete-agentgridlist";
export const GET_EARNING_LIST = "/get-earninglist";
//agencies list
export const GET_AGENCIES_LIST = "/get-agencieslist";
export const ADD_AAGENCIES_LIST = "/add-agencieslist";
export const UPDATE_AAGENCIES_LIST = "/edit-agencieslist";
export const DELETE_AGENCIES_LIST = "/delete-angencieslist";
export const GET_AGENT_LIST = "/get-agentlist";
export const ADD_AGENT_LIST = "/add-agentlist";
export const UPDATE_AGENT_LIST = "/edit-agentlist";
export const DELETE_AGENT_LIST = "/delete-angentlist";

//listing grid
export const GET_REALESTATE_LISTING_LIST = "/get-realestatelistinglist";
export const ADD_REALESTATE_LISTING_LIST = "/add-realestatelistinglist";
export const UPDATE_REALESTATE_LISTING_LIST = "/edit-realestatelistinglist";
export const DELETE_REALESTATE_LISTING_LIST = "/delete-realestatelistinglist";

//agency overview
export const GET_REALESTATE_AGENCY_OVERVIEW = "/get-realstate";
export const UPDATE_REALESTATE_AGENCY_OVERVIEW = "/edit-realstate";
export const DELETE_REALESTATE_AGENCY_OVERVIEW = "/delete-realstate";

//list map
export const GET_REALESTATE_LIST_MAP = "/get-realstatelistmap";
export const ADD_REALESTATE_LIST_MAP = "/add-realstatelistmap";
export const UPDATE_REALESTATE_LIST_MAP = "/edit-realstatelistmap";
export const DELETE_REALESTATE_LIST_MAP = "/delete-realstatelistmap";

export const GET_SUPPORTTICKETS_LIST = "/get-supportticketslist";
export const ADD_SUPPORTTICKETS_LIST = "/add-supportticketslist";
export const UPDATE_SUPPORTTICKETS_LIST = "/edit-supportticketslist";
export const DELETE_SUPPORTTICKETS_LIST = "/delete-supportticketslist";

//Invoice
export const GET_INVOICE_LIST = "/get-inoicelist";
export const ADD_INVOICE_LIST = "/add-inoicelist";
export const UPDATE_INVOICE_LIST = "/edit-inoicelist";
export const DELETE_INVOICE_LIST = "/delete-invoicelist";

//Ecommerce
//product 
export const GET_PRODUCT = "/product";
export const ADD_NEW_PRODUCT = "/add/product";
export const UPDATE_PRODUCT = "/edit/product";
export const DELETE_PRODUCT = "/delete/product";

//product grid
export const GET_PRODUCT_GRID = '/product-grid';
export const DELETE_GRID = "/delete/product-grid";

//product details
export const GET_PRODUCT_DETAILS = '/product-details';
export const ADD_NEW_PRODUCT_DETAILS = '/add/product-details';
export const UPDATE_PRODUCT_DETAILS = "/edit/product-details";
export const DELETE_PRODUCT_DETAILS = "/delete/product-details";
//order
export const GET_ORDER = "/order";
export const ADD_NEW_ORDER = "/add/order";
export const UPDATE_ORDER = "/edit/order";
export const DELETE_ORDER = "/delete/order";
//customer
export const GET_CUSTOMER = "/customer";
export const ADD_NEW_CUSTOMER = "/add/customer";
export const UPDATE_CUSTOMER = "/edit/customer";
export const DELETE_CUSTOMER = "/delete/customer";
//checkout
export const GET_CHECKOUT = "/checkout";
export const ADD_NEW_CHECKOUT = "/add/checkout";
export const UPDATE_CHECKOUT = "/edit/checkout";
export const DELETE_CHECKOUT = "/delete/checkout";
//sellers
export const GET_SELLERTS = "/sellers";
export const ADD_NEW_SELLERTS = "/add/sellers";
export const UPDATE_SELLERTS = "/edit/sellers";
export const DELETE_SELLERTS = "/delete/sellers";










