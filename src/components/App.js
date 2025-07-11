import React from "react";

function NavBar(props) {
  return (
    <nav>
      <a href = "#home">I'm a link</a>
    </nav>
  );
}

function Home(props) {
  return (
    <div id = "home">
      <h1>Home</h1>
    </div>
  );
}

function About(props){
  return (
    <div id = "about">
      <h2>About</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
