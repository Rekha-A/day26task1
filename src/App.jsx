import React from 'react'
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import All from './components/All'
import FullStackDevelopment from './components/FullStackDevelopment'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'
import DataScience from './components/DataScience'


function App() {

  let data=[{
     
    name:"FullStackDevelopment",
    image:"data:image/jpeg;base64,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",
    title:"Top Ways to Assess Soft Skills as a Good Full Stack Developer",
    text:"What will be the expectation of you from the Interviewer?",
    date:"01 April 2024"
  },
{
    name:"FullStackDevelopment",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
     title:"Difference between Full Stack Developer vs software Engineer",
    text:"A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well.",
    date:"01 April 2024"
},
{
  name:"FullStackDevelopment",
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp",
  title:"Best way to learn full stack developer as Good Developer",
  text:"Coding bootcamps are among the most effective methods for learning front and back end development skills. These courses offer the chance to learn web development through practical instruction, making use of flexible, intensive curricula to prepare learners for a career in full stack development.",
 date:"01 April 2024"
},
{
  name:"FullStackDevelopment",
  image:"https://www.guvi.in/blog/wp-content/uploads/2021/08/Full-Stack-Development-qa-2048x1072.jpg",
  title:"Know This Before Stepping Into Full Stack Development",
  text:"To become a full stack developer, you'll need to familiarize yourself with two basic web development concepts: the front end and the back end.",
  date:"01 April 2024"
},
{
  name:"FullStackDevelopment",
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/01/image-1.png",
   title:"Discover the Fastest Route to becoming one",
  text:"A full stack developer is a type of software engineer who can work with both the front-end and the back-end of web applications.",
  date:"01 April 2024"
},
{
  name:"FullStackDevelopment",
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
  title:"7 Best Full-Stack Development Online Courses",
  text:"Learning full-stack development through an online course offers numerous advantages that make it a popular and effective choice for aspiring developers. Online courses provide the flexibility to learn at your own pace and on your own schedule. By enrolling in a Full-stack Development course, you invest in your creative growth, career prospects, and the ability to develop web applications in this dynamic digital landscape.",
  date:"01 April 2024"
},
{
  name:"DataScience",
  image:" https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
  title:" Top 10 High Paying Non-Coding Jobs in Data Science",
  text:" Data science are in high demand this year. No-code roles in data science offer huge salaries, remote working opportunities, and promising career growth.",
  date:"01 April 2024"
},
{
  name:"DataScience",
  image:" https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
  title:" Top Product-Based Companies for Data Science Freshers",
  text:" Before diving into the list of top companies, it’s important to understand the factors that make a data science company worth working for. Here are a few key considerations:",
  date:"01 April 2024"
},
{
  name:"DataScience",
  image:" https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
  title:"Best Data Science Books to Learn in 2024 ",
  text:"In this blog, we’ll recommend some great data science books that can help you get started on this exciting data science career path. Books explain everything in a way you can understand, and you can take your time reading them, make notes, and really learn the concepts. ",
  date:"01 April 2024"
},
{
  name:"CyberSecurity",
  image:" https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-The-Easiest-Programming-Languages-to-Learn.webp",
  title:" Easiest programming languages to learn in cyber crime",
  text:" Using this filter on Indeed, the top five in-demand programming languages (at the time of writing) for cybersecurity analysts are: Python,PowerShell,SQL,Bash,Perl",
  date:"01 April 2024"
},
{
  name:"CyberSecurity",
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp ",
  title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide ",
  text:"Cybersecurity is a multifaceted discipline that encompasses a wide range of roles, each contributing to the overall security posture of an organization.While coding skills are undoubtedly valuable, non-coding jobs are equally essential in identifying vulnerabilities, implementing security measures, and responding to incidents. ",
  date:"01 April 2024"
},
{
  name:"CyberSecurity",
  image:" https://www.guvi.in/blog/wp-content/uploads/2023/09/Featured-Image-Difference-Between-Hacking-and-Ethical-Hacking.webp",
  title:"The best difference between hacking and ethical hacking ",
  text:"Hacking is when you access a company's network or technology without their knowledge or approval. It is entirely illegal, and anyone found guilty faces serious legal consequences. Ethical hacking is authorized and permitted by the firm, and it is fully legal. Ethical hackers are covered by an agreement. ",
  date:"01 April 2024"
},
{
  name:"Career",
  image:" https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Career-Opportunities-in-Web-Development.webp",
  title:" Career Opportunities in Web Development ",
  text:" Let’s take a closer look at some of the exciting career opportunities waiting for you in the field of web development",
  date:"01 April 2024"
},
{
  name:"Career",
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
  title:"Product-Based Companies for Product Managers ",
  text:"The best product-based companies for product managers in India, which should capture your interest if making a successful career as a product manager is your goal. ",
  date:"01 April 2024"
},
{
  name:"Career",
  image:" https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Get-a-UIUX-Job-With-No-Experience.webp",
  title:" UI/UX job without no experience ",
  text:"Complete a Prep Course. If you are new to the field, completing a prep course that introduces you the world of design can be hugely beneficial,Determine Your Ideal Career Path,Take a Free Course,Utilize Free Resources,Work on Projects ",
  date:"01 April 2024"
}
]

  return <>
  <BrowserRouter>
  <Navbar/>
  <br/><br/>
  <Routes>
    <Route path='/all' element={<All data={data}/>}/>
    <Route path='/fullstackdevelopment' element={<FullStackDevelopment data={data}/>}/>
    <Route path='/cybersecurity' element={<CyberSecurity data={data}/>}/>
    <Route path='/career' element={<Career data={data}/>}/>
    <Route path='/datascience' element={<DataScience data={data}/>}/>
    <Route path='*' element={<Navigate to='/all'/>}/>
      </Routes>
     </BrowserRouter> 
     </>   
}
export default App