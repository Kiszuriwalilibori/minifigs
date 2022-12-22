import { connect } from "react-redux";

import { RootStateType } from "types";
import Select from "./Select";

const mapStateToProps = (state: RootStateType) => ({
    minifigs: state.draw.minifigs,
});

export default connect(mapStateToProps, {})(Select);
