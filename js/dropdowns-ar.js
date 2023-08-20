// Array of country names

const countries4 = ["أفغانستان", "ألبانيا", "الجزائر", "أندورا", "أنغولا", "أنتيغوا وبربودا",
    "الأرجنتين", "أرمينيا", "أستراليا", "النمسا", "أذربيجان", "جزر البهاما", "البحرين",
    "بنغلاديش", "بربادوس", "روسيا البيضاء", "بلجيكا", "بليز", "بنين", "بوتان", "بوليفيا",
    "البوسنة والهرسك", "بوتسوانا", "البرازيل", "بروناي", "بلغاريا", "بوركينا فاسو", "بوروندي",
    "كابو فيردي", "كمبوديا", "الكاميرون", "كندا", "جمهورية أفريقيا الوسطى", "تشاد", "تشيلي",
    "الصين", "كولومبيا", "جزر القمر", "جمهورية الكونغو (برازافيل)", "جمهورية الكونغو (كينشاسا)",
    "كوستاريكا", "ساحل العاج", "كرواتيا", "كوبا", "قبرص", "جمهورية التشيك", "الدنمارك", "جيبوتي",
    "دومينيكا", "جمهورية الدومينيكان", "الإكوادور", "مصر", "السلفادور", "غينيا الاستوائية",
    "إريتريا", "استونيا", "إسواتيني (سوازيلاند)", "إثيوبيا", "فيجي", "فنلندا", "فرنسا", "الغابون",
    "غامبيا", "جورجيا", "ألمانيا", "غانا", "اليونان", "غرينادا", "غواتيمالا", "غينيا", "غينيا بيساو",
    "غيانا", "هايتي", "الكرسي الرسولي (الفاتيكان)", "هندوراس", "هنغاريا", "آيسلندا", "الهند", "إندونيسيا",
    "إيران", "العراق", "أيرلندا", "إسرائيل", "إيطاليا", "جامايكا", "اليابان", "الأردن",
    "كازاخستان", "كينيا", "كيريباتي", "كوريا الشمالية", "كوريا الجنوبية", "كوسوفو", "الكويت",
    "قيرغيزستان", "لاوس", "لاتفيا", "لبنان", "ليسوتو", "ليبيريا", "ليبيا", "ليختنشتاين", "ليتوانيا",
    "لوكسمبورغ", "مدغشقر", "مالاوي", "ماليزيا", "جزر المالديف", "مالي", "مالطا", "جزر مارشال",
    "موريتانيا", "موريشيوس", "المكسيك", "مايكرونيزيا", "مولدوفا", "موناكو", "منغوليا", "الجبل الأسود",
    "المغرب", "موزمبيق", "ميانمار (بورما)", "ناميبيا", "ناورو", "نيبال", "هولندا", "نيوزيلندا",
    "نيكاراغوا", "النيجر", "نيجيريا", "مقدونيا الشمالية", "النرويج", "عمان", "باكستان", "بالاو",
    "دولة فلسطين", "بنما", "بابوا غينيا الجديدة", "باراغواي", "بيرو", "الفلبين", "بولندا", "البرتغال",
    "قطر", "رومانيا", "روسيا", "رواندا", "سان كيتس ونيفيس", "سان لوسيا", "سان فينسنت والغرينادين",
    "ساموا", "سان مارينو", "ساو تومي وبرينسيب", "المملكة العربية السعودية", "السنغال", "صربيا", "سيشل",
    "سيراليون", "سنغافورة", "سلوفاكيا", "سلوفينيا", "جزر سليمان", "الصومال", "جنوب أفريقيا", "جنوب السودان",
    "إسبانيا", "سريلانكا", "السودان", "سوريا", "تايوان", "طاجيكستان", "تنزانيا", "تايلاند", "تيمور الشرقية",
    "توجو", "تونغا", "ترينيداد وتوباغو", "تونس", "تركيا", "تركمانستان", "توفالو", "أوغندا", "أوكرانيا",
    "الإمارات العربية المتحدة", "المملكة المتحدة", "الولايات المتحدة الأمريكية", "أوروغواي", "أوزبكستان",
    "فانواتو", "فنزويلا", "فيتنام", "اليمن", "زامبيا", "زيمبابوي"];


function populateCountries4() {
    const countryDropdown = document.querySelector('select[name="country4"]');
    countries4.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with country options
populateCountries4();


function populateCountries5() {
    const countryDropdown = document.querySelector('select[name="country5"]');
    countries4.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with country options
populateCountries5();



function populateCountries6() {
    const countryDropdown = document.querySelector('select[name="country6"]');
    countries4.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with country options
populateCountries6();


const nationalities2 = [
    "أفغاني", "ألباني", "جزائري", "أندوري", "أنغولي", "أنتيغواني", "بربودي", "أرجنتيني", "أرميني", "أسترالي", "نمساوي",
    "أذربيجاني", "باهامي", "بحريني", "بنغلاديشي", "بربادوسي", "بيلاروسي", "بلجيكي", "بليزي", "بنيني", "بوتاني", "بوليفي",
    "بوسني هرسكي", "بوتسواني", "برازيلي", "بروناي", "بلغاري", "بوركينابي", "بوروندي", "كابو فردياني", "كمبودي", "كاميروني", "كندي",
    "أفريقي وسطى", "تشادي", "تشيلي", "صيني", "كولومبي", "جزر القمري", "كونغولي", "كونغولي", "كوستاريكي", "إيفواري", "كرواتي", "كوبي",
    "قبرصي", "تشيكي", "دنماركي", "جيبوتي", "دومينيكاني", "دومينيكاني", "إكوادوري", "مصري", "سلفادوري", "غيني الاستوائي", "إريتري",
    "إستوني", "سوازي", "إثيوبي", "فيجي", "فنلندي", "فرنسي", "غابوني", "غامبي", "جورجي", "ألماني", "غاني", "يوناني", "غرينادي",
    "غواتيمالي", "غيني", "بيساو غيني", "غياني", "هايتي", "الكرسي الرسولي", "هندي", "إندونيسي", "إيراني", "عراقي", "إيرلندي", "إسرائيلي",
    "إيطالي", "جامايكي", "ياباني", "أردني", "كازاخستاني", "كيني", "إي-كيريباتي", "كوري شمالي", "كوري جنوبي", "كوسوفي", "كويتي",
    "قيرغيزي", "لاوسي", "لاتفي", "لبناني", "موسوثو", "ليبيري", "ليبي", "ليختنشتايني", "ليتواني", "لوكسمبورغي", "مدغشقري", "مالاوي",
    "ماليزي", "مالديفي", "مالي", "مالطي", "مارشالي", "موريتاني", "موريشيوسي", "مكسيكي", "ميكرونيزي", "مولدوفي", "موناكي", "منغولي",
    "المنتي نيغرين", "مغربي", "موزمبيقي", "بورمي", "ناميبي", "ناورو", "نيبالي", "هولندي", "نيوزيلندي", "نيكاراغوي", "نيجري", "نيجيري",
    "مقدوني", "نرويجي", "عماني", "باكستاني", "بالاوي", "فلسطيني", "بنمي", "بابوا غينيا الجديدة", "باراغوياني", "بيروفي", "فيليبيني",
    "فيليبينية", "بولندي", "برتغالي", "قطري", "روماني", "روسي", "رواندي", "كيتي ونيفيسي", "لوسياني", "فينسنتي", "ساموا", "ساماري",
    "سان تومينيز", "سعودي", "سنغالي", "صربي", "سيشيلي", "سيراليوني", "سنغافوري", "سلوفاكي", "سلوفيني", "جزر سليماني", "صومالي",
    "جنوب أفريقي", "جنوب السودان", "إسباني", "سريلانكي", "سوداني", "سوري", "تايواني", "طاجيكي", "تنزاني", "تايلاندي", "تيمور الشرقية",
    "توجولي", "تونغاني", "ترينيدادي", "توباغوني", "تونسي", "تركي", "تركماني", "توفالوي", "أوغندي", "أوكراني", "إماراتي", "بريطاني",
    "أمريكي", "أوروغواي", "أوزبكي", "ني-فانواتو", "فنزويلي", "فيتنامي", "يمني", "زامبي", "زمبيوي"
];


// Function to populate the dropdown with nationality options
function populateNationalities2() {
    const nationalityDropdown = document.querySelector('select[name="nationality-ar"]');
    nationalities2.forEach(nationality => {
        const option = document.createElement('option');
        option.value = nationality;
        option.textContent = nationality;
        nationalityDropdown.appendChild(option);
    });
}

// Call the function to populate the dropdown with nationality options
populateNationalities2();


// Array of Certificate names
const certificates = [
    "شهادة عالية",            // Higher Certificate
    "ديبلوم وطني",            // National Diploma
    "درجة البكالوريوس",      // Bachelor's Degree
    "درجة الشرف",             // Honours Degree
    "درجة الماجستير",        // Master's Degree
    "درجة الدكتوراه"          // Doctoral Degree
];


// Function to populate the dropdown with Certificate options
function populateCertificates() {
    const certificatesDropdown = document.querySelector('select[name="certificates-ar"]');
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
    "تصميم المجوهرات",                 // Jewellery Design
    "تسويق وإدارة الأزياء",            // Fashion Marketing and Management
    "تصميم الأزياء الداخلية",          // Fashion Design Interior
    "تصميم الاتصالات البصرية",         // Design Visual Communication Design
    "تصميم ألعاب الفيديو"              // Video Game Design
];


// Function to populate the dropdown with Programmes options
function populateProgrammes() {
    const programmesDropdown = document.querySelector('select[name="programmes-ar"]');
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
    "يناير", "مارس", "سبتمبر",
];


// Function to populate the dropdown with Commencing Intake options
function populateCommencings() {
    const commencingDropdown = document.querySelector('select[name="commencing-ar"]');
    commencing.forEach(commencing => {
        const option = document.createElement('option');
        option.value = commencing;
        option.textContent = commencing;
        commencingDropdown.appendChild(option);
    });
}


// Call the function to populate the dropdown with Commencing Intake options
populateCommencings();

