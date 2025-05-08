import "./Navbar.css";

function Navbar() {
  
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>World Clock</h1>
        </div>
        <div className="icon-container">
          <div className="repo">
            <span>
              <a href="https://github.com/soliman-sDev" target="_blank">
                <i
                  className="fa-brands fa-github fa-xl"
                  style={{ color: "black"}}
                ></i>
              </a>
            </span>
          </div>
          <div className="mode">
            <span id="theme-toggler" className="material-icons">dark_mode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


