import { Instagram, Facebook, Twitter, Music, Github, Linkedin } from "lucide-react";

const template = "https://";

const socials = [
    {
        id: 1,
        socialMedia: "Instagram",
        icon: <Instagram size={20} />,
        url: `${template}instagram.com/your_username/`
    },
    {
        id: 2,
        socialMedia: "X",
        icon: <Twitter size={20} />,
        url: `${template}x.com/RichuFarzan`
    },
    {
        id: 3,
        socialMedia: "Spotify",
        icon: <Music size={20} />,
        url: `${template}open.spotify.com/user/31cjgho6k22vjctzwokkf365svxi`
    },
    {
        id: 4,
        socialMedia: "LinkedIn",
        icon: <Linkedin size={20} />,
        url: `${template}linkedin.com/in/farzan7/`
    },
    {
        id: 5,
        socialMedia: "Facebook",
        icon: <Facebook size={20} />,
        url: `${template}facebook.com/farzan.richu/`
    },
    {
        id: 6,
        socialMedia: "GitHub",
        icon: <Github size={20} />,
        url: `${template}github.com/f7z7`
    }
];

export default socials;