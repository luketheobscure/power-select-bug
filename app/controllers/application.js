import Ember from 'ember';

export default Ember.Controller.extend({
  cities: ['Barcelona', 'London', 'New York', 'Porto'],
  actions: {
    handleFocus(select, e) {
      console.log('focus handled!');
      select.actions.open();
    }
  }
});
