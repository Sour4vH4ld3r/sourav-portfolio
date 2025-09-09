export interface Project {
  id: number
  title: string
  description: string
  image: string
  liveUrl?: string
  githubUrl?: string
  frontend: string[]
  backend: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Doctor Appointment Booking System",
    description: "A full-featured doctor appointment booking platform enabling patients to schedule appointments online, manage profiles, and receive notifications. Includes secure authentication, real-time availability, doctor listings, and an intuitive, mobile-friendly interface for seamless healthcare access.",
    image: "https://projects.souravhalder.in/DoctorsHub/home/img/hero.jpg",
    liveUrl: "https://projects.souravhalder.in/DoctorsHub/home/",
    githubUrl: "https://projects.souravhalder.in/DoctorsHub/home/",
    frontend: ["HTML", "CSS", "JavaScript", "PHP"],
    backend: ["MySQL", "PHP", "JavaScript", "HTML", "CSS"],
    featured: true
  },
  {
    id: 2,
    title: "Ghosh Driver & Aya Center",
    description: "A professional service platform for booking drivers and ayas (caregivers) in West Bengal. Features include online booking, service management, secure authentication, and a user-friendly dashboard for both customers and staff. The system streamlines the process of hiring reliable drivers and ayas, ensuring safety and convenience.",
    image: "https://images.unsplash.com/photo-1732812606620-76b62e4f263e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxzaW1wbGUlMjBkYWlseSUyMHVzYWdlcyUyMGluZGlhbiUyMGNhcnxlbnwwfHwwfHx8Mg%3D%3D",
    liveUrl: "https://ghoshdriverandayacenter.com",
    githubUrl: "https://ghoshdriverandayacenter.com",
    frontend: ["HTML", "CSS", "JavaScript", "PHP"],
    backend: ["MySQL", "PHP", "JavaScript", "HTML", "CSS"],
    featured: true
  },
  {
    id: 3,
    title: "Sujoy Das Motivation",
    description: "Sujoy Das is a mindset and wealth coach dedicated to empowering individuals to achieve financial freedom and personal growth. The platform offers motivational content, coaching programs, and resources to help users transform their mindset, build wealth, and unlock their full potential.",
    image: "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "https://sujoydasmotivation.com",
    githubUrl: "https://github.com/souravhalder/sujoydasmotivation",
    frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "MongoDB"],
    featured: true
  },
  {
    id: 4,
    title: "DevMatrix IT Solutions",
    description: "DevMatrix provides comprehensive IT solutions to empower your business with cutting-edge technology and strategies. From custom software development to digital transformation, we deliver innovative solutions tailored to your needs.",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "https://wingrow.co.in",
    githubUrl: "https://wingrow.co.in",
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "", "", ""],
    featured: false
  },
  // {
  //   id: 5,
  //   title: "Learning Management System",
  //   description: "An educational platform with course creation, student enrollment, progress tracking, and quiz system. Features include video streaming, discussion forums, and certificate generation.",
  //   image: "/assets/images/projects/lms-platform.jpg",
  //   liveUrl: "https://lms-demo.com",
  //   githubUrl: "https://github.com/souravhalder/lms-platform",
  //   frontend: ["Vue.js", "Vuex", "Bootstrap", "Chart.js"],
  //   backend: ["PHP", "CodeIgniter", "MySQL", "FFmpeg"],
  //   featured: false
  // },
  // {
  //   id: 6,
  //   title: "Social Media Dashboard",
  //   description: "A social media management dashboard with analytics, post scheduling, and engagement tracking. Includes multi-platform integration, team collaboration, and automated reporting.",
  //   image: "/assets/images/projects/social-dashboard.jpg",
  //   liveUrl: "https://social-demo.com",
  //   githubUrl: "https://github.com/souravhalder/social-dashboard",
  //   frontend: ["React", "TypeScript", "Ant Design", "D3.js"],
  //   backend: ["Node.js", "Fastify", "MongoDB", "Redis"],
  //   featured: false
  // }
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getAllProjects = (): Project[] => {
  return projects
} 