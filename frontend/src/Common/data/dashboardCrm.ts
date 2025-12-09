// Import Images
import avatar2 from 'assets/images/users/48/avatar-2.jpg'
import avatar3 from 'assets/images/users/48/avatar-3.jpg'
import avatar4 from 'assets/images/users/48/avatar-4.jpg'
import avatar5 from 'assets/images/users/48/avatar-5.jpg'
import avatar6 from 'assets/images/users/48/avatar-6.jpg'
import avatar7 from 'assets/images/users/48/avatar-7.jpg'
import avatar8 from 'assets/images/users/48/avatar-8.jpg'
import avatar9 from 'assets/images/users/48/avatar-9.jpg'
import avatar10 from 'assets/images/users/48/avatar-10.jpg'

// Contact data
const ContactData = [
    {
        image: avatar2,
        name: 'Buck Roberts',
        phoneNumber: '(11) 3885-1022',
        score: '234',
        location: 'Guarulhos, Brazil',
        date: '17 Mar, 2023'
    },
    {
        image: avatar3,
        name: 'Josefa Weissnat',
        phoneNumber: '(53) 3035-3100',
        score: '418',
        location: 'California, USA',
        date: '15Mar, 2023'
    },
    {
        image: avatar5,
        name: 'Jacinthe Will',
        phoneNumber: '(33) 3521-6761',
        score: '357',
        location: 'Brasília, Brazil',
        date: '11 Mar, 2023'
    },
    {
        image: avatar6,
        name: 'Donnell Schultz',
        phoneNumber: '(51) 3233-7909',
        score: '631',
        location: 'Natal, Brazil',
        date: '29 Feb, 2023'
    },
    {
        image: avatar7,
        name: 'Xander Wyman',
        phoneNumber: '(48) 3877-9000',
        score: '249',
        location: 'Logrono, Spain',
        date: '24 Feb, 2023'
    },
    {
        image: avatar8,
        name: 'Buck Roberts',
        phoneNumber: '(92) 3639-8685',
        score: '176',
        location: 'Ibiza, Spain',
        date: '27 Jan, 2023'
    },
    {
        image: avatar9,
        name: 'Federico Hand',
        phoneNumber: '(11) 3666-9716',
        score: '176',
        location: 'Mexico',
        date: '21 Dec, 2022'
    },
]

// Opendeal data
const OpendealsData = [
    {
        image: avatar10,
        name: 'SASS app workflow diagram',
        date: 'Closing Deal date 14 Jan, 2023',
        price: '$49.99'
    },
    {
        image: avatar9,
        name: 'Steex - Admin Dashboard',
        date: 'Closing Deal date 22 April, 2023',
        price: '$132.94'
    },
    {
        image: avatar8,
        name: 'Create New Components',
        date: 'Closing Deal date 29 April, 2023',
        price: '$349.99'
    },
    {
        image: avatar7,
        name: 'New Email Design Templates',
        date: 'Closing Deal date 23 March, 2023',
        price: '$258.73'
    },
    {
        image: avatar6,
        name: 'Urban Modern Design',
        date: 'Closing Deal date 17 March, 2023',
        price: '$374.61'
    },
    {
        image: avatar4,
        name: 'Airbnb React Development',
        date: 'Closing Deal date 03 Feb, 2023',
        price: '$976.07'
    },
]

// Task list Data
const TaskslistData = [
    {
        Heading: 'Review and make sure nothing slips through cracks',
        Description: 'If someone cracks, they lose control of their emotions or actions because they are under a lot of pressure.',
        date: '15 Sep, 2023'
    },
    {
        Heading: 'Send meeting invites for sales campaign',
        Description: 'I will send you a meeting invite" is grammatically incorrect. Invite is a verb and invitation is the noun.',
        date: '20 Sep, 2023'
    },
    {
        Heading: 'Make a creating an account profile',
        Description: 'Like any other essay, a profile essay has three main parts, the introduction, body, and conclusion.',
        date: '08 Feb, 2023'
    },
    {
        Heading: 'Change email option process',
        Description: "If people have you saved as something else in their contacts, that's the name they'll see.",
        date: '19 Jan, 2023'
    },
    {
        Heading: 'Additional Calendar',
        Description: 'Employees can use shared calendars to manage their own assignments and appointments',
        date: '03 Jan, 2023'
    },
]

const WidgetsData = [
    {
        id : 1,
        name : "Annual Profit",
        amount : 368.24,
        decimal : 2,
        prefix: "$",
        suffix: "M",
        perstange : "4.65%",
        isArrow: true,
        icon: 'ph ph-briefcase',
        bgcolor: 'bg-primary-subtle',
        textcolor: 'text-primary',
        width: '76%',
        progressbar : "progress-bar"
    },
    {
        id : 2,
        name : "Daily average income",
        amount : 1454.71,
        decimal : 2,
        prefix: "$",
        suffix: "k",
        perstange : "1.33%",
        isArrow: true,
        icon: 'ph ph-wallet',
        bgcolor: 'bg-secondary-subtle',
        textcolor: 'text-secondary',
        width: '88%',
        progressbar : "progress-bar bg-secondary"
    },
    {
        id : 3,
        name : "Lead Conversations",
        amount : 33.37,
        decimal : 2,
        suffix: "%",
        perstange : "2.69%",
        isArrow: true,
        icon: 'bi bi-broadcast',
        bgcolor: 'bg-danger-subtle',
        textcolor: 'text-danger',
        width: '18%',
        progressbar : "progress-bar bg-danger"
    },
    {
        id : 4,
        name : "Campaign Sent",
        amount : 648,
        perstange : "0.78%",
        isArrow: false,
        icon: 'ph ph-rocket-launch',
        bgcolor: 'bg-success-subtle',
        textcolor: 'text-success',
        width: '49%',
        progressbar : "progress-bar bg-success"
    },
    {
        id : 5,
        name : "Annual Deals",
        amount : 1742,
        perstange : "7.93%",
        isArrow: true,
        icon: 'ph ph-heartbeat',
        bgcolor: 'bg-warning-subtle',
        textcolor: 'text-warning',
        width: '83%',
        progressbar : "progress-bar bg-warning"
    },
];


// Import Charts
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

// Email Charts
const EmailSendSeries = [63, 87, 33]

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

const UsersActivitySeries = [{
    name: 'Activ User',
    data: [44, 55, 41, 67, 22, 43]
}, {
    name: 'New Users',
    data: [13, 23, 20, 8, 13, 27]
}]

export { BalanceChartsSeries, ContactData, EmailSendSeries, OpendealsData, radialSeries, SyncStatusBreakdownSeries, TaskslistData, UsersActivitySeries, WidgetsData }