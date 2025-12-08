import img1 from "assets/images/products/32/img-1.png";
import img2 from "assets/images/products/32/img-2.png";
import img3 from "assets/images/products/32/img-3.png";
import img4 from "assets/images/products/32/img-4.png";
import img5 from "assets/images/products/32/img-5.png";
import img6 from "assets/images/products/32/img-6.png";
import img7 from "assets/images/products/32/img-7.png";
import img9 from "assets/images/products/32/img-9.png";
import img10 from "assets/images/products/32/img-10.png";
import img12 from "assets/images/products/32/img-12.png";

//product img
import pimg1 from "assets/images/products/img-1.png";
import pimg2 from "assets/images/products/img-2.png";
import pimg3 from "assets/images/products/img-3.png";
import pimg4 from "assets/images/products/img-4.png";
import pimg5 from "assets/images/products/img-5.png";
import pimg6 from "assets/images/products/img-6.png";
import pimg7 from "assets/images/products/img-7.png";
import pimg8 from "assets/images/products/img-8.png";
import pimg9 from "assets/images/products/img-10.png";
import pimg10 from "assets/images/products/img-9.png";
import pimg11 from "assets/images/products/img-11.png";
import pimg12 from "assets/images/products/img-12.png";
import pimg13 from "assets/images/products/img-4.png";
import pimg14 from "assets/images/products/img-7.png";

const productList = [
    {
        id: 1,
        productImg: img10,
        productTitle: "World's most expensive t shirt",
        category: "Fashion",
        price: "354.99",
        discount: "25%",
        rating: "4.9",
        color: ["secondary", "light", "dark"],
        size: ["s", "m", "l"],
        stock: "12",
        orders: "48",
        publish: "12 Oct, 2021",
    },
    {
        id: 2,
        productImg: img1,
        productTitle: "Like Style Women Black Handbag",
        category: "Fashion",
        price: "742.00",
        discount: "0%",
        rating: "4.2",
        color: ["light", "dark"],
        stock: "06",
        orders: "30",
        publish: "06 Jan, 2021",
    },
    {
        id: 3,
        productImg: img1,
        productTitle: "Black Horn Backpack For Men Bags 30 L Backpack",
        category: "Grocery",
        price: "150.99",
        discount: "25%",
        rating: "3.8",
        color: ["primary", "danger", "secondary"],
        size: ["s", "m", "l"],
        stock: "10",
        orders: "48",
        publish: "26 Mar, 2021",
    },
    {
        id: 4,
        productImg: img7,
        productTitle: "Innovative education book",
        category: "Kids",
        price: "96.26",
        discount: "0%",
        rating: "4.7",
        stock: "15",
        orders: "40",
        publish: "19 Apr, 2021",
    },
    {
        id: 5,
        productImg: img4,
        productTitle: "Sangria Girls Mint Green & Off-White Solid Open Toe Flats",
        category: "Kids",
        price: "96.26",
        discount: "75%",
        rating: "4.7",
        color: ["success", "danger", "secondary"],
        size: ["40", "41", "42"],
        stock: "08",
        orders: "55",
        publish: "30 Mar, 2021",
    },
    {
        id: 6,
        productImg: img5,
        productTitle: "Lace-Up Casual Shoes For Men",
        category: "Fashion",
        price: "229.00",
        discount: "0%",
        rating: "4.0",
        color: ["danger"],
        size: ["40", "41", "42"],
        stock: "15",
        orders: "48",
        publish: "12 Oct, 2021",
    },
    {
        id: 7,
        productImg: img6,
        productTitle: "Striped High Neck Casual Men Orange Sweater",
        category: "Fashion",
        price: "120.00",
        discount: "48%",
        rating: "4.8",
        size: ["s", "m", "l", "xl"],
        stock: "12",
        orders: "45",
        publish: "15 May, 2021",
    },
    {
        id: 8,
        productImg: img9,
        productTitle: "Lace-Up Casual Shoes For Men",
        category: "Kids",
        price: "229.00",
        discount: "15%",
        rating: "2.4",
        color: ["light", "warning"],
        size: ["s", "l"],
        stock: "20",
        orders: "48",
        publish: "21 Jun, 2021",
    },
    {
        id: 9,
        productImg: img10,
        productTitle: "Printed, Typography Men Round Neck Black T-shirt",
        category: "Fashion",
        price: "81.99",
        discount: "0%",
        rating: "4.9",
        color: ["dark", "light"],
        size: ["s", "m", "l", "xl"],
        stock: "14",
        orders: "55",
        publish: "15 Jan, 2021",
    },
    {
        id: 10,
        productImg: img12,
        productTitle: "Carven Lounge Chair Red",
        category: "Furniture",
        price: "209.99",
        discount: "0%",
        rating: "4.1",
        color: ["secondary", "dark", "danger", "light"],
        stock: "20",
        orders: "60",
        publish: "15 Jun, 2021",
    },
    {
        id: 11,
        productImg: img3,
        productTitle: "Ninja Pro Max Smartwatch",
        category: "Watches",
        price: "309.09",
        discount: "20%",
        rating: "3.5",
        color: ["secondary", "info"],
        stock: "12",
        orders: "48",
        publish: "12 Oct, 2021",
    },
    {
        id: 12,
        productImg: img2,
        productTitle: "Opinion Striped Round Neck Green T-shirt",
        category: "Fashion",
        price: "126.99",
        discount: "0%",
        rating: "4.1",
        color: ["success"],
        size: ["s", "m", "l", "xl"],
        stock: "06",
        orders: "30",
        publish: "06 Jan, 2021",
    }
];


const subCategoryListData = [
    {
        id: 1,
        subCategoryId: '#TBSC12',
        subcategory: 'Horror',
        category: 'Books',
        craetedby: 'Admin'
    },
    {
        id: 2,
        subCategoryId: '#TBSC11',
        subcategory: 'Feminine Care',
        category: 'Beauty & Personal Care',
        craetedby: 'Admin'
    },
    {
        id: 3,
        subCategoryId: '#TBSC10',
        subcategory: 'Chairs & Seating',
        category: 'Furniture',
        craetedby: 'Admin'
    },
    {
        id: 4,
        subCategoryId: '#TBSC9',
        subcategory: 'Ambient',
        category: 'Lighting',
        craetedby: 'Admin'
    },
    {
        id: 5,
        subCategoryId: '#TBSC8',
        subcategory: 'Casual Wear',
        category: 'Clothing',
        craetedby: 'Admin'
    },
    {
        id: 6,
        subCategoryId: '#TBSC7',
        subcategory: 'Sportswear',
        category: 'Clothing',
        craetedby: 'Admin'
    },
    {
        id: 7,
        subCategoryId: '#TBSC6',
        subcategory: 'Supra-aural (on-ear)',
        category: 'Headphone',
        craetedby: 'Admin'
    },
    {
        id: 8,
        subCategoryId: '#TBSC5',
        subcategory: 'Digital Watches',
        category: 'Clothing',
        craetedby: 'Admin'
    },
    {
        id: 9,
        subCategoryId: '#TBSC4',
        subcategory: 'Cabinets',
        category: 'Furniture',
        craetedby: 'Admin'
    },
    {
        id: 10,
        subCategoryId: '#TBSC3',
        subcategory: 'Bags',
        category: 'Other Accessories',
        craetedby: 'Admin'
    },
    {
        id: 11,
        subCategoryId: '#TBSC2',
        subcategory: 'Leather Shoes ',
        category: 'Footwear',
        craetedby: 'Admin'
    },
    {
        id: 12,
        subCategoryId: '#TBSC1',
        subcategory: 'Wireless',
        category: 'Headphone',
        craetedby: 'Admin'
    }
]
const product = [
    {
        id: 1,
        img: { priview: pimg1, formattedSize: "4.87 KB", path: "img-1.png", size: '3000' },
        category: "Fashion",
        imgalt: "img-1.png",
        title: "Cotton collar tshirts for men",
        stock: "12",
        price: "215.00",
        discount: "25",
        orders: "06",
        ratings: "4.9",
        publish: "12 Oct, 2022",
        sale: "sale",
        delete: "215.00",
        brand: "Boat"
    },
    {
        id: 2,
        img: { priview: pimg2, formattedSize: "2.87 KB", path: "img-2.png", size: '6600' },
        imgalt: "img-2.png",
        title: "Like style travel black handbag",
        category: "Luggage",
        stock: "06",
        price: "160.00",
        discount: "0",
        orders: "02",
        ratings: "4.3",
        publish: "06 Jan, 2023",
        brand: "Puma"
    },
    {
        id: 3,
        img: { priview: pimg3, formattedSize: "3.87 KB", path: "img-3.png", size: '6300' },
        imgalt: "img-3.png",
        title: "Fossil Gen 5E Smart Watch",
        category: "Watches",
        stock: "19",
        price: "120.00",
        discount: "42",
        orders: "21",
        ratings: "4.3",
        publish: "26 Mar, 2021",
        sale: "sale",
        delete: "120.00",
        brand: "Boat"
    }, {
        id: 4,
        img: { priview: pimg4, formattedSize: "4.00 KB", path: "img-4.png", size: '4000' },
        imgalt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021",
        brand: "Boat"
    }, {
        id: 5,
        img: { priview: pimg5, formattedSize: "5.57 KB", path: "img-5.png", size: '5000' },
        imgalt: "img-5.png",
        title: "Willage Volleyball Ball Size 4",
        category: "Sports",
        stock: "30",
        price: "99.00",
        discount: "10",
        orders: "21",
        ratings: "4.0",
        publish: "30 Mar, 2021",
        brand: "Puma"
    }, {
        id: 6,
        img: { priview: pimg6, formattedSize: "7.66 KB", path: "img-6.png", size: '6006' },
        imgalt: "img-6.png",
        title: "Blive Printed Men Round Neck",
        category: "Fashion",
        stock: "35",
        price: "250.00",
        discount: "0",
        orders: "02",
        ratings: "3.8",
        publish: "12 Oct, 2021",
        brand: "Boat"
    }, {
        id: 7,
        img: { priview: pimg7, formattedSize: "7.77 KB", path: "img-7.png", size: '7700' },
        imgalt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021",
        brand: "Puma"
    }, {
        id: 8,
        img: { priview: pimg8, formattedSize: "8.80 KB", path: "img-8.png", size: '8000' },
        imgalt: "img-8.png",
        title: "Full Sleeve Solid Men Sweatshirt/Hoody",
        category: "Fashion",
        stock: "20",
        price: "260.00",
        discount: "12",
        orders: "20",
        ratings: "4.1",
        publish: "21 Jun, 2021",
        sale: "sale",
        brand: "Adidas"
    }, {
        id: 9,
        img: { priview: pimg9, formattedSize: "7.69 KB", path: "img-9.png", size: '7090' },
        imgalt: "img-10.png",
        title: "Men's Round Neck Half Sleeves Solid T-Shirt",
        category: "Fashion",
        stock: "21",
        price: "160.00",
        discount: "0",
        orders: "08",
        ratings: "4.4",
        publish: "15 Jan, 2021",
        brand: "Realme"
    }, {
        id: 10,
        img: { priview: pimg10, formattedSize: "7.01 KB", path: "img-10.png", size: '6010' },
        imgalt: "img-9.png",
        title: "Flip-Flops and House Slippers",
        category: "Footwear",
        stock: "30",
        price: "150.00",
        discount: "0",
        orders: "10",
        ratings: "4.2",
        publish: "06 Jan, 2023",
        brand: "Adidas"

    }, {
        id: 11,
        img: { priview: pimg11, formattedSize: "7.11 KB", path: "img-11.png", size: '6110' },
        imgalt: "img-11.png",
        title: "Jeans blue men boxer",
        category: "Fashion",
        stock: "50",
        price: "97.99",
        discount: "25",
        orders: "51",
        ratings: "3.9",
        publish: "12 Oct, 2021",
        brand: "Realme"
    }, {
        id: 12,
        img: { priview: pimg12, formattedSize: "7.12 KB", path: "img-12.png", size: '6210' },
        imgalt: "img-12.png",
        title: "MAG back to the future shoes",
        category: "Footwear",
        stock: "06",
        price: "274.99",
        discount: "0",
        orders: "06",
        ratings: "4.2",
        publish: "06 Jan, 2021",
        brand: "Realme"
    }, {
        id: 13,
        img: { priview: pimg13, formattedSize: "7.13 KB", path: "img-13.png", size: '6130' },
        imgalt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021",
        brand: "Realme"
    }, {
        id: 14,
        img: { priview: pimg14, formattedSize: "7.14 KB", path: "img-14.png", size: '6140' },
        imgalt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021",
        brand: "Adidas"
    }
]
export { productList, subCategoryListData, product }