$(document).ready(function() {

    $('#description-view-more-link').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('#description-view-more-link').hide();
        $('#description-view-more').show();

        gtag('event', 'viewMore');
    })

    // <a href="#" id="description-view-more-link" onclick="document.getElementById('description-view-more').style.display = 'block'; document.getElementById('description-view-more-link').style.display = 'none'; return false">View more</a>
    
});