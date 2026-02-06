import gameHero from "../../assets/Industry/Education.webp";
import rider from "../../assets/Industry/Education.webp";
import shooter from "../../assets/Industry/Education.webp";

export const gameDevData = {
  title: "Game Development & Design",
  description:
    "2D and 3D games built with Unity, focusing on mechanics, progression, and player experience.",

  heroImage: gameHero,

  sections: [
    {
      title: "Core Focus",
      content:
        "Gameplay systems, physics, UI, level design, and optimization."
    }
  ],

  projects: [
    {
      name: "Mountain Rider",
      image: rider,
      linkedin: "https://linkedin.com/your-post",
      live: "https://github.com/AyushTyagi239/mountain_rider"
    },
    {
      name: "Space Shooter Ranger",
      image: shooter,
      linkedin: "https://linkedin.com/your-post",
      live: "https://github.com/AyushTyagi239/Space_Shooter_Ranger"
    }
  ]
};
