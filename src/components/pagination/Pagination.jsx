import React, { Fragment, useEffect } from 'react';
import {
  Row,
  Pagination as PaginationStrap,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import './pagination.scss';

const Pagination = ({ page, setPage, pages }) => {
  let totalPages = [];
  if (pages >= 10) {
    totalPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else {
    for (let i = 1; i <= pages; i++) {
      totalPages.push(i);
    }
  }

  useEffect(() => {
    const btnFirst = document.querySelectorAll('#first');
    const btnPrev = document.querySelectorAll('#previous');
    const btnNext = document.querySelectorAll('#next');
    const btnLast = document.querySelectorAll('#last');
    if (page === 1) {
      btnFirst.forEach(el => el.classList.add('disabled'));
    } else if (page === totalPages.length) {
      btnFirst.forEach(el => el.classList.remove('disabled'));
      btnPrev.forEach(el => el.classList.remove('disabled'));
      btnNext.forEach(el => el.classList.add('disabled'));
      btnLast.forEach(el => el.classList.add('disabled'));
    } else if (page > 1) {
      btnFirst.forEach(el => el.classList.remove('disabled'));
      btnPrev.forEach(el => el.classList.remove('disabled'));
      btnNext.forEach(el => el.classList.remove('disabled'));
      btnLast.forEach(el => el.classList.remove('disabled'));
    }

    const active = document.querySelectorAll(`#nr-${page}`);
    active.forEach(el => el.classList.add('active'));
  }, [page, totalPages]);

  return (
    <Fragment>
      <Row className='justify-content-center'>
        <PaginationStrap size='sm' aria-label='Page navigation'>
          <PaginationItem id='first' className='disabled'>
            <PaginationLink first onClick={() => setPage(1)} />
          </PaginationItem>
          <PaginationItem id='previous' className='disabled'>
            <PaginationLink previous onClick={() => setPage(page - 1)} />
          </PaginationItem>
          {totalPages.map((el, idx) => {
            let id = `nr-${el}`;
            return (
              <PaginationItem key={idx} id={id}>
                <PaginationLink onClick={() => setPage(el)}>
                  {el}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem id='next'>
            <PaginationLink next onClick={() => setPage(page + 1)} />
          </PaginationItem>
          <PaginationItem id='last'>
            <PaginationLink last onClick={() => setPage(totalPages.length)} />
          </PaginationItem>
        </PaginationStrap>
      </Row>
    </Fragment>
  );
};

export default Pagination;
