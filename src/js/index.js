
//================== Theme Mode================//
// Get the toggle button and body element
const light_1 = document.getElementById("light1");
const dark_1 = document.getElementById("dark1");
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check the localStorage for saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if it exists
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.classList.add('dark-mode');
}
// Add an event listener to toggle the theme
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggleButton.classList.toggle('dark-mode');

  // Save the current theme to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    dark_1.style.display = "block";
    light_1.style.display = "none";
  } else {
    localStorage.setItem('theme', 'light');
    dark_1.style.display = "none";
    light_1.style.display = "block";
  }
});
//================== Theme Mode end================//


//nav function section=================//
const home_section = document.getElementById("home_section");
const live_stream_section = document.getElementById("live_stream_section");

function home_section1() {
  about_page.style.display = "none";
  contact_page.style.display = "none";
  home_section.style.display = "block";
  home_section.classList.add("effect1");
  live_stream_section.style.display = "none";
  profile_page.style.display = "none";
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}

function live_section1() {
  about_page.style.display = "none";
  contact_page.style.display = "none";
  live_stream_section.style.display = "block";
  live_stream_section.classList.add("effect1");
  home_section.style.display = "none";
  profile_page.style.display = "none";
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}


//settings function=================//
const settings_section_page = document.getElementById("settings_section_page");
const about_page = document.getElementById("about_page");
const contact_page = document.getElementById("contact_page");
const commandment_page = document.getElementById("commandment_page");

function commandment_page1() {
  about_page.style.display = "none";
  contact_page.style.display = "none";
  home_section.style.display = "none";
  profile_page.style.display = "none";
  live_stream_section.style.display = "none";
  commandment_page.classList.add("effect1");
  commandment_page.style.display = "block";
}

function settings_page() {
  settings_section_page.style.display = "block";
  settings_section_page.classList.add("set1");
}

function about_page1() {
  about_page.style.display = "block";
  about_page.classList.add("effect1");
  contact_page.style.display = "none";
  home_section.style.display = "none";
  profile_page.style.display = "none";
  live_stream_section.style.display = "none";
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}

function contact_page1() {
  about_page.style.display = "none";
  contact_page.style.display = "block";
  contact_page.classList.add("effect1");
  home_section.style.display = "none";
  profile_page.style.display = "none";
  live_stream_section.style.display = "none";
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}

function live_pg() {
  about_page.style.display = "none";
  contact_page.style.display = "none";
  home_section.style.display = "none";
  profile_page.style.display = "none";
  live_stream_section.style.display = "block";
  live_stream_section.classList.add("effect1");
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}

function contact_pg() {
  about_page.style.display = "none";
  contact_page.style.display = "block";
  contact_page.classList.add("effect1");
  home_section.style.display = "none";
  profile_page.style.display = "none";
  live_stream_section.style.display = "none";
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}

//settings function end=================//
function close_settings1() {
  settings_section_page.style.display = "none";
}

//nav function section end=================//

//see all btn=================//
function see_all() {
  live_stream_section.style.display = "block";
  live_stream_section.classList.add("effect1");
  home_section.style.display = "none";
  profile_page.style.display = "none";
  about_page.style.display = "none";
  contact_page.style.display = "none";
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}

//see all btn end=================//


//profile page=================//
const pro_display = document.getElementById('pro_display');
const profile_page = document.getElementById('profile_page');

function profile_edit1() {
  live_stream_section.style.display = "none";
  home_section.style.display = "none";
  profile_page.style.display = "block";
  profile_page.classList.add("effect1");
  about_page.style.display = "none";
  contact_page.style.display = "none";
  commandment_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "none";
}

//profile page end=================//


//commandment functions=================//
const command_english = document.getElementById('command_english');
const command_igbo = document.getElementById('command_igbo');


function command_english1() {
  live_stream_section.style.display = "none";
  home_section.style.display = "none";
  profile_page.style.display = "none";
  about_page.style.display = "none";
  contact_page.style.display = "none";
  command_english.style.display = "block";
  command_english.classList.add("effect1");
  command_igbo.style.display = "none";
}

function command_igbo1() {
  live_stream_section.style.display = "none";
  home_section.style.display = "none";
  profile_page.style.display = "none";
  about_page.style.display = "none";
  contact_page.style.display = "none";
  command_english.style.display = "none";
  command_igbo.style.display = "block";
  command_igbo.classList.add("effect1");
}


//commandment functions end=================//





//profile edit section=================//

// Load from localStorage on page load
window.onload = function () {
  const savedUsername = localStorage.getItem('username');
  const savedImage = localStorage.getItem('profileImage');

  if (savedUsername) {
    document.getElementById('displayUsername').textContent = savedUsername;
  }

  if (savedImage) {
    const img = document.getElementById('displayImage');
    img.src = savedImage;
    img.style.display = 'block';
  }
};

function saveProfile() {
  const username = document.getElementById('username').value;
  const imageInput = document.getElementById('imageUpload');
  const imageFile = imageInput.files[0];

  if (username) {
    localStorage.setItem('username', username);
    document.getElementById('displayUsername').textContent = username;
  }

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataUrl = e.target.result;
      localStorage.setItem('profileImage', imageDataUrl);

      const img = document.getElementById('displayImage');
      img.src = imageDataUrl;
      img.style.display = 'block';
    };
    reader.readAsDataURL(imageFile);
  }
}


//profile edit section end=================//

//================== active class================//
const navLinkEls = document.querySelectorAll(".nav_link");
navLinkEls.forEach(navLinkEls => {
  navLinkEls.addEventListener('click', () => {
    document.querySelector('.active1')?.classList.remove('active1');
    navLinkEls.classList.add('active1');
  });
});
//================== active class end================//

 