
document.addEventListener('DOMContentLoaded', () => {
    const rightPages = document.querySelectorAll('.right-page');
    const leftPages = document.querySelectorAll('.left-page');
    let currentPage = 0;

    function showPage(pageIndex) {
        rightPages.forEach((page, index) => {
            if (index === pageIndex) {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = 2;
                page.style.visibility = 'visible';
            } else if (index < pageIndex) {
                page.style.transform = 'rotateY(-180deg)';
                page.style.zIndex = 1;
                page.style.visibility = 'visible';
            } else {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = 0;
                page.style.visibility = 'visible';
            }
        });

        leftPages.forEach((page, index) => {
            if (index === pageIndex) {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = 2;
                page.style.visibility = 'visible';
            } else if (index < pageIndex) {
                page.style.transform = 'rotateY(-180deg)';
                page.style.zIndex = 1;
                page.style.visibility = 'visible';
            } else {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = 0;
                page.style.visibility = 'visible';
            }
        });
    }

    function nextPage() {
        if (currentPage < rightPages.length - 1) {
            currentPage++;
        } else {
            currentPage = 0;
        }
        showPage(currentPage);
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
        } else {
            currentPage = rightPages.length - 1;
        }
        showPage(currentPage);
    }

    document.getElementById('next-button').addEventListener('click', nextPage);
    document.getElementById('prev-button').addEventListener('click', prevPage);

    showPage(currentPage);
});