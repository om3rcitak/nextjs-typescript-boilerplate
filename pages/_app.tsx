import App from 'next/app'
import {appWithTranslation} from "../i18n";
import './_app.css';
import 'semantic-ui-css/semantic.min.css';
import { Layout } from '../views/shared/Layout';

class BugeceApp extends App<{}> {

    public render() {
        const {Component, pageProps} = this.props;
        return (
            <Layout {...{} as any}>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

export default appWithTranslation(BugeceApp)
