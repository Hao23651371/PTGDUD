import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Bài 3: Form nhập thông tin</h2>

      <div>
        <label>Tên: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <hr />

      <h3>Dữ liệu bạn đang nhập:</h3>
      <p>👤 Tên: {name}</p>
      <p>📧 Email: {email}</p>
    </div>
  );
}

export default UserForm;
