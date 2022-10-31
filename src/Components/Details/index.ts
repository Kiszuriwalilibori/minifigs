import { connect } from "react-redux";
import { Details } from "./Details";
import { sendOrder } from "reduxware/thunks/sendOrder";

import { RedirectType } from "types";
const mapDispatchToProps = (dispatch: Function) => ({
    sendOrder: (redirect: RedirectType, data: any) => dispatch(sendOrder(redirect, data)),
});

export default connect(null, mapDispatchToProps)(Details);
