//import Images
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar6 from "assets/images/users/avatar-6.jpg";
import avatar7 from "assets/images/users/avatar-7.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";
import avatar9 from "assets/images/users/avatar-9.jpg";
import avatar10 from "assets/images/users/avatar-10.jpg";

import productImg1 from "assets/images/products/img-1.png"
import productImg3 from "assets/images/products/img-3.png"
import productImg4 from "assets/images/products/img-4.png"
import productImg5 from "assets/images/products/img-5.png"
import productImg6 from "assets/images/products/img-6.png"
import productImg7 from "assets/images/products/img-7.png"
import productImg8 from "assets/images/products/img-8.png"
import productImg9 from "assets/images/products/img-9.png"


const recentOrders = [
    {
        id: 1,
        purchaseID: "#TB010338",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "28 Oct, 2022",
        deliveryDate: '26 Jan, 2023',
        vendor: "Brazil",
        rating: 4.5,
        status: "Paid"
    },
    {
        id: 2,
        purchaseID: "#TB010337",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "30 Oct, 2022",
        deliveryDate: '28 Jan, 2023',
        vendor: "Brazil",
        rating: 4.8,
        status: "Paid"
    },
    {
        id: 3,
        purchaseID: "#TB010336",
        customerName: "Smart Watch for Man's",
        productImage: avatar8,
        productName: "Heather Jimenez",
        amount: "$741.98",
        orderDate: "02 Nov, 2022",
        deliveryDate: '29 Dec, 2022',
        vendor: "Spain",
        rating: 4.3,
        status: "Paid"
    },
    {
        id: 4,
        purchaseID: "#TB010335",
        customerName: "Apple Headphone",
        productImage: avatar9,
        productName: "Scott Wilson",
        amount: "$264.37",
        orderDate: "01 Nov, 2022",
        deliveryDate: '13 Dec, 2022',
        vendor: "Jersey",
        rating: 3.9,
        status: "Unpaid"
    }, {
        id: 5,
        purchaseID: "#TB010334",
        customerName: "Bentwood Chair",
        productImage: avatar10,
        productName: "Ashley Silva",
        amount: "$349.99",
        orderDate: "31 Oct, 2022",
        deliveryDate: '03 Dec, 2022',
        vendor: "Argentina",
        rating: 4.7,
        status: "Pending"
    },
    {
        id: 6,
        purchaseID: "#TB010333",
        customerName: "Stillbird Helmet",
        productImage: avatar3,
        productName: "Stephen Bird",
        amount: "$80.00",
        orderDate: "30 Oct, 2022",
        deliveryDate: '12 Nov, 2022',
        vendor: "USA",
        rating: 4.4,
        status: "Paid"
    },
    {
        id: 7,
        purchaseID: "#TB010332",
        customerName: "Borosil Paper Cup",
        productImage: avatar4,
        productName: "Daniel Gonzalez",
        amount: "$345.00",
        orderDate: "29 Oct, 2022",
        deliveryDate: '11 Nov, 2022',
        vendor: "Namibia",
        rating: 4.4,
        status: "Unpaid"
    },
    {
        id: 8,
        purchaseID: "#TB010331",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "28 Oct, 2022",
        deliveryDate: '09 Nov, 2022',
        vendor: "Brazil",
        rating: 4.7,
        status: "Paid"
    }
];

const stockReport = [
    {
        productID: "#00541",
        productImage: productImg1,
        productName: "Rockerz Ear Bluetooth Headphones",
        updatedDate: "16 Aug, 2022",
        amount: "$658.00",
        stockStatus: "In Stock",
        quantity: "15 PCS"
    },
    {
        productID: "#07484",
        productImage: productImg5,
        productName: "United Colors Of Benetton",
        updatedDate: "05 Sep, 2022",
        amount: "$145.00",
        stockStatus: "Low Stock",
        quantity: "05 PCS"
    },
    {
        productID: "#01641",
        productImage: productImg6,
        productName: "Striped Baseball Cap",
        updatedDate: "28 Sep, 2022",
        amount: "$215.00",
        stockStatus: "Out of Stock",
        quantity: "0 PCS"
    },
    {
        productID: "#00065",
        productImage: productImg7,
        productName: "350 ml Glass Grocery Container",
        updatedDate: "02 Oct, 2022",
        amount: "$79.99",
        stockStatus: "In Stock",
        quantity: "37 PCS"
    },
    {
        productID: "#00156",
        productImage: productImg8,
        productName: "One Seater Sofa",
        updatedDate: "11 Oct, 2022",
        amount: "$264.99",
        stockStatus: "In Stock",
        quantity: "23 PCS"
    },
    {
        productID: "#09102",
        productImage: productImg9,
        productName: "Men's Running Shoes Active Grip",
        updatedDate: "19 Nov, 2022",
        amount: "$264.99",
        stockStatus: "Low Stock",
        quantity: "23 PCS"
    },
];

const productDelivery = [
    {
        id: 1,
        productImage: productImg8,
        productName: "Men's Running Shoes Activ...",
        productBy: "Aisha Bradley",
        productStatus: "Shipping"
    },
    {
        id: 2,
        productImage: productImg4,
        productName: "Striped Baseball Cap",
        productBy: "Edgar Bailey",
        productStatus: "Delivered"
    },
    {
        id: 3,
        productImage: productImg3,
        productName: "350 ml Glass Groce...",
        productBy: "Adam Small",
        productStatus: "Out of Delivery"
    },
    {
        id: 4,
        productImage: productImg6,
        productName: "Monte Carlo Sweaters",
        productBy: "Evie Merrill",
        productStatus: "Delivered"
    },
    {
        id: 5,
        productImage: productImg9,
        productName: "Ceramic Coffee Mug",
        productBy: "Keaton Larson",
        productStatus: "Shipping"
    },
];

const newcustomers = [
    {
        id: 1,
        productImage: avatar2,
        productName: "Tommy Carey",
        date: "02 Jan, 2023"
    },
    {
        id: 2,
        productImage: avatar1,
        productName: "Cassius Brock",
        date: "24 Nov, 2022"
    },
    {
        id: 3,
        productImage: avatar3,
        productName: "Gabrielle Holden",
        date: "17 Nav, 2022"
    },
    {
        id: 4,
        productImage: avatar5,
        productName: "Alfred Hurst",
        date: "18 Dec, 2021"
    },
    {
        id: 5,
        productImage: avatar6,
        productName: "Kristina Hooper",
        date: "04 Oct, 2022"
    },
    {
        id: 6,
        productImage: avatar8,
        productName: "Jacques Leon",
        date: "02 Jan, 2023"
    },
    {
        id: 7,
        productImage: avatar7,
        productName: "Edward Rogers",
        date: "25 Nov, 2022"
    },
    {
        id: 8,
        productImage: avatar10,
        productName: "Alina Holland",
        date: "11 Jan, 2023"
    },
];

const series = [{
    name: 'Website',
    data: [12, 14.65, 28.24, 25.02, 19.65, 23, 21.18, 23.65, 20.32, 18, 12.65, 28.32]
},
{
    name: 'Social Media',
    data: [26, 24.65, 18.24, 29.02, 23.65, 27, 21.18, 24.65, 27.32, 25, 24.65, 29.32]
},
{
    name: 'Others',
    data: [-10, -17.32, -15.45, -12.30, -19.15, -15.45, -11, -14.32, -15.67, -10, -17.32, -19.2]
}]

const widgetsSeries = [{
    name: 'Total Sessions',
    data: [31, 40, 28, 51, 42, 109, 103]
}]

const radialSeries = [{
    name: 'Read',
    data: [80, 50, 30, 40, 100, 20],
},
{
    name: 'Delivery',
    data: [20, 30, 40, 80, 20, 80],
},
{
    name: 'Failed',
    data: [44, 76, 78, 13, 43, 10],
}
]

const BalanceChartsSeries = [
    {
        name: "Total Revenue",
        data: [49, 62, 55, 67, 73, 89, 110, 120, 115, 129, 123, 133],
    },
    {
        name: "Total Expense",
        data: [62, 76, 67, 49, 63, 77, 70, 86, 92, 103, 87, 93],
    },
    {
        name: "Profit Ratio",
        data: [12, 36, 29, 33, 37, 42, 58, 67, 49, 33, 24, 18],
    },
];

const EmailSendSeries = [63, 87, 33]

const UsersActivitySeries = [{
    name: 'Activ User',
    data: [44, 55, 41, 67, 22, 43]
}, {
    name: 'New Users',
    data: [13, 23, 20, 8, 13, 27]
}]

const SyncStatusBreakdownSeries = [{
    name: 'Synced',
    data: [44, 55, 41, 37, 22, 43, 21]
}, {
    name: 'Sync Needed',
    data: [53, 32, 33, 52, 13, 43, 32]
}, {
    name: 'Never Synced',
    data: [12, 17, 11, 9, 15, 11, 20]
}, {
    name: 'Review Needed',
    data: [9, 7, 5, 8, 6, 9, 4]
}]

const SalesReportSeries = [{
    name: 'This Month',
    data: [45, 74, 36, 69, 84, 110, 92]
}, {
    name: 'Last Month',
    data: [11, 18, 20, 32, 46, 65, 73]
}]

const Revenueseries = [{
    name: 'Earning',
    data: [26, 24.65, 18.24, 29.02, 23.65, 27, 21.18, 24.65, 27.32, 25, 24.65, 29.32]
},
{
    name: 'Expense',
    data: [-10, -17.32, -15.45, -12.30, -19.15, -15.45, -11, -14.32, -15.67, -10, -17.32, -19.2]
}
]

const TrafficSourceSeries = [{
    name: 'Search Engine Traffic',
    data: [74, 83, 102, 97]
}, {
    name: 'Direct Traffic',
    data: [46, 57, 59, 54]
}]

const Budgetseries = [{
    data: [50, 15, 35, 62, 23, 56, 44, 12]
}]

const PayoutsSeries= [{
    data: [50, 15, 20, 34, 23, 56, 65, 41]
}]

const StudentSeries = [{
    name: 'Total Students',
    data: [33, 56, 37, 51, 42, 83, 71]
}]

const CourseSeries = [{
    name: 'Total Courses',
    data: [33, 56, 37, 51, 42, 83, 71]
}]

const ProgressSeries = [67]

const LearningOverviewseries = [{
    name: 'This Month',
    data: [49, 54, 48, 54, 67, 88, 96, 102, 120, 133]
}, 
{
    name: 'Last Month',
    data: [57, 66, 74, 63, 55, 70, 84, 97, 112, 99]
}]


export { recentOrders, stockReport, productDelivery, newcustomers, series, widgetsSeries, radialSeries, BalanceChartsSeries, EmailSendSeries, UsersActivitySeries, SyncStatusBreakdownSeries, SalesReportSeries, Revenueseries, TrafficSourceSeries, Budgetseries, PayoutsSeries, StudentSeries, CourseSeries, ProgressSeries, LearningOverviewseries };