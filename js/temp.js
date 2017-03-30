var ViewModel = function(data) {
    var self = this;
    self.filters = ko.observableArray(data.filters);

    self.filter = ko.observable('');
    self.items = ko.observableArray(data.items);
    self.filteredItems = ko.computed(function() {
        var filter = self.filter();
        if (!filter || filter == "None") {
            return self.items();
        } else {
            return ko.utils.arrayFilter(self.items(), function(i) {
                return i.name == filter;
            });
        }
    });
};


var initialData = {
    filters: ["None", "Old", "New", "Super", "Corvette"],
    items: [{ name: "Corvette", type: "Old"},
           { name: "Charger", type: "Old"},
           { name: "Prius", type: "New"},
           { name: "Magnum", type: "New"},
           { name: "McLaren", type: "Super"},
           { name: "Saleen", type: "Super"}]
};

ko.applyBindings(new ViewModel(initialData));
