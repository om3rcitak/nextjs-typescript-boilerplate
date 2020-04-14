import React, { Component, Fragment } from "react";
import Head from "next/head";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../types";
import {
    Menu,
    Container,
    Dropdown
} from 'semantic-ui-react';
import { Link } from "../../i18n";

@withTranslation
export class Layout extends Component<Props> {

    setActiveLang = (lang: string) => {
        window.location.href = window.location.href.replace(/\/(tr|en)\//, `/${lang}/`);
    };
    render() {
        const { props } = this;
        const { t } = props;
        return (
            <Fragment>
                <Menu inverted>
                    <Container>
                        <Link href="/">
                            <span className={'item header'}>Nextjs Typescript Boilerplate</span>
                        </Link>
                        <Link href="/">
                            <span className={'item'}>
                                {t('menu-home')}
                            </span>
                        </Link>
                        <Link href="/about">
                            <span className={'item'}>
                                {t('menu-about')}
                            </span>
                        </Link>
                        <Menu.Menu position='right'>
                            <Menu.Item onClick={() => this.setActiveLang('tr')}>🇹🇷</Menu.Item>
                            <Menu.Item onClick={() => this.setActiveLang('en')}>🇺🇸</Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>
                <Container>
                    {this.props.children}
                </Container>
            </Fragment>
        );
    }
}


const styles = {
};

interface Props extends WithTranslation {

}
