function trackShipment() {
    let trackingNumber = document.getElementById("trackingNumber").value;
    
    if (trackingNumber === "") {
        alert("Please enter a tracking number.");
    } else {
        alert("Tracking number " + trackingNumber + " is in transit.");
    }
}
