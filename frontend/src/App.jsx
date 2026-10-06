import { useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StoryCard from "./components/StoryCard";

const stories = [
  {
    title: "Những trang sách mùa hạ",
    chapter: "Chương 12",
    category: "Romance",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85",
    accent: "#d76b4d",
  },
  {
    title: "Thành phố sau màn mưa",
    chapter: "Chương 08",
    category: "Drama",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85",
    accent: "#4c8a8c",
  },
  {
    title: "Khu vườn của những vì sao",
    chapter: "Chương 21",
    category: "Fantasy",
    cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?auto=format&fit=crop&w=700&q=85",
    accent: "#7b6bb1",
  },
  {
    title: "Nhật ký người du hành",
    chapter: "Chương 05",
    category: "Adventure",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=85",
    accent: "#ba8751",
  },
  {
    title: "Lời hứa dưới ánh trăng",
    chapter: "Chương 17",
    category: "Romance",
    cover: "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=700&q=85",
    accent: "#a45c72",
  },
  {
    title: "Bản đồ của ký ức",
    chapter: "Chương 03",
    category: "Mystery",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=85",
    accent: "#657d9b",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return stories;
    }

    return stories.filter((story) =>
      `${story.title} ${story.category}`.toLowerCase().includes(normalizedSearch),
    );
  }, [searchTerm]);

  return (
    <div className="site-shell">
      <Header onSearch={setSearchTerm} />

      <main className="content">
        <section className="section-panel featured-panel">
          <div className="section-heading featured-heading">
            <h1>Truyện nổi bật</h1>
            <a href="#latest">Xem thêm <span aria-hidden="true">▼</span></a>
          </div>
          <div className="story-list featured-list">
            {stories.slice(0, 6).map((story) => (
              <StoryCard key={story.title} {...story} />
            ))}
          </div>
        </section>

        <aside className="notice" aria-label="Thông báo">
          <strong>✓ Có thể bạn chưa biết:</strong> Bạn chỉ tốn vài phút để đọc một truyện,
          nhưng người dịch đã tốn hàng giờ. Hãy đăng ký và ủng hộ các tác giả nhé.
          <a href="#register">Đăng ký / Đăng nhập</a>
        </aside>

        <section id="latest" className="section-panel latest-panel">
          <div className="section-heading latest-heading">
            <h2>Mới cập nhật <a href="#latest">| Xem thêm ▼</a></h2>
            <div className="pagination" aria-label="Phân trang">
              <button type="button" aria-label="Trang trước">‹</button>
              <span>Trang 1</span>
              <button type="button" aria-label="Trang sau">›</button>
            </div>
          </div>
          <div className="story-list latest-list">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <StoryCard key={story.title} {...story} />
              ))
            ) : (
              <p className="empty-state">Không tìm thấy truyện phù hợp.</p>
            )}
          </div>
        </section>

        <footer className="site-footer">
          <span>Reading Page</span>
          <span>Đọc điều bạn yêu thích mỗi ngày.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;