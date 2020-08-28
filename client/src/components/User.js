import React from 'react';
import axios from 'axios';

function User({ username, userId }) {
  async function delUser(id) {
    try {
      const res = await axios.delete('http://localhost:8080/user/' + id);
      console.log(res.data);
    } catch(e) {
      console.error(e);
    }
  }
  return (
    <div>
      <p> { JSON.stringify(username) } : { userId }</p>
      <button id={ userId } onClick={ (e) => delUser(e.target.id) }>Delete User</button>
    </div>
  )
}

export default User;
