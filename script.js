// Category content
const categories = {
    'hacking-tools': {
        title: 'Hacking Tools',
        items: [
            'WiFi Hacking',
            'Android Hack',
            'Hacking Tool',
            'APK Editor',
        ],
    },
    'virus-malware': {
        title: 'Virus & Malware',
        items: [
            'Delete Phone Data Apk',
            'Mobile Lock Virus Apk',
            'Virus Menu Page',
        ],
    },
    'financial-tools': {
        title: 'Financial Tools',
        items: [
            'Easy Paisa Fake Receipt',
            'Jazz Fake Receipt',
            'Opay Clone',
        ],
    },
    'social-media-messaging': {
        title: 'Social Media & Messaging',
        items: [
            'WhatsApp Spam',
            'WhatsApp Ban/Unban',
            'WhatsApp Mods',
            'Instagram Free Followers',
            'SMS Bomber',
        ],
    },
    'multimedia-entertainment': {
        title: 'Multimedia & Entertainment',
        items: [
            'Netflix Premium',
            'Movie Sites',
            'Capcut Pro',
            'YT Downloader',
        ],
    },
    'personal-security': {
        title: 'Personal & Security',
        items: [
            'Email Bomber',
            'Crack Locked Zip Apk',
            'Phishing List Codes',
            'Encryption Site',
        ],
    },
    'miscellaneous': {
        title: 'Miscellaneous',
        items: [
            'Temp Mail',
            'Android Reset Apk',
            'Bug Scripts',
        ],
    },
};

// Function to load a category
function loadCategory(category) {
    const categoryData = categories[category];
    if (!categoryData) return;

    // Update the page title
    document.getElementById('page-title').innerText = categoryData.title;

    // Display category items
    const content = document.getElementById('content');
    content.innerHTML = categoryData.items
        .map(item => `<a href="#" class="box">${item}</a>`)
        .join('');

    // Show the back button
    document.getElementById('back-button').style.display = 'block';
}

// Function to go back to the main menu
function goBack() {
    document.getElementById('page-title').innerText = 'Main Menu';
    const content = document.getElementById('content');
    content.innerHTML = document.getElementById('menu').outerHTML;

    // Hide the back button
    document.getElementById('back-button').style.display = 'none';
}
