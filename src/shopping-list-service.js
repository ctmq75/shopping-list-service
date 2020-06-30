
const ShoppingListService = {
    //get items
    getById(knex, id) {
      return knex
       .from('shopping_list')
       .select('*')
       .where('id', id)
       .first();
    },
    //add item
    insertItem(knex, newItem) {
        return knex
            .insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => rows[0]);
    },
    //delete items
    deleteItem(knex, id) {
      return knex('shopping_list')
        .where({ id })
        .delete();
    },
    //update items
    updateItem(knex, id, newItemFields) {
      return knex('shopping_list')
        .where({ id })
        .update(newItemFields);
    }
  };
  

  
  module.exports = ShoppingListService;