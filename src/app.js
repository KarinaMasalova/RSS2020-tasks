import Cards from './cards';
import Component from './js/Component';
import Row from './js/Row';
import Column from './js/Column';
import Card from './js/Card';
import BurgerContainer from './js/BurgerContainer';
import BurgerCollapse from './js/BurgerCollapse';

window.addEventListener('load', () => {
  const container = new Component('div', null, 'container');
  const row = new Row();

  const category1 = Cards[0]; /* Action Set A' */
  const categoryCards = category1.cards;

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
