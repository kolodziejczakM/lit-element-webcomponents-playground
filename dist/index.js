import{LitElement as t,html as e}from"@polymer/lit-element";const i={fromAttribute:t=>"string"==typeof t?JSON.parse(t):t,toAttribute:t=>"string"!=typeof t?JSON.stringify(t):t};class o extends t{static get properties(){return{chosenOption:{type:i,attribute:"chosen-option",hasChanged:(t,e)=>void 0===e||t.value!==e.value},options:{type:i},onChangeHandler:{type:Function,attribute:"on-change-handler"},isExpanded:{type:Boolean,attribute:"is-expanded"}}}constructor(){super(),this.options=[],this.chosenOption={label:"(no options)",value:null},this.isExpanded=!1,this.onOutsideClick=this.onOutsideClick.bind(this)}onExpandClick(){this.options.length&&(this.isExpanded=!0)}collapse(){this.isExpanded=!1}onChange(t){const e=JSON.parse(t.target.getAttribute("value"));this.chosenOption=e,this.collapse(),this.onChangeHandler(e),this.dispatchEvent(new CustomEvent("dropdownValueChanged",{detail:e}))}firstUpdated(){document.addEventListener("click",this.onOutsideClick)}disconnectedCallback(){document.removeEventListener("click",this.onOutsideClick)}onOutsideClick(t){t.target===this||t.target.slot||this.collapse()}render(){return e`
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
                <ul class="${this.isExpanded?"options--expanded":"options"}">
                    ${this.options.map(t=>e`
                                    <option
                                        @click="${this.onChange}"
                                        class="option"
                                        value="${JSON.stringify(t)}"
                                    >
                                        ${t.label}
                                    </option>
                                `)}
                </ul>
            </div>
        `}}customElements.define("featured-dropdown",o);export default o;
