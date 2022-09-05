import './App.css';
import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';

function App() {

  let name = "abdelilah Elaziri";
  let num1 = 11;
  let num2 = 100;
  
  return (
    <div className="App">
      <Navbar title="contact title"/>
      <Contact/>
      <Contact name="abdelilah" phone="0612345678" email="abdelilahelaziri9@gmail.com"/>
      <Contact name="elaziri" phone="0512345679" email="abdelilahelaziri6@gmail.com"/>
      <Contact name="abdelilahelaziri" phone="012345610" email="abdelilahelaziri96@gmail.com"/>
      
    </div>
  );
}

export default App;
