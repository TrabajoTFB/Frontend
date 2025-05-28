import React from "react";
import ProfileCard from "../components/layout/ProfileCard"
import ProfileSales from "../components/layout/ProfileSales"
import ProfileForm from "../components/layout/ProfileForm"

const Profile: React.FC = () => {
    return(
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 gap-1">
        <div className="flex flex-col md:flex-row items-stretch w-full max-w-6xl gap-2">
            <div className="flex flex-col w-full md:w-1/2">
                <ProfileCard />
                <ProfileSales />
            </div>

            <div className="w-full md:w-1/2">
                <ProfileForm />
            </div>    
        </div>
    </div>
    );
};

export default Profile;