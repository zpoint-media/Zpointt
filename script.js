const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  // Toggle the active class on hamburger (changes ☰ to ✕)
  hamburger.classList.toggle('active');

  // Toggle the nav menu display
  navLinks.classList.toggle('active');
});

const slider = document.getElementById('eventsSlider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 320, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -320, behavior: 'smooth' });
});



// Theme toggle logic
const themeButton = document.getElementById('theme-toggle');
let themeIndex = 0; // 0 = default, 1 = light, 2 = dark

themeButton.addEventListener('click', () => {
  document.body.classList.remove('☀', '🌑︎');
  
  themeIndex = (themeIndex + 1) % 3; // cycles through 0,1,2
  
  if (themeIndex === 1) {
    document.body.classList.add('☀');
    themeButton.textContent = "🌑︎";
  } else if (themeIndex === 2) {
    document.body.classList.add('🌑︎');
    themeButton.textContent = "🌗︎ ";
  } else {
    themeButton.textContent = "☀";
  }
});


    const form = document.getElementById("my-contact-form");
    const status = document.getElementById("form-status");
    const button = document.getElementById("submit-button");
    const endpoint = form.action;

    async function handleSubmit(event) {
        event.preventDefault(); 

        button.disabled = true;
        status.innerHTML = "Sending...";

        try {
            const data = new FormData(form);
            const response = await fetch(endpoint, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.style.color = 'green';
                status.innerHTML = "✅ Success! Your message has been sent.";
                form.reset();

                setTimeout(() => { status.innerHTML = ''; }, 5005);

            } else {
                const json = await response.json();
                const errorMessage = json.error ? json.error : "Oops! There was a problem submitting your form.";
                status.style.color = 'red';
                status.innerHTML = `❌ Error: ${errorMessage}`;
            }

        } catch (error) {
            status.style.color = 'red';
            status.innerHTML = "❌ Error: Failed to connect to the server.";
            console.error(error);
        } finally {
            button.disabled = false;
        }
    }

    form.addEventListener("submit", handleSubmit);


  