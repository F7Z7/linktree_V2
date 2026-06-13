import React from 'react';


function Card1({socials}) {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-3 h-screen">
            {socials.map((social, index) => (
                <div key={social.id} className={`flex flex-row-reverse items-center gap-2 cursor-pointer w-full justify-center max-w-[200px] p-2 rounded-2xl ${social.hoverColor} transition-colors duration-100 ease-in-out hover:text-black bg-violet-400 text-white font-bold text-xl`}>
                    <span className="relative" {social.socialMedia}/>
                    <span className="absolute right-0 bottom-0 left-0 flex items-center" {social.userId}/>
                    <span className="inline-block">{social.icon}</span>
                </div>
            ))}
        </div>
    );
}

export default Card1;