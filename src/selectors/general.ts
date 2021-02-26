import {State} from "../ducks/rootReducer";

export function selectEmployees(state: State) {
    return state.general.employees;
}

export function selectEditableEmployee(state: State) {
    return state.general.editableEmployee;
}