import React from 'react';


function Card({socials}) {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-blue-500 h-screen">
            {socials.map((social, index) => (
                <div key={social.id} className=" flex flex-row-reverse bg-violet-400 text-white font-bold text-xl">
                    {social.socialMedia}
                    {social.icon}
                </div>
            ))}
        </div>
    );
}

export default Card;