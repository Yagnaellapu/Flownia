import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import ScrollingMessage from "./ScrollingMessage";
import SmsNotifications from "./SmsNotifications";


function Notifications() {
  const tabData = [
    {
      label: "SCROLLING MESSAGE",
      component: (
        <div>
          <div>
            <ScrollingMessage />
          </div>
        </div>
      ),
    },
    {
      label: "SMS NOTIFICATION",
      component: <SmsNotifications/>,
    },
    {
      label: "LICENCE NOTIFICATION",
      component: <div>This is the content of Tab 3</div>,
    },
  ];

  return (
    <div>
      <Tabs tabs={tabData} />
    </div>
  );
}

export default Notifications;
