import { Parts } from "./Parts";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Minifig, RootStateType } from "types";
import withQueryClientProviderHOC from "HOCs/withQueryClientProviderHOC";

const mapStateToProps = (state: RootStateType) => ({
    setNumber: (state.selected.selectedMinifig as Minifig).set_num,
});

export default withRouter(connect(mapStateToProps, {})(withQueryClientProviderHOC(Parts)));
