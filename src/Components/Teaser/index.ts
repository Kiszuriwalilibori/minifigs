import { connect } from "react-redux";

import { Teaser } from "./Teaser";

import { RootStateType } from "types";

const mapStateToProps = (state: RootStateType) => ({
    teaser: state.teasers.currentTeaser,
});

export default connect(mapStateToProps, null)(Teaser);
