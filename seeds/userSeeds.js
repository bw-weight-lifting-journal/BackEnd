
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { firstName: 'BigBad', lastName: 'Barry', userName: 'BigBadBarry', email: 'barry@barry1.com', password: 'flubber' },
        { firstName: 'BigBad', lastName: 'Barry', userName: 'Nope', email: 'barry@barry2.com', password: 'flubber' },
        { firstName: 'BigBad', lastName: 'Barry', userName: 'BYup', email: 'barry@barry3.com', password: 'flubber' },
        { firstName: 'BigBad', lastName: 'Barry', userName: 'Bdiggit', email: 'barry@barry4.com', password: 'flubber' },
        { firstName: 'BigBad', lastName: 'Barry', userName: 'yelp', email: 'barry@barry.com5', password: 'flubber' },
        { firstName: 'BigBad', lastName: 'Barry', userName: 'Bboob', email: 'barry@barry.com6', password: 'flubber' },
        { firstName: 'BigBad', lastName: 'Barry', userName: 'deeick', email: 'barry@barry.com7', password: 'flubber' },
        { firstName: 'BigBad', lastName: 'Barry', userName: 'noob', email:'barry@barry.com8', password:'flubber'},

      ]);
    });
};
