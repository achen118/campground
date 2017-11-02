import React, { Component } from 'react';

class Feature extends Component {
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
        const { feature } = this.props;
        return (
            <li 
                className="top-feature">
                { 
                    feature.presence ? 
                        <i className="fa fa-check" aria-hidden="true"></i> : 
                        <i className="fa fa-times" aria-hidden="true"></i>
                }
                { feature.title }
                {
                    feature.subfeatures.length > 0 ? 
                    <i
                        onClick={ this.handleClick(feature.title) }
                        className="fa fa-plus"
                        aria-hidden="true">
                    </i> : ""
                }
                <ul
                    id={ feature.title }
                    className="sub-features-list hidden">
                    {
                        feature.subfeatures.map((subfeature, idx) => (
                            <li
                                className="sub-feature"
                                key={idx}>
                                { 
                                    feature.presence ? 
                                    <i className="fa fa-check" aria-hidden="true"></i> : 
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                }
                                {subfeature.title}
                            </li>
                        ))
                    }
                </ul>
            </li>
        );
    }
}

export default Feature;