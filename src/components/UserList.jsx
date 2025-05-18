import React,{useState} from 'react'

const API_URL = process.env.REACT_APP_API_URL;

function UserList() {
    const [users, setUsers] = useState(null)  
    const getUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <ul>
        {users&& users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
