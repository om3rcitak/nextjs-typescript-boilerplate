import Document, {Head, Main, NextScript} from 'next/document'
import React from "react";

export default class MyDocument extends Document<{ css: any}> {
    static async getInitialProps({renderPage}) {
        const page = renderPage();
        return {...page}
    }

    constructor(props) {
        super(props);
        const {__NEXT_DATA__} = props;
    }

    render() {
        // noinspection HtmlRequiredTitleElement
        return (
            <html lang={this.props.__NEXT_DATA__.props && this.props.__NEXT_DATA__.props.initialLanguage}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="/static/favicon.ico"/>
                <link rel="manifest" href="/static/manifest.json"/>
                <style dangerouslySetInnerHTML={{__html: this.props.css}}/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}
