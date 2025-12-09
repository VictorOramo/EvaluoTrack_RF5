import { Navigate } from "react-router-dom";

// Authentication
import Signin from "pages/AuthenticationInner/Signin";
import SignUp from "pages/AuthenticationInner/Signup";
import PasswordReset from "pages/AuthenticationInner/PasswordReset";
import PasswordCreate from "pages/AuthenticationInner/PasswordCreate";
import LockScreen from "pages/AuthenticationInner/LockScreen";
import LogOut from "pages/AuthenticationInner/LogOut";
import SuccessMsg from "pages/AuthenticationInner/SuccessMsg";
import Twostep from "pages/AuthenticationInner/Twostep";
import Fourzerofour from "pages/AuthenticationInner/Errors/404Error";
import Fivezerozero from "pages/AuthenticationInner/Errors/500Error";
import Fivezerothree from "pages/AuthenticationInner/Errors/503Error";
import OfflinePage from "pages/AuthenticationInner/Errors/Offline";


// Pages
import Starterpages from "pages/Pages/Starter/Starterpage";

// Bootstrap UI

import Alerts from "pages/Components/bootstrapUI/Alert/index";
import Badges from "pages/Components/bootstrapUI/Badges/index";
import Button from "pages/Components/bootstrapUI/Buttons/index";
import Colors from "pages/Components/bootstrapUI/Colors/index";
import Cards from "pages/Components/bootstrapUI/Cards/index";
import Carousel from "pages/Components/bootstrapUI/Carousel/index";
import DropDown from "pages/Components/bootstrapUI/Dropdowns/index";
import Grid from "pages/Components/bootstrapUI/Grid/index";
import Images from "pages/Components/bootstrapUI/Images/index";
import Tabs from "pages/Components/bootstrapUI/Tabs/index";
import AccordianCollapse from "pages/Components/bootstrapUI/Accordion&Collapse/index";
import Modals from "pages/Components/bootstrapUI/Modals/index";
import Offcanvas from "pages/Components/bootstrapUI/Offcanvas/index";
import PlaceHolder from "pages/Components/bootstrapUI/Placeholder/index";
import Progress from "pages/Components/bootstrapUI/Progress/index";
import Notifications from "pages/Components/bootstrapUI/Notifications/index";
import Media from "pages/Components/bootstrapUI/MediaObject/index";
import Video from "pages/Components/bootstrapUI/EmbededVideo/index";
import Typography from "pages/Components/bootstrapUI/Typography/index";
import Lists from "pages/Components/bootstrapUI/Lists/index";
import Links from "pages/Components/bootstrapUI/Links/index";
import General from "pages/Components/bootstrapUI/General/index";
import Utilities from "pages/Components/bootstrapUI/Utilities/index";


// Advance UI

import ScrollBar from "pages/Components/advanceUI/Scrollbar/index";
import SwiperSlider from "pages/Components/advanceUI/Swiper/index";
import Ratings from "pages/Components/advanceUI/Ratings/index";
import HightLights from "pages/Components/advanceUI/Highlight/index";


// Custom UI

import Ribbons from "pages/Components/customUI/Ribbons/index";
import Profiles from "pages/Components/customUI/ProFiles/index";
import Counters from "pages/Components/customUI/Counter/index";

// Forms

import BasicForm from "pages/Components/forms/basicElements/index";
import FormSelect from "pages/Components/forms/formSelect/index";
import FormCheckboxRadio from "pages/Components/forms/checkbox&radio/index";
import FormPickers from "pages/Components/forms/pickers/index";
import FormInputMask from "pages/Components/forms/inputMasks/index";
import FormAdvanced from "pages/Components/forms/advanced/index";
import FormValidation from "pages/Components/forms/validation/index";
import FormWizard from "pages/Components/forms/wizard/index";
import EditorForm from "pages/Components/forms/editors/index";
import FileUpload from "pages/Components/forms/fileUpload/index";
import FormLayout from "pages/Components/forms/formslayout/index";

// Icons 

import RemixIcons from "pages/Components/icons/remixIcon/Iconremix";
import BoxIcons from "pages/Components/icons/boxIcon/BoxIcons";
import MaterialDesign from "pages/Components/icons/materialdesignIcon/MaterialDesign";
import BootstrapIcon from "pages/Components/icons/bootstrapIcon/BootstrapIcon";
import PhosphorIcon from "pages/Components/icons/phosphorIcon/PhosphorIcon";

// ApexCharts

import ApexArea from "pages/Components/apexcharts/Area/index";
import ApexBar from "pages/Components/apexcharts/Bar";
import ApexBoxplot from "pages/Components/apexcharts/Boxplot";
import ApexBubble from "pages/Components/apexcharts/Bubble";
import ApexCandle from "pages/Components/apexcharts/Candlestick";
import ApexColumn from "pages/Components/apexcharts/Column";
import ApexHeatmap from "pages/Components/apexcharts/Heatmap";
import ApexLine from "pages/Components/apexcharts/Line";
import ApexMixed from "pages/Components/apexcharts/Mixed";
import ApexPie from "pages/Components/apexcharts/Pie";
import ApexPolar from "pages/Components/apexcharts/Polar";
import ApexRadar from "pages/Components/apexcharts/Radar";
import ApexRadialbar from "pages/Components/apexcharts/Radialbar";
import ApexScatter from "pages/Components/apexcharts/Scatter";
import ApexTimeline from "pages/Components/apexcharts/Timeline";
import ApexTreemap from "pages/Components/apexcharts/Treemap";
import FunnelCharts from "pages/Components/apexcharts/FunnelCharts";
import RangeArea from "pages/Components/apexcharts/RangeAreaCharts";

// pages

import Maintenance from "pages/Pages/Maintenance/Maintenance";
import ComingSoon from "pages/Pages/Comingsoon/ComingSoon";
import TermsContions from "pages/Pages/Terms&Condition/TermsContions";
import PrivacyPolicy from "pages/Pages/Privacypolicy/PrivacyPolicy";
import TimeLine from "pages/Pages/TimeLine/TimeLine";
import Faqs from "pages/Pages/FAQs/Faqs";
import Contacts from "pages/Pages/Contact/Contacts";
import Pricing from "pages/Pages/Pricing/index";
import Profile from "pages/Pages/Profile/index";
import ProfileSetting from "pages/Pages/Profilesetting/index";

// Tables 

import BasicTables from "pages/Components/tables/BasicTable/index";
import Datatables from "pages/Components/tables/DataTables/index";
import ReactTable from "pages/Components/tables/ReactTable/index";

// Maps

//import GoogleMap from "pages/Components/maps/GoogleMap/GoogleMap";

// Widgets

import Widgets from "pages/Components/widgets/index";

//Ecommerce
import Products from "pages/Ecommerce/Product/Products";
import ProductGrid from "pages/Ecommerce/ProductGrid/ProductGrid";
import ProductDetails from "pages/Ecommerce/ProductDetails/ProductDetails";
import CreateProduct from "pages/Ecommerce/CreateProduct/CreateProduct";
import Order from "pages/Ecommerce/Order/Order";
import OrderOverview from "pages/Ecommerce/OrderOverview/OrderOverview";
import ShopingCart from "pages/Ecommerce/ShopingCart/ShopingCart";
import Customers from "pages/Ecommerce/Customers/Customers";
import Checkout from "pages/Ecommerce/Checkout/Checkout";
import Sellers from "pages/Ecommerce/Sellers/Sellers";
//import SellersOverview from "pages/Ecommerce/SellersOverview/SellersOverview";

//File Manager
import FileManager from "pages/FileManager/FileManager";

//Learning
import CourseListview from "pages/Learning/Courses/ListView/Index";
import Overview from "pages/Learning/Courses/Overview/Overview";
import Gridview from "pages/Learning/Courses/GridView/Gridview";
import Category from "pages/Learning/Courses/Category/Category";
import CreateCourse from "pages/Learning/Courses/CreateCourse/CreateCourse";
import MyCourses from "pages/Learning/Students/MyCourses/MyCourses";
import MySubsciptions from "pages/Learning/Students/MySubscriptions/Index";
import CreateInstructor from "pages/Learning/Instructurs/CreateInstructor/CreateInstructor";
import GridViewInstructor from "pages/Learning/Instructurs/GridView/GridViewInstructor";

//Invoice
import OverviewInvoice from "pages/Invoices/OverviewInvoice/OverviewInvoice";
import CreateInvoice from "pages/Invoices/CreateInvoice/CreateInvoice";


//Support Tickets
import TicketsOverview from "pages/SupportTickets/Overview/Index";

//Real Estate
import PropertyOverview from "pages/RealEstate/PropertyOverview/PropertyOverview";
import AddEarning from "pages/RealEstate/AddProperty/AddEarning";

// import Login from "pages/Authentication/Login";

// import Login from "pages/Authentication/Login";

import Analytics from "pages/Dashboard/Analytics";
import Crm from "pages/Dashboard/Crm";
import Ecommerce from "pages/Dashboard/Ecommerce";
import Learning from "pages/Dashboard/Learning";
import RealEstate from "pages/Dashboard/RealEstate";
import Chat from "pages/Chat";
import Calendar from "pages/Calendar";
import Email from "pages/Email";
import ListingGrid from "pages/RealEstate/ListingGrid/ListingGrid";
import ListingList from "pages/RealEstate/ListingList/ListingList";
import ListingMap from "pages/RealEstate/ListingMap/ListingMap";
import AgentList from "pages/RealEstate/Agent/AgentList";
import AgentGrid from "pages/RealEstate/Agent/AgentGrid";
import AgentOverview from "pages/RealEstate/Agent/Overview";
import AgenciesList from "pages/RealEstate/Agencies/AgenciesList";
import AgenciesOverview from "pages/RealEstate/Agencies/AgenciesOverview";
import EstateEarning from "pages/RealEstate/Earning/EstateEarning";
import ListViewInstructor from "pages/Learning/Instructurs/ListView/ListViewInstructors";
import OverviewInstructor from "pages/Learning/Instructurs/Overview/OverviewInstructor";
import ListViewInvoice from "pages/Invoices/ListView/ListViewInvoice";
import ListViewTickets from "pages/SupportTickets/ListView/ListViewTickets";

// Authentication
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/Logout";
import Register from "pages/Authentication/Register";
import ForgotPassword from "pages/Authentication/ForgotPassword";
import UserProfile from "pages/Authentication/user-profile";

const authProtectedRoutes = [
    // Dashboard
    { path: "/dashboard", component: <Ecommerce /> },
    { path: "/", exact: true ,component: <Navigate to="/dashboard" /> },
    { path: "*", component: <Navigate to="/dashboard" /> },

    { path: "/dashboard-analytics", name : "Analytics Dashboard" ,component: <Analytics /> },
    { path: "/dashboard-crm", name : "Crm Dashboard" ,component: <Crm /> },
    { path: "/dashboard", name : "Ecommerce Dashboard" ,component: <Ecommerce /> },
    { path: "/dashboard-learning", name : "Learning Dashboard" ,component: <Learning /> },
    { path: "/dashboard-real-estate", name : "RealEstate Dashboard", component: <RealEstate /> },

    //Ecommerce
    { path: "/apps-ecommerce-products", name : "Ecommerce Products" ,component: <Products /> },
    { path: "/apps-ecommerce-product-grid", name : "Ecommerce Product Grid" ,component: <ProductGrid /> },
    { path: "/apps-ecommerce-product-details", name : "Ecommerce Product Details" ,component: <ProductDetails /> },
    { path: "/apps-ecommerce-add-product", name : "Ecommerce Create Product" ,component: <CreateProduct /> },
    { path: "/apps-ecommerce-orders", name : "Ecommerce Order" ,component: <Order /> },
    { path: "/apps-ecommerce-order-overview", name : "Ecommerce Order Overview" ,component: <OrderOverview /> },
    { path: "/apps-ecommerce-customers", name : "Ecommerce Customers" ,component: <Customers /> },
    { path: "/apps-ecommerce-cart", name : "Ecommerce ShopingCart" ,component: <ShopingCart /> },
    { path: "/apps-ecommerce-checkout", name : "Ecommerce Checkout" ,component: <Checkout /> },
    { path: "/apps-ecommerce-sellers", name : "Ecommerce Sellers" ,component: <Sellers /> },
    //{ path: "/apps-ecommerce-seller-overview", name : "Ecommerce Sellers Overview" ,component: <SellersOverview /> },
    //File Manager
    { path: "/apps-file-manager", name : "File Manager" ,component: <FileManager /> },

    //Learning
    { path: "/apps-learning-list", name : "CourseListview" ,component: <CourseListview /> },
    { path: "/apps-learning-overview", name : "Overview" ,component: <Overview /> },
    { path: "/apps-learning-grid", name : "Gridview" ,component: <Gridview /> },
    { path: "/apps-learning-category", name : "Category" ,component: <Category /> },
    { path: "/apps-learning-create", name : "CreateCourse" ,component: <CreateCourse /> },
    { path: "/apps-student-courses", name : "MyCourses" ,component: <MyCourses /> },
    { path: "/apps-student-subscriptions", name : "MySubsciptions" ,component: <MySubsciptions /> },

    { path: "/apps-instructors-list", name : "ListViewInstructor" ,component: <ListViewInstructor /> },
    { path: "/apps-instructors-create", name : "CreateInstructor" ,component: <CreateInstructor /> },
    { path: "/apps-instructors-grid", name : "GridViewInstructor" ,component: <GridViewInstructor /> },
    { path: "/apps-instructors-overview", name : "OverviewInstructor" ,component: <OverviewInstructor /> },

    { path: "/invoices-list", name : "ListViewInvoice" ,component: <ListViewInvoice /> },
    { path: "/apps-invoices-overview", name : "OverviewInvoice" ,component: <OverviewInvoice /> },
    { path: "/apps-invoices-create", name : "CreateInvoice" ,component: <CreateInvoice /> },

    { path: "/apps-tickets-overview", name : "TicketsOverview" ,component: <TicketsOverview /> },
    { path: "/apps-tickets-list", name : "ListViewTickets" ,component: <ListViewTickets /> },

    { path: "/apps-real-estate-grid", name : "ListingGrid" ,component: <ListingGrid /> },
    { path: "/apps-real-estate-list", name : "ListingList" ,component: <ListingList /> },
    { path: "/apps-real-estate-map", name : "ListingMap" ,component: <ListingMap /> },
    { path: "/apps-real-estate-agent-list-view", name : "AgentList" ,component: <AgentList /> },
    { path: "/apps-real-estate-agent-grid-view", name : "AgentGrid" ,component: <AgentGrid /> },
    { path: "/apps-real-estate-agent-overview", name : "AgentOverview" ,component: <AgentOverview /> },
    { path: "/apps-real-estate-agencies-list-view", name : "AgenciesList" ,component: <AgenciesList /> },
    { path: "/apps-real-estate-agencies-overview", name : "AgenciesOverview" ,component: <AgenciesOverview /> },
    { path: "/apps-real-estate-property-overview", name : "PropertyOverview" ,component: <PropertyOverview /> },
    { path: "/apps-real-estate-add-properties", name : "AddEarning" ,component: <AddEarning /> },
    { path: "/apps-real-estate-earning", name : "EstateEarning" ,component: <EstateEarning /> },

    //user prpfile
    { path: "/user-profile", name : "UserProfile" ,component: <UserProfile /> },
    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    { path: "/", exact: true, name : "Navigate" ,component: <Navigate to="/dashboard" /> },

    // Pages
    // Starter
    { path: "/pages-starter", name : "Starterpages" ,component: <Starterpages /> },

    // Terms & Condition
    { path: "/pages-privacy-policy", name : "PrivacyPolicy" ,component: <PrivacyPolicy /> },
    // Terms & Condition
    { path: "/pages-term-conditions", name : "TermsContions" ,component: <TermsContions /> },

    // Timeline
    { path: "/pages-timeline", name : "TimeLine" ,component: <TimeLine /> },

    // FAQs
    { path: "/pages-faqs", name : "Faqs" ,component: <Faqs /> },

    // Contacts
    { path: "/pages-contacts", name : "Contacts" ,component: <Contacts /> },

    // Pricing
    { path: "/pages-pricing", name : "Pricing" ,component: <Pricing /> },

    // Profile
    { path: "/pages-profile", name : "Profile" ,component: <Profile /> },

    // Profile Setting
    { path: "/pages-profile-settings", name : "ProfileSetting" ,component: <ProfileSetting /> },

    //   Bootstrap UI
    //  Alerts
    { path: "/ui-alerts", name : "Alerts" ,component: <Alerts /> },

    //  Badges
    { path: "/ui-badges", name : "Badges" ,component: <Badges /> },

    //  Buttons
    { path: "/ui-buttons", name : "Button" ,component: <Button /> },

    //  Colors
    { path: "/ui-colors", name : "Colors" ,component: <Colors /> },

    //  Cards
    { path: "/ui-cards", name : "Cards" ,component: <Cards /> },

    //  Carousel
    { path: "/ui-carousel", name : "Carousel" ,component: <Carousel /> },

    //  Dropdowns
    { path: "/ui-dropdowns", name : "DropDown" ,component: <DropDown /> },

    //  Grid
    { path: "/ui-grid", name : "Grid" ,component: <Grid /> },

    //  Images
    { path: "/ui-images", name : "Images" ,component: <Images /> },

    //  Tabs
    { path: "/ui-tabs", name : "Tabs" ,component: <Tabs /> },

    //  Accordion & Collapse
    { path: "/ui-accordions", name : "AccordianCollapse" ,component: <AccordianCollapse /> },

    //  Modals
    { path: "/ui-modals", name : "Modals" ,component: <Modals /> },

    //  Offcanvas
    { path: "/ui-offcanvas", name : "Offcanvas" ,component: <Offcanvas /> },

    //  Placeholder
    { path: "/ui-placeholders", name : "PlaceHolder" ,component: <PlaceHolder /> },

    //  Progress
    { path: "/ui-progress", name : "Progress" ,component: <Progress /> },

    //  Notifications
    { path: "/ui-notifications", name : "Notifications" ,component: <Notifications /> },

    //  Media Object
    { path: "/ui-media", name : "Media" ,component: <Media /> },

    //  Embeded Video
    { path: "/ui-embed-video", name : "Video" ,component: <Video /> },

    //  Typography
    { path: "/ui-typography", name : "Typography" ,component: <Typography /> },

    //  Lists   
    { path: "/ui-lists", name : "Lists" ,component: <Lists /> },

    //  Links   
    { path: "/ui-links", name : "Links" ,component: <Links /> },

    //  General
    { path: "/ui-general", name : "General" ,component: <General /> },

    //  Utilities
    { path: "/ui-utilities", name : "Utilities" ,component: <Utilities /> },

    // Advance UI
    // SweetAlert
    // { path: "/advance-ui-sweetalerts", name : "Utilities" ,component: <Utilities /> },

    // Scrollbar
    { path: "/advance-ui-scrollbar", name : "ScrollBar" ,component: <ScrollBar /> },

    // Swiper Slider
    { path: "/advance-ui-swiper", name : "SwiperSlider" ,component: <SwiperSlider /> },

    // Ratings
    { path: "/advance-ui-ratings", name : "Ratings" ,component: <Ratings /> },

    // Highlight
    { path: "/advance-ui-highlight", name : "HightLights" ,component: <HightLights /> },

    // Scrollspy
    // { path: "/advance-ui-scrollspy", name : "Utilities" ,component: <Utilities /> },

    // Custom UI
    // Ribbons
    { path: "/ui-ribbons", name : "Ribbons" ,component: <Ribbons /> },

    // Profile
    { path: "/ui-profile", name : "Profiles" ,component: <Profiles /> },

    // Counter
    { path: "/ui-counter", name : "Counters" ,component: <Counters /> },

    // Forms
    // Basic Elements
    { path: "/forms-elements", name : "BasicForm" ,component: <BasicForm /> },

    // Form Select
    { path: "/forms-select", name : "FormSelect" ,component: <FormSelect /> },

    // Checkboxes & Radios
    { path: "/forms-checkboxs-radios", name : "FormCheckboxRadio" ,component: <FormCheckboxRadio /> },

    // Pickers
    { path: "/forms-pickers", name : "FormPickers" ,component: <FormPickers /> },

    // Input Masks
    { path: "/forms-masks", name : "FormInputMask" ,component: <FormInputMask /> },

    // Advanced
    { path: "/forms-advanced", name : "FormAdvanced" ,component: <FormAdvanced /> },

    // Validation
    { path: "/forms-validation", name : "FormValidation" ,component: <FormValidation /> },

    // Wizard
    { path: "/forms-wizard", name : "FormWizard" ,component: <FormWizard /> },

    // Editors
    { path: "/forms-editors", name : "EditorForm" ,component: <EditorForm /> },

    // File Uploads
    { path: "/forms-file-uploads", name : "FileUpload" ,component: <FileUpload /> },

    // Form Layouts
    { path: "/forms-layouts", name : "FormLayout" ,component: <FormLayout /> },

    // Tables
    // Basic Tables
    { path: "/tables-basic", name : "BasicTables" ,component: <BasicTables /> },

    // React Tables
    { path: "/tables-react", name : "ReactTable" ,component: <ReactTable /> },

    // Data Tables
    { path: "/tables-datatables", name : "Datatables" ,component: <Datatables /> },

    // ApexCharts
    // Line
    { path: "/charts-apex-line", name : "ApexLine" ,component: <ApexLine /> },

    // Area
    { path: "/charts-apex-area", name : "ApexArea" ,component: <ApexArea /> },

    // Column
    { path: "/charts-apex-column", name : "ApexColumn" ,component: <ApexColumn /> },

    // Bar
    { path: "/charts-apex-bar", name : "ApexBar" ,component: <ApexBar /> },

    // Mixed
    { path: "/charts-apex-mixed", name : "ApexMixed" ,component: <ApexMixed /> },

    // Timeline
    { path: "/charts-apex-timeline", name : "ApexTimeline" ,component: <ApexTimeline /> },

    // Candlestick
    { path: "/charts-apex-candlestick", name : "ApexCandle" ,component: <ApexCandle /> },

    // Boxplot
    { path: "/charts-apex-boxplot", name : "ApexBoxplot" ,component: <ApexBoxplot /> },

    // Bubble
    { path: "/charts-apex-bubble", name : "ApexBubble" ,component: <ApexBubble /> },

    // Scatter
    { path: "/charts-apex-scatter", name : "ApexScatter" ,component: <ApexScatter /> },

    // Heatmap
    { path: "/charts-apex-heatmap", name : "ApexHeatmap" ,component: <ApexHeatmap /> },

    // Treemap
    { path: "/charts-apex-treemap", name : "ApexTreemap" ,component: <ApexTreemap /> },

    // Pie
    { path: "/charts-apex-pie", name : "ApexPie" ,component: <ApexPie /> },

    // Radialbar
    { path: "/charts-apex-radialbar", name : "ApexRadialbar" ,component: <ApexRadialbar /> },

    // Radar
    { path: "/charts-apex-radar", name : "ApexRadar" ,component: <ApexRadar /> },

    // Polar Area
    { path: "/charts-apex-polar", name : "ApexPolar" ,component: <ApexPolar /> },
    
    //Funnel chart 
    { path : "/charts-apex-funnel", name : "Funnel", component : <FunnelCharts />},
    { path : "/charts-apex-range-area", name : "RangeArea", component : <RangeArea />},

    // Icons
    // Remix Icon
    { path: "/icons-remix", name : "RemixIcons" ,component: <RemixIcons /> },

    // Boxicons Icon
    { path: "/icons-boxicons", name : "BoxIcons" ,component: <BoxIcons /> },

    // Material Design Icon
    { path: "/icons-materialdesign", name : "MaterialDesign" ,component: <MaterialDesign /> },

    // Bootstrap Icon
    { path: "/icons-bootstrap", name : "BootstrapIcon" ,component: <BootstrapIcon /> },

    // Phosphor Icon
    { path: "/icons-phosphor", name : "PhosphorIcon" ,component: <PhosphorIcon /> },


    // Maps
    // Google
    //{ path: "/maps-google", name : "GoogleMap" ,component: <GoogleMap /> },
    // Widgets
    { path: "/widgets", name : "Widgets" ,component: <Widgets /> },
    { path: "/apps-calendar", name : "Calendar" ,component: <Calendar /> },
    { path: "/apps-chat", name : "Chat" ,component: <Chat /> },
    { path: "/apps-email", name : "Email" ,component: <Email /> },
];

const publicRoutes = [
    // Authentication
    { path: "/login", name : "Login" ,component: <Login /> },
    { path: "/logout", name : "Logout" ,component: <Logout /> },
    { path: "/register", name : "Register" ,component: <Register /> },
    { path: "/forgot-password", name : "ForgotPassword" ,component: <ForgotPassword /> },

    // Authentication Inner
    // Sign in
    { path: "/auth-signin", name : "Signin" ,component: <Signin /> },

    // Sign up
    { path: "/auth-signup", name : "SignUp" ,component: <SignUp /> },

    // Password Reset
    { path: "/auth-pass-reset", name : "PasswordReset" ,component: <PasswordReset /> },

    // Password Create
    { path: "/auth-pass-change", name : "PasswordCreate" ,component: <PasswordCreate /> },

    // Lock Screen
    { path: "/auth-lockscreen", name : "LockScreen" ,component: <LockScreen /> },

    // Logout
    { path: "/auth-logout", name : "LogOut" ,component: <LogOut /> },

    // Success Message
    { path: "/auth-success-msg", name : "SuccessMsg" ,component: <SuccessMsg /> },

    // Two Step Verification
    { path: "/auth-twostep", name : "Twostep" ,component: <Twostep /> },

    // Error
    // Error 404
    { path: "/auth-404", name : "Fourzerofour" ,component: <Fourzerofour /> },

    // Error 500
    { path: "/auth-500", name : "Fivezerozero" ,component: <Fivezerozero /> },

    // Error 503
    { path: "/auth-503", name : "Fivezerothree" ,component: <Fivezerothree /> },

    // Offline Page
    { path: "/auth-offline", name : "OfflinePage" ,component: <OfflinePage /> },


    // Pages
    // Maintenance
    { path: "/pages-maintenance", name : "Maintenance" ,component: <Maintenance /> },

    // Coming Soon
    { path: "/pages-coming-soon", name : "ComingSoon" ,component: <ComingSoon /> },

    // { path: "/login", component: <Login /> },

];

export { authProtectedRoutes, publicRoutes };