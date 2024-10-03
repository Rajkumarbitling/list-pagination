import React from 'react'

const Pagination = ({ paginate, handlePrev, handleNext, setCurrentPage, ...props }) => {
  return (
    <div {...props}>
        <button
            type="button"
            onClick={handlePrev}
            disabled={paginate.currentPage === 1}
          >
            Prev
        </button>
        {Array.from({ length: paginate.totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={paginate.currentPage === index + 1}
            style={{ margin: '0 5px' }}
          >
            {index + 1}
          </button>
        ))}
        <button
            type="button"
            onClick={handleNext}
            disabled={paginate.currentPage === paginate.totalPages}
        >
            Next
        </button>
    </div>
  )
}

export default Pagination