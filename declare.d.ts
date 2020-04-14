declare module "*.svg" {
    const content: any;
    export default content;
}

declare module 'react-credit-card-primitives' {
    import React, {Component, ReactElement} from "react";

    export class Number<P> extends React.Component<P> {
        protected getInputProps: (props: {}) => { value: any; onChange?: any; onChangeText: any; onFocus: any; onBlur: any; };
        protected handleChange: (ev: string) => void;

        protected setValue(ev: string);
    }

    export class Cvc<P> extends React.Component<CvcProps<P>> {
        protected getInputProps: (props: {}) => { value: any; onChange?: any; onChangeText: any; onFocus: any; onBlur: any; maxLength: any; };
        protected handleChange: (ev: string) => void;

        protected setValue(ev: string);
    }

    export class Expiration<P> extends Component<ExpirationProps<P>> {
    }

    interface ExpirationProps<T> extends T {
        onChange: ({month, year, valid}) => void,
        render: ({getInputProps, valid, error}) => ReactElement,
    }

    interface CvcProps<T> extends T {
        masked: boolean,
        onChange: ({value, valid}) => void,
        render: ({getInputProps, valid, error}) => ReactElement,
    }
}