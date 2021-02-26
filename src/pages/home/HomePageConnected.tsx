import * as React from "react";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {HomePage, HomePageDispatchProps, HomePageStateProps,} from "./HomePage";
import {State} from "../../ducks/rootReducer";

const mapStateToProps: MapStateToProps<HomePageStateProps, {}, State> = state => {
    return {};
};

const dispatchProps: MapDispatchToProps<HomePageDispatchProps, {}> = {};

export const HomePageConnected = connect(
    mapStateToProps,
    dispatchProps
)(HomePage);
