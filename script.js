const startYear = 2025;
const currentYear = new Date().getFullYear();

const y1 = document.getElementById('year');
const y2 = document.getElementById('year2');

if (y1) y1.textContent = String(startYear);
if (y2) y2.textContent = String(currentYear);

const search = document.getElementById('glossarySearch');
if (search) {
  const items = Array.from(document.querySelectorAll('[data-glossary-item]'));
  search.addEventListener('input', () => {
    const q = search.value.toLowerCase().trim();
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.classList.toggle('d-none', q.length > 0 && !text.includes(q));
    });
  });
}
