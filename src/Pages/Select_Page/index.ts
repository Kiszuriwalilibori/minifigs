import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { RootStateType } from "types";
import Select from "./Select";

const mapStateToProps = (state: RootStateType) => ({
    minifigs: state.fetch.minifigs,
});

export default withRouter(connect(mapStateToProps, {})(Select) as any);
