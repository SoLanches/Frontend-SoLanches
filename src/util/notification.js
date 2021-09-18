import { notification } from 'antd';

export const openNotification = (key, text, description, icon) => {
  notification.open({
    key,
    message: text,
    description: description,
    icon: icon
  });
  setTimeout(() => {
    notification.open({
      key,
      message: text,
      description: description,
      icon: icon
    });
  }, 1000);
};