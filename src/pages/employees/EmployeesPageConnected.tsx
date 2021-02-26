import * as React from "react";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {EmployeesPage, EmployeesPageDispatchProps, EmployeesPageStateProps,} from "./EmployeesPage";
import {State} from "../../ducks/rootReducer";

const mapStateToProps: MapStateToProps<EmployeesPageStateProps, {}, State> = state => {
    return {};
};

const dispatchProps: MapDispatchToProps<EmployeesPageDispatchProps, {}> = {};

export const EmployeesPageConnected = connect(
    mapStateToProps,
    dispatchProps
)(EmployeesPage);
