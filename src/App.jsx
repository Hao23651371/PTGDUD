import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentInfo from "./components/StudentInfo";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import StatusBadge from "./components/StatusBadge";
import Doitrangthai from "./components/Doitrangthai";
import TodoApp from "./components/TodoApp";

function App() {
  const student = {
    name: "Trần Thế Hào",
    id: "23651371",
    className: "CNTT",
  };

  return (
    <>
      <Header />

      <StudentInfo
        name={student.name}
        id={student.id}
        className={student.className}
      />

      <hr />
      <h2>Bài 2: Counter App</h2>
      <Counter />

      <hr />
      <UserForm />
<hr />
<h2>Bài 04: Status Badge</h2>
<StatusBadge status="online" />
 <hr />
<TodoApp />

<Doitrangthai status="offline" />

    </>
  );
}

export default App;
