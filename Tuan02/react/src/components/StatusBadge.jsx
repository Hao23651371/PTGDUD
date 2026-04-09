import { useState } from "react";

function StatusBadge({ status }) {

  const [currentStatus, setCurrentStatus] = useState(status);//đưa status vào trong từ bene ngoài vào


  const getStyle = () => {
    if (currentStatus === "online") {
      return { backgroundColor: "green", color: "white" };
    }
    if (currentStatus === "offline") {
      return { backgroundColor: "gray", color: "white" };  }
    if (currentStatus === "busy") {
      return { backgroundColor: "red", color: "white" };
    }
  };

  const changeStatus = () => {
    if (currentStatus === "online") {
      setCurrentStatus("busy");
    } else if (currentStatus === "busy") {
      setCurrentStatus("offline");
    } else {
      setCurrentStatus("online");
    }
  };

  return (
    <div>
      <span style={{ ...getStyle(), padding: "10px", borderRadius: "8px" }}>
        {currentStatus}
      </span>

      <br />
      <br />

      <button onClick={changeStatus}>Đổi trạng thái</button>
    </div>
  );
}

export default StatusBadge;
