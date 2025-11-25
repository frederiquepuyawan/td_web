document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Logic
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle the menu visibility
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close the menu if a link inside is clicked (for better UX)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 2. Set initial active state for the Works section tabs
    const tab2D = document.getElementById('tab-2d');
    if (tab2D) {
        // Run once on load to ensure the '2d' content is visible and the tab is styled
        // We pass the button itself to the function for easy styling
        showWorks('2d', tab2D);
    }
});

// Works Section Tab Switching Logic (Global function called by onclick in HTML)
function showWorks(category, clickedButton) {
    const works2D = document.getElementById('works-2d');
    const works3D = document.getElementById('works-3d');
    const tab2D = document.getElementById('tab-2d');
    const tab3D = document.getElementById('tab-3d');

    // 1. Handle Content Visibility
    if (category === '2d') {
        works2D.classList.remove('hidden');
        works3D.classList.add('hidden');
    } else if (category === '3d') {
        works2D.classList.add('hidden');
        works3D.classList.remove('hidden');
    }

    // 2. Handle Tab Styling (Border and Text Color)
    // Clear styling from all tabs
    [tab2D, tab3D].forEach(tab => {
        if (tab) {
            tab.classList.remove('border-green-600', 'text-green-600');
            tab.classList.add('border-transparent');
        }
    });

    // Apply active styling to the clicked tab
    if (clickedButton) {
        clickedButton.classList.add('border-green-600', 'text-green-600');
        clickedButton.classList.remove('border-transparent');
    }
}