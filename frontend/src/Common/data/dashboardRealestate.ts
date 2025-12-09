import img1 from 'assets/images/real-estate/img-01.jpg'
import img2 from 'assets/images/real-estate/img-02.jpg'
import img3 from 'assets/images/real-estate/img-03.jpg'
import img4 from 'assets/images/real-estate/img-04.jpg'
import img5 from 'assets/images/real-estate/img-05.jpg'
import img6 from 'assets/images/real-estate/img-06.jpg'
import img7 from 'assets/images/real-estate/img-07.jpg'
import img8 from 'assets/images/real-estate/img-08.jpg'

import avatar1 from 'assets/images/users/48/avatar-1.jpg'
import avatar2 from 'assets/images/users/48/avatar-2.jpg'
import avatar3 from 'assets/images/users/48/avatar-3.jpg'
import avatar4 from 'assets/images/users/48/avatar-4.jpg'
import avatar6 from 'assets/images/users/48/avatar-6.jpg'
import avatar8 from 'assets/images/users/48/avatar-8.jpg'

const saleProperty = [
    {
        id: 1,
        img: img8,
        name: 'Crystal House',
        bedroom: '2 Bedroom',
        bathroom: '1 Bathroom',
        sqft: '1039 sqft',
        rating: '4.5'
    },
    {
        id: 2,
        img: img7,
        name: 'Whitespace Vintage Villa',
        bedroom: '4 Bedroom',
        bathroom: '2 Bathroom',
        sqft: '1145 sqft',
        rating: '4.9'
    },
    {
        id: 3,
        img: img5,
        name: 'Northlight Residency',
        bedroom: '3 Bedroom',
        bathroom: '3 Bathroom',
        sqft: '1859 sqft',
        rating: '4.7'
    },
    {
        id: 4,
        img: img8,
        name: 'Park Side Colonial',
        bedroom: '5 Bedroom',
        bathroom: '3 Bathroom',
        sqft: '5643 sqft',
        rating: '4.7'
    },
    {
        id: 5,
        img: img4,
        name: 'Marina Hill Vintage',
        bedroom: '4 Bedroom',
        bathroom: '3 Bathroom',
        sqft: '1963 sqft',
        rating: '4.8'
    },
    {
        id: 6,
        img: img7,
        name: 'Grand Cub Hotel',
        bedroom: '3 Bedroom',
        bathroom: '1 Bathroom',
        sqft: '1543 sqft',
        rating: '4.4'
    },
    {
        id: 7,
        img: img3,
        name: 'Evergreen Villa with Residency',
        bedroom: '5 Bedroom',
        bathroom: '3 Bathroom',
        sqft: '3652 sqft',
        rating: '4.5'
    },
];

const rentProperty = [
    {
        id: 1,
        img: img1,
        name: 'Liberty Property',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        sqft: '958 sqft',
        rating: '4.3'
    },
    {
        id: 2,
        img: img2,
        name: 'Duplex Square Valley',
        bedroom: '3 Bedroom',
        bathroom: '2 Bathroom',
        sqft: '2659 sqft',
        rating: '3.8'
    },
    {
        id: 3,
        img: img3,
        name: 'Small house on an autumn’s',
        bedroom: '2 Bedroom',
        bathroom: '1 Bathroom',
        sqft: '2230 sqft',
        rating: '4.3'
    },
    {
        id: 4,
        img: img7,
        name: 'New Grand Hotel Room',
        bedroom: '3 Bedroom',
        bathroom: '2 Bathroom',
        sqft: '2785 sqft',
        rating: '4.9'
    },
    {
        id: 5,
        img: img8,
        name: 'Park Side Colonial',
        bedroom: '5 Bedroom',
        bathroom: '3 Bathroom',
        sqft: '5643 sqft',
        rating: '4.7'
    },
    {
        id: 6,
        img: img7,
        name: 'Whitespace Vintage Villa',
        bedroom: '4 Bedroom',
        bathroom: '2 Bathroom',
        sqft: '1145 sqft',
        rating: '4.9'
    },
    {
        id: 7,
        img: img5,
        name: 'Nightlight Residency',
        bedroom: '2 Bedroom',
        bathroom: '1 Bathroom',
        sqft: '1324 sqft',
        rating: '4.9'
    },
];

const PropertyData = [
    {
        id: '#TBS01',
        image: img1,
        propertyType: 'Villa',
        propertyName: 'Whitespace Vintage Villa',
        country: 'Spain',
        agentName: 'Axel Kozey',
        price: '$3495.76',
        status: 'Sale'
    },
    {
        id: '#TBS03',
        image: img2,
        propertyType: 'Apartment',
        propertyName: 'Vintage Apartment',
        country: 'Brazil',
        agentName: 'Domenic Dach',
        price: '$1249.99',
        status: 'Rent'
    },
    {
        id: '#TBS01',
        image: img3,
        propertyType: 'Villa',
        propertyName: 'The Country House',
        country: 'United Kingdom',
        agentName: 'Josefa Weissnat',
        price: '$2451.39',
        status: 'Sale'
    },
    {
        id: '#TBS06',
        image: img4,
        propertyType: 'Residency',
        propertyName: 'Small Grey Brick Home In A Subdivision',
        country: 'USA',
        agentName: 'Josefa Weissnat',
        price: '$1478.00',
        status: 'Sale'
    },
    {
        id: '#TBS05',
        image: img5,
        propertyType: 'Residency',
        propertyName: 'Duplex Square Valley',
        country: 'Mexico',
        agentName: 'Buck Roberts',
        price: '$2579.31',
        status: 'Rent'
    },
    {
        id: '#TBS02',
        image: img6,
        propertyType: 'Residency',
        propertyName: 'Classic White House',
        country: 'Germany',
        agentName: 'Jerry Emard	',
        price: '$2451.20',
        status: 'Rent'
    },
]

const RealEstateData = [
    {
        id: 1,
        name: "Properties for sale",
        amount: 3652,
        perstange: "06.19%",
        isArrow: true,
        widgetsSeries: [80],
        dataColors: '["--tb-primary"]'
    },
    {
        id: 2,
        name: "Properties for rent",
        amount: 1524,
        perstange: "02.33%",
        isArrow: true,
        widgetsSeries: [65],
        dataColors: '["--tb-warning"]'
    },
    {
        id: 3,
        name: "Visitors",
        amount: 149.36,
        decimal: 2,
        perstange: "12.33%",
        suffix: 'k',
        isArrow: true,
        widgetsSeries: [47],
        dataColors: '["--tb-dark"]'
    },
    {
        id: 4,
        name: "Residency Property",
        amount: 2376,
        perstange: "09.57%",
        isArrow: false,
        widgetsSeries: [43],
        dataColors: '["--tb-success"]'
    },
];

const AgentListData = [
    {
        image: avatar1,
        name: 'Dianna Bogan',
        country: 'United Kingdom',
        contact: '+(86) 9985-9220'
    },
    {
        image: avatar2,
        name: 'Jansh Brown',
        country: 'Germany',
        contact: '+(27) 3041-1766'
    },
    {
        image: avatar3,
        name: 'Ayaan Bowen',
        country: 'Brazil',
        contact: '+(51) 3233-7909'
    },
    {
        image: avatar4,
        name: 'Prezy Mark',
        country: 'Spain',
        contact: '+(48) 3877-9000'
    },
    {
        image: avatar6,
        name: 'Vihan Hudda',
        country: 'Brazil',
        contact: '+(11) 3885-1022'
    },
    {
        image: avatar8,
        name: 'Uriel King',
        country: 'USA',
        contact: '+(21) 2345-6789'
    },
]

export { saleProperty, rentProperty, PropertyData, RealEstateData, AgentListData }