import { Summary_Header } from "./Summary_Header";

import { connect } from "react-redux";

import { RootStateType } from "types";

const mapStateToProps = (state: RootStateType) => ({
    selectedMinifig: state.selected.selectedMinifig,
});

export default connect(mapStateToProps, {})(Summary_Header);
