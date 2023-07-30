import React from "react";
import Image from "next/image";

const cartIcon = "/assets/icons/cart-icon.svg";
const personIcon = "/assets/icons/person-icon.svg";

const Profile: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Image src={cartIcon} width={20} height={20} alt="cart icon" />
        <h3 className="hidden lg:block ">Cart</h3>
      </div>
      <div className="flex items-center gap-2">
        <Image src={personIcon} width={20} height={20} alt="person icon" />
        <h3 className="hidden lg:block">Profile</h3>
      </div>
    </div>
  );
};

export default Profile;
