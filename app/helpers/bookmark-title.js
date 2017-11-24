import Ember from 'ember';

export function bookmarkTitle([title, about]/*, hash*/) {
  return `${title} - ${about}`;
}

export default Ember.Helper.helper(bookmarkTitle);
