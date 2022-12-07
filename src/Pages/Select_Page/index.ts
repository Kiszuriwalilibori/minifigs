import { connect } from "react-redux";

import { RootStateType } from "types";
import Select from "./Select";

const mapStateToProps = (state: RootStateType) => ({
    minifigs: state.fetch.minifigs,
});

export default connect(mapStateToProps, {})(Select);
