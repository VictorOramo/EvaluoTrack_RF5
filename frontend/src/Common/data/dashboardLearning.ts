// Import Images
import avatar1 from 'assets/images/users/48/avatar-1.jpg'
import avatar2 from 'assets/images/users/48/avatar-2.jpg'
import avatar4 from 'assets/images/users/48/avatar-4.jpg'
import avatar5 from 'assets/images/users/48/avatar-5.jpg'
import avatar6 from 'assets/images/users/48/avatar-6.jpg'
import avatar7 from 'assets/images/users/48/avatar-7.jpg'
import avatar8 from 'assets/images/users/48/avatar-8.jpg'

import react from 'assets/images/learning/react.png'
import shopify from 'assets/images/learning/shopify.png'
import sketch from 'assets/images/learning/sketch.png'
import webpack from 'assets/images/learning/webpack.png'
import laravel from 'assets/images/learning/laravel.png'
import tailwindcss from 'assets/images/learning/tailwindcss.png'

const InstructorsData = [
    {
        image: avatar2,
        name: 'Bethany Nienow',
        courses: '236 Courses',
        rateing: '4.9'
    },
    {
        image: avatar7,
        name: 'Sonia Conn',
        courses: '247 Courses',
        rateing: '4.8'
    },
    {
        image: avatar4,
        name: 'Talon Bradtke',
        courses: '365 Courses',
        rateing: '4.9'
    },
    {
        image: avatar5,
        name: 'Tyrell Kerluke',
        courses: '298 Courses',
        rateing: '4.7'
    },
    {
        image: avatar6,
        name: 'Ross Zieme',
        courses: '196 Courses',
        rateing: '4.9'
    },
    {
        image: avatar1,
        name: 'Hollis Spencer',
        courses: '321 Courses',
        rateing: '4.7'
    },
    {
        image: avatar8,
        name: 'Cordia Grady',
        courses: '357 Courses',
        rateing: '4.8'
    },
]

const coursesData = [
    {
        image: react,
        coursesName: 'Advanced React and Redux',
        category: 'React Development',
        instructor: 'Ayaan Bowen',
        lessons: '15',
        duration: '2 Years',
        fees: '$278.12',
        status: 'Open',
        rating: '4.5'
    },
    {
        image: shopify,
        coursesName: 'The Complete Shopify Dropship course',
        category: 'Shopify Development',
        instructor: 'Jansh Brown',
        lessons: '27',
        duration: '6 Months',
        fees: '$149.00',
        status: 'Open',
        rating: '4.5'
    },
    {
        image: sketch,
        coursesName: 'UI/UX Style guide With Sketch',
        category: 'Graphic Design',
        instructor: 'Ayaan Bowen',
        lessons: '16',
        duration: '3 Months',
        fees: '$215.00',
        status: 'Close',
        rating: '4.9'
    },
    {
        image: webpack,
        coursesName: 'Digital Marketing',
        category: 'Marketing & Management',
        instructor: 'Prezy Mark',
        lessons: '65',
        duration: '2 Years',
        fees: '$199.00',
        status: 'Open',
        rating: '4.3'
    },
    {
        image: laravel,
        coursesName: 'Master Laravel for Beginners Intermediate',
        category: 'Laravel Development',
        instructor: 'Nelson Schaden',
        lessons: '21',
        duration: '8 Months',
        fees: '$379.99',
        status: 'Close',
        rating: '4.7'
    },
    {
        image: tailwindcss,
        coursesName: 'Tailwind CSS From Scratch',
        category: 'Web Design',
        instructor: 'Domenic Dach',
        lessons: '53',
        duration: '1 Months',
        fees: '$473.99',
        status: 'Open',
        rating: '4.8'
    },
]

// Chart data
const LearningOverviewseries = [{
    name: 'This Month',
    data: [49, 54, 48, 54, 67, 88, 96, 102, 120, 133]
}, 
{
    name: 'Last Month',
    data: [57, 66, 74, 63, 55, 70, 84, 97, 112, 99]
}]

const StudentSeries = [{
    name: 'Total Students',
    data: [33, 56, 37, 51, 42, 83, 71]
}]

const CourseSeries = [{
    name: 'Total Courses',
    data: [33, 56, 37, 51, 42, 83, 71]
}]

const ProgressSeries = [67]

export { InstructorsData, LearningOverviewseries, StudentSeries, CourseSeries, ProgressSeries, coursesData }