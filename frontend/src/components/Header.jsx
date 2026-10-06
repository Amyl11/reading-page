import { useState } from "react";
import "./Header.css";

function Header({ onSearch }) {
    const [query, setQuery] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSearch(query);
    }

    return (
        <header className="header">
            <div className="header-top">
                <a className="logo" href="/" aria-label="Reading Page - Trang chủ">
                    <span className="logo-mark" aria-hidden="true">R</span>
                    <span>Reading<span>Page</span></span>
                </a>

                <form className="search-form" onSubmit={handleSubmit}>
                    <label className="sr-only" htmlFor="story-search">Tìm kiếm truyện</label>
                    <input
                        id="story-search"
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Tìm kiếm truyện..."
                    />
                    <select aria-label="Tìm theo">
                        <option>Tên truyện</option>
                        <option>Thể loại</option>
                    </select>
                    <button type="submit" aria-label="Tìm kiếm">⌕</button>
                </form>
            </div>

            <nav className="nav" aria-label="Điều hướng chính">
                <a className="active" href="/">Trang chủ</a>
                <a href="#categories">Danh sách</a>
                <a href="#categories">Thể loại</a>
                <a href="#latest">Kết hợp</a>
                <a href="#latest">Full màu</a>
                <a href="#latest">Không che</a>
                <a href="#forum">Forum</a>
                <a href="#login">Đăng nhập</a>
            </nav>
        </header>
    );
}

export default Header;