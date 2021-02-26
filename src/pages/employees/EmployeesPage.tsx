import * as React from "react";
import {PageWrapperConnected} from "../../components/PageWrapper/PageWrapperConnected";
import {EmployeesListConnected} from "../../components/EmployeesList/EmployeesListConnected";
import {EmployeeEditorConnected} from "../../components/EmployeeEditor/EmployeeEditorConnected";

export interface EmployeesPageStateProps {
}

export interface EmployeesPageDispatchProps {
}

export type EmployeesPageProps = EmployeesPageStateProps &
    EmployeesPageDispatchProps;

interface EmployeesPageState {
}

export class EmployeesPage extends React.Component<EmployeesPageProps, EmployeesPageState> {
    state = {};

    public render() {

        return (
            <PageWrapperConnected>
                <EmployeeEditorConnected/>
                <EmployeesListConnected/>
            </PageWrapperConnected>
        );
    }
}
