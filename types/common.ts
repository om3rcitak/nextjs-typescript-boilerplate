import {NextComponentType, NextPageContext} from "next";
import {WithTranslation} from "next-i18next";
import {WithRouterProps} from "next/dist/client/with-router";
import {withRouter as origWithRouter} from "next/router";
import {withTranslation as origWithTranslation} from "../i18n";

const withRouter: <P extends WithRouterProps, C = NextPageContext>(ComposedComponent: NextComponentType<C, any, P>) => any
    = origWithRouter as any;
export {withRouter}
const withTranslation: <P extends WithTranslation, C = NextPageContext>(ComposedComponent: NextComponentType<C, any, P>) => any
    = origWithTranslation as any;
export {withTranslation}