import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailSpecialty.scss";
import HomeHeader from "../../HomePage/HomeHeader";
import { FormattedMessage } from "react-intl";

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {}

    async componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        return (
            <>
                <HomeHeader />
                <div>hello world from detail specialty</div>;
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
