import { LitElement, html } from '@polymer/lit-element';

// Declaring custom types (here handling object / array passed in HTML) - basically: innerHTML rendering support
const JsonType = {
    fromAttribute: attr => {
        return typeof attr === 'string' ? JSON.parse(attr) : attr;
    },
    toAttribute: prop => {
        return typeof prop !== 'string' ? JSON.stringify(prop) : prop;
    }
};

// shouldUpdate(changedProperties) == shouldComponentUpdate
// update(changedProperties) - called before render. Setting properties inside this method will not trigger another update. 
// firstUpdated(changedProperties) == componentDidMount
// updated(changedProperties) == componentWillReceiveProps / getDerivedStateFromProps
// updateComplete - called after update, returns promise
// requestUpdate(name?, oldValue?) == forceUpdate
// createRenderRoot() -  Implement to customize where the element's template is rendered by returning an element into which to render.
// By default this creates a shadowRoot for the element.

// + native lifecycle methods.

class FeaturedDropdown extends LitElement {
    static get properties() {
        return {
            chosenOption: {
                type: JsonType,
                attribute: 'chosen-option',
                // reflect: true,
                hasChanged(newVal, oldVal) {
                    if (oldVal === undefined) {
                        return true;
                    }
                    return newVal.value !== oldVal.value;
                }
            },
            options: {
                type: JsonType
            },
            onChangeHandler: {
                type: Function,
                attribute: 'on-change-handler'
            },
            isExpanded: {
                type: Boolean,
                attribute: 'is-expanded'
            }
        };
    }

    constructor() {
        super();

        // defaultProps / state values
        this.options = [];
        this.chosenOption = { label: '(no options)', value: null };
        this.isExpanded = false;

        this.onOutsideClick = this.onOutsideClick.bind(this);
    }

    onExpandClick() {
        if (this.options.length) {
            this.isExpanded = true;
        }
    }

    collapse() {
        this.isExpanded = false;
    }

    onChange(event) {
        const selectedOption = JSON.parse(event.target.getAttribute('value'));

        this.chosenOption = selectedOption;
        this.collapse();

        this.onChangeHandler(selectedOption);
        this.dispatchEvent(
            new CustomEvent('dropdownValueChanged', { detail: selectedOption })
        );
    }

    firstUpdated() {
        document.addEventListener('click', this.onOutsideClick);
    }

    // Native api callbacks support
    disconnectedCallback() {
        document.removeEventListener('click', this.onOutsideClick);
    }

    onOutsideClick(event) {
        if (event.target !== this && !event.target.slot) {
            this.collapse();
        }
    }

    render() {
        return html`
            <style>
                :host,
                :host * {
                    box-sizing: border-box;
                }

                :host {
                    --image-display: inline-block;
                    --light-gray-default: orange;
                    --gray: #a9a9a9;
                    --black: #000;
                    --white: #fff;
                    --icon-dimension: 25px;
                    color: var(--black);

                    font-family: 'sans-serif, Helvetica';
                    font-size: 14px;
                    cursor: pointer;
                }

                :host([background]) {
                    --light-gray-default: var(--light-gray);
                }

                .dropdown {
                    position: relative;
                    border: 1px solid var(--gray);
                    border-radius: 5px;
                }

                .selected-option {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 10px;
                }

                .options {
                    display: none;
                }

                .options--expanded {
                    position: absolute;
                    border: 1px solid var(--gray);
                    width: 100%;
                    display: block;
                    padding: 0;
                    margin: 0;
                }

                .option {
                    padding: 10px;
                    background: var(--white);
                }

                .option:hover {
                    background: var(--light-gray-default);
                }

                ::slotted(*) {
                    display: var(--image-display);
                    width: var(--icon-dimension);
                    height: var(--icon-dimension);
                }

            </style>
            <div class="dropdown">
                <div @click="${this.onExpandClick}" class="selected-option">
                    <span class="selected-option__label">${this.chosenOption.label}</span>
                    <slot name="dropdown-arrow">Your icon here</slot>
                </div>
                <ul class="${this.isExpanded ? 'options--expanded' : 'options'}">
                    ${
                        this.options.map(
                            option =>
                                html`
                                    <option
                                        @click="${this.onChange}"
                                        class="option"
                                        value="${JSON.stringify(option)}"
                                    >
                                        ${option.label}
                                    </option>
                                `
                        )
                    }
                </ul>
            </div>
        `;
    }
}

customElements.define('featured-dropdown', FeaturedDropdown);
