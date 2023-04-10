import './plant-item.js';

class PlantList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set plants(plants) {
    this._plants = plants;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._plants.forEach(plant => {
      const plantItemElement = document.createElement('plant-item');
      plantItemElement.plant = plant;
      this.shadowDOM.appendChild(plantItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('plant-list', PlantList);
