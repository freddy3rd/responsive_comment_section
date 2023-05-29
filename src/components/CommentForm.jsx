import React from "react";
import avatar from '../assets/avatar/image-juliusomo.webp'
export default function CommentForm(){
    return(
        <>
            <div className="relative  bg-white p-4 self-end rounded-lg grid px-6 sm:w-[700px] grid-cols-2 sm:grid-cols-[max-content_1fr_max-content] items-start justify-stretch gap-3 shadow-lg">
                <textarea name="" id="" cols="30" rows="10" className=" resize-none border-2 h-20 p-2 col-span-2 sm:col-span-1" placeholder="Add a comment.."></textarea>
                <img src={avatar} alt="" className="w-10 h-10  sm:row-start-1" />
                <div className="flex justify-end">
                    <button className="text-white bg-[#5457b6] px-4 py-2 text-[16px] w-[100px] rounded-md self-end">Send</button>
                </div>
            </div>
        </>
    )
}