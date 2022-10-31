import { SummaryMain } from "./SummaryMain";

import { connect } from "react-redux";

import { RootStateType } from "types";

const mapStateToProps = (state: RootStateType) => ({
    selectedMinifig: state.selected.selectedMinifig,
});

export default connect(mapStateToProps, {})(SummaryMain);
