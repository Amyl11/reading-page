import { useMemo, useState } from "react";
import "./App.css";
import FeaturedCarousel from "./components/FeaturedCarousel";
import Header from "./components/Header";
import StoryCard from "./components/StoryCard";

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

function App() {
  const [keyword, setkeyword] = useState("");

  const filteredStories = useMemo(() => {
    const normalizedSearch = keyword.trim().toLowerCase();

    if (!normalizedSearch) {
      return stories;
    }

    return stories.filter((story) =>
      `${story.title} ${story.author}`.toLowerCase().includes(normalizedSearch),
    );
  }, [keyword]);

  return (
    <div className="site-shell">
      <Header onSearch={setkeyword} />

      <main className="content">
        <section className="section-panel featured-panel">
          <div className="section-heading featured-heading">
            <h1>Truyện nổi bật</h1>
          </div>
          <FeaturedCarousel stories={stories} />
        </section>

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