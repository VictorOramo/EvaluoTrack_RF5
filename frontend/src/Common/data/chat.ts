// import images
import avatar1 from "assets/images/users/48/avatar-1.jpg";
import avatar2 from "assets/images/users/48/avatar-2.jpg";
import avatar3 from "assets/images/users/48/avatar-3.jpg";
import avatar4 from "assets/images/users/48/avatar-4.jpg";
import avatar5 from "assets/images/users/48/avatar-5.jpg";
import avatar6 from "assets/images/users/48/avatar-6.jpg";
import avatar7 from "assets/images/users/48/avatar-7.jpg";
import avatar8 from "assets/images/users/48/avatar-8.jpg";
import avatar10 from "assets/images/users/48/avatar-10.jpg";

const direactContact = [
  {
    id: 1,
    roomId: 1,
    status: "offline",
    name: "Lisa Parker",
    image: avatar2,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
  {
    id: 2,
    roomId: 2,
    status: "offline",
    name: "Frank Thomas",
    image: avatar3,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 8,
  },
  {
    id: 3,
    roomId: 3,
    status: "offline",
    name: "Clifford Taylor",
    bgColor: "danger",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
  {
    id: 4,
    roomId: 4,
    status: "offline",
    name: "Janette Caster",
    image: avatar4,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
  {
    id: 5,
    roomId: 5,
    status: "offline",
    name: "Sarah Beattie",
    image: avatar5,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 5,
  },
  {
    id: 6,
    roomId: 6,
    status: "offline",
    name: "Nellie Cornett",
    image: avatar6,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 2,
  },
  {
    id: 7,
    roomId: 7,
    status: "offline",
    name: "Chris Kiernan",
    bgColor: "warning",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
  {
    id: 8,
    roomId: 8,
    status: "offline",
    name: "Edith Evans",
    bgColor: "info",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
  {
    id: 9,
    roomId: 9,
    status: "offline",
    name: "Joseph Siegel",
    image: avatar7,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
];

const chatData = [
  {
    id: 1,
    roomId: 1,
    name: "Lisa Parker",
    image: avatar2,
    status: "success"
  },
  {
    id: 2,
    roomId: 2,
    name: "Frank Thomas",
    image: avatar3,
    Channels: '8'
  },
  {
    id: 3,
    roomId: 3,
    name: "Clifford Taylor",
    isImg: true,
    profile: "CT"
  },
  {
    id: 4,
    roomId: 4,
    name: "Janette Caster",
    image: avatar4,
  },
  {
    id: 5,
    roomId: 5,
    name: "Sarah Beattie",
    image: avatar5,
    Channels: '5'
  },
  {
    id: 6,
    roomId: 6,
    name: "Nellie Cornett",
    image: avatar6,
    Channels: '2'
  },
  {
    id: 7,
    roomId: 7,
    name: "Chris Kiernan",
    isImg: true,
    profile: "CK"
  },
  {
    id: 8,
    roomId: 8,
    name: "Edith Evans",
    isImg: true,
    profile: "EE"
  },
  {
    id: 9,
    roomId: 9,
    name: "Joseph Siegel",
    image: avatar7,
  },
];

const ChannelsData = [
  {
    id: 1,
    name: 'Landing Design',
    Channels: 7
  },
  {
    id: 2,
    name: 'General'
  },
  {
    id: 3,
    name: 'Project Tasks',
    Channels: 2
  },
  {
    id: 4,
    name: 'Meeting'
  },
  {
    id: 5,
    name: 'Reporting'
  }
];

const chatContactData = [
  {
    title: 'A',
    contacts: [
      {
        id: 1,
        name: 'Alice Cruickshank',
        status: "offline",
        roomId: 5,
        isImg: true,
        profile: "AC"
      }
    ],
  },
  {
    title: 'B',
    contacts: [
      {
        id: 1,
        name: 'Barrett Brown',
        status: "offline",
        roomId: 1,
        image: avatar4
      }
    ],
  },
  {
    title: 'C',
    contacts: [
      {
        id: 1,
        name: 'Chris Kiernan',
        status: "offline",
        roomId: 3,
        isImg: true,
        profile: "CK"
      },
      {
        id: 2,
        name: 'Clifford Taylor',
        status: "offline",
        roomId: 4,
        isImg: true,
        profile: "CT"
      }
    ],
  },
  {
    title: 'E',
    contacts: [
      {
        id: 1,
        name: 'Edith Evans',
        status: "offline",
        roomId: 5,
        isImg: true,
        profile: "EE"
      }
    ],
  },
  {
    title: 'F',
    contacts: [
      {
        id: 1,
        name: 'Frank Thomas',
        status: "offline",
        roomId: 6,
        image: avatar3
      }
    ],
  },
  {
    title: 'G',
    contacts: [
      {
        id: 1,
        name: 'Gilbert Beer',
        status: "offline",
        roomId: 7,
        isImg: true,
        profile: "GB"
      }
    ],
  },
  {
    title: 'J',
    contacts: [
      {
        id: 1,
        name: 'Janette Caster',
        status: "offline",
        roomId: 8,
        image: avatar4
      },
      {
        id: 2,
        name: 'Joseph Siegel',
        status: "offline",
        roomId: 9,
        image: avatar7
      },
      {
        id: 3,
        name: 'Justyn Wisoky',
        status: "offline",
        roomId: 2,
        image: avatar1
      }
    ],
  },
  {
    title: 'K',
    contacts: [
      {
        id: 1,
        name: 'Keaton King',
        status: "offline",
        roomId: 11,
        image: avatar5
      }
    ],
  },
  {
    title: 'L',
    contacts: [
      {
        id: 1,
        name: 'Lisa Parker',
        status: "offline",
        roomId: 1,
        image: avatar2
      }
    ],
  },
  {
    title: 'M',
    contacts: [
      {
        id: 1,
        name: 'Marian Moen',
        status: "offline",
        roomId: 3,
        isImg: true,
        profile: "MM"
      }
    ],
  },
  {
    title: 'N',
    contacts: [
      {
        id: 1,
        name: 'Nellie Cornett',
        status: "offline",
        roomId: 4,
        image: avatar6,
        isImg: true,
        profile: "NC"
      }
    ],
  },
  {
    title: 'R',
    contacts: [
      {
        id: 1,
        name: 'Ronald Downey',
        status: "offline",
        roomId: 5,
        isImg: true,
        profile: "RD"
      }
    ],
  },
  {
    title: 'S',
    contacts: [
      {
        id: 1,
        name: 'Sarah Beattie',
        status: "offline",
        roomId: 6,
        image: avatar5
      }
    ],
  },
  {
    title: 'V',
    contacts: [
      {
        id: 1,
        name: 'Victor Beahan',
        status: "offline",
        roomId: 7,
        image: avatar10
      }
    ],
  },
  {
    title: 'W',
    contacts: [
      {
        id: 1,
        name: 'Wayne Runte',
        status: "offline",
        roomId: 8,
        image: avatar2
      }
    ],
  },
];

const callsData = [
  {
    id: 1,
    name: 'Warren Hickey',
    date: '22 Feb, 06:49PM',
    time: '01:10',
    icon: 'bi bi-camera-video align-middle',
    isArrow: true,
    image: avatar2
  },
  {
    id: 2,
    name: 'Angela Walls',
    date: '22 Feb, 03:23PM',
    time: '02:34',
    icon: 'bi bi-camera-video align-middle',
    isImg: true,
    isArrow: true,
    profile: "AW"
  },
  {
    id: 3,
    name: 'Thomas Lane',
    date: '22 Feb, 10:31AM',
    time: '01:40',
    icon: 'bi bi-telephone align-middle',
    isArrow: false,
    image: avatar3
  },
  {
    id: 4,
    name: 'Elisa Smith',
    date: '21 Feb, 07:05PM',
    time: '03:51',
    icon: 'bi bi-telephone align-middle',
    isImg: true,
    isArrow: true,
    profile: "ES"
  },
  {
    id: 5,
    name: 'Ola Black',
    date: '21 Feb, 05:15PM',
    time: '05:15',
    icon: 'bi bi-camera-video align-middle',
    isImg: true,
    isArrow: false,
    profile: "OB"
  },
  {
    id: 6,
    name: 'Victoria McBride',
    date: '21 Feb, 10:30AM',
    time: '00:42',
    icon: 'bi bi-telephone align-middle',
    isArrow: true,
    image: avatar3
  },
  {
    id: 7,
    name: 'Carla Scott',
    date: '20 Feb, 05:20PM',
    time: '04:02',
    icon: 'bi bi-camera-video align-middle',
    isArrow: true,
    image: avatar5
  },
  {
    id: 8,
    name: 'Waldo Smith',
    date: '20 Feb, 01:40PM',
    time: '02:34',
    icon: 'bi bi-camera-video align-middle',
    isArrow: false,
    isImg: true,
    profile: "WS"
  },
  {
    id: 9,
    name: 'Mary Parker',
    date: '19 Feb, 11:29AM',
    time: '10:09',
    icon: 'bi bi-telephone align-middle',
    isArrow: false,
    image: avatar6
  },
  {
    id: 1,
    name: 'Judith Morrow',
    date: '18 Feb, 02:05PM',
    time: '07:15',
    icon: 'bi bi-telephone align-middle',
    isArrow: true,
    image: avatar8
  },
];

const bookmarkData = [
  {
    id: '1',
    icon: 'bi bi-file-earmark-richtext',
    fileName: 'design-phase-1-approved.pdf',
    size: '12.5 MB'
  },
  {
    id: '2',
    icon: 'bi bi-pin-angle',
    fileName: 'Bg Pattern',
    size: 'https://bgpattern.com/'
  },
  {
    id: '3',
    icon: 'bi bi-image',
    fileName: 'Image-001.jpg',
    size: '4.2 MB'
  },
  {
    id: '4',
    icon: 'bi bi-pin-angle',
    fileName: 'Images',
    size: 'https://images123.com/'
  },
  {
    id: '5',
    icon: 'bi bi-pin-angle',
    fileName: 'Bg Gradient',
    size: 'https://bggradient.com/'
  },
  {
    id: '6',
    icon: 'bi bi-image',
    fileName: 'Image-012.jpg',
    size: '3.1 MB'
  },
  {
    id: '7',
    icon: 'bi bi-file-earmark-richtext',
    fileName: 'analytics dashboard.zip',
    size: '6.7 MB'
  },
  {
    id: '8',
    icon: 'bi bi-image',
    fileName: 'Image-031.jpg',
    size: '4.2 MB'
  }
];

const attachementsData = [
  {
    id: 1,
    foldericon: "bi bi-file-earmark-richtext",
    foldername: "design-phase-1-approved.pdf",
    foldersize: "12.5 MB",
  },
  {
    id: 2,
    foldericon: "bx bx-image",
    foldername: "Image-1.jpg",
    foldersize: "4.2 MB",
  },
  {
    id: 3,
    foldericon: "bx bx-image",
    foldername: "Image-2.jpg",
    foldersize: "3.1 MB",
  },
  {
    id: 4,
    foldericon: "bi bi-file-earmark-richtext",
    foldername: "Landing-A.zip",
    foldersize: "6.7 MB",
  },
];

const messages = [
  {
    id: 1,
    roomId: 1,
    sender: "Lisa Parker",
    message: "Good morning 😊",
    createdAt: "09:07 am",
  },
  {
    id: 2,
    roomId: 1,
    sender: "Anna Adame",
    message: "Good morning, How are you? What about our next meeting?",
    createdAt: "09:08 am",
  },
  {
    id: 3,
    roomId: 1,
    sender: "Lisa Parker",
    message: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM",
  },
  {
    id: 4,
    roomId: 1,
    sender: "Lisa Parker",
    message: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.",
    createdAt: "09:10 am",
  },
  {
    id: 5,
    roomId: 1,
    sender: "Anna Adame",
    message: "Wow that's great",
    createdAt: "09:12 am",
  },
  {
    id: 6,
    roomId: 2,
    sender: "Frank Thomas",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
  {
    id: 6,
    roomId: 3,
    sender: "Clifford Taylor",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
  {
    id: 6,
    roomId: 4,
    sender: "Janette Caster",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
  {
    id: 6,
    roomId: 5,
    sender: "Sarah Beattie",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
  {
    id: 6,
    roomId: 6,
    sender: "Nellie Cornett",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
  {
    id: 6,
    roomId: 7,
    sender: "Chris Kiernan",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
  {
    id: 6,
    roomId: 8,
    sender: "Edith Evans",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
  {
    id: 6,
    roomId: 9,
    sender: "Joseph Siegel",
    message: "Good morning 😊",
    createdAt: "09:7 am",
  },
];

export { messages, attachementsData, chatContactData, chatData, ChannelsData, callsData, bookmarkData, direactContact };