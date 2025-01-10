let BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency codes
for (let select of dropdowns) {
    Object.keys(countryList).forEach((currCode) => {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // Set default selections
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    });

    // Update flag when currency changes
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to fetch and update exchange rate
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = parseFloat(amount.value);

    // Validate input amount
    if (isNaN(amtVal) || amtVal <= 0) {
        amtVal = 1;
        amount.value = "1"; // Reset input to a default value
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Failed to fetch exchange rate.");
        
        const data = await response.json();
        const rate = data[toCurr.value.toLowerCase()];
        const finalAmount = (amtVal * rate).toFixed(2);

        // Display the conversion result
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        // Handle fetch errors
        msg.innerText = "Error fetching exchange rate. Please try again.";
        console.error(error);
    }
};

// Function to update the flag next to the dropdown
const updateFlag = (element) => {
    const currCode = element.value;
    const countryCode = countryList[currCode];
    const imgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    const img = element.parentElement.querySelector("img");
    img.src = imgSrc;
};

// Event listener for the button
btn.addEventListener("click", (evt) => {
    evt.preventDefault(); // Prevent form submission
    updateExchangeRate(); // Fetch and update exchange rate
});

// Update exchange rate on page load
window.addEventListener("load", () => {
    updateExchangeRate();
});