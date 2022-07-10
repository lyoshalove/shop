import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import './Notifications.sass';

const Notifications = () => {
  const notifications = useSelector((state: RootState) => state.notifications.messages);

  return (
    <ul className="notifications">
      {notifications.map(notification => {
        return (
          <li
            className={
              notification.isGood
                ? "notifications__item good"
                : "notifications__item bad"
            }
            key={notification.id}
          >
            {notification.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Notifications;