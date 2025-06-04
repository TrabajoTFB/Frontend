import React, { useEffect, useState } from "react";
import ProfileCard from "../components/layout/ProfileCard";
import ProfileSales from "../components/layout/ProfileSales";
import ProfileInfo from "../components/layout/ProfileInfo";
import ProfileEdit from "../components/layout/ProfileEdit";
import ProfileNewSales from "../components/layout/ProfileNewSales";
import { api } from "../services/api";
import type { Usuario } from "../types";

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState("info");
  const [user, setUser] = useState<Usuario | null>(null);
  const [bookCount, setBookCount] = useState<number | 0>(0);
  const [loading, setLoading] = useState(true);


  const fetchProfileData = async () => {
    try {
      const userData = await api.getUserById();
      const count = await api.getBookCountByUser();
      setUser(userData);
      setBookCount(count);
      setLoading(false);
    } catch (err) {
      console.error("Error cargando datos del perfil:", err);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading || !user) return <p className="text-center mt-4">Cargando perfil...</p>;

  return (
    <div className="bg-white flex justify-center p-8 gap-1">
      <div className="flex flex-col md:flex-row gap-2 w-full max-w-6xl">

        <div className="flex justify-center md:justify-start md:w-1/2">
          <div className="flex flex-col md:w-1/2">
            <ProfileCard user={user} bookCount={bookCount} />
            <ProfileSales setIsEditing={setIsEditing} isEditing={isEditing} />
          </div>
        </div>

        <div className="flex justify-center md:justify-start md:w-1/2">
          <div className="w-full max-w-xl min-h-[400px]">
            {isEditing === "edit" && <ProfileEdit user={user} setIsEditing={setIsEditing} onUserUpdated={fetchProfileData} />}
            {isEditing === "info" && <ProfileInfo user={user} setIsEditing={setIsEditing} />}
            {isEditing === "newSales" && <ProfileNewSales setIsEditing={setIsEditing} />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
