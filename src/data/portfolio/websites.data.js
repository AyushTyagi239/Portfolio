import webHero from "../../assets/Industry/Education.webp";
import food from "../../assets/Industry/Education.webp";
import hisab from "../../assets/Industry/Education.webp";

export const websitesData = {
  title: "Web Applications",
  description:
    "Modern, responsive, and animated web applications built using React, Next.js, and scalable backends.",

  heroImage: webHero,

  sections: [
    {
      title: "Design Philosophy",
      content:
        "Minimal UI, smooth animations, and performance-first architecture."
    }
  ],

  projects: [
    {
      name: "Hisab – Expense Split App",
      image: hisab,
      linkedin: "https://linkedin.com/your-post",
      live: "https://hisab.vercel.app"
    },
    {
      name: "Food Buddy",
      image: food,
      linkedin: "https://linkedin.com/your-post",
      live: null
    }
  ]
};
