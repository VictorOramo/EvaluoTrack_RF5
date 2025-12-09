import pImg1 from "assets/images/products/48/img-1.png";
import pImg3 from "assets/images/products/48/img-3.png";
import pImg6 from "assets/images/products/48/img-6.png";
import pImg9 from "assets/images/products/48/img-9.png";


const orderproductitem = [
    {
        id: 1,
        img: pImg1,
        title: 'Branded T-Shirts',
        category: 'Fashion',
        price: '161.25',
        quantity: '03',
        amount: '$483.75'
    },
    {
        id: 2,
        img: pImg3,
        title: 'Fossil gen 5E smart watch',
        category: 'Watch',
        price: '69.60',
        quantity: '02',
        amount: '$139.20'
    },
    {
        id: 3,
        img: pImg6,
        title: 'Olive Printed Men Round Neck',
        category: 'Fashion',
        price: '250.00',
        quantity: '06',
        amount: '$1,500.00'
    },
    {
        id: 4,
        img: pImg9,
        title: 'Flip-Flops and House Slippers',
        category: 'Footwear',
        price: '150.00',
        quantity: '01',
        amount: '$150.00'
    },
];

const orderdateails = [
    {
        id: 1,
        title: "Order Date",
        date: "15 Feb, 2023"
    },
    {
        id: 2,
        title: "Delivery Date",
        date: "23 Feb, 2023"
    },
    {
        id: 3,
        title: "Order Amount",
        date: "$2,050.18"
    }
];

export { orderproductitem, orderdateails };