import React from 'react';

export default function Pagination({ currentPage, totalPages, paginate }) {
    return (
        <div className="pagination">

            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className='prev'>Previous</button>
            {[...Array(totalPages).keys()].map(page => (
                <button key={page + 1} onClick={() => paginate(page + 1)} className={currentPage === page + 1 ? 'active' : ''}>
                    {page + 1}
                </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className='next'>Next</button>
        </div>
    );
} 
