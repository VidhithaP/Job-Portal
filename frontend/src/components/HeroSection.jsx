import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "@/redux/jobSlice";

const HeroSection = () => {
    const [query,setQuery]=useState("")
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const searchJobHandler=()=>{
        dispatch(setSearchQuery(query));
        navigate("/browse");
    }


    return (
        <div className="text-center ">
            <div className="flex flex-col gap-5 my-10">
                <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 font-medium text-[#F83002] ">No.1 Job Hunt website</span>
                <h1 className="text-4xl font-bold mt-4">Search,Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Job</span></h1>
                <p>Find Your Dream Job Here By Joining Us</p>
                <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
                    <input
                        type="text"
                        placeholder="Find your dream Job"
                        onChange={(e)=>setQuery(e.target.value)}
                        className="outline-none border-none w-full bg-white"
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6a38c2] border border-black">
                        <Search className="h-5 w-5"/>
                    </Button>


                </div>
              
            </div>
        </div>
    );
};

export default HeroSection;
