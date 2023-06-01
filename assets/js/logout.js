// Logout button click event handler
$('#logout-button').on('click', function() {
    // Make an AJAX request to the logout endpoint
    $.ajax({
        url: 'http://localhost:3000/user/logout', // Replace with the actual logout API endpoint
        method: 'POST',
        success: function(response) {
            // Redirect to the main page
            window.location.href = 'index.html'; // Replace with the actual main page URL
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});
