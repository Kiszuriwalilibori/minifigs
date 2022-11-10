import { connect } from "react-redux";

import { Teaser } from "./Teaser";

import { RootStateType } from "types";

const mapStateToProps = (state: RootStateType) => ({
    teasers: state.teasers.minifigs,
    counter: state.teasers.counter,
});

export default connect(mapStateToProps, {})(Teaser);
