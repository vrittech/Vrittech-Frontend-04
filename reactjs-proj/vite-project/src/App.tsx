import "./App.css";
import { Student, User } from "./interface/student.interface";

function App() {
  let num: number = 10;
  let str: string = "hello ok";
  let isActive: boolean = false;

  let student: Student = {
    name: "Nirajan",
    isAttended: false,
    address: {
      city: "KTM",
      postalCode: 44600,
    },
  };
  num = 10;

  const user: User = {
    id: 1,
    name: "Abc",
  };

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const users: User[] = [
    { id: 1, name: "samaya" },
    { id: 2, name: "sashi" },
  ];
  return <></>;
}

export default App;
