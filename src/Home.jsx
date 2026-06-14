import React from 'react';
import socials from "./assets/data/socials.jsx";
import Card1 from "./Components/Card1.jsx";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-3 h-screen">
            <div className="flex flex-col items-center gap-2 mb-3">
                <img
                    src="/images/me.png"
                    alt="Profile"
                    className="w-32 h-32 z-10"
                />
                <h1 className="text-2xl font-bold text-black">
                    Farzan R S
                </h1>

                <p className="text-black/40">
                    Electrical Engineering Undergraduate
                </p>
            </div>
            {socials.map((social) => (
                <Card1 key={social.id} social={social}/>
            ))}


            <p className="mt-5 text-black/40">
                Made by <a href="https://github.com/F7Z7" target="_blank">F7Z7</a>
            </p>
        </div>
    );
}

export default Home;