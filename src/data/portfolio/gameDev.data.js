import spaceShooter from "../../assets/portfolio/game/space-shooter.webp";
import turboDrive from "../../assets/portfolio/game/turbo-drive.webp";
import soldierio from "../../assets/portfolio/game/soldierio.webp";

export const gameDevData = {
  title: "Game Development Projects",
  description:
    "Unity-based games focusing on gameplay mechanics and real-time logic.",

  projects: [
    {
      title: "2D Space Shooter",
      image: spaceShooter,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_gamedevelopment-unity-csharp-activity-7329452538213126144-u3NH",
      description:
        "A classic arcade-style space shooter with infinite enemies.",
      highlights: [
        "Infinite enemy spawning",
        "Smooth shooting mechanics",
      ],
      techStack: ["Unity", "C#"],
    },

    {
      title: "Turbo Drive — 3D Car Simulator",
      image: turboDrive,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_unitydeveloper-gamedevelopment-indiegame-activity-7318571402771472391-Rlq0",
      description:
        "A 3D driving simulator with realistic physics.",
      highlights: [
        "Cinemachine camera",
        "Custom speedometer",
      ],
      techStack: ["Unity", "C#"],
    },

    {
      title: "Soldierio — 2D Platformer",
      image: soldierio,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_gamedevelopment-unity-csharp-activity-7318546455361699842-M6q0",
      description:
        "A Mario-style 2D platformer built from scratch.",
      highlights: [
        "Enemy AI",
        "Object pooling",
      ],
      techStack: ["Unity", "C#"],
    },
  ],
};
