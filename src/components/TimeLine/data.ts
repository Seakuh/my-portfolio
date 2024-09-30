export type Media = {
  name: string;
  type: string;
  url?: string;
};

export type Item = {
  title?: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
  url?: string;
  media?: Media;
};

export const items: Item[] = [
  {
    title: "February 2015",
    cardTitle: "Telekom",
    cardSubtitle: "Education",
    cardDetailedText:
      "During my education at Telekom, I had the opportunity to dive deep into web development by programming WordPress sites. This experience allowed me to build a strong foundation in creating and managing dynamic web content. Additionally, I gathered my first insights into JavaScript, enhancing my ability to bring interactive elements to websites. Beyond technical skills, I also gained valuable experience in sales by successfully selling contracts. Moreover, I took the initiative to digitize my job responsibilities, streamlining processes and improving efficiency within the workplace.",
    // url: "https://www.telekom.com/",
  },
  {
    title: "June 2016",
    cardTitle: "Mein verbundenes Zuhause",
    cardSubtitle: "First Website",
    cardDetailedText:
      "I developed the website mein-verbundenes-zuhause.de during my education to digitize my work. The site serves as a comprehensive resource for users interested in smart home technology. It features detailed reviews and tests of various devices and applications, enabling users to make informed decisions about their purchases. Additionally, the website offers valuable tips and tricks for transforming a regular home into a smart home. Users can conveniently order products through affiliate links provided on the site, directly from the manufacturers. This project not only streamlined my workflow but also helped countless users enhance their living spaces with the latest smart home innovations.",
    // url: "http://mein-verbundenes-zuhause.de/",
  },

  {
    title: "August 2018",
    cardTitle: "Bosch",
    cardSubtitle: "Working Student",
    cardDetailedText:
      "At Bosch, I had the privilege of working directly within the Industry 4.0 framework, where I learned and contributed to modern industrial processes in a large corporate environment. This role provided me with hands-on experience in the implementation and optimization of these processes, ensuring they met the high standards and demands of a global leader in technology and services. Working at Bosch not only enhanced my technical skills but also gave me a comprehensive understanding of the operational dynamics in a major corporation.",
    // url: "www.bosch.de"
  },
  {
    title: "October 2018",
    cardTitle: "HFU Furtwangen",
    cardSubtitle: "University",
    // url: "https://www.hs-furtwangen.de/",
    cardDetailedText:
      "During my studies at Hochschule Furtwangen, I delved deeply into the world of programming, acquiring a solid foundation in various programming languages and techniques. My enthusiasm for learning was reflected in my active participation across all modules, where I consistently sought to expand my knowledge and skills. The comprehensive curriculum and hands-on projects enabled me to apply theoretical concepts to real-world scenarios, preparing me for a dynamic career in technology and software development.",
  },
  {
    title: "May 2020",
    cardTitle: "HR Works",
    // url: "https://www.hrworks.de/",
    cardSubtitle: "Semester Project",
    cardDetailedText:
      "The purpose of it was to select the important values of a receipt and insertthem into a structured table.we quickly learned to use tools that were new to us and gained experiencewith distributed software developmentSmalltalk, Amazon Textract, AWS, JSON",
  },
  {
    title: "September 2021",
    cardTitle: "Apploft",
    // url: "https://apploft.de/",
    cardSubtitle: "Praxissemester",
    cardDetailedText:
      "During my Praxissemester at Apploft, I gained invaluable experience in app development. I programmed various applications and developed a solid understanding of public APIs. My role involved creating and testing both Android and iOS apps, ensuring they met high standards of performance and usability. Additionally, I actively participated in internal hackathons, which allowed me to collaborate with colleagues on innovative projects and explore the latest technologies in app development. This experience not only enhanced my technical skills but also fueled my passion for mobile technology and continuous learning.",
  },
  {
    title: "August 2021",
    cardTitle: "Blockchain Based Resource Management System",
    cardSubtitle: "Bachelor Thesis",
    // url: "https://github.com/Seakuh/DappResourceRental",
    cardDetailedText:
      "In my bachelor thesis, I designed and developed a blockchain-based resource management system using the Bloxberg, a university collective blockchain. The primary objective of the system was to manage resource rental efficiently by leveraging the benefits of blockchain technology. The system was built using the Solidity programming language, which is specifically designed for creating smart contracts on the Ethereum blockchain. I also developed a decentralized application (dApp) using React and integrated it with MetaMask for transactions and authentication. In my research, I explored the use of elliptic-curve encryption for securing the system's data and transactions. Overall, the project aimed to demonstrate the potential of blockchain technology in revolutionizing resource management systems and improving their efficiency. JavaScript , NODE, Blockchain, web3, Ganache, HTML, Bootstrap, Bloxberg, Metamask , Truffle, RemixIDE",
  },
  {
    title: "September 2021",
    cardTitle: "Medium Clone",
    cardSubtitle: "Advanced Web Development Application",
    // url: "https://github.com/gothinkster/realworld",
    cardDetailedText:
      "The first project at Comsysto was a realworld example app. To achieve this, we utilized NestJS, a Node.js framework for building scalable server-side applications, as well as React, a popular frontend library for building user interfaces. My contribution to the project involved working on both the backend and frontend aspects. On the backend, I was responsible for implementing various APIs using NestJS, while on the frontend, I worked on developing the user interface using React. Through this experience, I gained valuable knowledge in full-stack development using modern web technologies, including server-side programming with NestJS and client-side programming with React. Overall, this project allowed me to demonstrate my proficiency in building robust and scalable web applications using industry- standard tools and frameworks.",
  },
  {
    title: "December 2021",
    cardTitle: "Dashboard Application",
    cardSubtitle:
      "Internal Fullstack Application to discover new Web Technologies",
    cardDetailedText:
      "As an AWS developer, I had the opportunity to work with a range of cloud services to build scalable and resilient applications. My experience involved using services such as EC2, Lambda, API Gateway, DynamoDB, DocumentDB, and CDK, both through the command-line interface (CLI) and browser-based interfaces. EC2 provided a flexible and scalable infrastructure for hosting applications, while Lambda enabled serverless functions for handling event- driven tasks. I also utilized API Gateway to manage REST APIs and DynamoDB for NoSQL database needs. DocumentDB was utilized for JSON-based document storage, and CDK was used to define and deploy cloud infrastructure as code. Through this experience, I gained valuable knowledge of cloud computing and its services, and I was able to demonstrate my ability to design, build, and maintain cloud-based applications with AWS",
  },
  {
    title: "October 2022",
    cardTitle: "Comsysto Reply",
    cardSubtitle: "Job Experience",
    url: "https://www.comsysto.com",
    cardDetailedText:
      "My time at Comsysto Reply was incredibly transformative, marking a period of unparalleled learning and professional growth. I immersed myself in full-stack web development, honing my skills in both front-end and back-end technologies. I worked extensively with TypeScript, mastering its nuances to create robust and scalable web applications. On the back end, I gained significant experience with Kotlin and Spring, building powerful and efficient server-side solutions. This role pushed me to continuously expand my technical expertise and adapt to the latest industry practices, making it one of the most impactful experiences in my career so far.",
  },
  {
    title: "February 2023",
    cardTitle: "Audi UCP",
    cardSubtitle: "B2B Plattform for Used Cars",
    // url: "https://www.audi.com/en.html",
    cardDetailedText:
      "In this project, the focus was on developing a web application for selling used cars through various auction methods. The aim was to create a seamless and efficient platform for users to buy and sell used cars. The backend utilized Kotlin with Spring Boot, leveraging a hexagonal architecture to ensure a clean and maintainable codebase. This approach facilitated the creation of a robust and scalable backend system. For the frontend, React was employed, incorporating Easy Peasy for state management. This combination simplified the development process and improved the responsiveness and user-friendliness of the application. Additionally, WebSockets were implemented to enable real-time updates and interactions, enhancing the overall user experience. The project was carried out by an international team, providing valuable experience in collaboration and modern web application development. Through this project, expertise was gained in Kotlin, Spring Boot, React, and WebSockets, as well as a deeper understanding of web application architecture and development practices. Kotlin, React, hexagonal architecture, spring boot, typescript, cdk, aws, websockets",
  },
  // Add more items as needed
];
