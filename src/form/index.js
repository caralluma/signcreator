import React, { Component } from 'react';

// import Transition from './motion.js';
import Design from './design';
import Payment from './payment';
import Receipt from './receipt';
import TemplateList from './templates';

import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';



class Form extends Component {
  render() {
    const { actions, borders, customer, history, image, imageClassName, items, payment, sendstatus, settings, templates, texts } = this.props;

    return (
      <Router history={history}>
        <div>
          <Route path="/" exact render={() =>
            (
              <TemplateList key='templates' actions={actions} texts={texts.templates} templates={templates} items={texts.design.settings.selector.items} />
            )} />
          <Route path="/edit" render={() =>
            (
              <Design key='design' actions={actions} borders={borders} image={image} imageClassName={imageClassName} items={items} settings={settings} texts={texts.design}  />
            )} />
          <Route path="/payment" render={() =>
            (
              <Payment key='payment' actions={actions} customer={customer} image={image} items={items} payment={payment} settings={settings} sendstatus={sendstatus} texts={texts.payment} />
            )} />
          <Route path="/receipt" render={() =>
            (
              <Receipt key='receipt' actions={actions} customer={customer} payment={payment}  texts={texts.receipt} />
            )} />
        </div>
      </Router>
    );
  }
}

export default Form;
