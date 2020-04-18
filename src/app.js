import Cards from './cards';
import Component from './js/Component';
import Row from './js/Row';
import Column from './js/Column';
import Card from './js/Card';
import BurgerContainer from './js/BurgerContainer';
import ToggleContainer from './js/ToggleContainer';

window.addEventListener('load', () => {
  const container = new Component('div', null, 'container');
  const toggleContainer = new ToggleContainer();
  container.append(toggleContainer);
  const row = new Row();

  const categoryCards = Cards.map( (obj) => ({
    image: obj.cards[0].image,
    word: obj.category,
    translation: obj.category,
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

  burgerContainer.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('nav-link')) {
      const category = target.textContent;
      const [res] = Cards.filter((obj) => obj.category == category); /* [res] takes first element */
      cardComponents.forEach( (card, index) => {
        card.replaceContent(res.cards[index]);
      });
      burgerContainer.collapse.deleteShowClass();
    }
  });

  row.append(...columnsWithCards);
  container.append(row);
  document.body.append(burgerContainer.element, container.element);
});
