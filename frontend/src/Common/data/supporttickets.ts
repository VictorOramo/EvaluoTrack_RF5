//img 
import avatar1 from "assets/images/users/32/avatar-1.jpg";
import avatar2 from "assets/images/users/32/avatar-2.jpg";
import avatar3 from "assets/images/users/32/avatar-3.jpg";
import avatar4 from "assets/images/users/32/avatar-4.jpg";
import avatar5 from "assets/images/users/32/avatar-5.jpg";
import avatar6 from "assets/images/users/32/avatar-6.jpg";
import avatar7 from "assets/images/users/32/avatar-7.jpg";
import avatar8 from "assets/images/users/32/avatar-8.jpg";
import avatar9 from "assets/images/users/32/avatar-9.jpg";
import avatar10 from "assets/images/users/32/avatar-10.jpg";

const supporttickets = [
    {
        id: 1,
        imgBg: 'success',
        img: 'bi bi-ticket',
        iconColor: 'success',
        icon: 'ri-arrow-right-up-line',
        num: '3.47',
        count: 249,
        title: 'Total Tickets'
    },
    {
        id: 2,
        imgBg: 'warning',
        img: 'bi bi-hourglass-split',
        iconColor: 'danger',
        icon: 'ri-arrow-right-down-line',
        num: '6.33',
        count: 3174,
        title: 'Pending Tickets'
    }, {
        id: 3,
        imgBg: 'danger',
        img: 'bi bi-lock',
        iconColor: 'success',
        icon: 'ri-arrow-right-up-line',
        num: '7.34',
        count: 1596,
        title: 'Closed Tickets'
    }, {
        id: 4,
        imgBg: 'info',
        img: 'bi bi-ticket-perforated',
        iconColor: 'danger',
        icon: 'ri-arrow-right-down-line',
        num: '1.29',
        count: 365,
        title: 'New Tickets'
    },
];


const assignesTickets = [
    {
        id: 1,
        assigneeImg: avatar1,
        assigneeName: 'Stefanie Cartwright'
    },
    {
        id: 2,
        assigneeImg: avatar2,
        assigneeName: 'Marisol Gaylord'
    },
    {
        id: 3,
        assigneeImg: avatar3,
        assigneeName: 'Merlin Heaney'
    },
    {
        id: 4,
        assigneeImg: avatar4,
        assigneeName: 'Alexys Collier'
    },
    {
        id: 5,
        assigneeImg: avatar5,
        assigneeName: "Kyla O'Hara"
    },
    {
        id: 6,
        assigneeImg: avatar6,
        assigneeName: 'Twila Stark'
    },
    {
        id: 7,
        assigneeImg: avatar7,
        assigneeName: 'Bennett Rice'
    },
    {
        id: 8,
        assigneeImg: avatar8,
        assigneeName: 'Dusty Hackett'
    },
    {
        id: 9,
        assigneeImg: avatar9,
        assigneeName: 'Ines Stracke'
    },
    {
        id: 10,
        assigneeImg: avatar10,
        assigneeName: 'Abner Wisozk'
    },
]


const ticketList = [
    {
        id: 1,
        assignedto: [
            {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: avatar1
            },
            {
                assigneeName: "Marisol Gaylord",
                assigneeImg: avatar2
            }
        ],
        ticketTitle: "Webstorm does not recognize tags",
        clientName: "Domenic Dach",
        createDate: "17 Jan, 2023",
        dueDate: "23 Jan, 2023",
        priority: "Low",
        status: "Pending"
    },
    {
        id: 2,
        assignedto: [
            {
                assigneeName: "Merlin Heaney",
                assigneeImg: avatar3
            },
            {
                assigneeName: "Alexys Collier",
                assigneeImg: avatar4
            },
            {
                assigneeName: "Kyla O'Hara",
                assigneeImg: avatar5
            }
        ],
        ticketTitle: "Form error style for input addonAfter slot",
        clientName: "Prezy Mark",
        createDate: "29 Jan, 2023",
        dueDate: "06 Feb, 2023",
        priority: "Medium",
        status: "Open"
    },
    {
        id: 3,
        assignedto: [
            {
                assigneeName: "Twila Stark",
                assigneeImg: avatar6
            },
            {
                assigneeName: "Bennett Rice",
                assigneeImg: avatar7
            },
            {
                assigneeName: "Dusty Hackett",
                assigneeImg: avatar8
            },
            {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: avatar1
            }
        ],
        ticketTitle: "Not following the ReactJS folder structure",
        clientName: "Nelson Schaden",
        createDate: "01 Feb, 2023",
        dueDate: "07 Feb, 2023",
        priority: "High",
        status: "Pending"
    },
    {
        id: 4,
        assignedto: [
            {
                assigneeName: "Marisol Gaylord",
                assigneeImg: avatar2
            }
        ],
        ticketTitle: "Error message when placing an orders?",
        clientName: "Deondre Huel",
        createDate: "13 Feb, 2023",
        dueDate: "19 Feb, 2023",
        priority: "Low",
        status: "New"
    },
    {
        id: 5,
        assignedto: [
            {
                assigneeName: "Ines Stracke",
                assigneeImg: avatar9
            },
            {
                assigneeName: "Abner Wisozk",
                assigneeImg: avatar10
            }
        ],
        ticketTitle: "Forgetting to start a component name with a capital letter",
        clientName: "Sarai Schmidt",
        createDate: "20 Feb, 2023",
        dueDate: "26 Feb, 2023",
        priority: "Low",
        status: "Close"
    },
    {
        id: 6,
        assignedto: [
            {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: avatar1
            },
            {
                assigneeName: "Twila Stark",
                assigneeImg: avatar6
            },
            {
                assigneeName: "Kyla O'Hara",
                assigneeImg: avatar5
            },
            {
                assigneeName: "Alexys Collier",
                assigneeImg: avatar4
            }
        ],
        ticketTitle: "Sending props as strings (instead of numbers)",
        clientName: "Ophelia Steuber",
        createDate: "06 Apr, 2023",
        dueDate: "12 Apr, 2023",
        priority: "High",
        status: "Open"
    },
    {
        id: 7,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: avatar4
            },
            {
                assigneeName: "Twila Stark",
                assigneeImg: avatar6
            }
        ],
        ticketTitle: "Creating and using God components",
        clientName: "Nelson Schaden",
        createDate: "27 Feb, 2023",
        dueDate: "05 Mar, 2023",
        priority: "Medium",
        status: "Pending"
    },
    {
        id: 8,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: avatar4
            },
            {
                assigneeName: "Twila Stark",
                assigneeImg: avatar6
            },
            {
                assigneeName: "Bennett Rice",
                assigneeImg: avatar7
            }
        ],
        ticketTitle: "Forgetting that setState is asynchronous",
        clientName: "Zachary Stokes",
        createDate: "16 Mar, 2023",
        dueDate: "05 Mar, 2023",
        priority: "Medium",
        status: "Close"
    },
    {
        id: 9,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: avatar4
            },
            {
                assigneeName: "Merlin Heaney",
                assigneeImg: avatar3
            }
        ],
        ticketTitle: "Modifying the state directly",
        clientName: "Lloyd Vanburen",
        createDate: "21 Mar, 2023",
        dueDate: "26 Mar, 2023",
        priority: "Low",
        status: "New"
    },
    {
        id: 10,
        assignedto: [
            {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: avatar1
            }
        ],
        ticketTitle: "Not creating enough components",
        clientName: "Janet Guin",
        createDate: "28 Mar, 2023",
        dueDate: "06 Apr, 2023",
        priority: "High",
        status: "Open"
    },
    {
        id: 11,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: avatar4
            },
            {
                assigneeName: "Twila Stark",
                assigneeImg: avatar6
            }
        ],
        ticketTitle: "Creating and using God components",
        clientName: "Nelson Schaden",
        createDate: "27 Feb, 2023",
        dueDate: "05 Mar, 2023",
        priority: "Medium",
        status: "Pending"
    }
]
export { supporttickets, assignesTickets, ticketList };