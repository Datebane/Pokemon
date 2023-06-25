import React from "react";
import "./style.css";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];
  const maxVisibleButtons = 3; // Максимальна кількість видимих кнопок пагінації
  const ellipsis = "...";

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    if (pageNumbers.length <= maxVisibleButtons) {
      // Якщо загальна кількість сторінок менша або рівна максимальній кількості видимих кнопок,
      // відображаємо всі кнопки пагінації
      return pageNumbers.map((number) => (
        <li key={number} className="item">
          <a
            onClick={() => paginate(number)}
            href="#"
            className={`link ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </a>
        </li>
      ));
    } else {
      // Інакше, відображаємо кнопки пагінації з три крапками посередині
      const halfMaxVisibleButtons = Math.floor(maxVisibleButtons / 2);
      const startPage =
        currentPage <= halfMaxVisibleButtons
          ? 1
          : currentPage - halfMaxVisibleButtons;
      const endPage =
        currentPage + halfMaxVisibleButtons > pageNumbers.length
          ? pageNumbers.length
          : currentPage + halfMaxVisibleButtons;

      const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

      return (
        <>
          {startPage > 1 && (
            <>
              <li className="item">
                <a
                  onClick={() => paginate(1)}
                  href="#"
                  className={`link ${currentPage === 1 ? "active" : ""}`}
                >
                  1
                </a>
              </li>
              <li className="item">
                <span className="ellipsis">{ellipsis}</span>
              </li>
            </>
          )}
          {visiblePageNumbers.map((number) => (
            <li key={number} className="item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className={`link ${currentPage === number ? "active" : ""}`}
              >
                {number}
              </a>
            </li>
          ))}
          {endPage < pageNumbers.length && (
            <>
              <li className="item">
                <span className="ellipsis">{ellipsis}</span>
              </li>
              <li className="item">
                <a
                  onClick={() => paginate(pageNumbers.length)}
                  href="#"
                  className={`link ${
                    currentPage === pageNumbers.length ? "active" : ""
                  }`}
                >
                  {pageNumbers.length}
                </a>
              </li>
            </>
          )}
        </>
      );
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="bib">
      <ul className="pagination">
        <li className="item">
          <a
            onClick={goToPreviousPage}
            href="#"
            className={`link ${currentPage === 1 ? "disabled" : ""}`}
            disabled={currentPage === 1}
          >
            Back
          </a>
        </li>
        {renderPageNumbers()}
        <li className="item">
          <a
            onClick={goToNextPage}
            href="#"
            className={`link ${
              currentPage === Math.ceil(totalPosts / postsPerPage)
                ? "disabled"
                : ""
            }`}
            disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

