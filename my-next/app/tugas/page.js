import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  // Fetch users from API on page load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    } catch (err) {
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('https://reqres.in/api/users', { name, job });
      alert(`User ${response.data.name} added!`);
      fetchUsers(); // Refresh the user list
      setName('');
      setJob('');
    } catch (err) {
      setError('Failed to add user.');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    try {
      setLoading(true);
      await axios.delete(`https://reqres.in/api/users/${userId}`);
      alert(`User with ID ${userId} deleted!`);
      fetchUsers(); // Refresh the user list
    } catch (err) {
      setError('Failed to delete user.');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userId) => {
    try {
      setLoading(true);
      const response = await axios.patch(`https://reqres.in/api/users/${userId}`, {
        name: 'Updated Name',
        job: 'Updated Job',
      });
      alert(`User ${response.data.name} updated!`);
      fetchUsers(); // Refresh the user list
    } catch (err) {
      setError('Failed to update user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => updateUser(user.id)}>Update</button>
          </li>
        ))}
      </ul>

      <h2>Add User</h2>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
