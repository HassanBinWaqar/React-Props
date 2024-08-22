import React from 'react';
import './App.css';
import Navbar from './Navbar';
import UserProfile from './UserProfile';

const Greeting = ({ message }) => (
  <div className="greeting-container">
    <h1 className="greeting-message">{message}</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Dynamic Content: The Greeting component takes a message prop and displays it. By changing the message prop, you can render different content without altering the component itself. */}
      {/* Greeting component is reused multiple times in the App  */}
      <Greeting message="Learn React.Js With Hassan Bin Waqar!" />
      <Greeting message="Bytewise Frontend Development Track" />
      <Greeting message="Exploring React Props - Concept" />
      <UserProfile
        avatar="https://via.placeholder.com/100"
        name="Hassan Bin Waqar"
        email="hassan.binnwaqar@protonmail.com"
      />
    </div>
  );
}

export default App;
