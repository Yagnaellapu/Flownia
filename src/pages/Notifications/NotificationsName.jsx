// import React from "react";
// import { useParams } from "react-router-dom";
// import { NotificationsCategories } from "./Notifications.utils";
// import Notifications from "./Notifications";
// import ScrollingMessage from "./NotificationsNames/ScrollingMessage";
// import SmsNotifications from "./NotificationsNames/SmsNotifications";


// function NotificationsName() {
//   const { NotificationsName } = useParams();

//   const renderComponents = () => {
//     switch (NotificationsName) {
//       case NotificationsCategories.SCROLLING_MESSAGE.toLowerCase():
//         return <ScrollingMessage/>;
//       case NotificationsCategories.SMS_NOTIFICATION.toLowerCase():
//         return <SmsNotifications/>;
    
//       default:
//         return <Notifications/>;
//     }
//   };

//   return <div>{renderComponents()}</div>;
// }

// export default NotificationsName;
