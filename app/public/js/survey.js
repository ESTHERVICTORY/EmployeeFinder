//Stars
$(function () {

    /**
     * Get the form info from the page.
     * Clear the form. 
     * Send the data in a POST request.
     */
    const survey = function (event) {
        event.preventDefault();

        // Here we grab the form elements
        const newSurvey = {
            Question1: $('#Question 1').val().trim(),
            Question2: $('#Question 2').val().trim(),
            Question3: $('#Question 3').val().trim(),
            Question4: $('#Question 4').val().trim(),
            Question5: $('#Question 5').val().trim(),
            Question6: $('#Question 6').val().trim(),
            Question7: $('#Question 7').val().trim(),
            Question8: $('#Question 8').val().trim(),
            Question9: $('#Question 9').val().trim(),
            Question10: $('#Question 10').val().trim()

        };

        // Clear the form when submitting

        $('#Question 1').val('');
        $('#Question 2').val('');
        $('#Question 3').val('');
        $('#Question 4').val('');
        $('#Question 5').val('');
        $('#Question 6').val('');
        $('#Question 7').val('');
        $('#Question 8').val('');
        $('#Question 9').val('');
        $('#Question 10').val('');

        $.ajax({
            method: 'POST',
            url: 'api/tables',
            data: newReservation
        })
    }

    $('.submit').on('click', survey)
});

