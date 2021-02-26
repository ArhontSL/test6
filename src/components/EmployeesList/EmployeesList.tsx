import React from "react";
import styles from "./EmployeesList.module.scss";
import {IEmployeesOutputData} from "../../ducks/general/general";
import {EmployeeItem} from "./EmployeeItem/EmployeeItem";

export interface EmployeesListStateProps {
    employees: IEmployeesOutputData | undefined;
}

export interface EmployeesListDispatchProps {
    onGetData: () => void;
    onDelete: (id: number) => void;
    onAdd: () => void;
}

export type EmployeesListProps = EmployeesListStateProps & EmployeesListDispatchProps;

interface EmployeesListState {
}

export class EmployeesList extends React.PureComponent<EmployeesListProps, EmployeesListState> {
    state = {};

    public render() {
        const {employees} = this.props;

        return (
            <div className={styles.listContainer}>
                {employees &&
                <>
                    <div className={styles.infoContainer}>
                        Информация: страница {employees.page}, всего страниц {employees.total_pages}, на странице {employees.data.length}
                    </div>
                    <div>
                        <button
                            className={styles.itemsAddButton}
                            onClick={this.props.onAdd}
                        >
                            Добавить сотрудника
                        </button>
                    </div>
                    <div className={styles.itemsContainer}>
                        {employees.data.map(e => <EmployeeItem
                            key={e.id}
                            employee={e}
                            onDelete={this.props.onDelete}
                        />)}
                    </div>
                </>}
            </div>
        );
    }

    componentDidMount() {
        this.props.onGetData();
    }
}