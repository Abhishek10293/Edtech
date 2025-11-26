import Symbol from './symbol.svg';
import dataScience from './dataScience.jpeg';
import devops from './devops.jpeg';
import Dsa from './Dsa.jpeg';
import MachineLearning from './MachineLearning.jpeg';
import WebDev from './WebDev.jpeg';
import BannerImg from './BannerImg.png'
import kartik from './kartikcopy.png'
import star from './star.png'


export const assets={
  Symbol,
  dataScience,
  devops,
  Dsa,
  MachineLearning,
  WebDev,
  BannerImg,
  kartik,
  star
};

export const cour = [
  {
    _id: "course1",
    name: "Mastering Machine Learning with Python",
    image: MachineLearning, // Placeholder for course thumbnail
    category: "Machine Learning",
    level: "Advanced",
    duration: "40 Hours",
    description:
      "A deep dive into advanced ML algorithms, covering deep learning, NLP, and computer vision projects. Focuses on practical implementation and industry case studies.",
    price: 99,
    instructor: {
      name: "Dr. Richard James",
      designation: "Lead Data Scientist",
    },
  },
  {
    _id: "course2",
    name: "Foundational Data Science Bootcamp",
    image: dataScience,
    category: "Data Science",
    level: "Beginner",
    duration: "6 Weeks",
    description:
      "An introductory course covering statistics, data manipulation using Pandas, and basic visualization techniques in R and Python. Perfect for beginners.",
    price: 49,
    instructor: {
      name: "Dr. Emily Larson",
      designation: "Senior Data Analyst",
    },
  },
  {
    _id: "course3",
    name: "Complete DevOps and Cloud Engineering",
    image: devops,
    category: "DevOps",
    level: "Intermediate",
    duration: "80 Hours",
    description:
      "Learn CI/CD pipelines, Docker, Kubernetes, and AWS/Azure cloud infrastructure management. Essential skills for modern software deployment.",
    price: 149,
    instructor: {
      name: "Dr. Sarah Patel",
      designation: "Principal DevOps Engineer",
    },
  },
  {
    _id: "course4",
    name: "Full-Stack Web Development: MERN",
    image: WebDev,
    category: "Web Development",
    level: "Intermediate",
    duration: "10 Weeks",
    description:
      "Build complete web applications using MongoDB, Express, React, and Node.js (MERN stack). Includes authentication and deployment.",
    price: 129,
    instructor: {
      name: "Dr. Christopher Lee",
      designation: "Full-Stack Developer & Trainer",
    },
  },
  {
    _id: "course5",
    name: "Deep Learning with PyTorch and TensorFlow",
    image: WebDev,
    category: "Machine Learning",
    level: "Advanced",
    duration: "50 Hours",
    description:
      "Focuses on neural network architectures, CNNs, RNNs, and Transformers, with hands-on labs using the leading deep learning frameworks.",
    price: 109,
    instructor: {
      name: "Dr. Jennifer Garcia",
      designation: "AI Research Scientist",
    },
  },
  {
    _id: "course6",
    name: "Applied Generative AI",
    image: WebDev,
    category: "Machine Learning",
    level: "Advanced",
    duration: "45 Hours",
    description:
      "Explore the latest models like GPT and Stable Diffusion. Learn to fine-tune, deploy, and build applications powered by Generative AI.",
    price: 119,
    instructor: {
      name: "Dr. Andrew Williams",
      designation: "AI Solutions Architect",
    },
  },
  {
    _id: "course7",
    name: "Introduction to Python Programming",
    image: WebDev,
    category: "Programming",
    level: "Beginner",
    duration: "3 Weeks",
    description:
      "Master the fundamentals of Python, including syntax, data structures, and basic scripting. The perfect start for any tech field.",
    price: 29,
    instructor: {
      name: "Dr. Christopher Davis",
      designation: "Software Developer",
    },
  },
  {
    _id: "course8",
    name: "Data Visualization with Tableau and Power BI",
    image: WebDev,
    category: "Data Science",
    level: "Intermediate",
    duration: "4 Weeks",
    description:
      "Learn to create compelling dashboards and interactive reports to tell stories with data using industry-leading tools.",
    price: 79,
    instructor: {
      name: "Dr. Timothy White",
      designation: "BI Consultant",
    },
  },
  {
    _id: "course9",
    name: "Security and Hardening in DevOps",
    image: WebDev,
    category: "DevOps",
    level: "Advanced",
    duration: "30 Hours",
    description:
      "Integrate security practices (DevSecOps) into your CI/CD pipeline, focusing on vulnerability scanning, secret management, and compliance.",
    price: 89,
    instructor: {
      name: "Dr. Ava Mitchell",
      designation: "Cloud Security Specialist",
    },
  },
  {
    _id: "course10",
    name: "Frontend Development with React and Redux",
    image: WebDev,
    category: "Web Development",
    level: "Intermediate",
    duration: "7 Weeks",
    description:
      "Deep dive into modern React hooks, state management with Redux, and building scalable single-page applications.",
    price: 99,
    instructor: {
      name: "Dr. Jeffrey King",
      designation: "Frontend Architect",
    },
  },
  {
    _id: "course11",
    name: "Time Series Analysis and Forecasting",
    image: WebDev,
    category: "Data Science",
    level: "Advanced",
    duration: "35 Hours",
    description:
      "Techniques for analyzing and predicting sequential data, covering ARIMA, Prophet, and LSTMs for financial and sensor data.",
    price: 79,
    instructor: {
      name: "Dr. Zoe Kelly",
      designation: "Quantitative Analyst",
    },
  },
  {
    _id: "course12",
    name: "Backend Development with Node.js and Express",
    image: WebDev,
    category: "Web Development",
    level: "Intermediate",
    duration: "5 Weeks",
    description:
      "Learn to build robust RESTful APIs, handle databases, and implement authentication on the server-side using Node.js.",
    price: 69,
    instructor: {
      name: "Dr. Patrick Harris",
      designation: "Backend Developer",
    },
  },
  {
    _id: "course13",
    name: "Cloud Native DevOps with Kubernetes",
    image: WebDev,
    category: "DevOps",
    level: "Advanced",
    duration: "40 Hours",
    description:
      "In-depth coverage of container orchestration with Kubernetes, focusing on deployment, scaling, services, and networking.",
    price: 159,
    instructor: {
      name: "Dr. Chloe Evans",
      designation: "Cloud Infrastructure Expert",
    },
  },
  {
    _id: "course14",
    name: "Ethical Hacking and Cybersecurity",
    image: WebDev,
    category: "Security",
    level: "Beginner",
    duration: "60 Hours",
    description:
      "An introduction to penetration testing, network security, and defensive security measures. Learn to think like a hacker.",
    price: 89,
    instructor: {
      name: "Dr. Ryan Martinez",
      designation: "Cybersecurity Consultant",
    },
  },
  {
    _id: "course15",
    name: "Advanced SQL and Database Design",
    image: WebDev,
    category: "Data Science",
    level: "Intermediate",
    duration: "20 Hours",
    description:
      "Master complex queries, performance tuning, and database normalization for large-scale data systems.",
    price: 59,
    instructor: {
      name: "Dr. Amelia Hill",
      designation: "Database Administrator",
    },
  },
];

export const feedback = [
  {
    _id: "std1",
    tagline: "1 Cr package at Google",
    review:
      "The course and mentorship prepared me for real-world interviews. The mock interviews and project reviews were instrumental.",
    name: "Kinjal Sensharma",
    company: "Google",
    linkedin: "https://www.linkedin.com/in/kinjal-sensharma",
    image: kartik,
  },
  {
    _id: "std2",
    tagline: "Placed at Amazon — 45 LPA",
    review:
      "Hands-on assignments and interview drills helped me crack Amazon. The support from mentors was top-notch.",
    name: "Aarav Mishra",
    company: "Amazon",
    linkedin: "https://www.linkedin.com/in/aarav-mishra",
    image: kartik,
  },
  {
    _id: "std3",
    tagline: "SDE at Microsoft — 60 LPA",
    review:
      "Project-based learning and clear explanations of system design got me interview-ready quickly.",
    name: "Riya Kapoor",
    company: "Microsoft",
    linkedin: "https://www.linkedin.com/in/riya-kapoor",
    image: kartik,
  },
  {
    _id: "std4",
    tagline: "Hired at Goldman Sachs — 30 LPA",
    review:
      "The algorithmic training and low-level optimizations content were exactly what I needed for finance tech roles.",
    name: "Sarthak Jain",
    company: "Goldman Sachs",
    linkedin: "https://www.linkedin.com/in/sarthak-jain",
    image: kartik,
  },
  {
    _id: "std5",
    tagline: "Data Scientist at Netflix — 50 LPA",
    review:
      "NLP and recommendation system labs were practical and helped me build a great interview portfolio.",
    name: "Neha Verma",
    company: "Netflix",
    linkedin: "https://www.linkedin.com/in/neha-verma",
    image: kartik,
  },
  {
    _id: "std6",
    tagline: "DevOps Engineer at Accenture — 25 LPA",
    review:
      "CI/CD and containerization labs were well structured. I feel confident in real-world deployments now.",
    name: "Rohit Sharma",
    company: "Accenture",
    linkedin: "https://www.linkedin.com/in/rohit-sharma",
    image: kartik,
  },
  {
    _id: "std7",
    tagline: "Campus Placement: Top Tier Offer",
    review:
      "The placement prep and mock interviews elevated my confidence. The peer community was very supportive.",
    name: "Aisha Khan",
    company: "Campus Hire",
    linkedin: "https://www.linkedin.com/in/aisha-khan",
    image: kartik,
  },
  {
    _id: "std8",
    tagline: "Full-Stack Role at Capgemini — 18 LPA",
    review:
      "Built a production-ready MERN project by the end of the course and landed a great role.",
    name: "Kunal Gupta",
    company: "Capgemini",
    linkedin: "https://www.linkedin.com/in/kunal-gupta",
    image: kartik,
  },
  {
    _id: "std9",
    tagline: "Algorithmic Internship at Flipkart",
    review:
      "DSA sessions and contest practice improved my problem solving immensely — I secured the internship.",
    name: "Sneha Patel",
    company: "Flipkart",
    linkedin: "https://www.linkedin.com/in/sneha-patel",
    image: kartik,
  },
  {
    _id: "std10",
    tagline: "Software Engineer at HCL — 12 LPA",
    review:
      "Great practical tasks and interview prep. The mentors gave honest, actionable feedback.",
    name: "Aditya Singh",
    company: "HCL",
    linkedin: "https://www.linkedin.com/in/aditya-singh",
    image: kartik,
  },
  {
    _id: "std11",
    tagline: "Data Analyst at Deloitte — 20 LPA",
    review:
      "Case studies and Tableau labs helped me stand out in interviews. The career support was valuable.",
    name: "Megha Sharma",
    company: "Deloitte",
    linkedin: "https://www.linkedin.com/in/megha-sharma",
    image: kartik,
  },
  {
    _id: "std12",
    tagline: "Transitioned to Tech — IBM Offer",
    review:
      "As a non-tech background learner, the course structure and mentor guidance made the transition smooth.",
    name: "Varun Rao",
    company: "IBM",
    linkedin: "https://www.linkedin.com/in/varun-rao",
    image: kartik,
  },
  {
    _id: "std13",
    tagline: "ML Research Role at OpenAI — Dream Realized",
    review:
      "Advanced ML projects and paper discussions were outstanding — helped me prepare for research interviews.",
    name: "Ishita Das",
    company: "OpenAI",
    linkedin: "https://www.linkedin.com/in/ishita-das",
    image: kartik,
  },
  {
    _id: "std14",
    tagline: "Improved to 5x Problem Solving Speed",
    review:
      "Weekly contests and targeted feedback increased my speed and accuracy massively.",
    name: "Harshit Verma",
    company: "Competitive Programmer",
    linkedin: "https://www.linkedin.com/in/harshit-verma",
    image: kartik,
  },
  {
    _id: "std15",
    tagline: "Mentorship That Actually Works — Microsoft Offer",
    review:
      "Mentors were always available and guided me through system design and behavioral interviews successfully.",
    name: "Sara Khan",
    company: "Microsoft",
    linkedin: "https://www.linkedin.com/in/sara-khan",
    image: kartik,
  },
];