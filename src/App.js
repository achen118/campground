import React, { Component } from 'react';
import Features from './camp_features';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(feature) {
    return event => {
      document.getElementById(feature).classList.toggle('hidden');
      event.target.classList.toggle('fa-plus');
      event.target.classList.toggle('fa-minus');
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            className="logo"
            src="https://djqvcbmmgpti5.cloudfront.net/assets/sharing/logo-grey-f93eac08661a2f1a4f22ffa50c4db1b0.svg"
            alt="Hipcamp Logo" />
          <img
            className="tent-image-header"
            src="https://djqvcbmmgpti5.cloudfront.net/assets/sharing/logo-tent-9191c74ffcf517ca0ac12c1f9036dbb0.png"
            alt="Hipcamp Tent" />
        </header>
        <section className="features">
          <h1 className="App-title">Camp Features</h1>
          <ul className="top-features-list">
            { 
              Features.map((feature, featureIndex) => (
                <li
                  className="top-feature"
                  key={ featureIndex }>
                  { feature.title }
                  { feature.subfeatures.length > 0 ? <i
                    onClick={ this.handleClick(feature.title) }
                    className="fa fa-plus"
                    aria-hidden="true">
                  </i> : "" } 
                  <ul
                    id={ feature.title }
                    className="sub-features-list hidden">
                    {
                      feature.subfeatures.map((subfeature, subfeatureIndex) => (
                        <li
                          className="sub-feature"
                          key={ subfeatureIndex }>
                          { subfeature.title }
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </section>
        <footer>
          <section className="footer-top">
            <img
              className="tent-image-footer" 
              src="https://djqvcbmmgpti5.cloudfront.net/assets/sharing/logo-tent-9191c74ffcf517ca0ac12c1f9036dbb0.png"
              alt="Hipcamp Tent" />
          </section>
          <section className="footer-bottom">
            <p>Created by Alice Chen</p>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
