import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";
import CalendarReducer from "./calendar/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
import ProfileReducer from "./auth/profile/reducer";

//Learning
import LearningReducer from "./learning/reducer";

//ecommerce
import EcommerceReducer from "./ecommerce/reducer";

//RealEstate
import RealEstateReducer from "./realestate/reducer";

//Chat
import chatReducer from "./chat/reducer";

//Mailbox
import MailboxReducer from "./mailbox/reducer";

//support tickets
import SupportTicketReducer from "./supporttickets/reducer";

//Invoices
import InvoiceReducer from "./invoices/reducer"

const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Calendar: CalendarReducer,
    Login: LoginReducer,
    Account: AccountReducer,
    ForgetPassword: ForgetPasswordReducer,
    Profile: ProfileReducer,
    Learning: LearningReducer,
    Ecommerce: EcommerceReducer,
    RealEstate : RealEstateReducer,
    Chat: chatReducer,
    Mailbox: MailboxReducer,
    SupportTicket :SupportTicketReducer,
    Invoice : InvoiceReducer

});

export default rootReducer;