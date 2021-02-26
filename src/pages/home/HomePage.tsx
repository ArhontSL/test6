import * as React from "react";
import {PageWrapperConnected} from "../../components/PageWrapper/PageWrapperConnected";

export interface HomePageStateProps {
}

export interface HomePageDispatchProps {
}

export type HomePageProps = HomePageStateProps &
    HomePageDispatchProps;

interface HomePageState {
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
    state = {};

    public render() {
        return (
            <PageWrapperConnected>
                {'Home page'}
            </PageWrapperConnected>
        );
    }
}
