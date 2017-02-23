import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import DropDown from './signdropdown';
import LineDropdown from './linedropdown';
import AddLineMenu from './menu';
import EditList from './listcontainer';
import App from '../App';
import EmojiItem, { small, child } from '../emojiitem/emojiitem';
import EmojiList from './emojicontainer';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import woman from '../images/standard/dame.png';
import man from '../images/standard/mann.png';
import boy from '../images/standard/gutt.png';
import girl from '../images/standard/jente.png';
import icons from 'material-design-icons/iconfont/material-icons.css';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('EditList')}/>
  ));

storiesOf('App', module)
  .add('show', () => (
    <App />
  ));

storiesOf('Sign selector', module)
  .add('show', () => (
    <DropDown />
  ));

storiesOf('Line selector', module)
  .add('Top', () => (
    <LineDropdown label='Top linje' />
  ))
  .add('Left', () => (
    <LineDropdown label='Venstre linje' />
  ))
  .add('Høyre', () => (
    <LineDropdown label='Høyre linje' />
  ))
  .add('Bottom', () => (
    <LineDropdown label='Bunn linje' />
  ));

storiesOf('Add line menu', module)
  .add('show', () => (
    <AddLineMenu />
  ));

let items = {
  items: [
    { type: 1, value: 'Benny' },
    { type: 1, value: '' },
    {
      type: 2,
      value: [
      { image: woman, id: 0},
      { image: man, id: 1},
      { image: girl, id: 2 },
      { image: boy, id: 3 }
    ]}
  ]
};

storiesOf('EditList', module)
  .add('show', () => {
    const store = configureStore(items);

    return (
      <Provider store={store}>
        <EditList />
      </Provider>
    );
  });

storiesOf('EmojiItem', module)
  .add('list', () => {
    let emojis = {
      items: [{
        type: 2,
        value: [
          { image: woman, id: 0},
          { image: man, id: 1},
          { image: girl, id: 2 },
          { image: boy, id: 3 }
        ]
      }]
    };
    const store = configureStore(emojis);

    return (
      <Provider store={store}>
        <EmojiList />
      </Provider>
    );
  });
