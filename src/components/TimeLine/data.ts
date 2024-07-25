import { url } from 'inspector';

export const items = [
  {
    title: 'February 2015',
    cardTitle: 'Telekom',
    cardSubtitle: '',
    cardDetailedText:
      'During my education at Telekom, I had the opportunity to dive deep into web development by programming WordPress sites. This experience allowed me to build a strong foundation in creating and managing dynamic web content. Additionally, I gathered my first insights into JavaScript, enhancing my ability to bring interactive elements to websites. Beyond technical skills, I also gained valuable experience in sales by successfully selling contracts. Moreover, I took the initiative to digitize my job responsibilities, streamlining processes and improving efficiency within the workplace.',
    url: 'https://www.telekom.com/',
    media: {
      name: 'Telekom Logo',
      type: 'IMAGE',
      source: {
        url: 'https://iason.hamburg.de/iason/images/6440e4f92490cf473e663ef0/s.768xb/telekom_logo.jpg',
      },
    },
  },
  {
    title: 'June 2016',
    cardTitle: 'Mein verbundenes Zuhause',
    cardSubtitle: 'First Website',
    cardDetailedText:
      'I developed the website mein-verbundenes-zuhause.de during my education to digitize my work. The site serves as a comprehensive resource for users interested in smart home technology. It features detailed reviews and tests of various devices and applications, enabling users to make informed decisions about their purchases. Additionally, the website offers valuable tips and tricks for transforming a regular home into a smart home. Users can conveniently order products through affiliate links provided on the site, directly from the manufacturers. This project not only streamlined my workflow but also helped countless users enhance their living spaces with the latest smart home innovations.',
    url: 'http://mein-verbundenes-zuhause.de/',
    media: {
      name: 'Mein verbundenes Zuhause Logo',
      type: 'IMAGE',
      source: {
        url: 'http://mein-verbundenes-zuhause.de/wp-content/uploads/2016/05/cropped-image-15.jpeg',
      },
    },
  },

  {
    title: 'August 2018',
    cardTitle: 'Bosch',
    cardSubtitle: '',
    cardDetailedText:
      'At Bosch, I had the privilege of working directly within the Industry 4.0 framework, where I learned and contributed to modern industrial processes in a large corporate environment. This role provided me with hands-on experience in the implementation and optimization of these processes, ensuring they met the high standards and demands of a global leader in technology and services. Working at Bosch not only enhanced my technical skills but also gave me a comprehensive understanding of the operational dynamics in a major corporation.',
    url: 'www.bosch.de',
    media: {
      name: 'Bosch Logo',
      type: 'IMAGE',
      source: {
        url: 'https://isesglobal.com/wp-content/uploads/2023/12/Bosch_symbol_logo_black_red-web.webp',
      },
    },
  },
  {
    title: 'October 2018',
    cardTitle: 'HFU Furtwangen',
    cardSubtitle: '',
    url: 'https://www.hs-furtwangen.de/',
    cardDetailedText:
      'During my studies at Hochschule Furtwangen, I delved deeply into the world of programming, acquiring a solid foundation in various programming languages and techniques. My enthusiasm for learning was reflected in my active participation across all modules, where I consistently sought to expand my knowledge and skills. The comprehensive curriculum and hands-on projects enabled me to apply theoretical concepts to real-world scenarios, preparing me for a dynamic career in technology and software development.',
    media: {
      name: 'HFU Logo',
      type: 'IMAGE',
      source: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7D7jkWPNjPg9ehs5x8iIgdJSFixu4MRZJQ&s',
      },
    },
  },
  {
    title: 'May 2020',
    cardTitle: 'HR Works',
    url: 'https://www.hrworks.de/',
    cardSubtitle: '',
    cardDetailedText:
      'The purpose of it was to select the important values of a receipt and insertthem into a structured table.we quickly learned to use tools that were new to us and gained experiencewith distributed software developmentSmalltalk, Amazon Textract, AWS, JSON',

    media: {
      name: 'HR Works Logo',
      type: 'IMAGE',
      source: {
        url: 'data:image/png;base64,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',
      },
    },
  },
  {
    title: 'September 2021',
    cardTitle: 'Apploft',
    url: 'https://apploft.de/',
    cardSubtitle: '',
    cardDetailedText:
      'During my Praxissemester at Apploft, I gained invaluable experience in app development. I programmed various applications and developed a solid understanding of public APIs. My role involved creating and testing both Android and iOS apps, ensuring they met high standards of performance and usability. Additionally, I actively participated in internal hackathons, which allowed me to collaborate with colleagues on innovative projects and explore the latest technologies in app development. This experience not only enhanced my technical skills but also fueled my passion for mobile technology and continuous learning.',

    media: {
      name: 'Apploft Logo',
      type: 'IMAGE',
      source: {
        url: 'https://cdn.join.com/5c5c34dc1fa6620006e482e3/apploft-gmb-h-logo-xl.jpg',
      },
    },
  },
  {
    title: 'August 2021',
    cardTitle: 'Bachelor Thesis',
    cardSubtitle: '',
    url: 'https://github.com/Seakuh/DappResourceRental',
    cardDetailedText:
      "In my bachelor thesis, I designed and developed a blockchain-based resource management system using the Bloxberg, a university collective blockchain. The primary objective of the system was to manage resource rental efficiently by leveraging the benefits of blockchain technology. The system was built using the Solidity programming language, which is specifically designed for creating smart contracts on the Ethereum blockchain. I also developed a decentralized application (dApp) using React and integrated it with MetaMask for transactions and authentication. In my research, I explored the use of elliptic-curve encryption for securing the system's data and transactions. Overall, the project aimed to demonstrate the potential of blockchain technology in revolutionizing resource management systems and improving their efficiency. JavaScript , NODE, Blockchain, web3, Ganache, HTML, Bootstrap, Bloxberg, Metamask , Truffle, RemixIDE",
    media: {
      name: 'Blockchain Application',
      type: 'IMAGE',
      source: {
        url: 'https://www.patriotsoftware.com/wp-content/uploads/2022/01/what-is-blockchain-1.jpg',
      },
    },
  },
  {
    title: 'September 2021',
    cardTitle: 'Medium Clone',
    cardSubtitle: '',
    url: 'https://github.com/gothinkster/realworld',
    cardDetailedText:
      'The first project at Comsysto was a realworld example app. To achieve this, we utilized NestJS, a Node.js framework for building scalable server-side applications, as well as React, a popular frontend library for building user interfaces. My contribution to the project involved working on both the backend and frontend aspects. On the backend, I was responsible for implementing various APIs using NestJS, while on the frontend, I worked on developing the user interface using React. Through this experience, I gained valuable knowledge in full-stack development using modern web technologies, including server-side programming with NestJS and client-side programming with React. Overall, this project allowed me to demonstrate my proficiency in building robust and scalable web applications using industry- standard tools and frameworks.',
    media: {
      name: 'HR Works Logo',
      type: 'IMAGE',
      source: {
        url: 'https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png',
      },
    },
  },
  {
    title: 'December 2021',
    cardTitle: 'Dashboard Application',
    cardSubtitle: '',
    cardDetailedText:
      'As an AWS developer, I had the opportunity to work with a range of cloud services to build scalable and resilient applications. My experience involved using services such as EC2, Lambda, API Gateway, DynamoDB, DocumentDB, and CDK, both through the command-line interface (CLI) and browser-based interfaces. EC2 provided a flexible and scalable infrastructure for hosting applications, while Lambda enabled serverless functions for handling event- driven tasks. I also utilized API Gateway to manage REST APIs and DynamoDB for NoSQL database needs. DocumentDB was utilized for JSON-based document storage, and CDK was used to define and deploy cloud infrastructure as code. Through this experience, I gained valuable knowledge of cloud computing and its services, and I was able to demonstrate my ability to design, build, and maintain cloud-based applications with AWS',
    media: {
      name: 'HR Works Logo',
      type: 'IMAGE',
      source: {
        url: 'https://media.istockphoto.com/id/1315918172/de/vektor/dashboard-ui-ux-kit-tolles-design-f%C3%BCr-jede-website-zwecke-business-infografikvorlage-vektor.jpg?s=612x612&w=0&k=20&c=UUHXOMX1B61vTpdiYMNjA5Z3-tmywTjfMNmum6k-7g4=',
      },
    },
  },
  {
    title: 'October 2022',
    cardTitle: 'Comsysto Reply',
    cardSubtitle: '',
    url: 'https://www.comsysto.com/',
    cardDetailedText:
      'My time at Comsysto Reply was incredibly transformative, marking a period of unparalleled learning and professional growth. I immersed myself in full-stack web development, honing my skills in both front-end and back-end technologies. I worked extensively with TypeScript, mastering its nuances to create robust and scalable web applications. On the back end, I gained significant experience with Kotlin and Spring, building powerful and efficient server-side solutions. This role pushed me to continuously expand my technical expertise and adapt to the latest industry practices, making it one of the most impactful experiences in my career so far.',
    media: {
      name: 'Reply Image',
      type: 'IMAGE',
      source: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1COVYQzo3EF7YjiJ4YwWxeJNWeVBjB-YwA&s',
      },
    },
  },
  {
    title: 'February 2023',
    cardTitle: 'Audi UCP',
    cardSubtitle: '',
    url: 'https://www.audi.com/en.html',
    cardDetailedText:
      'In this project, the focus was on developing a web application for selling used cars through various auction methods. The aim was to create a seamless and efficient platform for users to buy and sell used cars. The backend utilized Kotlin with Spring Boot, leveraging a hexagonal architecture to ensure a clean and maintainable codebase. This approach facilitated the creation of a robust and scalable backend system. For the frontend, React was employed, incorporating Easy Peasy for state management. This combination simplified the development process and improved the responsiveness and user-friendliness of the application. Additionally, WebSockets were implemented to enable real-time updates and interactions, enhancing the overall user experience. The project was carried out by an international team, providing valuable experience in collaboration and modern web application development. Through this project, expertise was gained in Kotlin, Spring Boot, React, and WebSockets, as well as a deeper understanding of web application architecture and development practices. Kotlin, React, hexagonal architecture, spring boot, typescript, cdk, aws, websockets',
    media: {
      name: 'Audi Logo',
      type: 'IMAGE',
      source: {
        url: 'https://uploads.audi-mediacenter.com/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_web_2880.jpg?1698171883',
      },
    },
  },
  // Add more items as needed
];
