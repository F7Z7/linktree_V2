import React from 'react';


function Card1({social}) {
    return (
        <div className="flex items-center justify-center">
            <div
                className="flex items-center gap-2 cursor-pointer p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow  text-white font-bold text-xl max-w-[500px] w-[200px]  transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
            >
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-4 w-full  px-2 py-2 text-sm font-medium text-gray-900">
                    <span>{social.icon}</span>
                    <span>{social.socialMedia}</span>
                </a>

            </div>
        </div>
    );
}

export default Card1;