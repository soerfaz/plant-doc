import '../component/plant-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const plantListElement = document.querySelector('plant-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchPlant(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    plantListElement.plants = results;
  };

  const fallbackResult = message => {
    plantListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
