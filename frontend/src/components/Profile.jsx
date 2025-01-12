import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialogue from "./UpdateProfileDialogue";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";


const isResume=true;
const Profile = () => {
    
    useGetAppliedJobs();
    const [open,setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-700 rounded-2xl my-5 p-8">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4 ">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                                alt="profile"
                            />
                        </Avatar>
                        <div>
                            <h2 className="text-black mt-3 font-bold text-xl">
                                {user?.fullname}
                            </h2>
                            <p className="text-gray-600">
                                {user?.profile?.bio}
                            </p>
                        </div>
                    </div>
                    <Button onClick={()=>setOpen(true)} className="text-right mt-7" variant="outline">
                        <Pen />
                    </Button>
                </div>
                <div className="my-5">
                    <div className="flex items-center gap-4 mt-4 text-gray-700">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-gray-700">
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">Skills</h1>
                    <div className="flex items-center gap-3 mt-3">
                        {user?.profile?.skills.length != 0 ? (
                            user?.profile?.skills.map((item, index) => (
                                <Badge key={item} className="bg-slate-600">
                                    {item}
                                </Badge>
                            ))
                        ) : (
                            <span>NA</span>
                        )}
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
                    <Label className="text-md font-bold">Resume</Label>
                    {
                      isResume? <a target="blank" href={user?.profile?.resume} className="cursor-pointer text-black border border-gray-600 rounded-xl p-3">{user?.profile?.resumeOriginalname}</a>:<span>No resume</span>
                    }
                </div>
                
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                <AppliedJobTable/>
            </div>
            <UpdateProfileDialogue open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Profile;
