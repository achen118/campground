import React, { Component } from 'react';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.hasSubfeatures = this.hasSubfeatures.bind(this);
        this.renderFeature = this.renderFeature.bind(this);
    }

    handleClick(feature) {
        return event => {
            document.getElementById(feature).classList.toggle('hidden');
            event.target.classList.toggle('fa-plus');
            event.target.classList.toggle('fa-minus');
        };
    }

    hasSubfeatures(feature) {
        return feature.subfeatures.length > 0;
    }

    renderFeature(feature) {
        if (this.hasSubfeatures(feature)) {
            const subfeatures = feature.subfeatures.map(subfeature => this.renderFeature(subfeature));
            return (
                <li>
                    <span>
                        {
                            feature.presence ?
                                <i className="fa fa-check" aria-hidden="true"></i> :
                                <i className="fa fa-times" aria-hidden="true"></i>
                        }
                        { feature.title }
                        {
                            feature.subfeatures.length > 0 ?
                                <i
                                    onClick={this.handleClick(feature.title)}
                                    className="fa fa-plus"
                                    aria-hidden="true">
                                </i> : ""
                        }
                    </span>
                    <ul
                        id={ feature.title }
                        className="sub-features-list hidden">
                        { subfeatures }
                    </ul>
                </li>
            );
        } else {
            return (
                <li>
                    {
                        feature.presence ?
                            <i className="fa fa-check" aria-hidden="true"></i> :
                            <i className="fa fa-times" aria-hidden="true"></i>
                    }
                    { feature.title }
                </li>
            );
        }
    }

    render() {
        const { feature } = this.props;
        return <div>{ this.renderFeature(feature) }</div>;
    }
}

export default Feature;