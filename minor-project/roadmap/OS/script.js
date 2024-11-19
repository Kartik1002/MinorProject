function toggleSectionHeader(section) {
    const content = section.querySelector('.section-content');
    const arrow = section.querySelector('.arrow');
    if (content.style.display === 'block') {
        content.style.display = 'none';
        arrow.textContent = '▼';
    } else {
        content.style.display = 'block';
        arrow.textContent = '▲';
    }
}

function toggleBookmark(star, event) {
    event.stopPropagation(); // Prevents toggling the section when clicking the bookmark
    if (star.classList.contains('bookmarked')) {
        star.classList.remove('bookmarked');
    } else {
        star.classList.add('bookmarked');
    }
}


function updateProgress(checkbox, event) {
    event.stopPropagation(); // Prevents toggling the section when clicking the checkbox
    const section = checkbox.closest('.section');
    const row = checkbox.closest('tr');
    const checkboxes = section.querySelectorAll('.done-checkbox');
    const checked = section.querySelectorAll('.done-checkbox:checked');
    const progressText = section.querySelector('.progress-text');
    const progressBar = section.querySelector('.progress-bar');

    // Update progress text and bar for the section
    progressText.textContent = `${checked.length}/${checkboxes.length}`;
    const progressPercentage = (checked.length / checkboxes.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Change background color of the row when checked
    if (checkbox.checked) {
        row.querySelectorAll('td').forEach(cell => cell.classList.add('checked'));
    } else {
        row.querySelectorAll('td').forEach(cell => cell.classList.remove('checked'));
    }

    // Update overall progress bar
    updateOverallProgress();
}

function updateOverallProgress() {
    const totalCheckboxes = document.querySelectorAll('.done-checkbox').length;
    const totalChecked = document.querySelectorAll('.done-checkbox:checked').length;
    const circle = document.querySelector('.progress-ring__circle');
    const percentageText = document.querySelector('.progress-percentage');

    // Calculate the overall percentage
    const overallPercentage = (totalChecked / totalCheckboxes) * 100;
    const circumference = 2 * Math.PI * 40; // 2 * π * r where r = 40

    // Set the stroke-dashoffset to create the circular progress effect
    const offset = circumference - (overallPercentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Update the percentage text
    percentageText.textContent = `${Math.round(overallPercentage)}%`;
}









