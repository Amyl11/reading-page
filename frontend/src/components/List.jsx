import { useEffect, useMemo, useRef, useState } from "react";
import StoryCard from "./StoryCard";
import "./List.css";

const ROWS_PER_PAGE = 4;

function List({ id, title, stories, showPagination = true }) {
    const listRef = useRef(null);
    const [columns, setColumns] = useState(5);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const list = listRef.current;

        if (!list) {
            return undefined;
        }

        function updateColumns() {
            const configuredColumns = Number.parseInt(
                window.getComputedStyle(list).getPropertyValue("--list-columns"),
                10,
            );
            const nextColumns = configuredColumns || 5;
            const pageCount = Math.max(
                1,
                Math.ceil(stories.length / (nextColumns * ROWS_PER_PAGE)),
            );

            setColumns(nextColumns);
            setPage((currentPage) => Math.min(currentPage, pageCount));
        }

        updateColumns();
        const resizeObserver = new ResizeObserver(updateColumns);
        resizeObserver.observe(list);

        return () => resizeObserver.disconnect();
    }, [stories.length]);

    const pageSize = columns * ROWS_PER_PAGE;
    const pageCount = Math.max(1, Math.ceil(stories.length / pageSize));
    const currentPage = showPagination ? Math.min(page, pageCount) : 1;
    const visibleStories = useMemo(() => {
        if (!showPagination) {
            return stories.slice(0, pageSize);
        }

        const startIndex = (currentPage - 1) * pageSize;
        return stories.slice(startIndex, startIndex + pageSize);
    }, [currentPage, pageSize, showPagination, stories]);

    function movePage(nextPage) {
        setPage(Math.min(Math.max(nextPage, 1), pageCount));
    }

    return (
        <section id={id} className="list-section">
            <div className="list-heading">
                <h2>{title}</h2>
                {showPagination && pageCount > 1 && (
                    <div className="list-pagination" aria-label={`Phân trang ${title}`}>
                        <button
                            type="button"
                            aria-label="Trang trước"
                            disabled={currentPage === 1}
                            onClick={() => movePage(currentPage - 1)}
                        >
                            ‹
                        </button>
                        <span>Trang {currentPage} / {pageCount}</span>
                        <button
                            type="button"
                            aria-label="Trang sau"
                            disabled={currentPage === pageCount}
                            onClick={() => movePage(currentPage + 1)}
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>

            <div className="list-grid" ref={listRef}>
                {visibleStories.length > 0 ? (
                    visibleStories.map((story) => (
                        <StoryCard key={story.title} {...story} />
                    ))
                ) : (
                    <p className="list-empty">NO DATABASE CONNECTION.</p>
                )}
            </div>
        </section>
    );
}

export default List;
