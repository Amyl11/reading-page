import { Link, useLocation } from "react-router-dom";

function PagePlaceholder() {
    const location = useLocation();

    return (
        <div className="site-shell">
            <main className="content route-placeholder">
                <p className="route-placeholder-path">{location.pathname}</p>
                <h1>Trang đang được xây dựng</h1>
                <p>Nội dung của trang này sẽ được bổ sung ở bước tiếp theo.</p>
                <Link to="/">Về trang chủ</Link>
            </main>
        </div>
    );
}

export default PagePlaceholder;
