import { StickyScroll } from '@/components/sticky-scroll-reveal'

function Projects() {

  const projects = [
        
        {title: "Quexgen",
    description: "Developed a full-stack web application for AI-powered exam generation aligned with Bloom’s Taxonomy, featuring scalable REST APIs (Django REST Framework, MySQL), a dynamic React.js frontend, secure JWT authentication with Axios integration, and AI-driven question generation tailored to cognitive levels for effective assessments.",
    tags:["react","tailwind","django rest framework","mysql"],
    content:"/quexgen/login.png",
    deployed:true,
    preview:"https://quexgen.online/"
  },

  {title: "Alumni Tracer System",
    description: "Collaborated with a team to develop an API-based Alumni Tracer System using Laravel, focusing on backend development with RESTful APIs, database design, and JSON endpoints for seamless frontend integration.",
    tags:["laravel","react","tailwind","mysql"],
    content: "/alumni-tracer/login-page.png",
    deployed:false,
    preview:[{
      image:"/alumni-tracer/login-page.png ",
      description:"Login Page"
    },
  {
      image:"/alumni-tracer/user-dashboard.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/update-employment.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/profile-page.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/announcement.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/employment-history.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/employment-details.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/admin-login.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/admin-dashboard.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/calendar.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/masterlist.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/events.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/analytics.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/programs.png ",
      description:"Admin Dashboard"
    },
    {
      image:"/alumni-tracer/official-list.png ",
      description:"Admin Dashboard"
    },

  ]
    
  },

     {title: "Faculty Appointment System",
    description: "Developed a Faculty Scheduling System using PHP, jQuery, MySQL, and Bootstrap with automated schedule generation, conflict detection, role-based access, and a responsive interface for managing faculty availability.",
    tags:["php","mysql","bootstrap"],
    content: "/facultyscheduling/login-page.png",
    deployed:false,
    preview:[{
      image:"/facultyscheduling/login-account.png",
      description:"Login Page"
    },
  {
      image:"/facultyscheduling/register-account.png",
      description:"Admin Dashboard"
    },
      {
      image:"/facultyscheduling/user-schedules.png",
      description:"Admin Dashboard"
    },
       {
      image:"/facultyscheduling/schedule an appointment.png",
      description:"Admin Dashboard"
    },
       {
      image:"/facultyscheduling/user-appointments.png",
      description:"Admin Dashboard"
    },
     {
      image:"/facultyscheduling/faculty-schedules.png",
      description:"Admin Dashboard"
    },
     {
      image:"/facultyscheduling/appointment-requests.png",
      description:"Admin Dashboard"
    },
     {
      image:"/facultyscheduling/approved-appointments.png",
      description:"Admin Dashboard"
    },
    {
      image:"/facultyscheduling/declined-appointments.png",
      description:"Admin Dashboard"
    },
    {
      image:"/facultyscheduling/admin-dashboard.png",
      description:"Admin Dashboard"
    },
    {
      image:"/facultyscheduling/faculty.png",
      description:"Admin Dashboard"
    },
    {
      image:"/facultyscheduling/users.png",
      description:"Admin Dashboard"
    },
    {
      image:"/facultyscheduling/user-appointments.png",
      description:"Admin Dashboard"
    },
    {
      image:"/facultyscheduling/user-schedules.png",
      description:"Admin Dashboard"
    },
    {
      image:"/facultyscheduling/archives.png",
      description:"Admin Dashboard"
    },
    
   

  ]
  },

    {title: "Crime Reporting System",
    description: "Developed a Crime Reporting System for the City of San Carlos using PHP, Bootstrap, and MySQL, featuring a responsive interface, secure form validation, and role-based access control.",
     tags:["php","mysql","bootstrap"],
    content: "/ocrs/login-page.png",
    deployed:false,
    preview:[{
      image:"/ocrs/login-page.png",
      description:"User Login Page"
    },
    {
      image:"/ocrs/police-login.png",
      description:"User Login Page"
    },
    {
      image:"/ocrs/admin-login.png",
      description:"User Login Page"
    },
    {
      image:"/ocrs/reports.png",
      description:"Users Pending Reports"
    },
        {
      image:"/ocrs/report-crime.png",
      description:"Report A Crime"
    },

    {
      image:"/ocrs/case-details.png",
      description:"Case Details"
    },
     {
      image:"/ocrs/proof.png",
      description:"Solving A Case"
    },
      {
      image:"/ocrs/admin-dashboard.png",
      description:"Admin Dashboard"
    },
    {
      image:"/ocrs/admin-reports.png",
      description:"User Reports"
    },
    {
      image:"/ocrs/crime-summary.png",
      description:"Crime Summary"
    },
  ]
  },


    
    
    ]

  return (
    <div className=' '>
      <h1 className='text-4xl font-bold mb-5 text-center'>
          MY PROJECTS
      </h1>
      <div className='max-w-screen'>


      <StickyScroll content={projects}/>
            </div>
    </div>
  )
}

export default Projects
