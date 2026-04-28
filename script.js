// Simple client-side visit counter for the monitoring page.
// Counts are kept in localStorage and only visible to the user themselves.

(function () {
    const KEY_COUNT = 'sm_visits';
    const KEY_FIRST = 'sm_firstVisit';
    const KEY_LAST = 'sm_lastVisit';

    const now = new Date();
    const count = (parseInt(localStorage.getItem(KEY_COUNT), 10) || 0) + 1;

    if (!localStorage.getItem(KEY_FIRST)) {
        localStorage.setItem(KEY_FIRST, now.toISOString());
    }
    localStorage.setItem(KEY_COUNT, String(count));
    localStorage.setItem(KEY_LAST, now.toISOString());

    document.addEventListener('DOMContentLoaded', function () {
        const countEl = document.getElementById('visit-count');
        const firstEl = document.getElementById('first-visit');
        const lastEl = document.getElementById('last-visit');
        const resetEl = document.getElementById('reset-visits');

        if (countEl) countEl.textContent = count;
        if (firstEl) firstEl.textContent = localStorage.getItem(KEY_FIRST) || '';
        if (lastEl) lastEl.textContent = localStorage.getItem(KEY_LAST) || '';

        if (resetEl) {
            resetEl.addEventListener('click', function () {
                localStorage.removeItem(KEY_COUNT);
                localStorage.removeItem(KEY_FIRST);
                localStorage.removeItem(KEY_LAST);
                if (countEl) countEl.textContent = '0';
                if (firstEl) firstEl.textContent = '';
                if (lastEl) lastEl.textContent = '';
            });
        }
    });
})();
