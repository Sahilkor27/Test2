document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#search button').addEventListener('click', (event) => {
        let locationInput = document.querySelector('#search input[type="text"]');
        if(locationInput.value === '') {
            alert('Please enter a location');
            event.preventDefault();
        }
    });
});
