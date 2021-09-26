import { notification } from 'antd';

export const openNotification = (key, text, description, icon, style) => {
  notification.open({
    key,
    message: text,
    description: description,
    icon: icon,
    style: style
  });
  // setTimeout(() => {
  //   notification.open({
  //     key,
  //     message: text,
  //     description: description,
  //     icon: icon
  //   });
  // }, 5000);
};