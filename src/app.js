import Cards from './cards';
import Component from './js/Component';
import Row from './js/Row';
import Column from './js/Column';
import Card from './js/Card';

window.addEventListener('load', () => {
  const container = new Component('div', null, 'container');
  const row = new Row();

  const category1 = Cards[0]; /* Action Set A' */
  const categoryCards = category1.cards;
  const createCardsFromObj = (obj) => {
    const card = new Card(obj.word, obj.translation, obj.image, obj.audioSrc);
    return card;
  }

  const cardComponents = categoryCards.map(createCardsFromObj);
  const columnsWithCards = cardComponents.map( (cardComponent) => {
    const column = new Column();
    column.append(cardComponent);
    return column;
  });

  row.append(...columnsWithCards);
  container.append(row);
  document.body.append(container.element);
});
