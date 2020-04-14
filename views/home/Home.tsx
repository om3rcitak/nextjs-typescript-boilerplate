import React, {Fragment} from 'react';
import {WithTranslation} from "next-i18next";
import {WithRouterProps} from "next/dist/client/with-router";
import {withRouter, withTranslation} from "../../types";

@withRouter
@withTranslation
export class Home extends React.Component<Props> {
    static getInitialProps = async () => ({
        namespacesRequired: ['common']
    });
    render() {
        return (
            <Fragment>
                <h1>
                    Nextjs Boilerplate {this.props.t('title')}
                </h1>
            </Fragment>
        );
    }
}
interface Props extends WithRouterProps, WithTranslation {}