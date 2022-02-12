exports.seed = function (knex) {
  return knex('rsvps').del()
    .then(function () {
      return knex('rsvps').insert([
        { id: 1, firstName: 'John', lastName: 'M', email: 'jmontanye24@gmail.com', phone: '###-###-####', guestFirstName: 'Lauren', guestLastName: 'B', diet: 'Vegetarian', songRequest: 'Caroline Polachek, Billions', notes: 'Hello' },
        { id: 2, firstName: 'Lauren', lastName: 'B', email: 'lauren24@gmail.com', phone: '###-###-####', guestFirstName: 'Bobby', guestLastName: 'G', diet: 'No restrictions', songRequest: 'Flume - Pallaces', notes: 'My wife has a diet allergy.' },
        { id: 3, firstName: 'Barb', lastName: 'M', email: 'bobby@outlook.com', phone: '###-###-####', guestFirstName: 'Gretchen', guestLastName: 'S', diet: 'No restrictions', songRequest: 'Grimes Genesis', notes: 'Excited for the wedding! I cant wait to spend the special day with you both!' }
      ]);
    });
};
