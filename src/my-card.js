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
    this.title = "Surprised Pikachu!!!";
    this.image = "";
    this.description = "";
    this.link = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 300px;
      }

      .card {
        width: 100%;
        border: 3px solid;
        margin: 18px;
        padding: 10px;
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
    };
  }

  render() {
    return html`
      <div class="card">
        <img class="card-image" src="https://wallpapercave.com/wp/wp5338281.jpg" alt="Card Title">
        <div class="card-text">
          <h4 class="card-title">${this.title}</h4>
          <div class="card-details">${this.description}</div>
        </div>
        <a href="https://hax.psu.edu">
          <button class="button">Details</button>
        </a>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);