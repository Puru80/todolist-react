import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Get job1 done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "Get job2 done"
    },
    {
      sno: 3,
      title: "Go to the office",
      desc: "Get job3 done"
    }
  ];
  
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
