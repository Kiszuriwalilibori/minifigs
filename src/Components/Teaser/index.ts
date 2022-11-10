import { connect } from "react-redux";

import { Teaser } from "./Teaser";

import { Minifig, RootStateType } from "types";

const mapStateToProps = (state: RootStateType) => ({
    teaser: state.teasers.minifigs.at(-1)!,
    counter: state.teasers.counter,
});

export default connect(mapStateToProps, {})(Teaser);
