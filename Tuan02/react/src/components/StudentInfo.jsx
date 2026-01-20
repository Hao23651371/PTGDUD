function StudentInfo(props) {
  return (
    <div>
      <p>Họ tên: {props.name}</p>
      <p>MSSV: {props.id}</p>
      <p>Lớp: {props.className}</p>
    </div>
  );
}

export default StudentInfo;
