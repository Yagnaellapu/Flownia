import React from "react";
import { siteSetupCategories } from "./siteSetup.utils";
import { useParams } from "react-router-dom";
import Facility from "./SiteNames/Facility";
import Sitesetup from "./Sitesetup";
import Tank from "./SiteNames/Tank";
import Tankproduct from "./SiteNames/Tankproduct";
import Midgrade from "./SiteNames/MidGrade";

function SiteName() {
  const { siteName } = useParams();

  const renderComponents = () => {
    switch (siteName) {
      case siteSetupCategories.FACILITY.toLowerCase():
        return <Facility />;
      case siteSetupCategories.TANK.toLowerCase():
        return <Tank />;
      case siteSetupCategories.TANK_PRODUCT.toLowerCase():
        return <Tankproduct />;
      case siteSetupCategories.MID_GRADE.toLowerCase():
        return <Midgrade />;
      default:
        return <Sitesetup />;
    }
  };

  return <div className="h-full">{renderComponents()}</div>;
}

export default SiteName;
