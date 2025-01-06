# Currency Converter

A simple web application for converting between different currencies using real-time exchange rates. This project demonstrates the use of HTML, CSS, JavaScript, and a free API for currency conversion.

---

## Features

- **Dynamic Dropdowns**: Populate dropdowns with a comprehensive list of currencies and their flags.
- **Live Exchange Rates**: Fetch real-time conversion rates between selected currencies.
- **Validation**: Ensures valid input for the conversion amount.
- **User-Friendly UI**: Clean and responsive interface.
- **Error Handling**: Displays error messages for failed API requests.

---

## Demo
![Currency Converter Screenshot](fetchapi/currencyConvertor/Screenshot 2025-01-06 224124.png)

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **API**: [Exchangerate.host](https://api.exchangerate.host)
- **Icons**: [Font Awesome](https://fontawesome.com/)

---

## How It Works

1. Users select the currencies to convert from and to using dropdown menus.
2. The app fetches exchange rates from the [Exchangerate.host](https://api.exchangerate.host) API.
3. Users input an amount, and the converted value is displayed in real-time.
4. Displays an error message if the API request fails.

---

## Prerequisites

- A modern web browser.
- An internet connection to fetch exchange rates from the API.

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/anant5441/currency-converter.git
   cd currency-converter
   ```

2. **Open the Project:**
   Open `index.html` in your preferred web browser.

3. **View the Application:**
   Start converting currencies by selecting options and entering an amount.

---

## API Integration
This project uses the [Exchangerate.host API](https://api.exchangerate.host) for fetching exchange rates. Below is an example API call used in the application:

**Convert Between Two Currencies:**
```javascript
const BASE_URL = "https://api.exchangerate.host";
const URL = `${BASE_URL}/convert?from=USD&to=INR&amount=1`;
fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data.result));
```

---

## Folder Structure

```plaintext
currency-converter/
├── index.html         # HTML structure
├── style.css          # Stylesheet
├── script.js          # Main JavaScript logic
├── codes.js           # Codes of Countries
├── README.md          # Project documentation 
```

---

## Known Issues
- Limited offline support since exchange rates require an internet connection.
- API may have slight delays for large amounts of traffic.

---

## Future Enhancements

- Add support for date-specific historical rates.
- Implement animations and transitions for a more dynamic user experience.
- Add a theme toggler for light and dark modes.

---

## License

This project is open source and available under the MIT License.

---

## Author
- Anant Bhardwaj
- For any queries or improvements, feel free to contact via email.
