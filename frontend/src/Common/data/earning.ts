const earningcard = [
    {
        id: 1,
        border: "secondary",
        iconColor: "success",
        icon: "ph-trend-up",
        ratting: "9.3",
        target: "798.97M",
        title: "Total Revenue"
    },
    {
        id: 2,
        border: "primary",
        iconColor: "success",
        icon: "ph-trend-up",
        ratting: "20.8",
        target: "2356K",
        title: "Daily Earning"
    },
    {
        id: 3,
        border: "warning",
        iconColor: "success",
        icon: "ph-trend-up",
        ratting: "12.6",
        target: "337.32M",
        title: "Total Balance"
    }, {
        id: 4,
        border: "success",
        iconColor: "success",
        icon: "ph-trend-up",
        ratting: "18.7",
        target: "365.32M",
        title: "On hold"
    }, {
        id: 5,
        border: "danger",
        iconColor: "danger",
        icon: "ph-trend-down",
        ratting: "7.1",
        target: "247.19M",
        title: "Expenses"
    },
];
const earningdata = [
    {
        id: 1,
        icon: 'ph ph-trend-up',
        transactionID: '147852369012',
        date: '14 Nov, 2022 ',
        timestamp: '12:38PM',
        details: 'Membership Fees',
        type: 'Debit',
        amount: '236.41',
        status: 'Pending',
        color: 'danger'
    },
    {
        id: 2,
        icon: 'ph ph-trend-down',
        transactionID: '147852363645',
        date: '02 Jan, 2023  ',
        timestamp: '11:22PM',
        details: 'British Pound Sterling Block',
        type: 'Credit',
        amount: '875.32',
        status: 'Successful',
        color: 'success'
    },
    {
        id: 3,
        icon: 'ph ph-trend-down',
        transactionID: '147852362451',
        date: '27 Jan, 2023  ',
        timestamp: '03:19AM',
        details: 'Fashion T-Shirts Purchase',
        type: '   Credit',
        amount: '214.00',
        status: 'Successful',
        color: 'success'
    }, {
        id: 4,
        icon: 'ph ph-trend-down',
        transactionID: '147852315960',
        date: '28 Jan, 2023 ',
        timestamp: '05:36AM',
        details: 'The Country House',
        type: 'Credit',
        amount: '1470.50',
        status: 'Pending',
        color: 'success'
    }
    , {
        id: 5,
        icon: 'ph ph-trend-up',
        transactionID: '147852319632',
        date: '01 Feb, 2023 ',
        timestamp: '07:19PM',
        details: 'Vintage Apartment',
        type: 'Debit',
        amount: '3526.00',
        status: 'Successful',
        color: 'danger'
    }
    , {
        id: 6,
        icon: 'ph ph-trend-up',
        transactionID: '147852310391',
        date: '04 Feb, 2023  ',
        timestamp: '07:19PM',
        details: 'Duplex Square Valley',
        type: 'Debit',
        amount: '215.00',
        status: 'Successful',
        color: 'danger'
    }
    , {
        id: 7,
        icon: 'ph ph-trend-down',
        transactionID: '147852310298',
        date: '22 Feb, 2023 ',
        timestamp: '07:19PM',
        details: 'Crystal House',
        type: 'Credit',
        amount: '678.00',
        status: 'Cancelled',
        color: 'success'
    }
    , {
        id: 8,
        icon: 'ph ph-trend-up',
        transactionID: '147852310341',
        date: '12 Dec, 2022 ',
        timestamp: '01:57PM',
        details: 'Swimming pool side of the residential Ascot home.',
        type: 'Debit',
        amount: '1024.00',
        status: 'Successful',
        color: 'danger'
    }
    , {
        id: 9,
        icon: 'ph ph-trend-down',
        transactionID: '147852310003',
        date: '19 Dec, 2022',
        timestamp: '10:33AM',
        details: 'Small house on an autumn’s day',
        type: '  Credit',
        amount: '1024.00',
        status: 'Pending',
        color: 'success'
    }, {
        id: 10,
        icon: 'ph ph-trend-down',
        transactionID: '147852310298',
        date: '22 Feb, 2023 ',
        timestamp: '07:19PM',
        details: 'Crystal House',
        type: ' Credit',
        amount: '678.00',
        status: 'Cancelled',
        color: 'success'
    }
]

export { earningcard, earningdata };