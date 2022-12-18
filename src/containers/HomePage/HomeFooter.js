import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {

    render() {
        return (
            <div className='home-footer'>
               <p>&copy; 2015 NguyenDat. More information, please visit my youtube channel. 
                <a target='_blank' href='https://www.facebook.com/nguyendangthanhdat5121/'>
                    &#8594; Click here &#8592; 
                </a></p>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        //injex
    };
};

const mapDispatchToProps = dispatch => {
    return {
    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
