import { LitElement } from '@polymer/lit-element';
export default class FeaturedDropdown extends LitElement {
    static readonly properties: {
        chosenOption: {
            type: {
                fromAttribute: (attr: any) => any;
                toAttribute: (prop: any) => string;
            };
            attribute: string;
            hasChanged(newVal: any, oldVal: any): boolean;
        };
        options: {
            type: {
                fromAttribute: (attr: any) => any;
                toAttribute: (prop: any) => string;
            };
        };
        onChangeHandler: {
            type: FunctionConstructor;
            attribute: string;
        };
        isExpanded: {
            type: BooleanConstructor;
            attribute: string;
        };
    };
    constructor();
    onExpandClick(): void;
    collapse(): void;
    onChange(event: any): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    onOutsideClick(event: any): void;
    render(): import("lit-html").TemplateResult;
}
