import { connect } from "react-redux";

import { RootStateType } from "types";
import { Error } from "./Error";

const mapStateToProps = (state: RootStateType) => ({
    isError: state.fetch.isError,
    message: state.fetch.errorMessage,
});

export default connect(mapStateToProps, {})(Error);
