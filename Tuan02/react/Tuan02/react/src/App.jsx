import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentInfo from "./components/StudentInfo";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";

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

      <Footer />
    </>
  );
}

export default App;
