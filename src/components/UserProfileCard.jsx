function UserProfileCard() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  return (
    <div className="card">

      <h3>User Profile</h3>

      <img
        src={`https://ui-avatars.com/api/?name=${user?.name}&background=2563eb&color=fff&size=128`}
        alt="Profile"
        style={{
          width: "80px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />

      <h2>
        👤 {user?.name}
      </h2>

      <p>{user?.email}</p>

      <p>
        Account Holder
      </p>

    </div>
  );
}

export default UserProfileCard;