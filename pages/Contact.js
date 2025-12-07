 const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  // Toggle the active class on hamburger (changes ☰ to ✕)
  hamburger.classList.toggle('active');

  // Toggle the nav menu display
  navLinks.classList.toggle('active');
});
 
 
 const form = document.getElementById("subscribe-form");
    const status = document.getElementById("subscribe-status");
    const button = document.getElementById("subscribe-button");
    const endpoint = form.action;

    async function handleSubscribe(event) {
        event.preventDefault();

        button.disabled = true;
        status.innerHTML = "Sending...";

        try {
            const data = new FormData(form);
            const response = await fetch(endpoint, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                status.style.color = "green";
                status.innerHTML = "✅ You are now subscribed to Zpoint Sports!";
                form.reset();

                setTimeout(() => { status.innerHTML = ""; }, 5000);

            } else {
                status.style.color = "red";
                status.innerHTML = "❌ Error: Unable to subscribe.";
            }

        } catch (error) {
            status.style.color = "red";
            status.innerHTML = "❌ Network error. Please try again.";
        } finally {
            button.disabled = false;
        }
    }

    form.addEventListener("submit", handleSubscribe);