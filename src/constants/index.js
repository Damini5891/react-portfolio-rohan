import {
  image,
  market,
  stock,
  recommendor,
  twitterx,
  musics,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  twitter,
  developement,
  content,
  analysis,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Blogs",
    url: "#blogs",
  },
  {
    id: "3",
    title: "TechStack",
    url: "#techstack",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Resume",
    url: "/RohanKumar.pdf",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const roadmap = [
  {
    id: "0",
    title: "ChatBot Python",
    text: "A simple chatbot in Python using basic natural language processing techniques and conditional logic. Using libraries like NLTK or spaCy, you can tokenize user input to understand the context of the message. Then, based on predefined responses or rules, the chatbot can generate appropriate replies",
    imageUrl: roadmap1,
    link: "https://github.com/rohankumar10/Basic-ChatBot",
    colorful: true,
  },
  {
    id: "1",
    title: "Deep Learning Recommender for Personalized Content",
    text: "A deep learning recommender system, built with Python using TensorFlow or PyTorch, analyzes user data to offer personalized content suggestions. ",
    imageUrl: roadmap2,
    link: "https://github.com/rohankumar10/Autoencoder",
  },
  {
    id: "2",
    title: "Stock prediction using RNN",
    text: "Stock prediction with Recurrent Neural Networks (RNNs) in Python, utilizing libraries like TensorFlow or PyTorch, leverages historical stock data to forecast future prices, aiding investors in decision-making.",
    imageUrl: roadmap3,
    link: "https://github.com/rohankumar10/Stock_prediction_using_RNN",
  },
  {
    id: "3",
    title: "Credit Card Fraud Detection",
    text: "Credit card fraud detection with Python employs machine learning to analyze transaction data, detecting anomalies and protecting users from unauthorized charges.",
    imageUrl: roadmap4,
    link: "https://github.com/rohankumar10/CreditCard_Fraud_Detection",
  },
];

export const pricing = [
  {
    id: "0",
    imageUrl: analysis,
    title: "Data Analysis",
    description:
      "I'm skilled in data analysis, using numbers to find important information and make smart decisions.",
  },
  {
    id: "1",
    imageUrl: developement,
    title: "Software Developement",
    description:
      "I specialize in software development, crafting digital solutions to solve real-world problems.",
  },
  {
    id: "2",
    imageUrl: content,
    title: "Content Writing",
    description:
      "Proficient in content writing, I craft engaging, concise, and impactful messages tailored to diverse audiences.",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Market Basket Optimization",
    text: "Market basket optimization in Python involves analyzing customer purchase patterns to optimize product placement and increase sales. ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: market,
    link: "https://github.com/rohankumar10/Market-Basket-Optimization",
  },
  {
    id: "1",
    title: "Image Recognizer",
    text: "An image recognizer, powered by Python and deep learning techniques like CNNs, accurately identifies objects within images. ",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: image,
    light: true,
    link: "https://github.com/rohankumar10/Simple_Image_Recognition",
  },
  {
    id: "2",
    title: "Get-Twitter-Follower",
    text: "Using Python with libraries like Tweepy and Twitter API to retrieve follower information, enabling tasks such as analyzing demographics and tracking follower growth.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: twitterx,
    link: "https://github.com/rohankumar10/Get-Twitter-Followers",
  },
  {
    id: "3",
    title: "Binary Recommendor",
    text: "Binary recommender system, implemented with Python, predicts whether a user will like or dislike an item using neural networks.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: recommendor,
    light: true,
    link: "https://github.com/rohankumar10/Binary_Recommender_System",
  },
  {
    id: "4",
    title: "Marketing website",
    text: "Marketing website crafted with HTML, CSS, and JavaScript, showcasing a comprehensive service portfolio and dynamic marketing strategies. ",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: musics,
    link: "https://github.com/rohankumar10/Marketing_website_tempate",
  },
  {
    id: "5",
    title: "Stock Price Checker",
    text: "A stock price checking app designed to assist users in making informed investment decisions. Built using Python, this app predicts future price of the selected stock ",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: stock,
    link: "https://github.com/rohankumar10/Check_Stock_Price",
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
