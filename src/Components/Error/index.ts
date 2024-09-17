import { connect } from "react-redux";

import { RootStateType } from "types";
import { Error } from "./Error";
import { clearError } from "reduxware/actionCreators";

const mapDispatchToProps = (dispatch: Function) => ({
    handleClear: () => dispatch(clearError),
});

const mapStateToProps = (state: RootStateType) => ({
    isError: state.fetch.isError,
    message: state.fetch.errorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
