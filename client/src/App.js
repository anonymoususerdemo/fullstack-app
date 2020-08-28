import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

function App() {
  const [input, setInput] = useState({ username: "", password: "" });
  const [users, setUsers] = useState(null);

  async function grabAllUsers() {
    try {
      const res = await axios.get('http://localhost:8080/user');
      setUsers(res.data);
    } catch(e) {
      console.error(e, e.message);
    }
  }

  useEffect(() => {
    grabAllUsers();
  }, [])

  function handleChange(e) {
    const { value, id } = e.target;
    setInput({ ...input, [id]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/user', input);
      console.log(res.data);

      const secondRes = await axios.get('http://localhost:8080/user');
      setUsers(secondRes.data);
    } catch(e) {
      console.error(e, e.message);
    }
  }

  return (
    <div className="">
      <header className="App-header">
        <form onChange={ (e) => handleChange(e) } onSubmit={ (e) => handleSubmit(e) }>
          <label>
            username:
            <input type="text" id="username"/>
          </label>
          <label>
            password:
            <input type="password" id="password" />
          </label>

          <input type="submit" />
        </form>
        {
          users ? users.map(user => <User username={ user.username } userId={ user.id } getUsers={ grabAllUsers }/>) : 'Loading...'
        }
      </header>
    </div>
  );
}

export default App;
