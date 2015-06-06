Items = new Mongo.Collection('items');

Items.allow({
  insert: function() {
    return true;
  },
  remove: function(){
    return true;
  },
  update: function(){
    return true;
  }
});

Items.find().observe({
  added: function(item) {
    console.log('-- local item added --');
    console.log(item)
    if(Meteor.isClient) sAlert.info('Local Item added');
  },
  removed: function (item) {
    console.log('-- local item removed --');
    console.log(item);
    if(Meteor.isClient)  sAlert.info('Local Item removed');
  }
});