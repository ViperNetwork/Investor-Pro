// Add event listener to form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    // Add email to mailing list or send updates
    console.log(`Email address: ${email}`);
});