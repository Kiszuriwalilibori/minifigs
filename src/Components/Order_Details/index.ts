import { connect } from "react-redux";
import { OrderDetails } from "./Order_Details";
import { sendOrder } from "reduxware/thunks/sendOrder";

import { Minifig, RedirectType, RootStateType } from "types";

const mapStateToProps = (state: RootStateType) => ({
    setNumber: (state.selected.selectedMinifig as Minifig).set_num,
});

const mapDispatchToProps = (dispatch: Function) => ({
    sendOrder: (redirect: RedirectType, data: FormData) => dispatch(sendOrder(redirect, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
