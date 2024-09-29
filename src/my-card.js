import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.link = "#";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
  
    
      .card {
        width: 100%;
        border: 3px solid;
        margin: 18px;
        padding: 10px;
        max-width: 300px;
      }

      .card-image {
        width: 100%;
        border-radius: 8px;
      }

      .card-text {
        margin-top: 12px;
      }

      .button {
        margin-top: 12px;
      }

      @media (max-width: 800px) and (min-width: 500px) {
        .button {
          display: block;
        }
      }

      @media (max-width: 500px), (min-width: 800px) {
        .button {
          display: none;
        }
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }

  render() {
    return html`
      <div class="card">
        <img class="card-image" src="${this.image}" alt="${this.title}">
        <div class="card-text">
          <h4 class="card-title">${this.title}</h4>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot>${this.description}</slot>
          </div>
          <div class="card-details">${this.description}</div></details>
        </div>
        <a href="${this.link}">
          <button class="button">Details</button>
        </a>
      </div>
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
}


globalThis.customElements.define(MyCard.tag, MyCard);