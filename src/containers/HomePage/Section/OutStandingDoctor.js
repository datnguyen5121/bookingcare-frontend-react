import React, { Component } from "react";
import { connect } from "react-redux";
// import './OutStandingDoctor.scss';
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
class OutStandingDoctor extends Component {
    componentDidMount() {
        this.props.loadTopDoctors();
    }
    render() {
        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến Sĩ Hỏi Dân IT</div>
                                        <div>Cơ Xương Khớp 1</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến Sĩ Hỏi Dân IT</div>
                                        <div>Cơ Xương Khớp 2</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến Sĩ Hỏi Dân IT</div>
                                        <div>Cơ Xương Khớp 3</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến Sĩ Hỏi Dân IT</div>
                                        <div>Cơ Xương Khớp 4</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến Sĩ Hỏi Dân IT</div>
                                        <div>Cơ Xương Khớp 5</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến Sĩ Hỏi Dân IT</div>
                                        <div>Cơ Xương Khớp 6</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
