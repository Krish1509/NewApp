import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {};
  country="us"
  render() {
    
    return (
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <Link to="/" className="ml-3 text-xl cursor-pointer">News Monkey</Link>
            </div>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <div className="mr-5 hover:font-semibold  cursor-pointer">
                <Link to="/" >Home</Link>
              </div>
              <div className="mr-5 hover:font-semibold   cursor-pointer">
                <Link to="/business" >Business</Link>
              </div>
              <div className="mr-5 hover:font-semibold   cursor-pointer">
                <Link to="/entertainment" >Entertainment</Link>
              </div>
              <div className="mr-5 hover:font-semibold   cursor-pointer">
                <Link to="/health" >Health</Link>
              </div>
              <div className="mr-5 hover:font-semibold   cursor-pointer">
                <Link to="/science" >Science</Link>
              </div>
              <div className="mr-5 hover:font-semibold   cursor-pointer">
                <Link to="/sports" >Sports</Link>
              </div>
              <div className="mr-5 hover:font-semibold   cursor-pointer">
                <Link to="/technology" >Technology</Link>
              </div>
              
              <div class="dropdown">
  <button class="dropbtn">Country  </button>
  <div class="dropdown-content">
    <a country={this.country}>in</a>
    <a href="#">us</a>
    <a href="#">japan </a>
  </div>

</div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;