import Header from "../components/Header";
import List from "../components/List";

const stories = [
    {
        title: "Những trang sách mùa hạ",
        chapter: "Chương 12",
        author: "Romance",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Thành phố sau màn mưa",
        chapter: "Chương 08",
        author: "Drama",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Khu vườn của những vì sao",
        chapter: "Chương 21",
        author: "Fantasy",
        cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Nhật ký người du hành",
        chapter: "Chương 05",
        author: "Adventure",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Lời hứa dưới ánh trăng",
        chapter: "Chương 17",
        author: "Romance",
        cover: "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Bản đồ của ký ức",
        chapter: "Chương 03",
        author: "Mystery",
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Mật mã trong thư viện",
        chapter: "Chương 14",
        author: "Mystery",
        cover: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Căn nhà bên bờ biển",
        chapter: "Chương 09",
        author: "Drama",
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Ngày mai sẽ có nắng",
        chapter: "Chương 18",
        author: "Romance",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85",
    },
    {
        title: "Qua miền ký ức",
        chapter: "Chương 06",
        author: "Adventure",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=85",
    },
];

function Stories() {
    return (
        <div className="site-shell">
            <Header />
            <main className="content">
                <List title="Danh sách truyện" stories={stories} />
            </main>
        </div>

    )
}

export default Stories;