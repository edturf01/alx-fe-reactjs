import UserProfile from './components/UserProfile';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}


export default App;
