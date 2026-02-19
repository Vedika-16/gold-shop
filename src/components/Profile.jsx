function Profile({ user, setUser }) {
  const handleLogout = () => setUser(null);

  return (
    <div className="profile">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
