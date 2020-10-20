import React, { Component } from "react";
import { Link } from 'react-router-dom';

function Greats() {
      const date = new Date();
      const hours = date.getHours();
      let timeOfDay;

      if (hours < 12) {
            timeOfDay = "Good Morning!!";
      } else if (hours >= 12 && hours < 17) {
            timeOfDay = "Good Afternoon!!";
      } else {
            timeOfDay = "Good Night!!";
      }

      return timeOfDay;
}

class Banner extends Component {
      state = {};
      render() {
            return (
                  <div className="page-banner">
                        <div className="picture-banner">
                              <div className="row">
                                    <div className="col-8">
                                          <h2><strong>Shopping</strong> List</h2>
                                          <h3>{Greats()} </h3>
                                          <h3><Link className="link-style" to='/'>Home </Link> |
                              <Link className="link-style" to='/about'> About</Link></h3>
                                    </div>
                                    <div className="col">
                                          <h3> ' ' </h3>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }
}


export default Banner;
