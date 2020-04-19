import Cards from './cards';
import Component from './js/Component';
import Row from './js/Row';
import Column from './js/Column';
import Card from './js/Card';
import BurgerContainer from './js/BurgerContainer';
import Navbar from './js/Navbar';
import ToggleContainer from './js/ToggleContainer';
import Game from './js/Game';

window.addEventListener('load', () => {
  const container = new Component('div', null, 'container');
  const toggleContainer = new ToggleContainer();
  container.append(toggleContainer);
  const row = new Row();
  const game = new Game();

  const categoryCards = Cards.map( (obj) => ({
    word: obj.category,
    translation: obj.category,
    image: obj.cards[0].image,
  }));

  const burgerContainer = new BurgerContainer();

  const createCardsFromObj = (obj) => {
    const card = new Card(obj);
    return card;
  }

  const cardComponents = categoryCards.map(createCardsFromObj);
  const columnsWithCards = cardComponents.map( (cardComponent) => {
    const column = new Column();
    column.append(cardComponent);
    return column;
  });

  const navbar = new Navbar();
  let curCategory = navbar.mainPage.category;

  cardComponents.forEach((card) => {
    card.addEventListener('click', () => {
      if (curCategory == 'Main page') {
        const category = card.getWord();
        changeCategory(category);
        curCategory = navbar.categories;
      }
    })
  });

  const changeCategory = (category) => {
    let newCards;
    if (category == 'Main page') { 
      newCards = categoryCards;
    } else {
      newCards = Cards.find((obj) => obj.category == category).cards;
    }
    cardComponents.forEach( (card, index) => {
        card.replaceContent(newCards[index]);
    });
    burgerContainer.collapse.deleteShowClass();
  }

  burgerContainer.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('nav-link')) {
      const category = target.textContent;
      curCategory = category;
      changeCategory(category);
    }
  });

  row.append(...columnsWithCards);
  container.append(row);
  document.body.append(burgerContainer.element, container.element);
});
