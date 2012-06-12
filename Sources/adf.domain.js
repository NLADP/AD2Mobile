ADF.Domain.Observable = function (data) {
	for (var member in data) {
		this[member] = ko.observable(data[member]);
	}
}