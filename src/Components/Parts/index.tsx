import { Parts } from "./Parts";

import { connect } from "react-redux";

import { RootStateType, Minifig } from "types";

const mapStateToProps = (state: RootStateType) => ({
    minifigsetNumber: (state.selected.selectedMinifig as Minifig).set_num,
});

export default connect(mapStateToProps, {})(Parts);
