import React from "react";
import avatar from '../assets/avatar/image-maxblagun.png';
import avatar1 from '../assets/avatar/image-ramsesmiron.webp';
import avatar2 from '../assets/avatar/image-amyrobson.webp';
import { FaReply, FaRegThumbsUp, FaRegHeart,FaTrash, FaEdit} from "react-icons/fa";
export default function Comment(){
    return(
        <>
        <div className="self-start">
            <div className="grid">
                <div className="relative bg-white p-4 grid justify-between items-stretch sm:w-[700px] rounded-lg shadow-lg gap-3 mb-3">
                    <div className="flex items-center gap-3 col-span-3 sm:col-span-2">
                    <img src={avatar} alt="" className="w-10 h-10  sm:row-start-1" />
                    <p className="font-bold text-[#324152] ">Nico Jay</p>
                    <p className="text-[#67727e]">1 month ago</p>
                    </div>

                    <div className="flex justify-end row-start-3 col-end-4 mt-3 sm:mt-1 sm:row-start-1">
                    <button className="border-3 text-end font-bold flex items-center justify-end gap-2 text-[#67727e] hover:text-[#324152]  w-[max-content]"><FaReply/> Reply</button>
                    </div>
                    <p className="col-span-3 p-3 text-[#67727e]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est illum. Tenetur unde ipsum vel, ut voluptatibus nostrum? Laudantium corrupti sapiente consequuntur ducimus distinctio veritatis, sed enim, esse eaque atque quam ea deleniti neque fugiat necessitatibus aut? Asperiores dolorum vero temporibus eaque culpa cumque dolorem enim atque delectus distinctio. Soluta.</p>
                    <div className="flex justify-center gap-x-5 text-[18px] mx-2 row-span-3 w-[max-content]">
                        <button className=""><FaRegHeart/></button>
                        <button><FaRegThumbsUp/></button>
                    </div>
                </div>
                <div className="reply flex justify-between relative">
                    <div className="h-100 w-[2px] bg-[#c3c4ef] sm:ml-10"></div>
                    <div className="relative bg-white p-4 grid justify-between items-stretch w-[90%] sm:w-[600px] rounded-lg shadow-lg gap-3 mb-3">
                        <div className="flex items-center gap-2 text-center col-span-3 sm:col-span-2">
                        <img src={avatar} alt="" className="w-10 h-10  sm:row-start-1" />
                        <p className="font-bold text-[#324152] ">Clifford Arnejo</p>
                        <p className="px-1 bg-[#5457b5] text-white font-bold rounded-sm">You</p>
                        <p className="text-[#67727e]">2 minutes ago</p>
                        </div>

                        <div className="flex justify-end row-start-3 col-end-4 mt-3 sm:mt-1 sm:row-start-1 gap-2">
                        <button className="border-3 text-end font-bold flex items-center justify-end gap-2 text-[#ffb8bb] hover:text-[#ed6468]  w-[max-content]"><FaTrash/> Delete</button>
                        <button className="border-3 text-end font-bold flex items-center justify-end gap-2 text-[#67727e] hover:text-[#324152]  w-[max-content]"><FaEdit/> Edit</button>
                        </div>
                        <p className="col-span-3 p-3 text-[#67727e]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est illum. Tenetur unde ipsum vel, ut voluptatibus nostrum? Laudantium corrupti sapiente consequuntur ducimus distinctio veritatis, sed enim, esse eaque atque quam ea deleniti neque fugiat necessitatibus aut? Asperiores dolorum vero temporibus eaque culpa cumque dolorem enim atque delectus distinctio. Soluta.</p>
                        <div className="flex justify-center gap-x-5 text-[18px] mx-2 row-span-3 w-[max-content]">
                            <button className=""><FaRegHeart/></button>
                            <button><FaRegThumbsUp/></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="relative bg-white p-4 grid justify-between items-stretch sm:w-[600px] rounded-lg shadow-lg gap-3 mb-3">

                <div className="flex items-center gap-3 col-span-3 sm:col-span-2">
                <img src={avatar1} alt="" className="w-10 h-10  sm:row-start-1" />
                <p className="font-bold text-[#324152] ">Nico Jay</p>
                <p className="text-[#67727e]">2 days ago</p>
                </div>
               
                <div className="flex justify-end row-start-3 col-end-4 mt-3 sm:mt-1 sm:row-start-1">
                <button className="border-3 text-end font-bold flex items-center justify-end gap-2 text-[#67727e] hover:text-[#324152]  w-[max-content]"><FaReply/> Reply</button>
                </div>
                <p className="col-span-3 p-3 text-[#67727e]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci architecto modi pariatur quidem voluptas! Dolor delectus illum nulla ad porro?</p>
                <div className="flex justify-center gap-x-5 text-[18px] mx-2 row-span-3 w-[max-content]">
                    <button className=""><FaRegHeart/></button>
                    <button><FaRegThumbsUp/></button>
                </div>
            </div>
            
            <div className="relative bg-white p-4 grid justify-between items-stretch sm:w-[600px] rounded-lg shadow-lg gap-3 mb-3">

                <div className="flex items-center gap-3 col-span-3 sm:col-span-2">
                <img src={avatar2} alt="" className="w-10 h-10  sm:row-start-1" />
                <p className="font-bold text-[#324152] ">Nico Jay</p>
                <p className="text-[#67727e]">2 hours ago</p>
                </div>
               
                <div className="flex justify-end row-start-3 col-end-4 mt-3 sm:mt-1 sm:row-start-1">
                <button className="border-3 text-end font-bold flex items-center justify-end gap-2 text-[#67727e] hover:text-[#324152]  w-[max-content]"><FaReply/> Reply</button>
                </div>
                <p className="col-span-3 p-3 text-[#67727e]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum laboriosam, soluta illo molestias quas amet numquam dignissimos perferendis quidem illum iure exercitationem, minus assumenda perspiciatis saepe, laborum esse suscipit labore asperiores. Numquam, nesciunt architecto. Vero?</p>
                <div className="flex justify-center gap-x-5 text-[18px] mx-2 row-span-3 w-[max-content]">
                    <button className=""><FaRegHeart/></button>
                    <button><FaRegThumbsUp/></button>
                </div>

            </div> */}

            </div>
        </>
    )
}