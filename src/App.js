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
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Camp Features</h1>
        </header>
        <section className="features">
          <ul className="top-features-list">
            { 
              Features.map((feature, featureIndex) => (
                <li
                  className="top-feature"
                  onClick={ this.handleClick(feature.title) }
                  key={ featureIndex }>
                  { feature.title }
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
              className="tent-image" 
              src="https://djqvcbmmgpti5.cloudfront.net/assets/sharing/logo-tent-9191c74ffcf517ca0ac12c1f9036dbb0.png"
              alt="Hipcamp Tent" />
          </section>
          <section className="footer-bottom"></section>
        </footer>
      </div>
    );
  }
}

export default App;
