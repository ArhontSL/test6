import React from "react";
import styles from "./EmployeeEditor.module.scss";
import {IEditEmployeePayload, IEmployee} from "../../ducks/general/general";

export interface EmployeeEditorStateProps {
    editableEmployee: IEmployee | undefined;
}

export interface EmployeeEditorDispatchProps {
    onEmployeeEdit: (props: IEditEmployeePayload) => void;
    onAddFinish: () => void;
    onAddCancel: () => void;
}

export type EmployeeEditorProps = EmployeeEditorStateProps & EmployeeEditorDispatchProps;

interface EmployeeEditorState {
}

export class EmployeeEditor extends React.PureComponent<EmployeeEditorProps, EmployeeEditorState> {
    state = {};

    public render() {
        const {editableEmployee} = this.props;
        const addButtonDisabled = editableEmployee && (!editableEmployee!.avatar
            || !editableEmployee!.email
            || !editableEmployee!.last_name
            || !editableEmployee!.first_name);

        return (
            editableEmployee !== undefined &&
            <div className={styles.editorBack}>
                <div className={styles.editorContainer}>
                    <h2>Добавление сотрудника</h2>
                    <div className={styles.editorInputsContainer}>
                        <div>
                            <label htmlFor="input_avatar">Сылка на аватар</label>
                            <input
                                type="text" id="input_avatar"
                                value={editableEmployee!.avatar}
                                onChange={this.inputHandler('avatar')}
                            />
                        </div>
                        <div>
                            <label htmlFor="input_email">Email</label>
                            <input
                                type="text" id="input_email"
                                value={editableEmployee!.email}
                                onChange={this.inputHandler('email')}
                            />
                        </div>
                        <div>
                            <label htmlFor="input_first_name">Имя</label>
                            <input
                                type="text" id="input_first_name"
                                value={editableEmployee!.first_name}
                                onChange={this.inputHandler('first_name')}
                            />
                        </div>
                        <div>
                            <label htmlFor="input_last_name">Фамилия</label>
                            <input
                                type="text" id="input_last_name"
                                value={editableEmployee!.last_name}
                                onChange={this.inputHandler('last_name')}
                            />
                        </div>
                        <div className={styles.buttonsContainer}>
                            <button
                                disabled={addButtonDisabled}
                                onClick={this.props.onAddFinish}
                            >
                                Добавить
                            </button>
                            <button
                                onClick={this.props.onAddCancel}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private inputHandler = (key: keyof IEmployee) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        this.props.onEmployeeEdit({key, value});
    }
}