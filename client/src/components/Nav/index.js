import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-item text-light" href="/search">
        Search
      </a>
      <a className="navbar-item text-light" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
