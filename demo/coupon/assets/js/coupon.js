$(document).ready(function() {

    $('#description-view-more-link').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('#description-view-more-link').hide();
        $('#description-view-more').show();

        // gtag('event', 'viewMore');
    })
    
});