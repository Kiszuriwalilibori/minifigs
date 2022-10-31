import { Parts } from "./Parts";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { RootStateType } from "types";

const mapStateToProps = (state: RootStateType) => ({
    parts: state.selected.withParts,
});

export default withRouter(connect(mapStateToProps, {})(Parts));
