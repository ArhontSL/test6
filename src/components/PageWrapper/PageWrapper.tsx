import React from "react";
import styles from "./PageWrapper.module.scss";
import {Link} from "react-router-dom";
import {Routes} from "../../app/Routes";

export interface PageWrapperStateProps {
}

export interface PageWrapperDispatchProps {}

export type PageWrapperProps = PageWrapperStateProps & PageWrapperDispatchProps;

interface PageWrapperState {}

export class PageWrapper extends React.PureComponent<PageWrapperProps, PageWrapperState> {
    state = {};

    public render() {
        return (
            <div className={styles.pageWrapper}>
                <div className={styles.menu}>
                    <Link to={Routes.Home}>{'Главная'}</Link>
                    <Link to={Routes.Employees}>{'Сотрудники'}</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}