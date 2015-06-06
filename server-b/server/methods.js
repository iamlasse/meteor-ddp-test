Meteor.methods({
	serverDelete: function (id) {
		console.log('-- remote item removed --', id);
		Items.remove({_id: id});
		var aItem = ServerAItems.findOne({_id: id});
		if(aItem){
			console.log(aItem)
			ServerAItems.remove({_id: id});
		}
	},
	serverAdd: function (item) {
		console.log('-- remote item added --', item);
		var aItem = ServerAItems.findOne({_id: item._id});
		if(aItem){
			console.log(aItem);
			ServerAItems.update({_id: aItem._id}, {$set: {test: aItem.test}});
		} else {
			ServerAItems.insert(item);
		}
	}
}); 