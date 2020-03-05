
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "userTest1", password: "passwordTest1" },
        { username: "userTest2", password: "passwordTest2" },
        { username: "userTest3", password: "passwordTest3" }
      ]);
    });
};
