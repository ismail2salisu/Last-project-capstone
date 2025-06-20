import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [form, setForm] = useState({ name: '', email: '' });

  const loadProfile = async () => {
    const res = await API.get('/user/profile');
    setProfile(res.data);
    setForm({ name: res.data.name, email: res.data.email });
  };

  const updateProfile = async () => {
    await API.patch('/user/update', form);
    alert('Profile updated');
    loadProfile();
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>

      <h4>Update Info</h4>
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <button onClick={updateProfile}>Save</button>
    </div>
  );
}
