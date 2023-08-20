// Array of Certificate names
const certificates = [
    "Higher Certificate", "National Diploma", "Bachelor's Degree", "Honours Degree", "Master's Degree", "Doctoral Degree",
];


// Function to populate the dropdown with Certificate options
function populateCertificates() {
    const certificatesDropdown = document.querySelector('select[name="certificates"]');
    certificates.forEach(certificates => {
        const option = document.createElement('option');
        option.value = certificates;
        option.textContent = certificates;
        certificatesDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with Certificate options
populateCertificates();


// Array of Programmes names
const programmes = [
    "Jewellery Design", "Fashion Marketing and Management", "Fashion Design Interior", "Design Visual Communication Design", "Video Game Design",
];


// Function to populate the dropdown with Programmes options
function populateProgrammes() {
    const programmesDropdown = document.querySelector('select[name="programmes"]');
    programmes.forEach(programmes => {
        const option = document.createElement('option');
        option.value = programmes;
        option.textContent = programmes;
        programmesDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with Programmes options
populateProgrammes();



// Array of Commencing Intake names
const commencing = [
    "January", "March", "September",
];


// Function to populate the dropdown with Commencing Intake options
function populateCommencings() {
    const commencingDropdown = document.querySelector('select[name="commencing"]');
    commencing.forEach(commencing => {
        const option = document.createElement('option');
        option.value = commencing;
        option.textContent = commencing;
        commencingDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with Commencing Intake options
populateCommencings();


// Array of country names
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Cote d'Ivoire",
    "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. \"Swaziland\")",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


// Function to populate the dropdown with country options
function populateCountries() {
    const countryDropdown = document.querySelector('select[name="country"]');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with country options
populateCountries();


// Function to populate the dropdown with country options
function populateCountries2() {
    const countryDropdown = document.querySelector('select[name="country2"]');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with country options
populateCountries2();



function populateCountries3() {
    const countryDropdown = document.querySelector('select[name="country3"]');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with country options
populateCountries3();

// Array of nationality names
const nationalities = [
    "Afghan", "Albanian", "Algerian", "Andorran", "Angolan", "Antiguan", "Barbudan", "Argentine", "Armenian",
    "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian",
    "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Herzegovinian", "Motswana", "Batswana", "Brazilian",
    "Bruneian", "Bulgarian", "Burkinabé", "Burundian", "Cape Verdean", "Cambodian", "Cameroonian", "Canadian",
    "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", "Congolese", "Congolese", "Costa Rican",
    "Ivorian", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican", "Dominican", "Ecuadorian",
    "Egyptian", "Salvadoran", "Equatorial Guinean", "Eritrean", "Estonian", "Swazi", "Ethiopian", "Fijian", "Finnish",
    "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean",
    "Bissau-Guinean", "Guyanese", "Haitian", "Holy See", "Honduran", "Hungarian", "Icelander", "Indian", "Indonesian",
    "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan",
    "I-Kiribati", "North Korean", "South Korean", "Kosovar", "Kuwaiti", "Kyrgyzstani", "Laotian", "Latvian", "Lebanese",
    "Mosotho", "Basotho", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Malagasy", "Malawian",
    "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian",
    "Moldovan", "Monégasque", "Mongolian", "Montenegrin", "Moroccan", "Mozambican", "Burmese", "Namibian", "Nauruan",
    "Nepali", "Dutch", "New Zealander", "Nicaraguan", "Nigerien", "Nigerian", "Macedonian", "Norwegian", "Omani",
    "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Filipino",
    "Filipina", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Kittitian", "Nevisian",
    "Saint Lucian", "Vincentian", "Samoan", "Sammarinese", "São Toméan", "Saudi Arabian", "Senegalese", "Serbian",
    "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African",
    "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swedish", "Swiss", "Syrian", "Taiwanese",
    "Tajikistani", "Tanzanian", "Thai", "East Timorese", "Togolese", "Tongan", "Trinidadian", "Tobagonian",
    "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Emirati", "British", "American", "Uruguayan",
    "Uzbekistani", "Ni-Vanuatu", "Venezuelan", "Vietnamese", "Yemeni", "Zambian", "Zimbabwean"
];


// Function to populate the dropdown with nationality options
function populateNationalities() {
    const nationalityDropdown = document.querySelector('select[name="nationality"]');
    nationalities.forEach(nationality => {
        const option = document.createElement('option');
        option.value = nationality;
        option.textContent = nationality;
        nationalityDropdown.appendChild(option);
    });
}

// Call the function to populate the dropdown with nationality options
populateNationalities();

