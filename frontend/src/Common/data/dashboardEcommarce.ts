// Import Images
import img1 from 'assets/images/products/32/img-1.png'
import img2 from 'assets/images/products/32/img-2.png'
import img3 from 'assets/images/products/32/img-3.png'
import img4 from 'assets/images/products/32/img-4.png'
import img5 from 'assets/images/products/32/img-5.png'
import img6 from 'assets/images/products/32/img-6.png'

import compimg1 from 'assets/images/companies/img-1.png'
import compimg2 from 'assets/images/companies/img-2.png'
import compimg3 from 'assets/images/companies/img-3.png'
import compimg4 from 'assets/images/companies/img-4.png'
import compimg5 from 'assets/images/companies/img-5.png'
import compimg7 from 'assets/images/companies/img-7.png'

import avatar1 from 'assets/images/users/48/avatar-1.jpg'
import avatar2 from 'assets/images/users/48/avatar-2.jpg'
import avatar4 from 'assets/images/users/48/avatar-4.jpg'
import avatar5 from 'assets/images/users/48/avatar-5.jpg'
import avatar6 from 'assets/images/users/48/avatar-6.jpg'
import avatar7 from 'assets/images/users/48/avatar-7.jpg'
import avatar8 from 'assets/images/users/48/avatar-8.jpg'

const ordersData = [
    {
        id: 1,
        icon: "ph-wallet",
        name: "TOTAL REVENUE",
        amount: 750.36,
        decimal: 2,
        prefix: "$",
        suffix: "M",
        perstange: "+19.07 %",
        discription: "Analytics for last week",
        bgColor: 'bg-primary-subtle',
        textColor: 'text-primary',
        className: "card shadow-none border-end-md border-bottom rounded-0 mb-0",
        isArrow: true
    },
    {
        id: 2,
        icon: "ph-bag",
        name: "ORDERS",
        amount: 684,
        perstange: "+8.13 %",
        discription: "Analytics for last week",
        bgColor: 'bg-dark-subtle',
        textColor: 'text-dark',
        className: "card shadow-none border-bottom rounded-0 mb-0",
        isArrow: true
    },
    {
        id: 3,
        icon: "ph-eye",
        name: "PRODUCT VIEWS",
        amount: 113870,
        perstange: "+2.01 %",
        discription: "Analytics for last week",
        bgColor: 'bg-light',
        textColor: 'text-body',
        className: "card shadow-none border-end-md rounded-0 mb-0",
        isArrow: false
    },
    {
        id: 4,
        icon: "ph-users-three",
        name: "CUSTOMERS",
        amount: 2500,
        suffix: "k",
        perstange: "+10.42 %",
        discription: "than last week",
        bgColor: 'bg-info-subtle',
        textColor: 'text-info',
        className: "card shadow-none border-top border-top-md-0 rounded-0 mb-0",
        isArrow: true
    },
];

const PopularproductsData = [
    {
        image: img1,
        product: 'Craft Women Black Sling Bag',
        rateing: '487',
        cart: '936',
        price: '$15.99'
    },
    {
        image: img2,
        product: "Unique Men's Wrist Watch",
        rateing: '452',
        cart: '1420',
        price: '$84.99'
    },
    {
        image: img3,
        product: 'Twiala Floral Dress',
        rateing: '562',
        cart: '1348',
        price: '$149.99'
    },
    {
        image: img4,
        product: 'Tokyo Fancy Bomber Jacket',
        rateing: '644',
        cart: '1540',
        price: '$245.00'
    },
    {
        image: img5,
        product: 'Aster Dress 2XL / Royal Blue',
        rateing: '841',
        cart: '985',
        price: '$74.63'
    },
    {
        image: img6,
        product: 'Craft Women Black Sling Bag',
        rateing: '763',
        cart: '763',
        price: '$245.74'
    },
]

const RecentsalesData = [
    {
        image: avatar2,
        name: 'Bethany Nienow',
        date: '03 Feb, 2023',
        price: '$630.73'
    },
    {
        image: avatar7,
        name: 'Sonia Conn',
        date: '03 Feb, 2023',
        price: '$1,452.64'
    },
    {
        image: avatar4,
        name: 'Talon Bradtke',
        date: '03 Feb, 2023',
        price: '$478.87'
    },
    {
        image: avatar5,
        name: 'Tyrell Kerluke',
        date: '03 Feb, 2023',
        price: '$82.14'
    },
    {
        image: avatar6,
        name: 'Ross Zieme',
        date: '03 Feb, 2023',
        price: '$79.00'
    },
    {
        image: avatar1,
        name: 'Hollis Spencer',
        date: '03 Feb, 2023',
        price: '$849.05'
    },
    {
        image: avatar8,
        name: 'Cordia Grady',
        date: '03 Feb, 2023',
        price: '$254.32'
    },
]

// Latest Ordder
const latestOrder = [
    {
        date: '15 Feb, 2023',
        id: '#TBS250011',
        image: compimg7,
        customerName: 'Alex Smith',
        products: 'Clothes',
        price: '$109.00',
        status: 'New',
        rating: '-'
    },
    {
        date: '14 Feb, 2023',
        id: '#TBS250010',
        image: compimg1,
        customerName: 'Jansh Brown',
        products: 'Kitchen Storage',
        price: '$149.00',
        status: 'Pending',
        rating: '4.5'
    },
    {
        date: '30 Jan, 2023',
        id: '#TBS250009',
        image: compimg2,
        customerName: 'Ayaan Bowen',
        products: 'Bike Accessories',
        price: '$215.00',
        status: 'Out of Delivered',
        rating: '4.9'
    },
    {
        date: '25 Jan, 2023',
        id: '#TBS250008',
        image: compimg3,
        customerName: 'Prezy Mark',
        products: 'Furniture',
        price: '$199.00',
        status: 'Shipping',
        rating: '4.3'
    },
    {
        date: '19 Jan, 2023',
        id: '#TBS250007',
        image: compimg4,
        customerName: 'Vihan Hudda',
        products: 'Bags and Wallets',
        price: '$330.00',
        status: 'Delivered',
        rating: '4.7'
    },
    {
        date: '16 Jan, 2023',
        id: '#TBS250006',
        image: compimg5,
        customerName: 'Vihan Hudda',
        products: 'Bags and Wallets',
        price: '$745.11',
        status: 'Pending',
        rating: '4.6'
    },

]

// Charts
const Revenueseries = [{
    name: 'Earning',
    data: [26, 24.65, 18.24, 29.02, 23.65, 27, 21.18, 24.65, 27.32, 25, 24.65, 29.32]
},
{
    name: 'Expense',
    data: [-10, -17.32, -15.45, -12.30, -19.15, -15.45, -11, -14.32, -15.67, -10, -17.32, -19.2]
}
]

const Budgetseries = [{
    data: [50, 15, 35, 62, 23, 56, 44, 12]
}]

const PayoutsSeries = [{
    data: [50, 15, 20, 34, 23, 56, 65, 41]
}]

const TrafficSourceSeries = [{
    name: 'Search Engine Traffic',
    data: [74, 83, 102, 97]
}, {
    name: 'Direct Traffic',
    data: [46, 57, 59, 54]
}]

export { ordersData, PopularproductsData, RecentsalesData, Revenueseries, Budgetseries, PayoutsSeries, TrafficSourceSeries, latestOrder }