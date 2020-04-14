import React, {Fragment} from 'react';
import {WithTranslation} from "next-i18next";
import {WithRouterProps} from "next/dist/client/with-router";
import {withRouter, withTranslation} from "../../types";

@withRouter
@withTranslation
export class About extends React.Component<Props> {
    static getInitialProps = async () => ({
        namespacesRequired: ['common']
    });
    render() {
        return (
            <Fragment>
                <h1>
                    {this.props.t('about-title')}
                </h1>
            </Fragment>
        );
    }
}
interface Props extends WithRouterProps, WithTranslation {}
