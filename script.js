const dropdownList = ["Please select", "First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
const rootElement = document.getElementById("root");

// Create dropdown select element
const selectElement = document.createElement("select");
selectElement.id = "dropdown";

// Function to update dropdown options dynamically
const updateDropdown = (selectedValue) => {
    // Clear the current dropdown options
    selectElement.innerHTML = "";

    // Rebuild the dropdown with "true" appended to the selected option
    dropdownList.forEach((value, index) => {
        const optionElement = document.createElement("option");
        optionElement.innerText = value === selectedValue ? `${value} - true` : value;
        optionElement.value = value;

        // Set the default option for "Please select"
        if (index === 0) {
            optionElement.disabled = true;
            optionElement.selected = true;
        }

        selectElement.appendChild(optionElement);
    });
};

// Event listener for dropdown changes
selectElement.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    updateDropdown(selectedValue); // Update the dropdown to reflect the selection
});

// Initialize the dropdown
updateDropdown(null);

// Append the dropdown to the root element
rootElement.appendChild(selectElement);
