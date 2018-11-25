import { LitElement, html } from '@polymer/lit-element';

class FeaturedDropdown extends LitElement {
    static get properties() {
        return {
            chosenOption: { type: Object }
        };
    }

    constructor() {
        super();
        this.options = [];
        this.chosenOption = { label: '(no options)', value: null };
        this.isExpanded = false;
    }

    render() {
        return html`
            <style>
                :host,
                :host * {
                    box-sizing: border-box;
                }

                :host {
                    --light-gray: #d3d3d3;
                    --gray: #a9a9a9;
                    --black: #000;
                    --white: #fff;
                    --icon-dimension: 25px;

                    font-family: 'sans-serif, Helvetica';
                    font-size: 14px;
                    cursor: pointer;
                    color: var(--black);
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
                    background: var(--light-gray);
                }

                ::slotted(*) {
                    width: var(--icon-dimension);
                    height: var(--icon-dimension);
                }
            </style>
            <div class="dropdown">
                <div class="selected-option">
                    <span class="selected-option__label"><!-- dynamic render--></span>
                    <slot name="dropdown-arrow">Your icon here</slot>
                </div>
                <ul class="options">
                    <!-- dynamic render -->
                </ul>
            </div>
        `;
    }
}

customElements.define('featured-dropdown', FeaturedDropdown);
