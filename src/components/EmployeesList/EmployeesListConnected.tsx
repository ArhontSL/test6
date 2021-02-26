import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {State} from "../../ducks/rootReducer";

import {EmployeesList, EmployeesListDispatchProps, EmployeesListStateProps} from "./EmployeesList";
import {getData, employeeDelete, employeeAddStart} from "../../ducks/general/general";
import {selectEmployees} from "../../selectors/general";

const mapStateToProps: MapStateToProps<EmployeesListStateProps,
    {},
    State> = (state: State) => {

    const employees = selectEmployees(state);

    return {
        employees
    };
};

const dispatchProps: MapDispatchToProps<EmployeesListDispatchProps, {}> = {
    onGetData: getData,
    onDelete: employeeDelete,
    onAdd: employeeAddStart
};

export const EmployeesListConnected = connect(
    mapStateToProps,
    dispatchProps
)(EmployeesList);
