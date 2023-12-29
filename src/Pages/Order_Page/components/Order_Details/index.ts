import { connect } from "react-redux";
import { OrderDetails } from "./Order_Details";
import { sendOrder } from "reduxware/thunks/sendOrder";

import { NavigateFunction } from "react-router-dom";
import { UseMessage } from "hooks/useMessage";

const mapDispatchToProps = (dispatch: Function) => ({
    sendOrder: (navigate: NavigateFunction, showMessage: UseMessage, data: FormData) => dispatch(sendOrder(navigate, showMessage, data)),
});

export default connect(null, mapDispatchToProps)(OrderDetails);
