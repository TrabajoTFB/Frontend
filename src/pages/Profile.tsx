import React, { useState } from "react";
import ProfileCard from "../components/layout/ProfileCard"
import ProfileSales from "../components/layout/ProfileSales"
import ProfileInfo from "../components/layout/ProfileInfo"
import ProfileEdit from "../components/layout/ProfileEdit"
import ProfileNewSales from "../components/layout/ProfileNewSales"

const Profile: React.FC = () => {

    const [isEditing, setIsEditing] = useState("info");

    return (
  <div className="bg-white flex justify-center p-8 gap-1">
    <div className="flex flex-col md:flex-row gap-2 w-full max-w-6xl">
      
      <div className="flex justify-center md:justify-start md:w-1/2">
        <div className="flex flex-col md:w-1/2">
            <ProfileCard />
            <ProfileSales setIsEditing={setIsEditing} isEditing={isEditing}/>
        </div>
      </div>
      
      <div className="flex justify-center md:justify-start md:w-1/2">
        <div className="w-full max-w-xl min-h-[400px]">
          {isEditing === "edit" && <ProfileEdit setIsEditing={setIsEditing} />}
          {isEditing === "info" && <ProfileInfo setIsEditing={setIsEditing} />}
          {isEditing === "newSales" && <ProfileNewSales setIsEditing={setIsEditing} />}
        </div>
      </div>

    </div>
  </div>
);

};

export default Profile;