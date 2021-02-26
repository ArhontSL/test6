import React from "react";
import styles from "./EmployeeItem.module.scss";
import {IEmployee} from "../../../ducks/general/general";

export interface EmployeesListStateProps {
    employee: IEmployee;
}

export interface EmployeesListDispatchProps {
    onDelete: (id: number) => void;
}

export type EmployeesListProps = EmployeesListStateProps & EmployeesListDispatchProps;

interface EmployeesListState {
}

export class EmployeeItem extends React.PureComponent<EmployeesListProps, EmployeesListState> {
    state = {};

    public render() {
        const {employee} = this.props;

        return (
            <div className={styles.itemContainer}>
                <div
                    style={{backgroundImage: `url(${employee.avatar})`}}
                    className={styles.itemAvatar}
                />
                <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{`${employee.last_name} ${employee.first_name}`}</div>
                    <a className={styles.itemEmail} href={`mailto:${employee.email}`}>{employee.email}</a>
                    <button
                        className={styles.buttonDelete}
                        onClick={() => {this.props.onDelete(employee.id)}}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        );
    }
}