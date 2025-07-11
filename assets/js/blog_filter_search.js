document.addEventListener('DOMContentLoaded', function() {
    const filterButtonsContainer = document.getElementById('blog-filter-buttons');
    const searchInput = document.getElementById('blog-search-input');
    const blogCards = document.querySelectorAll('.blog-card');

    // Debug: Log what we found
    console.log('Filter/Search Debug Info:');
    console.log('- Blog cards found:', blogCards.length);
    console.log('- Filter container found:', !!filterButtonsContainer);
    console.log('- Search input found:', !!searchInput);
    
    // Debug: Log each card's category
    blogCards.forEach((card, index) => {
        console.log(`- Card ${index + 1} category:`, card.getAttribute('data-category'));
    });

    function performFilterAndSearch() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeFilter = filterButtonsContainer?.querySelector('.filter-button.active')?.getAttribute('data-filter') || 'all';

        console.log('Performing filter/search:', { searchTerm, activeFilter });

        blogCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const title = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';

            const matchesFilter = (activeFilter === 'all' || cardCategory === activeFilter);
            const matchesSearch = (searchTerm === '' || title.includes(searchTerm) || excerpt.includes(searchTerm));

            console.log('Card:', {
                category: cardCategory,
                matchesFilter,
                matchesSearch,
                shouldShow: matchesFilter && matchesSearch
            });

            if (matchesFilter && matchesSearch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (filterButtonsContainer) {
        const filterButtons = filterButtonsContainer.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Filter clicked:', this.getAttribute('data-filter'));
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                if (searchInput) searchInput.value = '';
                performFilterAndSearch();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', performFilterAndSearch);
    }
});