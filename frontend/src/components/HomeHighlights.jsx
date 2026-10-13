import "./HomeHighlights.css";

function HomeHighlights({ stories }) {
    const randomStories = stories.slice(3, 7);
    const topStories = stories.map((story, index) => ({
        ...story,
        views: 3008 - index * 257,
    }));

    return (
        <section className="home-highlights" aria-label="Khám phá truyện">
            <div className="random-stories highlight-panel">
                <div className="highlight-heading highlight-heading-random">
                    <h2>Truyện ngẫu nhiên</h2>
                </div>
                <div className="random-story-list">
                    {randomStories.map((story) => (
                        <article className="random-story" key={story.title}>
                            <a className="random-story-cover" href="#detail">
                                <img src={story.cover} alt={`Bìa truyện ${story.title}`} loading="lazy" />
                            </a>
                            <div className="random-story-info">
                                <a className="random-story-title" href="#detail">
                                    {story.title}
                                </a>
                                <span>{story.chapter}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <aside className="top-views highlight-panel">
                <div className="highlight-heading highlight-heading-views">
                    <h2>Top view: Ngày</h2>
                </div>
                <ol className="top-view-list">
                    {topStories.map((story, index) => (
                        <li className="top-view-item" key={story.title}>
                            <span className={`rank rank-${index + 1}`}>{index + 1}</span>
                            <a href="#detail" title={story.title}>{story.title}</a>
                            <span className="view-count">{story.views.toLocaleString("vi-VN")} views</span>
                        </li>
                    ))}
                </ol>
            </aside>
        </section>
    );
}

export default HomeHighlights;
