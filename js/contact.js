$(function() {

	// Get form 
	var form = $('#ajax-contact');

	// get message div 
	var formMessages = $('#form-messages');

	// Setter opp en eventlytter for contact form 
	$(form).submit(function(e) {
		// Stopper browseren for å submitte contact formen 
		e.preventDefault();

		// Serialize form dataen
		var formData = $(form).serialize();

		// Sender formen ved bruk av AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// sjekker om formMessages div har'success' klassen.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// SSetter meldingsteksten
			$(formMessages).text(response);

			// klarerer formen 
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Sjekker om formMessages div har 'error' klessen.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Setter meldingsteksten
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
