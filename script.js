// Function to calculate fare
function calculateFare() {
    const distance = parseFloat(document.getElementById("distance").value); // Ensure value is a number
    const resultDiv = document.getElementById("fareResult");
    const whatsappBtn = document.getElementById("whatsappButton");

    if (distance && distance > 0) {
        const fare = distance * 50; // Base fare logic
        resultDiv.innerHTML = `Estimated Fare: Rs. ${fare}`;

        // Show WhatsApp button
        whatsappBtn.style.display = "inline-block";

        // Update WhatsApp button link with a custom message
        const message = encodeURIComponent("I want to book a ride");

        // Direct the user to your WhatsApp number with a prefilled message
        whatsappBtn.onclick = () => {
            window.open(`https://wa.me/923196637570?text=${message}`, '_blank');
        };
    } else {
        resultDiv.innerHTML = "Please enter a valid distance.";
        whatsappBtn.style.display = "none";
    }
}



function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`) || el.textContent;
      if (el.placeholder) {
        el.placeholder = el.getAttribute(`data-${lang}`);
      }
    });
  }
  




function toggleSMSBox() {
  const smsBox = document.getElementById('smsBox');
  smsBox.style.display = (smsBox.style.display === 'none') ? 'block' : 'none';
}




function simulateTraffic() {
    const pickup = document.getElementById('pickup').value.trim();
    const drop = document.getElementById('drop').value.trim();

    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations.");
      return;
    }

    // Dummy traffic level
    const trafficLevels = ['🚗 Low', '🚙 Moderate', '🚛 Heavy'];
    const randomTraffic = trafficLevels[Math.floor(Math.random() * trafficLevels.length)];
    document.getElementById('trafficResult').innerHTML = `Simulated Traffic: ${randomTraffic}`;

    // Update Google Maps iframe with real route
    const key = 'YOUR_API_KEY'; // ← Replace this
    const url = `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(drop)}&mode=driving`;
    document.getElementById('mapFrame').src = url;
  }