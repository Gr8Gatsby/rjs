function apis() {
	var self = this;

	self.plugins = ko.observableArray();

	self.init = function(data) {
		for(var plugin in data.plugins) {
			self.plugins.push(data.plugins[plugin]);
		}
	}
}

var p = new apis();

ko.applyBindings(p);