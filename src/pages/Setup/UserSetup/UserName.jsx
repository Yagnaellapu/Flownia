import React from "react";
import { useParams } from "react-router-dom";
import { UserSetupCategories } from "./UserSetup.utils";
import Manager from "./UserNames/Manager";
import Usersetup from "./Usersetup";
import Accountant from "./UserNames/Accountant";
import Owner from "./UserNames/Owner";
import AppUser from "./UserNames/AppUser";
import CorporateUser from "./UserNames/CorporateUser";



function UserName() {
  const { UserName } = useParams();

  const renderComponents = () => {
    switch (UserName) {
      case UserSetupCategories.MANAGER.toLowerCase():
        return <Manager />;
      case UserSetupCategories.ACCOUNTANT.toLowerCase():
        return <Accountant />;
      case UserSetupCategories.OWNER.toLowerCase():
        return <Owner />;
      case UserSetupCategories.APP_USER.toLowerCase():
        return <AppUser />;
      case UserSetupCategories.CORPORATE_USER.toLowerCase():
        return <CorporateUser />;
      default:
        return <Usersetup />;
    }
  };

  return <div>{renderComponents()}</div>;
}

export default UserName;
