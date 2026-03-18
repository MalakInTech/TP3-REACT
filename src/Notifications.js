import { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState(3);

  return (
    <div>
      {notifications > 0 && <p>Vous avez des notifications</p>}
      <button onClick={() => setNotifications(notifications - 1)}>
        Supprimer une notification
      </button>
    </div>
  );
}

export default Notifications;