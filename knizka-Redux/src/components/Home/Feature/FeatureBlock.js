import React from 'react';


class FeatureBlock extends React.Component {

    render () {
        return (

                <div className="feature">
                    <img  className="feature__logo" alt= "pencil" src = {this.props.svg} />
                    <div className = 'feature__description'>
                        <h4 className="feature__description__heading">
                            {this.props.header}
                        </h4>
                        <p className="feature__description__text">
                            {this.props.text}
                        </p>
                    </div>
                    
                </div>

        );
    }

        

}

export default FeatureBlock;
