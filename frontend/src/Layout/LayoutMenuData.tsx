import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isLearning, setIsLearning] = useState(false);
    const [isSupportTicket, setIsSupportTicket] = useState(false);
    const [isRealEstate, setIsRealEstate] = useState(false);
    const [isAuthentication, setIsAuthentication] = useState(false);
    const [isPages, setIsPages] = useState(false);

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
    const [isMultiLevel] = useState(false);

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
            id: "forms",
            label: "Registro Avaluos",
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
                
                {//URL para formulario de avaluo
                    id: "avaluo-form",
                    label: "Formulario de Avalúo",
                    link: "/avaluo/create",
                    parentId: "forms",
                },

            ],
        },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};

export default Navdata;