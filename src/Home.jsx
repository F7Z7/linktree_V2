import React from 'react';
import socials from "./assets/data/socials.jsx";
import Card1 from "./Components/Card1.jsx";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-3 h-screen">
            {socials.map((social) => (
                <Card1 key={social.id} social={social}/>
            ))}
        </div>
    );
}

export default Home;