//typed text
var typed = new Typed(".text", {
  strings: ["Fronted Developer", "UI/UX designer"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Progress Bar
const progressBar = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
  progressBar.forEach((bar) => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementPosition = bar.offsetTop;
    const elementHeight = bar.offsetHeight;
    const maxScroll = document.body.offsetHeight - windowHeight;

    if (scrollPosition + windowHeight > elementPosition && scrollPosition < elementPosition + elementHeight) {
      const progress = (scrollPosition / maxScroll) * 100;
      bar.style.width = `${progress}%`;
    }
  });
});


// Email and Phone Number Links
const emailLink = document.querySelector('a[href="mailto:yash@gmail.com"]');
const phoneLink = document.querySelector('a[href="tel:+1234567890"]');

emailLink.addEventListener('click', () => {
  window.location.href = 'mailto:yash@gmail.com';
});

phoneLink.addEventListener('click', () => {
  window.location.href = 'tel:+1234567890';
});


const toggleButton = document.getElementById('tt');
const navbar = document.querySelector('.nv');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Function to remove active class from all links
function removeActiveClass() {
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    link.classList.remove('active');
  });
}

// Function to add active class to the current section link
function addActiveClass(section) {
  const link = document.querySelector(`.navbar a[href="#${section}"]`);
  if (link) {
    link.classList.add('active');
  }
}

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block"; // Show button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide button
  }
};



