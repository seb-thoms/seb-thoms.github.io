document.addEventListener('DOMContentLoaded', function() {
    const filterButtonsContainer = document.getElementById('blog-filter-buttons');
    const searchInput = document.getElementById('blog-search-input');
    const blogCardSelector = '.blog-card-v2'; // The class for your new blog cards
    let blogCards = document.querySelectorAll(blogCardSelector); // Get all blog cards

    // Ensure elements exist before adding listeners
    if (filterButtonsContainer) {
        const filterButtons = filterButtonsContainer.querySelectorAll('.filter-button');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');

                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter blog cards
                blogCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex'; // Or 'block' if your cards are block elements by default
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();

            blogCards.forEach(card => {
                const titleElement = card.querySelector('.blog-card-title');
                const excerptElement = card.querySelector('.blog-card-excerpt');
                
                const title = titleElement ? titleElement.textContent.toLowerCase() : '';
                const excerpt = excerptElement ? excerptElement.textContent.toLowerCase() : '';

                // Check if the card is currently displayed by a filter
                const isVisibleByFilter = card.style.display !== 'none';

                if (isVisibleByFilter) { // Only search within currently filtered items
                    if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                        card.style.display = 'flex'; // Or 'block'
                    } else {
                        card.style.display = 'none';
                    }
                } else if (searchTerm === '') { 
                    // If search is cleared, re-apply active filter
                    // This requires knowing the active filter or re-clicking it.
                    // A simpler approach for now: if search is empty, and it was hidden by search, make it visible
                    // and let the filter logic (if any was active) re-hide it if necessary.
                    // This part can be tricky. For now, let's just handle search visibility.
                    const activeFilterButton = filterButtonsContainer ? filterButtonsContainer.querySelector('.filter-button.active') : null;
                    const activeFilterValue = activeFilterButton ? activeFilterButton.getAttribute('data-filter') : 'all';
                    const cardCategory = card.getAttribute('data-category');

                    if (activeFilterValue === 'all' || cardCategory === activeFilterValue) {
                         card.style.display = 'flex'; // Or 'block'
                    } else {
                        // It should remain hidden if it doesn't match the active filter
                        card.style.display = 'none';
                    }
                }
            });
        });
    }

    // If you had dynamic elements or expect more cards to load (e.g., pagination - not current setup),
    // you might need to re-run `blogCards = document.querySelectorAll(blogCardSelector);`
    // or use event delegation. For now, this static query is fine.
});