//Logo Images
import ReactImg from "../../assets/images/learning/react.png";
import shopifyImg from "../../assets/images/learning/shopify.png";
import sketchImg from "../../assets/images/learning/sketch.png";
import webpackImg from "../../assets/images/learning/webpack.png";
import laravelImg from "../../assets/images/learning/laravel.png";
import flaskImg from "../../assets/images/learning/flask.png";
import coreImg from "../../assets/images/learning/core.png";
import tailwindImg from "../../assets/images/learning/tailwindcss.png";
import firefoxImg from "../../assets/images/brands/firefox.png";
import mysqlImg from "../../assets/images/learning/mysql.png";
import symphonyImg from "../../assets/images/learning/symfony.png";
import microsoftImg from "../../assets/images/brands/microsoft.png";
import dribbleImg from "../../assets/images/brands/dribbble.png";
import cloudComputingImg from "../../assets/images/brands/cloud-computing.png";
import chromeImg from "../../assets/images/brands/chrome.png";

//user Images
import avatar1 from "../../assets/images/users/32/avatar-1.jpg";
import avatar2 from "../../assets/images/users/32/avatar-2.jpg";
import avatar3 from "../../assets/images/users/32/avatar-3.jpg";
import avatar4 from "../../assets/images/users/32/avatar-4.jpg";
import avatar5 from "../../assets/images/users/32/avatar-5.jpg";
import avatar6 from "../../assets/images/users/32/avatar-6.jpg";
import avatar7 from "../../assets/images/users/32/avatar-7.jpg";
import avatar8 from "../../assets/images/users/32/avatar-8.jpg";
import avatar9 from "../../assets/images/users/32/avatar-9.jpg";
import avatar10 from "../../assets/images/users/32/avatar-10.jpg";


const gridview = [
    {
        id: 1,
        logoImg: { preview: ReactImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Intermediate",
        badgeColor: "info",
        icon: "off",
        cardTitle: "Advanced React and Redux",
        course: "React Development",
        courseDuration: "6 Months",
        students: 256,
        lessons: 15,
        userImg: avatar2,
        username: "Themesbrand",
        status: "Open"
    },
    {
        id: 2,
        logoImg: { preview: shopifyImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Beginner",
        badgeColor: "success",
        icon: "on",
        cardTitle: "The Complete Shopify Dropship course",
        course: "Shopify Development",
        courseDuration: "1 Years",
        students: 120,
        lessons: 68,
        userImg: avatar3,
        username: "Ayaan Bowen",
        status: "Close"
    },
    {
        id: 3,
        logoImg: { preview: sketchImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Advance",
        icon: "on",
        badgeColor: "warning",
        cardTitle: "UI/UX Style Guide With Sketch",
        course: "Graphic Design",
        courseDuration: "7 Months",
        students: 120,
        lessons: 68,
        userImg: avatar6,
        username: "Zachary Stokes",
        status: "Open"
    },
    {
        id: 4,
        logoImg: { preview: webpackImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Intermediate",
        icon: "off",
        badgeColor: "primary",
        cardTitle: "Digital Marketing",
        course: "Marketing & Management",
        courseDuration: "2 Years",
        students: 146,
        lessons: 93,
        userImg: avatar4,
        username: "Nelson Schaden",
        status: "Close"
    },
    {
        id: 5,
        logoImg: { preview: laravelImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Advance",
        icon: "on",
        badgeColor: "danger",
        cardTitle: "Master Laravel for Beginners & Intermediate",
        course: "Laravel Development",
        courseDuration: "1 Years",
        students: 84,
        lessons: 57,
        userImg: avatar9,
        username: "Ophelia Steuber",
        status: "Open"
    },
    {
        id: 6,
        logoImg: { preview: flaskImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Beginner",
        icon: "on",
        badgeColor: "dark",
        cardTitle: "REST APIs With Flask",
        course: "Flask Development",
        courseDuration: "3 Years",
        students: 364,
        lessons: 230,
        userImg: avatar1,
        username: "Sarai Schmidt",
        status: "Close"
    },
    {
        id: 7,
        logoImg: { preview: coreImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Intermediate",
        icon: "off",
        badgeColor: "primary",
        cardTitle: "Asp.Net Core 7 True Ultimate Guide",
        course: "Asp.Net Development",
        courseDuration: "8 Years",
        students: 321,
        lessons: 49,
        userImg: avatar10,
        username: "Deondre Huel",
        status: "Open"
    }, {
        id: 8,
        logoImg: { preview: tailwindImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Beginner",
        icon: "on",
        badgeColor: "info",
        cardTitle: "Tailwind CSS From Scratch",
        course: "Web Design",
        courseDuration: "8 Months",
        students: 362,
        lessons: 101,
        userImg: avatar8,
        username: "Nelson Schaden",
        status: "Close"
    },
    {
        id: 9,
        logoImg: { preview: firefoxImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Advance",
        icon: "on",
        badgeColor: "danger",
        cardTitle: "Conflict Management with Emotional Intelligence",
        course: "Marketing & Management",
        courseDuration: "1 Years",
        students: 159,
        lessons: 43,
        userImg: avatar7,
        username: "Prezy Mark",
        status: "Open"
    }, {
        id: 10,
        logoImg: { preview: mysqlImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        badgeText: "Intermediate",
        icon: "on",
        badgeColor: "info",
        cardTitle: "Fundamentals of Database Engineering",
        course: "PHP Development",
        courseDuration: "9 Months",
        students: 320,
        lessons: 87,
        userImg: avatar5,
        username: "Domenic Dach",
        status: "Close"
    },

]

const category = [
    {
        id: 1,
        logoImg: { preview: ReactImg, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        title: "React Development",
        courseCount: 250,
        cardColor: "info"
    },
    {
        id: 2,
        logoImg: { preview: flaskImg, formattedSize: "4.82 KB", path: "img-2.png", size: '3200' },
        title: "Flask Development",
        courseCount: 120,
        cardColor: "dark"
    }, {
        id: 3,
        logoImg: { preview: shopifyImg, formattedSize: "4.87 KB", path: "img-3.png", size: '3300' },
        title: "Shopify Development",
        courseCount: 65,
        cardColor: "success"
    }, {
        id: 4,
        logoImg: { preview: firefoxImg, formattedSize: "4.87 KB", path: "img-4.png", size: '3034' },
        title: "Marketing & Management",
        courseCount: 50,
        cardColor: "danger"
    }, {
        id: 5,
        logoImg: { preview: tailwindImg, formattedSize: "4.87 KB", path: "img-5.png", size: '3400' },
        title: "Web Design",
        courseCount: 345,
        cardColor: "info"
    }, {
        id: 6,
        logoImg: { preview: coreImg, formattedSize: "4.87 KB", path: "img-6.png", size: '3500' },
        title: "ASP.NET Development",
        courseCount: 69,
        cardColor: "primary"
    }, {
        id: 7,
        logoImg: { preview: laravelImg, formattedSize: "4.87 KB", path: "img-7.png", size: '3060' },
        title: "Laravel Development",
        courseCount: 250,
        cardColor: "info"
    }, {
        id: 8,
        logoImg: { preview: mysqlImg, formattedSize: "4.87 KB", path: "img-8.png", size: '3700' },
        title: "PHP Development",
        courseCount: 25,
        cardColor: "primary"
    }, {
        id: 9,
        logoImg: { preview: sketchImg, formattedSize: "4.87 KB", path: "img-9.png", size: '3080' },
        title: "Graphic Design",
        courseCount: 25,
        cardColor: "warning"
    }, {
        id: 10,
        logoImg: { preview: symphonyImg, formattedSize: "4.87 KB", path: "img-10.png", size: '3900' },
        title: "Business & Consulting",
        courseCount: 90,
        cardColor: "dark"
    }, {
        id: 11,
        logoImg: { preview: webpackImg, formattedSize: "4.87 KB", path: "img-11.png", size: '3010' },
        title: "Digital Marketing",
        courseCount: 75,
        cardColor: "info"
    }, {
        id: 12,
        logoImg: { preview: microsoftImg, formattedSize: "4.87 KB", path: "img-12.png", size: '3012' },
        title: "Data Science",
        courseCount: 69,
        cardColor: "success"
    }, {
        id: 13,
        logoImg: { preview: dribbleImg, formattedSize: "4.87 KB", path: "img-13.png", size: '3013' },
        title: "Writing & Reading",
        courseCount: 25,
        cardColor: "warning"
    }, {
        id: 14,
        logoImg: { preview: cloudComputingImg, formattedSize: "4.87 KB", path: "img-14.png", size: '3140' },
        title: "Self Development",
        courseCount: 10,
        cardColor: "info"
    }, {
        id: 15,
        logoImg: { preview: chromeImg, formattedSize: "4.87 KB", path: "img-15.png", size: '3150' },
        title: "Computer Science",
        courseCount: 10,
        cardColor: "warning"
    },
]

const gridviewInstructor = [
    {
        id: 1,
        userImg: { preview: avatar2, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Ayaan Bowen",
        jobPosition: "Shopify Development",
        email: "ayaanbowen@steex.com",
        phone: "+(152) 15963 24785",
        course: 134,
        rating: 4.5,
        status: "success"

    }, {
        id: 2,
        userImg: { preview: avatar1, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Priscilla Takahashi",
        jobPosition: "Project Manager",
        email: "priscilla@steex.com",
        phone: "+(122) 0397 3076",
        course: 160,
        rating: 4.8,
        status: "success",
        checked: "defaultChecked"

    }, {
        id: 3,
        userImg: { preview: avatar3, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Martin Roth",
        jobPosition: "Graphic Designer",
        email: "martinroth@steex.com",
        phone: "781 789 3874",
        course: 362,
        rating: 4.3,
        status: "success"

    }, {
        id: 4,
        userImg: { preview: avatar4, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Jennifer Masten",
        jobPosition: "React Development",
        email: "jennifermasten@steex.com",
        phone: "918 664 0738",
        course: 241,
        rating: 4.6,
        status: "success"

    }, {
        id: 5,
        userImg: { preview: avatar5, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Hazel Gordon",
        jobPosition: "Laravel Development",
        email: "hazelgordon@steex.com",
        phone: "617 398 3263",
        course: 237,
        rating: 4.8,
        status: "danger"

    }, {
        id: 6,
        userImg: { preview: avatar8, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Michael Johnson",
        jobPosition: "Flask Development",
        email: "michaeljohnson@steex.com",
        phone: "02261 95 80 88",
        course: 174,
        rating: 4.7,
        status: "success"

    }, {
        id: 7,
        userImg: { preview: avatar6, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Angela Fryar",
        jobPosition: "Web Designer",
        email: "angelafryar@steex.com",
        phone: "089 54 77 91",
        course: 99,
        rating: 4.9,
        status: "success"

    }, {
        id: 8,
        userImg: { preview: avatar7, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Anthony Gardner",
        jobPosition: "Marketing & Management",
        email: "ayaanbowen@steex.com",
        phone: "09404 91 69 16",
        course: 110,
        rating: 4.6,
        status: "success"

    }, {
        id: 9,
        userImg: { preview: avatar9, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "James Bradley",
        jobPosition: "Marketing & Management",
        email: "jamesbradley@steex.com",
        phone: "040 67 58 18",
        course: 159,
        rating: 4.3,
        status: "success",
        checked: "defaultChecked"

    }, {
        id: 10,
        userImg: { preview: avatar10, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        username: "Brenda Cornett",
        jobPosition: "Marketing & Management",
        email: "brendacornett@steex.com",
        phone: "03586 68 04 69",
        course: 176,
        rating: 4.3,
        status: "success"

    },
]

const listviewTable = [
    {
        id: 1,
        category: "Laravel Development",
        coursename: "Master Laravel for Beginners & Intermediate",
        logoImg: { priview: laravelImg, formattedSize: "4.87 KB", path: "img-1.png", size: '2000' },
        instructor: "Ophelia Steuber",
        lessons: "57",
        duration: "1 Years",
        students: "84",
        fees: "220.00",
        rating: "4.4",
        status: "Open"
    }, {
        id: 2,
        category: "PHP Development",
        coursename: "Fundamentals of Database Engineering",
        logoImg: { priview: mysqlImg, formattedSize: "4.07 KB", path: "img-2.png", size: '2000' },
        instructor: "Domenic Dach",
        lessons: "87",
        duration: "9 Months",
        students: "320",
        fees: "99.99",
        rating: "4.9",
        status: "Open"
    }, {
        id: 3,
        category: "Marketing & Management",
        coursename: "Conflict Management with Emotional Intelligence",
        logoImg: { priview: firefoxImg, formattedSize: "4.37 KB", path: "img-3.png", size: '3000' },
        instructor: "Prezy Mark",
        lessons: "43",
        duration: "1 Years",
        students: "159",
        fees: "214.99",
        rating: "4.8",
        status: "Close"
    }, {
        id: 4,
        category: "Web Design",
        coursename: "Tailwind CSS From Scratch",
        logoImg: { priview: tailwindImg, formattedSize: "4.47 KB", path: "img-4.png", size: '4000' },
        instructor: "Nelson Schaden",
        lessons: "101",
        duration: "8 Months",
        students: "362",
        fees: "301.00",
        rating: "4.2",
        status: "Open"
    }, {
        id: 5,
        category: "Asp.Net Development",
        coursename: "Asp.Net Core 7 True Ultimate Guide",
        logoImg: { priview: coreImg, formattedSize: "4.57 KB", path: "img-5.png", size: '3500' },
        instructor: "Deondre Huel",
        lessons: "49",
        duration: "8 Years",
        students: "321",
        fees: "674.00",
        rating: "4.6",
        status: "Open"
    }, {
        id: 6,
        category: "Flask Development",
        coursename: "REST APIs with Flask",
        logoImg: { priview: flaskImg, formattedSize: "4.67 KB", path: "img-6.png", size: '3600' },
        instructor: "Sarai Schmidt",
        lessons: "230",
        duration: "3 Years",
        students: "364",
        fees: "539.99",
        rating: "4.7",
        status: "Close"
    }, {
        id: 7,
        category: "Laravel Development",
        coursename: "Master Laravel for Beginners & Intermediate",
        logoImg: { priview: laravelImg, formattedSize: "4.77 KB", path: "img-7.png", size: '3700' },
        instructor: "Ophelia Steuber",
        lessons: "57",
        duration: "1 Years",
        students: "84",
        fees: "220.00",
        rating: "4.4",
        status: "Open"
    }, {
        id: 8,
        category: "Marketing & Management",
        coursename: "Master Laravel for Beginners & Intermediate",
        logoImg: { priview: webpackImg, formattedSize: "4.88 KB", path: "img-8.png", size: '3080' },
        instructor: "Nelson Schaden",
        lessons: "93",
        duration: "2 Years",
        students: "146",
        fees: "149.99",
        rating: "4.8",
        status: "Open"
    }, {
        id: 9,
        category: "Graphic Design",
        coursename: "UI/UX Styleguide With Sketch",
        logoImg: { priview: sketchImg, formattedSize: "4.97 KB", path: "img-9.png", size: '3009' },
        instructor: "Zachary Stokes",
        lessons: "68",
        duration: "7 Months",
        students: "120",
        fees: "321.99",
        rating: "4.9",
        status: "Open"
    }, {
        id: 10,
        category: "Shopify Development",
        coursename: "The Complete Shopify Dropship course",
        logoImg: { priview: shopifyImg, formattedSize: "4.10 KB", path: "img-10.png", size: '3010' },
        instructor: "Ayaan Bowen",
        lessons: "120",
        duration: "1 Years",
        students: "23",
        fees: "193.00",
        rating: "4.7",
        status: "Close"
    }, {
        id: 11,
        category: "React Development",
        coursename: "The Complete Shopify Dropship course",
        logoImg: { priview: ReactImg, formattedSize: "4.12 KB", path: "img-12.png", size: '3012' },
        instructor: "Themesbrand",
        lessons: "15",
        duration: "2 Years",
        students: "49",
        fees: "278.12",
        rating: "4.5",
        status: "Open"
    }
]

const subscriptionTable = [
    {
        id: 1,
        category: "Shopify Development",
        coursename: "The Complete Shopify Dropship course",
        logoImg: shopifyImg,
        price: "$451.32",
        bgcolor: "success",
        duration: "6 Months",
        status: "Active",
        paymentDue: "2 Days ago",
        action: "Renew Now",
        students: '745',
        ratting: '4.8',
        statustype: 'Live'
    },
    {
        id: 2,
        category: "Graphic Design",
        coursename: "UI/UX Style guide With Sketch",
        bgcolor: "warning",
        logoImg: sketchImg,
        price: "$239.99",
        duration: "9 Months",
        status: "Active",
        paymentDue: "23 March, 2023",
        action: "Pay Now",
        students: ' 654',
        ratting: ' 4.3',
        statustype: 'Live'
    },
    {
        id: 3,
        category: "Laravel Development",
        bgcolor: "danger",
        coursename: "Master Laravel for Beginners & Intermediate",
        logoImg: laravelImg,
        price: "$159.27",
        duration: "1 Years",
        status: "Unactive",
        paymentDue: "15 June, 2022",
        action: "Pay Now",
        students: '321',
        ratting: '4.9',
        statustype: 'Pending'
    },
    {
        id: 4,
        category: "Flask Development",
        bgcolor: "dark",
        coursename: "REST APIs With Flask",
        logoImg: flaskImg,
        price: "$198.16",
        duration: "2 Years",
        status: "Active",
        paymentDue: "19 Feb, 2023",
        action: "Pay Now",
        students: '349',
        ratting: '4.5',
        statustype: 'Cancel'
    },
    {
        id: 5,
        category: "Marketing & Management",
        coursename: "Conflict Management with Emotional Intelligence",
        bgcolor: "danger",
        logoImg: firefoxImg,
        price: "$324.48",
        duration: "8 Months",
        status: "Unactive",
        paymentDue: "24 Jan, 2023",
        action: "Pay Now",
        students: '745',
        ratting: '4.6',
        statustype: 'Live'
    },
]

export { gridview, category, gridviewInstructor, listviewTable, subscriptionTable }