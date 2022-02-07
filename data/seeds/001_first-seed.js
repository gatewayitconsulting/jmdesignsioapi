const profiles = [
  {
    name: 'John'
  },
  {
    name: 'Lauren'
  },
  {
    name: 'Bobby'
  }
];

exports.seed = function (knex) {
  return knex('profiles').del()
    .then(() => {
      return knex('profiles').insert(profiles)
    })
};