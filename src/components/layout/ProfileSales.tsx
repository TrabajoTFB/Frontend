import React from "react";

const ProfileSales = ({ setIsEditing, isEditing, }
: 
{ setIsEditing: (val: string) => void; isEditing: string; }) => {
    return (
        <div className="flex mt-6 bg-green-200">
            <img src="images/logo.png" alt="imagen" className="px-2"/>
            <img src="images/logo.png" alt="imagen" className="px-2"/>
            <img src="images/logo.png" alt="imagen" className="px-2"/>
            {
                isEditing == "info" && 
                <button
                    onClick={() => setIsEditing("newSales")}
                    className="text-xl text-white font-bold rounded-full bg-black px-3 mt-4 mb-4"
                >
                    Crear venta
                </button>
            }
        </div>
    );
};

export default ProfileSales;