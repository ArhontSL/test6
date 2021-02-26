import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {State} from "../../ducks/rootReducer";

import {EmployeeEditor, EmployeeEditorDispatchProps, EmployeeEditorStateProps} from "./EmployeeEditor";
import {employeeEdit, employeeEditCancel, employeeEditFinish} from "../../ducks/general/general";
import {selectEditableEmployee} from "../../selectors/general";

const mapStateToProps: MapStateToProps<EmployeeEditorStateProps,
    {},
    State> = state => {

    const editableEmployee = selectEditableEmployee(state);

    return {
        editableEmployee
    };
};

const dispatchProps: MapDispatchToProps<EmployeeEditorDispatchProps, {}> = {
    onEmployeeEdit: employeeEdit,
    onAddFinish: employeeEditFinish,
    onAddCancel: employeeEditCancel,
};

export const EmployeeEditorConnected = connect(
    mapStateToProps,
    dispatchProps
)(EmployeeEditor);
