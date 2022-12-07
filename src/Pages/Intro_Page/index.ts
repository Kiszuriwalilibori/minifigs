import { connect } from "react-redux";

import { RootStateType } from "types/index";
import { Intro_Page } from "./Intro_Page";

const mapStateToProps = (state: RootStateType) => ({
    isLoading: state.fetch.isLoading,
    isError: state.fetch.isError,
    errorMessage: state.fetch.errorMessage,
    categories: state.categories.categories,
});

export default connect(mapStateToProps, {})(Intro_Page);
