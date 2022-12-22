import { connect } from "react-redux";
import { RootStateType } from "types";

import Order_Page from "./Order_Page";

const mapStateToProps = (state: RootStateType) => ({
    message: state.fetch.anyMessage,
    isMessage: state.fetch.isMessage,
});

export default connect(mapStateToProps, {})(Order_Page);
