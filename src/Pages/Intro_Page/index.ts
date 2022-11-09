import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { RootStateType } from "types/index";
import { Intro_Page } from "./Intro_Page";

const mapStateToProps = (state: RootStateType) => ({
    isLoading: state.fetch.isLoading,
    isError: state.fetch.isError,
    errorMessage: state.fetch.errorMessage,
});

export default withRouter(connect(mapStateToProps, {})(Intro_Page));
