import "./StoryCard.css";

function StoryCard({ title, chapter, author, cover }) {
    return (
        <article className="story-card">
            <a className="story-cover" href="#reader">
                <img src={cover} alt={`Bìa truyện ${title}`} loading="lazy" />
                <span className="chapter-badge">{chapter}</span>
            </a>
            
            <div className="story-meta">
                <span className="story-category">{author}</span>
                <h3><a href="#detail">{title}</a></h3>
            </div>
        </article>
    );
}

export default StoryCard;