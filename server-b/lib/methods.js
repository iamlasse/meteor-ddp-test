Meteor.methods({
	addItem: function (item) {
		Items.insert(item);
		if(Meteor.isClient) 
      		sAlert.info('Local Item added');
	},
	deleteItem: function(id){
		Items.remove({_id: id});
		if(Meteor.isClient) 
	      sAlert.info('Local Item removed');
	}
});