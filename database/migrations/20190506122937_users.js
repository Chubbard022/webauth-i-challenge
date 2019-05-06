exports.up = function(knex, Promise) {
  return knex.schema.createTable("users",users=>{

      users //primary key
        .increments()

      users //username field
        .string("username", 128)
        .notNullable()
        .unique()
      user //password field
        .string("password",128)
        .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users")
};
