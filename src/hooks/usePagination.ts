import { useState } from 'react';

import { Product } from 'src/common/types';

function usePagination(listFilterProduct: Product[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil((listFilterProduct?.length || 1) / itemsPerPage);
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return listFilterProduct?.slice(begin, end);
  }
  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }
  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }
  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }
  function map(callback: (item: Product) => JSX.Element) {
    return currentData()?.map(callback);
  }

  return { next, prev, jump, currentData, currentPage, maxPage, map };
}

export default usePagination;
