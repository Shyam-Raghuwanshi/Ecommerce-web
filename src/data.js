// import icons
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/about.png";
import Feature1Img from "../src/assets/img/features/feature1.png";
import Feature2Img from "../src/assets/img/features/feature2.png";
import Feature3Img from "../src/assets/img/features/feature3.png";
import Feature4Img from "../src/assets/img/features/feature4.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import HeroImage from "../src/assets/img/hero-img.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";
import Logo from "../src/assets/img/logo.png";
export const navigationData = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "About",
    href: "/#section",
  },
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Sign-In",
    href: "/signIn",
    link: true,
  },
  {
    name: "Contact-Us",
    href: "/#contact",
  },
];

export const heroData = {
  title: ` Order Products Faster Easier`,
  subtitle:
    "Order your favorite Product at any time and we will deliver them right to where you are.",
  btnText: "Get Started",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle:
    "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.",
};

export const featuresData = {
  title: "Some Services We Offer",
  subtitle:
    "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Payment Done",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Find Your Product",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Product Received",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Vebin",
    web: "vebin.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  btnText2: "Comming Soon",
};

export const footerData = {
  logo: Logo,
  address: "Guna, Madhya-Pradesh, India",
  email: "shyamraghuonec@gmail.com",
  phone: "+91-8643034243",
  socialList: [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/shyam-raghuwanshi-b67489220/",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/shyam_raghuonec",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/shyam-raghuwanshi",
    },
  ],
};

export const copyrightData = {
  text: "© My Products, 2023. All rights reserved.",
  icon: <BsChatDotsFill />,
};

export const authorSocialLinks = {
  Linkedin: "https://www.linkedin.com/in/shyam-raghuwanshi-b67489220/",
  Github: "https://github.com/shyam-raghuwanshi",
};

export const FilterProductNavLinks = [
  { name: "HOME", link: "/" },
  { name: "SERVICE", link: "/" },
  { name: "ABOUT", link: "/" },
  { name: "CONTACT", link: "/" },
];
