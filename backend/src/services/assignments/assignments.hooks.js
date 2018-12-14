

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      // add related class info to the assignment
      async function(context){
        //write our sql
        const sql = `SELECT c.description FROM classes c WHERE c.id = ?`;
        const knex = context.app.get('knexClient');
        console.log(context.result);
        context.result.data.forEach(async (a, i) => {
          const result = await knew.raw(sql, [a.class_id]);
          context.result.data[i]['class'] = result;
        });
        return context;
      }
    ],
    get: [
      // add related class info to the assignment
      async function(context){
        //write our sql
        const sql = `SELECT c.description FROM classes c WHERE c.id = ?`;
        const knex = context.app.get('knexClient');
        const result = await knew.raw(sql, [context.class_id]);
        context.result.data['class'] = result;
        return context;
      }
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
