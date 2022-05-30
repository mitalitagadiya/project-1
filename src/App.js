import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';

function App() {

  
    const person = {
      name: "Amit",
      age: 25,
      course: [
          "C",
          "HTML"
      ]
  }

    console.log(person.name, person.age);
    person.course.map((p) => console.log(p));


  

  return (
    <Demo />
  );
}

export default App;
