import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function ConvoList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const token = Cookies.get('token');
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
      };
  
      fetch('http://127.0.0.1:8000/api/convo', { headers })
        .then((response) => response.json())
        .then((data) => setUsers(data.data))
        .catch((error) => console.error('Error fetching users:', error));
    }, []);

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item">
          {user.attributes.name}
        </li>
      ))}
    </ul>
  );
};

export default ConvoList;
