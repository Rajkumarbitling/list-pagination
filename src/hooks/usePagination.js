import { useEffect, useState } from "react";

const usePagination = (data) => {
  const [paginate, setPaginate] = useState({
    currentPage: 1,
    maxItems: 5,
    totalPages: 0,
  });
  const [slicedData, setSlicedData] = useState([]);

  const handlePrev = () => {
    if (paginate.currentPage > 1) {
      setPaginate((prev) => ({
        ...prev,
        currentPage: paginate.currentPage - 1,
      }));
    }
  };

  const handleNext = () => {
    if (paginate.currentPage < paginate.totalPages) {
      setPaginate((prev) => ({
        ...prev,
        currentPage: paginate.currentPage + 1,
      }));
    }
  };

  const setCurrentPage = (page) => {
    setPaginate((prev) => ({
      ...prev,
      currentPage: page,
    }));
  };

  const setData = () => {
    const start = (paginate.currentPage - 1) * paginate.maxItems;
    const end = paginate.currentPage * paginate.maxItems;
    const sliced = data.slice(start, end);
    setSlicedData(sliced);
  };

  useEffect(() => {
    const totalPages = data.length / paginate.maxItems || 1;
    setPaginate({ ...paginate, totalPages });
    setData();
  }, [data]);

  useEffect(() => {
    setData();
  }, [paginate.currentPage]);

  return { slicedData, handlePrev, handleNext, paginate, setCurrentPage };
};

export default usePagination;
