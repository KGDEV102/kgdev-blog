import "./Pagination.css"
function Pagination({ currentPage, totalPages, onPageChange }) {
    function getPageNumbers(currentPage, totalPages) {
        const siblingCount = 1;
        const boundaryCount = 1;
        const totalVisibleNumbers = siblingCount * 2 + 3 + boundaryCount * 2; // 7 nếu sibling = 1, boundary = 1

        if (totalPages <= totalVisibleNumbers) {
            // Trả về toàn bộ nếu số trang ít
            return [...Array(totalPages).keys()].map((x) => x + 1);
        }

        const pages = [];

        const leftSiblingStart = Math.max(
            currentPage - siblingCount,
            boundaryCount + 2
        );
        const rightSiblingEnd = Math.min(
            currentPage + siblingCount,
            totalPages - boundaryCount - 1
        );

        // 1. Các trang đầu tiên
        for (let i = 1; i <= boundaryCount; i++) {
            pages.push(i);
        }

        // 2. '...' bên trái
        if (leftSiblingStart > boundaryCount + 2) {
            pages.push("...");
        } else if (leftSiblingStart === boundaryCount + 2) {
            pages.push(boundaryCount + 1);
        }

        // 3. Các trang chính giữa
        for (let i = leftSiblingStart; i <= rightSiblingEnd; i++) {
            pages.push(i);
        }

        // 4. '...' bên phải
        if (rightSiblingEnd < totalPages - boundaryCount - 1) {
            pages.push("...");
        } else if (rightSiblingEnd === totalPages - boundaryCount - 1) {
            pages.push(totalPages - boundaryCount);
        }

        // 5. Các trang cuối
        for (let i = totalPages - boundaryCount + 1; i <= totalPages; i++) {
            pages.push(i);
        }
    
        return pages;
    }
    return (
      <div className="paginations">
        <button
          className={currentPage === 1 ? "disable" : ""}
            onClick={()=>onPageChange(currentPage - 1)}
        >
          «
        </button>
        {getPageNumbers(currentPage, totalPages).map((number) => (
          <button
            key={number}
            onClick={() => {
              if (typeof number === "number") {
                onPageChange(number);
              }
            }}
            className={number === currentPage ? "active" : "" ? "dots" : ""}
          >
            {typeof number === "number" ? number : "..."}
          </button>
        ))}
        <button
          className={currentPage === totalPages ? "disable" : ""}
          onClick={() => {
              onPageChange(currentPage + 1);
          }}
        >
          »
        </button>
      </div>
    );
}
export default Pagination;