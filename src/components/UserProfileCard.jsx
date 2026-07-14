function UserProfileCard() {
  const user =
    JSON.parse(
      localStorage.getItem("registeredUser")
    ) || {};

  return (
    <div className="card">
      <h3>User Profile</h3>

      <h2>
        👤 {user.name || "User"}
      </h2>

      <p>
        {user.email || "No Email"}
      </p>

      <p>
        Account No: 1234567890
      </p>
    </div>
  );
}

export default UserProfileCard;
