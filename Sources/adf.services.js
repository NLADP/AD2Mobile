
var ADF = {};

ADF.CurrentUser = {};

ADF.Services = {};

ADF.Services.Get = function (service, data, success) {
	$.ajax({
		url: baseUrl + service,
		dataType: 'json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", ADF.Encoding.GetAuthorizationToken(ADF.CurrentUser.Name, ADF.CurrentUser.Password));
		},
		data: data,
		success: success,
		error: function (message) {
			alert(message);
		}
	});
};

