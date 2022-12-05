import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { RootStateType } from "types";

import Order_Page from "./Order_Page";

const mapStateToProps = (state: RootStateType) => ({
    message: state.fetch.messageMessage,
    isMessage: state.fetch.isMessage,
});

export default withRouter(connect(mapStateToProps, {})(Order_Page) as any);
