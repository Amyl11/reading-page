import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ currentUser }) {
    const menus = [
        { name: "Trang chủ", to: "/" },
        { name: "Danh sách", to: "/list" },
        { name: "Thể loại", to: "/categories" },
        { name: "TOP BXH", to: "/ranking" },
        { name: "Forum", to: "/forum" },
        { name: "VIP", to: "/vip" },
        { name: "Lịch sử", to: "/history" },
        currentUser
            ? { name: "Hồ sơ", to: "/profile" }
            : { name: "Đăng nhập", to: "/login" }
    ];

    return (
        <header className="header">
            <div className="header-top">
                <NavLink className="logo" to="/" aria-label="Reading Page - Trang chủ">
                    <span className="logo-mark" aria-hidden="true">R</span>
                    <span>Reading<span>Page</span></span>
                </NavLink>

                <form className="search-form" action="/list" method="get">
                    <label className="sr-only" htmlFor="story-search">Tìm kiếm truyện</label>
                    <input
                        id="story-search"
                        name="search"
                        type="search"
                        placeholder="Tìm kiếm truyện..."
                    />
                    <button type="submit" aria-label="Tìm kiếm">⌕</button>
                </form>
            </div>

            <nav className="nav" aria-label="Menu điều hướng">
                {menus.map((menu) => (
                    <NavLink
                        key={menu.name}
                        to={menu.to}
                        end={menu.to === "/"}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        {menu.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Header;