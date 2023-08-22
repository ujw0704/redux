// import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import {increment, decrement} from "./Components/Slice"

 
function App() {
  return (
    <div>
     <Counter/>
    </div>
  );
}

export default App;
