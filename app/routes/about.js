import Ember from 'ember';

let bookmarks = [
  {
    id:1,
    title: 'title1',
    link: 'https://some.com',
    about: 'test description'
  },
  {
    id:2,
    title: 'title2',
    link: 'https://some.com',
    about: 'test description'
  },
  {
    id:3,
    title: 'title3',
    link: 'https://some.com',
    about: 'test description'
  }
];

export default Ember.Route.extend({
  model() {
    return bookmarks;
  }
});
