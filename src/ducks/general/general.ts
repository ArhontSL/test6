import {Thunk, TypedAction} from "../types";
import {getGeneralApiObj} from "../../api/generalApi";
import {WretcherError} from "wretch";
import {UPDATE_CLEAR} from "../rootReducer";
import {WretcherResponse} from "wretch/dist/resolver";

export const UPDATE_EMPLOYEES_DATA_STATE = "GENERAL/UPDATE_DATA_STATE";
export const EMPLOYEE_DELETE = "GENERAL/EMPLOYEE_DELETE";
export const EMPLOYEE_EDIT_VALUE = "GENERAL/EMPLOYEE_EDIT_VALUE";
export const EMPLOYEE_EDIT_CANCEL = "GENERAL/EMPLOYEE_EDIT_CLEAR";
export const EMPLOYEE_EDIT_FINISH = "GENERAL/EMPLOYEE_EDIT_FINISH";
export const EMPLOYEE_EDIT_ADD = "GENERAL/EMPLOYEE_EDIT_ADD";

export interface IEditEmployeePayload {
    key: keyof IEmployee;
    value: string;
}

export type GeneralActions =
    | TypedAction<typeof UPDATE_EMPLOYEES_DATA_STATE, IEmployeesOutputData>
    | TypedAction<typeof EMPLOYEE_DELETE, number>
    | TypedAction<typeof UPDATE_CLEAR, undefined>
    | TypedAction<typeof EMPLOYEE_EDIT_ADD, undefined>
    | TypedAction<typeof EMPLOYEE_EDIT_CANCEL, undefined>
    | TypedAction<typeof EMPLOYEE_EDIT_FINISH, undefined>
    | TypedAction<typeof EMPLOYEE_EDIT_VALUE, IEditEmployeePayload>;

export interface IEmployee {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
}

export interface IEmployeesInfo {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}

export interface IEmployeesOutputData extends IEmployeesInfo {
    data: IEmployee[];
}

export type GeneralState = {
    employees: IEmployeesOutputData;
    editableEmployee: IEmployee | undefined;
};

const initialState: GeneralState = {
    employees: {
        page: 0,
        total: 0,
        per_page: 0,
        total_pages: 0,
        data: [],
    },
    editableEmployee: undefined,
};

export function getData(): Thunk {
    return async dispatch => {
        await getGeneralApiObj()
            .getData()
            .then(async (res: WretcherResponse) => {
                const resJson: IEmployeesOutputData = await res.json();
                dispatch({type: UPDATE_EMPLOYEES_DATA_STATE, payload: resJson});
            })
            .catch((err: WretcherError) => {
            });
    };
}

export function employeeDelete(id: number): Thunk {
    return dispatch => {
        dispatch({type: EMPLOYEE_DELETE, payload: id});
    };
}

export function employeeAddStart(): Thunk {
    return dispatch => {
        dispatch({type: EMPLOYEE_EDIT_ADD, payload: undefined});
    };
}

export function employeeEdit(props: IEditEmployeePayload): Thunk {
    return dispatch => {
        dispatch({type: EMPLOYEE_EDIT_VALUE, payload: props});
    };
}

export function employeeEditCancel(): Thunk {
    return dispatch => {
        dispatch({type: EMPLOYEE_EDIT_CANCEL, payload: undefined});
    };
}

export function employeeEditFinish(): Thunk {
    return dispatch => {
        dispatch({type: EMPLOYEE_EDIT_FINISH, payload: undefined});
    };
}

export function generalReducer(
    state: GeneralState = initialState,
    action: GeneralActions
): GeneralState {
    switch (action.type) {
        case UPDATE_EMPLOYEES_DATA_STATE:
            return {...state, employees: action.payload};
        case EMPLOYEE_DELETE:
            const newEmployees: IEmployeesOutputData = {
                ...state.employees,
                data: state.employees.data.filter(e => e.id !== action.payload),
            }
            return {...state, employees: newEmployees};

        case EMPLOYEE_EDIT_CANCEL:
            return {...state, editableEmployee: undefined};

        case EMPLOYEE_EDIT_VALUE:
            console.log('action.payload', action.payload);
            const newEditableEmployee: IEmployee = {
                ...state.editableEmployee!,
                [action.payload.key]: action.payload.value,
            }
            return {...state, editableEmployee: newEditableEmployee};

        case EMPLOYEE_EDIT_ADD:
            const id = Math.max(...state.employees.data.map(e => e.id)) + 1;
            return {
                ...state, editableEmployee: {
                    id,
                    avatar: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                }
            };

        case EMPLOYEE_EDIT_FINISH:
            const newEmployeesData = [...state.employees.data];
            newEmployeesData.unshift(state.editableEmployee!);
            return {
                ...state,
                employees: {
                    ...state.employees,
                    data: newEmployeesData,
                },
                editableEmployee: undefined
            };

        case UPDATE_CLEAR:
            return {...initialState};

        default:
            return state;
    }
}
