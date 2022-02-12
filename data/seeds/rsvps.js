exports.seed = function (knex) {
  return knex('rsvps').del()
    .then(function () {
      return knex('rsvps').insert([
        { id: 1, firstName: 'John', lastName: 'M', email: 'jmontanye24@gmail.com', phone: '###-###-####', guestFirstName: 'Lauren', guestLastName: 'B', diet: 'Vegetarian', notes: 'Hello' },
        { id: 2, firstName: 'Lauren', lastName: 'B', email: 'lauren24@gmail.com', phone: '###-###-####', guestFirstName: 'Bobby', guestLastName: 'G', diet: 'No restrictions', notes: '' },
        { id: 3, firstName: 'Barb', lastName: 'M', email: 'bobby@outlook.com', phone: '###-###-####', guestFirstName: 'Gretchen', guestLastName: 'S', diet: 'No restrictions', notes: '' }
      ]);
    });
};
