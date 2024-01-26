function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//scroll links//
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('nav a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust the offset as needed
                    behavior: 'smooth'
                });
            }
        });
    });
});

//Different background for Safari//
document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebarSection');

    // Check if backdrop-filter is supported
    if (CSS.supports('backdrop-filter', 'blur(10px)')) {
        sidebar.style.backdropFilter = 'blur(10px)';
        sidebar.style.backgroundColor = 'rgba(26, 26, 26, 0.25)'; // Semi-transparent black
    } else {
        // Fallback for browsers that don't support backdrop-filter
        sidebar.style.backgroundColor = '#1a1a1a'; // Solid black
    }
});