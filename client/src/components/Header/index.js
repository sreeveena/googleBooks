import React from "react";

function Header({ children }) {
  return (
    <div style = {{backgroundImage: "url('https://i.pinimg.com/originals/cc/df/67/ccdf67df0012d14a7c37ad46978f49b8.jpg')",}}>
    <div
      style={{  backgroundImage: "url('https://i.pinimg.com/originals/cc/df/67/ccdf67df0012d14a7c37ad46978f49b8.jpg')",backgroundColor: 'white', height: 150, clear: "both", paddingTop: 20, textAlign: "center", color: "white" }}
      className="header"
    >
      <h1>(React) Google Book Search</h1>
      <h4> Search for and save books of interest</h4>
    </div>
    </div>

  );
}

export default Header;
