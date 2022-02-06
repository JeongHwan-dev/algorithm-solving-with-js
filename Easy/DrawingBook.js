// Solution 1
function pageCount(n, p) {
  const book = [];
  const pages = Array.from({ length: n + 1 }, (_, index) => index);

  for (let i = 0; i < pages.length; i += 2) {
    book.push(pages.slice(i, i + 2));
  }

  const totalPageCount = book.length;
  const targetPageIndex = book.findIndex((page) => page.includes(p));

  return Math.min(targetPageIndex, totalPageCount - targetPageIndex - 1);
}
