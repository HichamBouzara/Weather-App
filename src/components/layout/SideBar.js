import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "weather"
    };
  }

  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                onClick={() => this.setState({ link: "weather" })}
                className={classnames("nav-link", {
                  active: this.state.link === "weather"
                })}
                href="#"
              >
                <span data-feather="home" />
                Weather <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/settings">
                <a
                  onClick={() => this.setState({ link: "settings" })}
                  className={classnames("nav-link", {
                    active: this.state.link === "settings"
                  })}
                  href="#"
                >
                  <span data-feather="file" />
                  Settings
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBar;
