import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isLearning, setIsLearning] = useState(false);
    const [isCourses, setIsCourses] = useState(false);
    const [isStudents, setIsStudents] = useState(false);
    const [isInstructors, setIsInstructors] = useState(false);
    const [isSupportTicket, setIsSupportTicket] = useState(false);
    const [isRealEstate, setIsRealEstate] = useState(false);
    const [isAuthentication, setIsAuthentication] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isagent, setIsAgent] = useState(false);
    const [isagencies, setIsAgencies] = useState(false);

    // Components
    const [isBootstrapUi, setIsBootstrapUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isCustomUi, setIsCustomUi] = useState(false);
    const [isWidgets, setIsWidgets] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);

    const [isOrder, setIsOrder] = useState(false);
    const [isInvoice, setIsInvoice] = useState(false);
    const [isShipping, setIsShipping] = useState(false);
    const [isLocalization, setIsLocalization] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Authentication
    const [isError, setIsError] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("sub-items");
                var menusId = document.getElementById(id);
                if (menusId){
                    (menusId.parentElement as HTMLElement).classList.remove("show");
                }
            });
            e.target.classList.add("active");
        }
    }
    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');

        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Ecommerce') {
            setIsEcommerce(false);
        }
        if (iscurrentState !== 'Learning') {
            setIsLearning(false);
        }
        if (iscurrentState !== 'Invoice') {
            setIsInvoice(false);
        }
        if (iscurrentState !== 'Support Ticket') {
            setIsSupportTicket(false);
        }
        if (iscurrentState !== 'Real Estate') {
            setIsRealEstate(false);
        }
        if (iscurrentState !== 'Authentication') {
            setIsAuthentication(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Bootstrap UI') {
            setIsBootstrapUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Custom UI') {
            setIsCustomUi(false);
        }
        if (iscurrentState !== 'Widgets') {
            setIsWidgets(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }

        if (iscurrentState !== 'Orders') {
            setIsOrder(false);
        }
        // if (iscurrentState !== 'Sellers') {
        //     setIsSellers(false);
        // }
        if (iscurrentState !== 'Shipping') {
            setIsShipping(false);
        }
        if (iscurrentState !== 'Localization') {
            setIsLocalization(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
    }, [
        iscurrentState,
        isDashboard,
        isLearning,
        isRealEstate,
        isEcommerce,
        isSupportTicket,
        isOrder,
        isInvoice,
        isShipping,
        isLocalization,
        isAuth,
        isMultiLevel,
        isAuthentication,
        isPages,
        isBootstrapUi,
        isAdvanceUi,
        isWidgets,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ph-gauge",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            stateVariables: isDashboard,
            subItems: [
                {
                    id: "analytics",
                    label: "Analytics",
                    link: "/dashboard-analytics",
                    parentId: "dashboard",
                },
                {
                    id: "crm",
                    label: "CRM",
                    link: "/dashboard-crm",
                    parentId: "dashboard",
                },
                {
                    id: "ecommerce",
                    label: "Ecommerce",
                    link: "/dashboard",
                    parentId: "dashboard",
                },
                {
                    id: "learning",
                    label: "Learning",
                    link: "/dashboard-learning",
                    parentId: "dashboard",
                },
                {
                    id: "real-estate",
                    label: "Real Estate",
                    link: "/dashboard-real-estate",
                    parentId: "dashboard",
                },
            ],
        },
        {
            label: "Apps",
            isHeader: true,
        },
        {
            id: "apps-calendar",
            label: "Calendar",
            icon: "ph-calendar",
            link: "/apps-calendar",
        },
        {
            id: "apps-chat",
            label: "Chat",
            icon: "ph-chats",
            link: "/apps-chat",
        },
        {
            id: "apps-email",
            label: "Email",
            icon: "ph-envelope",
            link: "/apps-email",
        },
        {
            id: "ecommerce",
            label: "Ecommerce",
            icon: "ph-storefront",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsEcommerce(!isEcommerce);
                setIscurrentState('Ecommerce');
                updateIconSidebar(e);
            },
            stateVariables: isEcommerce,
            subItems: [
                { id: 1, label: "Products", link: "/apps-ecommerce-products", parentId: "ecommerce" },
                { id: 2, label: "Product Grid", link: "/apps-ecommerce-product-grid", parentId: "ecommerce" },
                { id: 2, label: "Product Details", link: "/apps-ecommerce-product-details", parentId: "ecommerce" },
                { id: 3, label: "Create Product", link: "/apps-ecommerce-add-product", parentId: "ecommerce" },
                { id: 4, label: "Orders", link: "/apps-ecommerce-orders", parentId: "ecommerce" },
                { id: 5, label: "Order Overview", link: "/apps-ecommerce-order-overview", parentId: "ecommerce" },
                { id: 6, label: "Customers", link: "/apps-ecommerce-customers", parentId: "ecommerce" },
                { id: 7, label: "Shopping Cart", link: "/apps-ecommerce-cart", parentId: "ecommerce" },
                { id: 8, label: "Checkout", link: "/apps-ecommerce-checkout", parentId: "ecommerce" },
                { id: 9, label: "Sellers", link: "/apps-ecommerce-sellers", parentId: "ecommerce" },
                { id: 10, label: "Seller Overview", link: "/apps-ecommerce-seller-overview", parentId: "ecommerce" },
            ],
        },
        {
            id: "apps-file-manager",
            label: "File Manager",
            icon: "ph-folder-open",
            link: "/apps-file-manager",
        },
        {
            id: "learning",
            label: "Learning",
            icon: "ph-graduation-cap",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsLearning(!isLearning);
                setIscurrentState('Learning');
                updateIconSidebar(e);
            },
            stateVariables: isLearning,
            subItems: [
                {
                    id: "courses",
                    label: "Courses",
                    link: "/#",
                    parentId: "learning",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsCourses(!isCourses);
                    },
                    stateVariables: isCourses,
                    subItems: [
                        {
                            id: 1,
                            label: "List View",
                            link: "/apps-learning-list",
                            parentId: "learning"
                        },
                        {
                            id: 2,
                            label: "Grid View",
                            link: "/apps-learning-grid",
                            parentId: "learning"
                        },
                        {
                            id: 3,
                            label: "Category",
                            link: "/apps-learning-category",
                            parentId: "learning"
                        },
                        {
                            id: 4,
                            label: "Overview",
                            link: "/apps-learning-overview",
                            parentId: "learning"
                        },
                        {
                            id: 5,
                            label: "Create Course",
                            link: "/apps-learning-create",
                            parentId: "learning"
                        },
                    ]
                },
                {
                    id: "students",
                    label: "Students",
                    link: "/#",
                    parentId: "learning",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsStudents(!isStudents);
                    },
                    stateVariables: isStudents,
                    subItems: [
                        {
                            id: 1,
                            label: "My Subscriptions",
                            link: "/apps-student-subscriptions",
                            parentId: "learning"
                        },
                        {
                            id: 2,
                            label: "My Courses",
                            link: "/apps-student-courses",
                            parentId: "learning"
                        },
                    ]
                },
                {
                    id: "instructors",
                    label: "Instructors",
                    link: "/#",
                    parentId: "learning",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsInstructors(!isInstructors);
                    },
                    stateVariables: isInstructors,
                    subItems: [
                        {
                            id: 1,
                            label: "List View",
                            link: "/apps-instructors-list",
                            parentId: "learning"
                        },
                        {
                            id: 2,
                            label: "Grid View",
                            link: "/apps-instructors-grid",
                            parentId: "learning"
                        },
                        {
                            id: 3,
                            label: "Overview",
                            link: "/apps-instructors-overview",
                            parentId: "learning"
                        },
                        {
                            id: 4,
                            label: "Create Instructors",
                            link: "/apps-instructors-create",
                            parentId: "learning"
                        },
                    ]
                },
            ],
        },
        {
            id: "invoice",
            label: "Invoice",
            icon: "ph-file-text",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsInvoice(!isInvoice);
                setIscurrentState('Invoice');
                updateIconSidebar(e);
            },
            stateVariables: isInvoice,
            subItems: [
                {
                    id: "listview",
                    label: "List View",
                    link: "/invoices-list",
                    parentId: "invoice",
                },
                {
                    id: "overview",
                    label: "Overview",
                    link: "/apps-invoices-overview",
                    parentId: "invoice",
                },
                {
                    id: "createinvoice",
                    label: "Create Invoice",
                    link: "/apps-invoices-create",
                    parentId: "invoice",
                },
            ],
        },
        {
            id: "support-ticket",
            label: "Support Ticket",
            icon: "ph-ticket",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsSupportTicket(!isSupportTicket);
                setIscurrentState('Support Ticket');
                updateIconSidebar(e);
            },
            stateVariables: isSupportTicket,
            subItems: [
                {
                    id: "listview",
                    label: "List View",
                    link: "/apps-tickets-list",
                    parentId: "support-ticket",
                },
                {
                    id: "overview",
                    label: "Overview",
                    link: "/apps-tickets-overview",
                    parentId: "support-ticket",
                },
            ],
        },
        {
            id: "real-estate",
            label: "Real Estate",
            icon: "ph-buildings",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsRealEstate(!isRealEstate);
                setIscurrentState('Real Estate');
                updateIconSidebar(e);
            },
            stateVariables: isRealEstate,
            subItems: [
                {
                    id: "sign in",
                    label: "Listing Grid",
                    link: "/apps-real-estate-grid",
                    parentId: "real-estate",
                },
                {
                    id: "listinglist",
                    label: "Listing List",
                    link: "/apps-real-estate-list",
                    parentId: "real-estate",
                },
                {
                    id: "listingmap",
                    label: "Listing Map",
                    link: "/apps-real-estate-map",
                    parentId: "real-estate",
                },
                {
                    id: "property-overview",
                    label: "Property Overview",
                    link: "/apps-real-estate-property-overview",
                    parentId: "real-estate",
                },
                {
                    id: "agent",
                    label: "Agent",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsAgent(!isagent);
                    },
                    stateVariables: isagent,
                    subItems: [
                        { id: 1, label: "List View", link: "/apps-real-estate-agent-list-view" },
                        { id: 2, label: "Grid View", link: "/apps-real-estate-agent-grid-view" },
                        { id: 3, label: "Overview", link: "/apps-real-estate-agent-overview" },
                    ]
                },
                {
                    id: "agencies",
                    label: "Agencies",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsAgencies(!isagencies);
                    },
                    stateVariables: isagencies,
                    subItems: [
                        { id: 1, label: "List View", link: "/apps-real-estate-agencies-list-view" },
                        { id: 3, label: "Overview", link: "/apps-real-estate-agencies-overview" },
                    ]
                },
                {
                    id: "add-property",
                    label: "Add Property",
                    link: "/apps-real-estate-add-properties",
                    parentId: "real-estate",
                },
                {
                    id: "earnings",
                    label: "Earnings",
                    link: "/apps-real-estate-earning",
                    parentId: "real-estate",
                },
            ],
        },
        {
            label: "Pages",
            isHeader: true,
        },
        {
            id: "authentication",
            label: "Authentication",
            icon: "ph-user-circle",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAuthentication(!isAuthentication);
                setIscurrentState('Authentication');
                updateIconSidebar(e);
            },
            stateVariables: isAuthentication,
            subItems: [
                {
                    id: "signin",
                    label: "Sign In",
                    link: "/auth-signin",
                    parentId: "authentication"
                },
                {
                    id: "sign up",
                    label: "Sign Up",
                    link: "/auth-signup",
                    parentId: "authentication"
                },
                {
                    id: "password-reset",
                    label: "Password Reset",
                    link: "/auth-pass-reset",
                    parentId: "authentication"
                },
                {
                    id: "password-create",
                    label: "Password Create",
                    link: "/auth-pass-change",
                    parentId: "authentication"
                },
                {
                    id: "lockscreen",
                    label: "Lock Screen",
                    link: "/auth-lockscreen",
                    parentId: "authentication"
                },
                {
                    id: "logout",
                    label: "Logout",
                    link: "/auth-logout",
                    parentId: "authentication"
                },
                {
                    id: "successmessage",
                    label: "Success Message",
                    link: "/auth-success-msg",
                    parentId: "authentication"
                },
                {
                    id: "verification",
                    label: "Two Step Verification",
                    link: "/auth-twostep",
                    parentId: "authentication"
                },
                {
                    id: "error",
                    label: "Error",
                    link: "/#",
                    parentId: "authentication",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsError(!isError);
                    },
                    stateVariables: isError,
                    subItems: [
                        {
                            id: 1,
                            label: "404 Error",
                            link: "/auth-404",
                            parentId: "authentication"
                        },
                        {
                            id: 2,
                            label: "500",
                            link: "/auth-500",
                            parentId: "authentication"
                        },
                        {
                            id: 3,
                            label: "503",
                            link: "/auth-503",
                            parentId: "authentication"
                        },
                        {
                            id: 4,
                            label: "Offline Page",
                            link: "/auth-offline",
                            parentId: "authentication"
                        },
                    ]
                },
            ],
        },
        {
            id: "pages",
            label: "Pages",
            icon: "ph-address-book",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "starter",
                    label: "Starter",
                    link: "/pages-starter",
                    parentId: "pages"
                },
                {
                    id: "profile",
                    label: "Profile",
                    link: "/pages-profile",
                    parentId: "pages"
                },
                {
                    id: "profilesettings",
                    label: "Profile Settings",
                    link: "/pages-profile-settings",
                    parentId: "pages"
                },
                {
                    id: "contacts",
                    label: "Contacts",
                    link: "/pages-contacts",
                    parentId: "pages"
                },
                {
                    id: "timeline",
                    label: "Timeline",
                    link: "/pages-timeline",
                    parentId: "pages"
                },
                {
                    id: "faqs",
                    label: "FAQs",
                    link: "/pages-faqs",
                    parentId: "pages"
                },
                {
                    id: "pricing",
                    label: "Pricing",
                    link: "/pages-pricing",
                    parentId: "pages"
                },
                {
                    id: "maintenace",
                    label: "Maintenance",
                    link: "/pages-maintenance",
                    parentId: "pages"
                },
                {
                    id: "comingsoon",
                    label: "Coming Soon",
                    link: "/pages-coming-soon",
                    parentId: "pages"
                },
                {
                    id: "privacypolicy",
                    label: "Privacy Policy",
                    link: "/pages-privacy-policy",
                    parentId: "pages"
                },
                {
                    id: "terms",
                    label: "Terms & Conditions",
                    link: "/pages-term-conditions",
                    parentId: "pages"
                }
            ]
        },
        {
            label: "Components",
            isHeader: true,
        },
        {
            id: "bootstrapui",
            label: "Bootstrap UI",
            icon: "ph-bandaids",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsBootstrapUi(!isBootstrapUi);
                setIscurrentState('Bootstrap UI');
                updateIconSidebar(e);
            },
            stateVariables: isBootstrapUi,
            subItems: [
                {
                    id: "alerts",
                    label: "Alerts",
                    link: "/ui-alerts",
                    parentId: "boostrapui",
                },
                { id: 2, label: "Badges", link: "/ui-badges", parentId: "boostrapui" },
                { id: 3, label: "Buttons", link: "/ui-buttons", parentId: "boostrapui" },
                { id: 4, label: "Colors", link: "/ui-colors", parentId: "boostrapui" },
                { id: 5, label: "Cards", link: "/ui-cards", parentId: "boostrapui" },
                { id: 6, label: "Carousel", link: "/ui-carousel", parentId: "boostrapui" },
                { id: 7, label: "Dropdowns", link: "/ui-dropdowns", parentId: "boostrapui" },
                { id: 8, label: "Grid", link: "/ui-grid", parentId: "boostrapui" },
                { id: 9, label: "Images", link: "/ui-images", parentId: "boostrapui" },
                { id: 10, label: "Tabs", link: "/ui-tabs", parentId: "boostrapui" },
                { id: 11, label: "Accordions & Collapse", link: "/ui-accordions", parentId: "boostrapui" },
                { id: 12, label: "Modals", link: "/ui-modals", parentId: "boostrapui" },
                { id: 13, label: "Offcanvas", link: "/ui-offcanvas", parentId: "boostrapui" },
                { id: 14, label: "Placeholder", link: "/ui-placeholders", parentId: "boostrapui" },
                { id: 15, label: "Progress", link: "/ui-progress", parentId: "boostrapui" },
                { id: 16, label: "Notifications", link: "/ui-notifications", parentId: "boostrapui" },
                { id: 17, label: "Media Object", link: "/ui-media", parentId: "boostrapui" },
                { id: 18, label: "Embed Video", link: "/ui-embed-video", parentId: "boostrapui" },
                { id: 19, label: "Typography", link: "/ui-typography", parentId: "boostrapui" },
                { id: 20, label: "Lists", link: "/ui-lists", parentId: "boostrapui" },
                { id: 21, label: "Links", link: "/ui-links", parentId: "boostrapui" },
                { id: 22, label: "General", link: "/ui-general", parentId: "boostrapui" },
                { id: 23, label: "Utilities", link: "/ui-utilities", parentId: "boostrapui" },


            ],
        },
        {
            id: "advanceui",
            label: "Advance UI",
            icon: "bi bi-layers",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAdvanceUi(!isAdvanceUi);
                setIscurrentState('AdvanceUi');
                updateIconSidebar(e);
            },
            stateVariables: isAdvanceUi,
            subItems: [

                { id: "Scrollbar", label: "Scrollbar", link: "/advance-ui-scrollbar", parentId: "advanceui" },
                { id: 2, label: "Swiper Slider", link: "/advance-ui-swiper", parentId: "advanceui" },
                { id: 3, label: "Ratings", link: "/advance-ui-ratings", parentId: "advanceui" },
                { id: 4, label: "Highlight", link: "/advance-ui-highlight", parentId: "advanceui" },
            ],
        },
        {
            id: "customui",
            label: "Custom UI",
            icon: "ph-wrench",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCustomUi(!isCustomUi);
                setIscurrentState('Custom UI');
                updateIconSidebar(e);
            },
            stateVariables: isCustomUi,
            subItems: [
                {
                    id: "ribbons",
                    label: "Ribbons",
                    link: "/ui-ribbons",
                    parentId: "customui",
                },
                { id: 2, label: "Profile", link: "/ui-profile", parentId: "customui" },
                { id: 3, label: "Counter", link: "/ui-counter", parentId: "customui" },
            ],
        },
        {
            id: "widgets",
            label: "Widgets",
            icon: "ph-paint-brush-broad",
            link: "/widgets",
        },
        {
            id: "forms",
            label: "Forms",
            icon: "ri-file-list-3-line",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsForms(!isForms);
                setIscurrentState('Forms');
                updateIconSidebar(e);
            },
            stateVariables: isForms,
            subItems: [
                {
                    id: "basicElements",
                    label: "Basic Elements",
                    link: "/forms-elements",
                    parentId: "forms",
                },
                { id: 2, label: "Form Select", link: "/forms-select", parentId: "forms" },
                { id: 3, label: "Checkbox & Radio", link: "/forms-checkboxs-radios", parentId: "forms" },
                { id: 4, label: "Pickers", link: "/forms-pickers", parentId: "forms" },
                { id: 5, label: "Input Masks", link: "/forms-masks", parentId: "forms" },
                { id: 6, label: "Form Advanced", link: "/forms-advanced", parentId: "forms" },
                { id: 7, label: "Validation", link: "/forms-validation", parentId: "forms" },
                { id: 8, label: "Wizard", link: "/forms-wizard", parentId: "forms" },
                { id: 9, label: "Editors", link: "/forms-editors", parentId: "forms" },
                { id: 10, label: "File Upload", link: "/forms-file-uploads", parentId: "forms" },
                { id: 11, label: "Form Layout", link: "/forms-layouts", parentId: "forms" },
                {//URL para formulario de avaluo
                    id: "avaluo-form",
                    label: "Formulario de Avalúo",
                    link: "/avaluo/create",
                    parentId: "forms",
                },

            ],
        },
        {
            id: "tables",
            label: "Tables",
            icon: "ph-table",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
            subItems: [
                {
                    id: "basicTables",
                    label: "Basic Tables",
                    link: "/tables-basic",
                    parentId: "tables",
                },
                { id: 2, label: "React Tables", link: "/tables-react", parentId: "tables" },
                { id: 3, label: "Datatables", link: "/tables-datatables", parentId: "tables" },
            ],
        },
        {
            id: "apexcharts",
            label: "Apexcharts",
            icon: "ph-chart-pie-slice",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIscurrentState('Charts');
                updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                {
                    id: "line",
                    label: "Line",
                    link: "/charts-apex-line",
                    parentId: "apexcharts",
                },
                { id: 2, label: "Area", link: "/charts-apex-area", parentId: "apexcharts" },
                { id: 3, label: "Column", link: "/charts-apex-column", parentId: "apexcharts" },
                { id: 4, label: "Bar", link: "/charts-apex-bar", parentId: "apexcharts" },
                { id: 5, label: "Mixed", link: "/charts-apex-mixed", parentId: "apexcharts" },
                { id: 6, label: "Timeline", link: "/charts-apex-timeline", parentId: "apexcharts" },
                { id: 7, label: "Range Area", link: "/charts-apex-range-area", parentId: "apexcharts" },
                { id: 8, label: "Funnel", link: "/charts-apex-funnel", parentId: "apexcharts" },
                { id: 9, label: "Candlestick", link: "/charts-apex-candlestick", parentId: "apexcharts" },
                { id: 10, label: "Boxplot", link: "/charts-apex-boxplot", parentId: "apexcharts" },
                { id: 11, label: "Bubble", link: "/charts-apex-bubble", parentId: "apexcharts" },
                { id: 12, label: "Scatter", link: "/charts-apex-scatter", parentId: "apexcharts" },
                { id: 13, label: "Heatmap", link: "/charts-apex-heatmap", parentId: "apexcharts" },
                { id: 14, label: "Treemap", link: "/charts-apex-treemap", parentId: "apexcharts" },
                { id: 15, label: "Pie", link: "/charts-apex-pie", parentId: "apexcharts" },
                { id: 16, label: "Radialbar", link: "/charts-apex-radialbar", parentId: "apexcharts" },
                { id: 17, label: "Radar", link: "/charts-apex-radar", parentId: "apexcharts" },
                { id: 18, label: "Polar", link: "/charts-apex-polar", parentId: "apexcharts" },
            ],
        },
        {
            id: "icons",
            label: "Icons",
            icon: "ph-traffic-cone",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsIcons(!isIcons);
                setIscurrentState('Icons');
                updateIconSidebar(e);
            },
            stateVariables: isIcons,
            subItems: [
                {
                    id: "remix",
                    label: "Remix",
                    link: "/icons-remix",
                    parentId: "icons",
                },
                { id: 2, label: "BoxIcons", link: "/icons-boxicons", parentId: "icons" },
                { id: 3, label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
                { id: 4, label: "Bootstrap", link: "/icons-bootstrap", parentId: "icons" },
                { id: 5, label: "Phosphor", link: "/icons-phosphor", parentId: "icons" },
            ],
        },
        {
            id: "googleMaps",
            label: "Google Map",
            icon: "ph-map-trifold",
            link: "/maps-google",
        },
        {
            id: "multilevel",
            label: "Multi Level",
            icon: "bi bi-share",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsMultiLevel(!isMultiLevel);
                setIscurrentState('MuliLevel');
                updateIconSidebar(e);
            },
            stateVariables: isMultiLevel,
            subItems: [
                { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
                {
                    id: "level1.2",
                    label: "Level 1.2",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    subItems: [
                        { id: 1, label: "Level 2.1", link: "/#" },
                        {
                            id: "level2.2",
                            label: "Level 2.2",
                            link: "/#",
                            isChildItem: true,
                            click: function (e: any) {
                                e.preventDefault();
                                setIsLevel2(!isLevel2);
                            },
                            stateVariables: isLevel2,
                            subItems: [
                                { id: 1, label: "Level 3.1", link: "/#" },
                                { id: 2, label: "Level 3.2", link: "/#" },
                            ]
                        },
                    ]
                },
            ],
        },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};

export default Navdata;