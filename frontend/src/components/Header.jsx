import { useState } from "react";
import "./Header.css";

function Header({ onSearch, currentUser }) {
    const [query, setQuery] = useState("");
    const [activeMenu, setActiveMenu] = useState("Trang chủ");

    const menus = [
        { name: "Trang chủ", href: "/" },
        { name: "Danh sách", href: "#" },
        { name: "Thể loại", href: "#categories" },
        { name: "TOP BXH", href: "#ranking" },
        { name: "Forum", href: "#forum" },
        { name: "VIP", href: "#vip" },
        { name: "Lịch sử", href: "#history" },
        currentUser
            ? { name: "Hồ sơ", href: "#profile" }
            : { name: "Đăng nhập", href: "#login" }
    ];

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
                    <button type="submit" aria-label="Tìm kiếm">⌕</button>
                </form>
            </div>

            <nav className="nav" aria-label="Menu điều hướng">
                {menus.map((menu) => (
                    <a
                        key={menu.name}
                        href={menu.href}
                        className={activeMenu === menu.name ? "active" : ""}
                        onClick={() => setActiveMenu(menu.name)}
                    >
                        {menu.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;