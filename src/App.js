import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";

function App() {
  return (
    <div> 
    <Title name = "Application normalStyle" type = "normal"/>
    <Title name = "Application boldStyle" type = "bold"/>
    <Title name = "Application noStyle"/>
    </div>
  );
}
export default App;
