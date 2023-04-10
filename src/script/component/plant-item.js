class PlantItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set plant(plant) {
    this._plant = plant;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          background-color: beige;
        }
        .pict-plant {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .plant-info {
          padding: 24px;
        }
        .plant-info > h2 {
          font-weight: bold;
        }
        .plant-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="pict-plant" src="${this._plant.image_url}" alt="Plant Pict">
      <div class="plant-info">
        <h2>${this._plant.common_name}</h2>
        <p>Scientific Name : ${this._plant.scientific_name}</p>
        <p>Genus : ${this._plant.genus}</p>
        <p>Family : ${this._plant.family}</p>
      </div>
    `;
  }
}

customElements.define('plant-item', PlantItem);
