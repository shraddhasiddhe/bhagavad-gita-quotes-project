const apiUrl = "https://bhagavad-gita-api-2l1p.onrender.com/quote"; 

async function fetchQuote() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Assuming API returns: { verse: "2.47", quote: "...", meaning: "..." }
        document.getElementById("verse").textContent = data.verse;
        document.getElementById("quote").textContent = `"${data.quote}"`;
        document.getElementById("meaning").textContent = data.meaning;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").textContent = "Error fetching quote. Please try again!";
    }
}

// Load a quote when the page loads
fetchQuote();

// Add event listener to button
document.getElementById("new-quote").addEventListener("click", fetchQuote);
