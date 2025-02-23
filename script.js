let lastKeyword = "";

function sendApiRequest() {
    var userInput = document.getElementById("userInput").value.trim();

    if (userInput === "") {
        alert("Please enter a keyword to generate a GIF.");
        return;
    }

    console.log("User Input:", userInput);

    var tenorApiKey = "AIzaSyByT1vcgo3wxiVDhiC6UwKZsbSxT0hqw84"; // Tenor API Key
    var tenorApiUrl = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(userInput)}&key=${tenorApiKey}&limit=1&random=true&pos=${Math.random()}`;

    fetch(tenorApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch GIFs from Tenor API.");
            }
            return response.json();
        })
        .then(json => {
            var gifPlaceholder = document.getElementById("gifPlaceholder");

            if (json.results.length > 0) {
                var img_url = json.results[0].media_formats.gif.url;
                gifPlaceholder.innerHTML = `<img src="${img_url}" alt="Generated GIF">`;
            } else {
                gifPlaceholder.innerHTML = "<p>No GIFs found. Try a different keyword.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching GIF:", error);
            alert("Failed to generate GIF. Please try again.");
        });
}


function openPaymentPage() {
    window.location.href = "payment.html?amount=100"; // Redirect with amount parameter
}

function processInput(btn) {
    let inputBox = document.getElementById("inputBox");

    if (inputBox.value.trim() !== "") { // Check if input is not empty
        let originalText = btn.textContent;
        btn.textContent = "Subscribed!"; // Change button text
        // Clear input box

        setTimeout(() => {
            btn.textContent = originalText;
            inputBox.value = ""; 
        }, 2000);
    }
}