import { Instagram, Facebook, Twitter, Music, Github, Linkedin } from "lucide-react";

const socials = [
    {
        id: 1,
        socialMedia: "Instagram",
        icon: <Instagram size={20} />,
        hoverColor: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737]",
        url: "#"
    },
    {
        id: 2,
        socialMedia: "Twitter",
        icon: <Twitter size={20} />,
        hoverColor: "hover:bg-[#1DA1F2]",
        url: "#"
    },
    {
        id: 3,
        socialMedia: "Spotify",
        icon: <Music size={20} />,
        hoverColor: "hover:bg-[#1DB954]",
        url: "#"
    },
    {
        id: 4,
        socialMedia: "LinkedIn",
        icon: <Linkedin size={20} />,
        hoverColor: "hover:bg-[#0077B5]",
        url: "#"
    },
    {
        id: 5,
        socialMedia: "Facebook",
        icon: <Facebook size={20} />,
        hoverColor: "hover:bg-[#1877F2]",
        url: "#"
    },
    {
        id: 6,
        socialMedia: "GitHub",
        icon: <Github size={20} />,
        hoverColor: "hover:bg-[#181717]",
        url: "#"
    }
];

export default socials;
