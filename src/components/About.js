import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

function About() {
      return (
            <React.Fragment>
                  <Banner />
                  <div className="about">
                        <h1> About </h1>
                        <p> Application developed using react</p>
                        <p> Great helper for shopping</p>
                        <p> October 2020</p>
                        <p> Keep in Contact</p>
                        <ul>
                              <li>
                                    <a href="https://www.linkedin.com/in/2karla/">
                                          <i className="fab fa-linkedin fa-2x"></i></a>
                              </li>
                              <li>
                                    <a href="https://github.com/Karla-Rodrigues">
                                          <i className="fab fa-github-square fa-2x"></i></a>
                              </li>
                              <li>
                                    <a href="mailto:karlaadautor@gmail.com">
                                          <i className="fas fa-envelope fa-2x"></i></a>
                              </li>
                        </ul>
                  </div>
                  <Footer />
            </React.Fragment>
      )
}

export default About;
