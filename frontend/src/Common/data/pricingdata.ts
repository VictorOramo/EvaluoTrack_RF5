const pricingdata = [
    {
        id:1,
        price:"$29.99",
        plan:"Free Plan",
        start:"For Startup",
        variant:"primary",
        button:"primary",
        value:"Change plan",
        ribbon: false,
        
        actext: [{
            id:1,
            act1:"Projects",
            act2:"Customers",
            act3:"Scalable Bandwidth",
            act4:"No Team Account",
        }],
        mutetext: [{
            id:1,
            details1:"In app messaging",
            details2: "FTP Login",
            details3: "Detailed Analytics",
            details4:"Custom domain",
            details5:"Smart Workflow",
            details6:"IQ test",
            design:"text-decoration-line-through text-muted",
            design1:"text-decoration-line-through text-muted"
        }]
    },
    {
        id:2,
        price:"$49.99",
        plan:"Professional Plan",
        start:"Professional plans",
        variant:"secondary",
        button:"secondary disabled",
        value:"Your Current plan",
        ribbon: true,
        actext: [{
            id:1,
            act1:"Projects",
            act2:"Customers",
            act3:"Scalable Bandwidth",
            act4:"No Team Account",
            
        }],
        mutetext: [{
            id:1,
            details1:"In app messaging",
            details2: "FTP Login",
            details3: "Detailed Analytics",
            details4:"Custom domain",
            details5:"Smart Workflow",
            details6:"IQ test",
            design1:"text-decoration-line-through text-muted",
            active1:"active"
        }]
    },
    {
        id:3,
        price:"$99.99",
        plan:"Professional Plan",
        start:"Professional plans",
        variant:"primary",
        button:"primary",
        value:"Change plan",
        ribbon: false,
        actext: [{
            id:3,
            act1:"Projects",
            act2:"Customers",
            act3:"Scalable Bandwidth",
            act4:"No Team Account",
        }],
        mutetext: [{
            id:3,
            details1:"In app messaging",
            details2:"FTP Login",
            details3:"Detailed Analytics",
            details4:"Custom domain",
            details5:"Smart Workflow",
            details6:"IQ test",
            active:"active",
            active1:"active"
        }]
    },
]

const mainprice =[
    {
        id:1,
        main:"Starter",
        plan:"starter plans",
        price:"$24.99",
        variant1:"success",
        button:"success",
        ribbon: false,
        simpleprice :[
            {
                id:1,
                user:1,
                storage:"01",
                domain:"No",
                support:"No",
                variant:"success"
            },
        ]
    },
    {
        id:2,
        main:"Professional",
        plan:"Professional plans",
        price:"$49.99",
        variant1:"primary",
        variant2:"primary",
        button:"primary",
        ribbon:true,
        simpleprice :[
            {
                id:1,
                user:1,
                storage:"5",
                domain:"Yes",
                support:"No",
                variant:"primary"
            }
        ]
    },
    {
        id:3,
        main:"Unlimited",
        plan:"Unlimited plans",
        price:"$99.99",
        variant1:"secondary",
        button:"secondary",
        ribbon: false,
        simpleprice :[
            {
                id:1,
                user:5,
                storage:"40",
                domain:"Yes",
                support:"Yes",
                design:"decoration-line-through",
                variant:"secondary"
            },
        ]
    },
]

const pricingtwodata =[
    {
        id:1,
        plan:"Personal Plan",
        price: "$19.99",
        for:"Perfect plan for Starters",
        pro:"Projects",
        share:"Share with ",
        team:"team members",
        sync:"Sync across devices",
        width:"Scalable Bandwidth",
        ftp:"FTP Login",
        button:"Change Plan",
        variant:"primary",
        ribbon: false,
        detail:"Perfect plan for Starters"
    },
    {
        id:2,
        plan:"Professional Plan",
        price: "$49.99",
        for:"Perfect plan for Starters",
        pro:"Projects",
        share:"Share with ",
        team:"team members",
        sync:"Sync across devices",
        width:"Scalable Bandwidth",
        free:"Everything in Free Plans",
        icon:"bi bi-check-lg text-success me-2 align-middle",
        member:"Share with 5 team members",
        member1:"Share with 5 team members",
        button:"Your Current Plan",
        variant:"secondary disabled",
        ribbon: true,
        detail:"For users who want to do more."
    },
    {
        id:3,
        plan:"Enterprise Plan",
        price: "$49.99",
        for:"Perfect plan for Starters",
        pro:"Projects",
        share:"Share with ",
        team:"team members",
        width:"Scalable Bandwidth",
        free:"Everything in Pro Plan",
        icon:"bi bi-check-lg text-success me-2 align-middle",
        member1:"Share with 5 team members",
        day1:" day version history",
        admin:"Admin tools",
        button:"Change Plan",
        ribbon: false,
        variant:"primary",
        detail:"Your entire team in one place"
    },
    {
        id:4,
        plan:"Unlimited Plan",
        price: "$49.99",
        for:"Perfect plan for Starters",
        pro:"Projects",
        share:"Share with ",
        team:"team members",
        sync:"Sync across devices",
        width:"Scalable Bandwidth",
        tool:"Admin tools",
        day:"day version history ",
        free:"Everything in Enterprise Plan",
        icon:"bi bi-check-lg text-success me-2 align-middle",
        member1:"Share with 5 team members",
        day1:" day version history",
        admin:"Admin tools",
        button:"Change Plan",
        variant:"primary",
        ribbon: false,
        detail:"Run your company on your teams"
    },
]

const ourplandata = [
    {
        id:1,
        pro:"Projects", 
        custom:"Customers",
        width:"Scalable Bandwidth",
        ftp:"FTP Login",
        plan:"Starter",
        price:"$19",
        button:"danger",
        value:"Your Current Plan",
        info:"The perfect way to get started and get used to our tools.",
        color:"success",
        able:"disabled"
    },
    {
        id:2,
        pro:"Projects", 
        custom:"Customers",
        width:"Scalable Bandwidth",
        ftp:"FTP Login",
        plan:"Professional",
        price:"$29",
        button:"info",
        value:"Change Plan",
        info:"Excellent for scaling teams to build culture. Special plan for professional business.",
        support:"Support",
        color:"dark"
    },
    {
        id:3,
        pro:"Projects", 
        custom:"Customers",
        width:"Scalable Bandwidth",
        ftp:"FTP Login",
        plan:"Enterprise",
        price:"$39",
        button:"info",
        value:"Change Plan",
        info:"This plan is for those who have a team already and running a large business.",
        support:"Support",
        store:"Storage",
        color:"primary",
        unlimit:"35"
    },
    {
        id:4,
        pro:"Projects", 
        custom:"Customers",
        width:"Scalable Bandwidth",
        ftp:"FTP Login",
        plan:"Unlimited",
        price:"$49",
        button:"info",
        value:"Change Plan",
        info:"For most businesses that want to optimize web queries.",
        support:"Support",
        store:"Storage",
        domain:"Domain",
        color:"info",
        style:"p-1 bg-info bg-opacity-10 text-center text-info fw-semibold",
        icon:"ri-flashlight-fill align-bottom me-1",
        pop:"Most Popular Choice",
        unlimit:"Unlimited"
    },
];

export {pricingdata, mainprice, pricingtwodata, ourplandata}
