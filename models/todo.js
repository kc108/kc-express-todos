module.exports = {
    getAll,
    getOne
   };
   
   const todos = [
    {text: 'Feed Dogs', done: true},
    {text: 'Learn Express', done: false},
    {text: 'Buy Milk', done: false}
   ];
   
   function getAll(id) {
    return todos;
   }
   
   // Here's our latest function for this module
   function getOne(id) {
    return todos[id];
   }

