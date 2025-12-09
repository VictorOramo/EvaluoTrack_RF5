
//ordertabledata img
import cimg6 from "assets/images/companies/img-6.png";
import cimg1 from "assets/images/companies/img-1.png";
import cimg2 from "assets/images/companies/img-2.png";
import cimg3 from "assets/images/companies/img-3.png";
import cimg4 from "assets/images/companies/img-4.png";
import cimg5 from "assets/images/companies/img-5.png";

const ordersList = [
    {
        id: 1,
        orderId: "#TBT1",
        customername: "Alfred Hurst",
        productname: "Carven Lounge Chair Red",
        amount: "$874.30",
        orderdate: "18 Dec, 2022",
        deliverydate: "24 Dec, 2022",
        paymentmethod: "Mastercard",
        status: "Delivered",
        color: "bg-success-subtle text-success"
    }, {
        id: 2,
        orderId: "#TBT2",
        customername: "Tommy Carey",
        productname: "World's Most Expensive T-Shirt",
        amount: "$1452.00",
        orderdate: "02 Jan, 2022",
        deliverydate: "13 Jan, 2022",
        paymentmethod: "Visa",
        status: "Pickups"
    }, {
        id: 3,
        orderId: "#TBT3",
        customername: "Cassius Brock",
        productname: "Ninja Pro Max Smartwatch",
        amount: "$341.23",
        orderdate: "24 Nov, 2022",
        deliverydate: "02 Dec, 2022",
        paymentmethod: "COD",
        status: "Inprogress"
    }, {
        id: 4,
        orderId: "#TBT4",
        customername: "Camilla Winters",
        productname: "Like Style Women Black Handbag",
        amount: "$671.00",
        orderdate: "12 Jan, 2023",
        deliverydate: "20 Jan, 2023",
        paymentmethod: "Visa",
        status: "Pending"
    }, {
        id: 5,
        orderId: "#TBT5",
        customername: "Gabrielle Holden",
        productname: "Funky Prints T-shirt",
        amount: "$803.11",
        orderdate: "08 Aug, 2022",
        deliverydate: "16 Aug, 2022",
        paymentmethod: "Mastercard",
        status: "Returns"
    }, {
        id: 6,
        orderId: "#TBT6",
        customername: "Kristina Hooper",
        productname: "Innovative Education Book",
        amount: "$203.65",
        orderdate: "08 Oct, 2022",
        deliverydate: "24 Oct, 2022",
        paymentmethod: "Visa",
        status: "Cancelled"
    }, {
        id: 7,
        orderId: "#TBT7",
        customername: "Jacques Leon",
        productname: "Leather band Smartwatches",
        amount: "$2145.20",
        orderdate: "11 Feb, 2021",
        deliverydate: "22 Feb, 2021",
        paymentmethod: "COD",
        status: "Delivered",
        color: "bg-success-subtle text-success"
    }, {
        id: 8,
        orderId: "#TBT8",
        customername: "Theresa Crawford",
        productname: "Galaxy Watch4",
        amount: "$3468.41",
        orderdate: "28 Oct, 2022",
        deliverydate: "09 Nov, 2022",
        paymentmethod: "Mastercard",
        status: "Pickups"
    }, {
        id: 9,
        orderId: "#TBT9",
        customername: "Alina Holland",
        productname: "Borosil Paper Cup",
        amount: "$351.91",
        orderdate: "19 June, 2021",
        deliverydate: "28 June, 2021",
        paymentmethod: "Visa",
        status: "Pending"
    }, {
        id: 10,
        orderId: "#TBT10",
        customername: "Edward Rogers",
        productname: "Apple Headphone",
        amount: "$1876.02",
        orderdate: "25 Nov, 2021",
        deliverydate: "03 Dec, 2021",
        paymentmethod: "COD",
        status: "Returns"
    }, {
        id: 11,
        orderId: "#TBT11",
        customername: "Richard Jenkins",
        productname: "Innovative Education Book",
        amount: "$203.65",
        orderdate: "08 Oct, 2021",
        deliverydate: "24 Oct, 2021",
        paymentmethod: "Visa",
        status: "Cancelled"
    }, {
        id: 12,
        orderId: "#TBT12",
        customername: "Louis Hicks",
        productname: "Leather band Smartwatches",
        amount: "$2145.20",
        orderdate: "11 Feb, 2021",
        deliverydate: "22 Feb, 2021",
        paymentmethod: "COD",
        status: "Delivered"
    }
];

const order = [
    {
        id: 1,
        title: "Total Orders",
        target: 21438,
        rat: "3.8%",
        icone: "ph-trend-up",
        border: "secondary",
        color: "success"
    },
    {
        id: 2,
        title: "New Orders",
        target: 5963,
        rat: "20.8%",
        icone: "ph-trend-up",
        border: "primary",
        color: "success"
    },
    {
        id: 3,
        title: "Pending Orders",
        target: 4620,
        rat: "12.6%",
        icone: "ph-trend-up",
        border: "warning",
        color: "success"
    },
    {
        id: 4,
        title: "Delivered Orders",
        target: 8541,
        rat: "18.7%",
        icone: "ph-trend-up",
        border: "success",
        color: "success"
    },
    {
        id: 5,
        title: "Cancelled Orders",
        target: 2314,
        rat: "7.1%",
        icone: "ph-trend-down",
        border: "danger",
        color: "danger"
    },
];

const ordertabledata = [
    {
        id: "1",
        orderdate: "22 Feb, 2023",
        deliverydate: "02 Mar, 2023",
        product: "Cotton collar tshirts for men",
        customer: "Deondre Fahey",
        img: cimg6,
        name: "Ratke Group",
        paymethod: "COD",
        price: "109.00",
        ratings: "-",
        deliverystatus: "New",
        color: "bg-primary-subtle text-primary"
    },
    {
        id: "2",
        orderdate: "14 Feb, 2023",
        deliverydate: "27 Feb, 2023",
        product: "Like style travel black handbag",
        customer: "Warren Anderson",
        img: cimg1,
        name: "Zibra Fashion",
        paymethod: "Mastercard",
        price: "149.00",
        ratings: "4.5",
        deliverystatus: "Pending",
        color: "bg-warning-subtle text-warning"
    },
    {
        id: "3",
        orderdate: "30 Jan, 2023",
        deliverydate: "10 Feb, 2023",
        product: "Fossil gen 5E smart watch",
        customer: "Dianna Bogan",
        img: cimg2,
        name: "Brand Infosys",
        paymethod: "Visa",
        price: "215.00",
        ratings: "4.9",
        deliverystatus: "Out of Delivered",
        color: "bg-danger-subtle text-danger"
    },
    {
        id: "4",
        orderdate: "25 Jan, 2023",
        deliverydate: "03 Feb, 2023",
        product: "Super bass blutooth wireless headphone",
        customer: "Josefa Weissnat",
        img: cimg3,
        name: "Brand Infosys",
        paymethod: "Mastercard",
        price: "199.00",
        ratings: "4.3",
        deliverystatus: "Shipping",
        color: "bg-info-subtle text-info"
    },
    {
        id: "5",
        orderdate: "19 Jan, 2023",
        deliverydate: "27 Jan, 2023",
        product: "Willage volleyball ball size 4",
        customer: "Ophelia Steuber",
        img: cimg4,
        name: "Themesbrand",
        paymethod: "COD",
        price: "330.00",
        ratings: "4.7",
        deliverystatus: "Delivered",
        color: "bg-success-subtle text-success"
    },
    {

        id: "6",
        orderdate: "16 Jan, 2023",
        deliverydate: "19 Jan, 2023",
        product: "Branded T-Shirts",
        customer: "Federico Hand",
        img: cimg5,
        name: "Zibra Fashion",
        paymethod: "Visa",
        price: "745.11",
        ratings: "4.6",
        deliverystatus: "Pending",
        color: "bg-warning-subtle text-warning"
    },
    {
        id: "7",
        orderdate: "01 Jan, 2023",
        deliverydate: "11 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Uriel King",
        img: cimg1,
        name: "Zibra Fashion",
        paymethod: "Mastercard",
        price: "99.99",
        ratings: "4.9",
        deliverystatus: "New",
        color: "bg-primary-subtle text-primary"
    },
    {
        id: "8",
        orderdate: "27 Dec, 2022",
        deliverydate: "02 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Buck Roberts",
        img: cimg6,
        name: "Ratke Group",
        paymethod: "Mastercard",
        price: "150.00",
        ratings: "4.6",
        deliverystatus: "Pending",
        color: "bg-warning-subtle text-warning"
    },
    {
        id: "9",
        orderdate: "22 Dec, 2022",
        deliverydate: "28 Dec, 2022",
        product: "Jeans blue men boxer",
        customer: "Axel Kozey",
        img: cimg4,
        name: "Themesbrand",
        paymethod: "Visa",
        price: "136.14",
        ratings: "4.6",
        deliverystatus: "Pending",
        color: "bg-warning-subtle text-warning"
    },
    {
        id: "10",
        orderdate: "21 Dec, 2022",
        deliverydate: "29 Dec, 2022",
        product: "MAG back to the future shoes",
        customer: "Dallin Schowalter",
        img: cimg3,
        name: "Brand Infosys",
        paymethod: "COD",
        price: "179.99",
        ratings: "4.7",
        deliverystatus: "Delivered",
        color: "bg-success-subtle text-success"
    },
    {
        id: "11",
        orderdate: "25 Jan, 2023",
        deliverydate: "03 Feb, 2023",
        product: "Super bass blutooth wireless headphone",
        customer: "Josefa Weissnat",
        img: cimg3,
        name: "Brand Infosys",
        paymethod: "Mastercard",
        price: "199.00",
        ratings: "4.3",
        deliverystatus: "Shipping",
        color: "bg-info-subtle text-info"
    },
    {
        id: "12",
        orderdate: "01 Jan, 2023",
        deliverydate: "11 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Uriel King",
        img: cimg1,
        name: "Zibra Fashion",
        paymethod: "Mastercard",
        price: "99.99",
        ratings: "4.9",
        deliverystatus: "New",
        color: "bg-primary-subtle text-primary"
    }
]

export { ordersList, order, ordertabledata }; 