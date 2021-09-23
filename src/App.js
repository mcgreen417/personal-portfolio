import profileImg from './img/Michaela_Green_Profile_Picture.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Michaela Green</h2>
      <img src={profileImg} alt="profile-image" />
    </div>
  );
}

export default App;
