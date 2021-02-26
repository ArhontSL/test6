import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {State} from "../../ducks/rootReducer";

import {PageWrapper, PageWrapperDispatchProps, PageWrapperStateProps} from "./PageWrapper";

const mapStateToProps: MapStateToProps<PageWrapperStateProps,
    { children: any },
    State> = state => {
    return {};
};

const dispatchProps: MapDispatchToProps<PageWrapperDispatchProps, {}> = {};

export const PageWrapperConnected = connect(
    mapStateToProps,
    dispatchProps
)(PageWrapper);
