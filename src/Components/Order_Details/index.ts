import { connect } from "react-redux";
import { OrderDetails } from "./Order_Details";
import { sendOrder } from "reduxware/thunks/sendOrder";

import { RedirectType } from "types";

const mapDispatchToProps = (dispatch: Function) => ({
    sendOrder: (redirect: RedirectType, data: FormData) => dispatch(sendOrder(redirect, data)),
});

export default connect(null, mapDispatchToProps)(OrderDetails);
