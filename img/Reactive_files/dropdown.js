$(() => {
	setSelectedCity();

	$(document).on('click', '.js-toggle-city-dropdown', function () {
		$(this).find('.js-city-dropdown').toggleClass('is-open');
		$(this).parents('.js-city-select').addClass('is-open');
	});

	$(document).on('click', '.js-city-link', function () {
		$('.city-select-box__item').removeClass('is-selected');
		$(this).parent().addClass('is-selected');

		setSelectedCity();
	});

	$(document).click(function (target) {
		if ($(target.target).parents('.js-city-select').length === 0) {
			$('.js-toggle-city-dropdown').find('.js-city-dropdown').removeClass('is-open').parents('.js-city-select').removeClass('is-open');
		}
	});

	function setSelectedCity() {
		var selectedCity = $('.js-city-dropdown').find('.is-selected').find('.js-city-link').text()

		$('.js-selected-text').text(selectedCity);
	}
})
