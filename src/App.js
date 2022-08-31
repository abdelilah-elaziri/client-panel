import './App.css';
import Contact from './components/contacts/Contact';

function App() {

  let name = "abdelilah Elaziri";
  let num1 = 11;
  let num2 = 100;
  
  return (
    <div className="App">
      <h1>Hello React.Js First Code</h1>
      
      <Contact/>
      <Contact/>
      
    </div>
  );
}

export default App;
