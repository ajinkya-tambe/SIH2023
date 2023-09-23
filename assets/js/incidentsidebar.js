// Find the "Create Incident" link by its ID
const createIncidentLink = document.getElementById('create-incident-link');

// Find the incident sidebar by its ID
const incidentSidebar = document.getElementById('incident-sidebar');

// Add a click event listener to the "Create Incident" link
createIncidentLink.addEventListener('click', () => {
    // Toggle the "show" class to show/hide the sidebar
    event.preventDefault();
    incidentSidebar.classList.toggle('show');
});

// Find the "Create Incident" link by its ID
const activeIncidentLink = document.getElementById('active-incident-link');

// Find the incident sidebar by its ID
const activeIncident = document.getElementById('active-incident');

// Add a click event listener to the "Create Incident" link
activeIncidentLink.addEventListener('click', () => {
    // Toggle the "show" class to show/hide the sidebar
    event.preventDefault();
    activeIncident.classList.toggle('show');
});


//for pop up window for add responder using popup.html
let popupWindow;

function openPopup() {
    // console.log("open popup");
    // popupWindow = window.open("popup.html", "popup", "width=400,height=400");
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
const addResponderLink = document.getElementById('add-responder-link');