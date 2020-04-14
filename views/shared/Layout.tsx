import React, {Component, Fragment} from "react";
import Head from "next/head";
import {WithTranslation} from "next-i18next";
import { withTranslation } from "../../types";
import {
    Menu,
    Container,
    Dropdown
} from 'semantic-ui-react';
import { Link } from "../../i18n";

@withTranslation
export class Layout extends Component<Props> {
    render() {
        return (
            <Fragment>
                <Menu inverted>
                    <Container>
                    <Menu.Item as={Link} className={'item'} href="/" header>
                        Nextjs Typescript Boilerplate 
                    </Menu.Item>
                    <Menu.Item as={Link} className="item" href="/">Home</Menu.Item>
                    <Menu.Item as={Link} className={'item'} href="/about">About</Menu.Item>
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
