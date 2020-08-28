import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [input, setInput] = useState({ username: "", password: "" });
  async function grabAllUsers() {
    try {
      const res = await axios.get('http://localhost:8080/user');
      console.log(res.data);
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
      </header>
    </div>
  );
}

export default App;
