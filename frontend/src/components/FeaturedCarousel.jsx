import { useEffect, useRef, useState } from "react";
import StoryCard from "./StoryCard";
import "./FeaturedCarousel.css";

function FeaturedCarousel({ stories }) {
    const cloneCount = stories.length;
    const [featuredIndex, setFeaturedIndex] = useState(cloneCount);
    const [slideDistance, setSlideDistance] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const featuredViewportRef = useRef(null);
    const featuredTrackRef = useRef(null);

    const featuredStories = [
        ...stories,
        ...stories,
        ...stories,
    ];

    useEffect(() => {
        const viewport = featuredViewportRef.current;
        const track = featuredTrackRef.current;

        if (!viewport || !track) {
            return undefined;
        }

        function updateSlideDistance() {
            const viewportStyles = window.getComputedStyle(viewport);
            const trackStyles = window.getComputedStyle(track);
            const visibleCards = Number.parseInt(
                viewportStyles.getPropertyValue("--featured-visible"),
                10,
            ) || 6;
            const gap = Number.parseFloat(trackStyles.columnGap) || 0;
            const horizontalPadding =
                (Number.parseFloat(trackStyles.paddingLeft) || 0) +
                (Number.parseFloat(trackStyles.paddingRight) || 0);
            const cardWidth =
                (viewport.clientWidth - horizontalPadding - gap * (visibleCards - 1)) /
                visibleCards;

            viewport.style.setProperty("--featured-card-width", `${cardWidth}px`);
            setSlideDistance(cardWidth + gap);
        }

        updateSlideDistance();
        const resizeObserver = new ResizeObserver(updateSlideDistance);
        resizeObserver.observe(viewport);

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const carouselTimer = window.setInterval(() => {
            setFeaturedIndex((currentIndex) => currentIndex + 1);
        }, 7500);

        return () => window.clearInterval(carouselTimer);
    }, []);

    useEffect(() => {
        if (transitionEnabled) {
            return undefined;
        }

        const animationFrame = window.requestAnimationFrame(() => {
            setTransitionEnabled(true);
        });

        return () => window.cancelAnimationFrame(animationFrame);
    }, [transitionEnabled]);

    function moveFeatured(direction) {
        setFeaturedIndex((currentIndex) => currentIndex + direction);
    }

    function handleFeaturedTransitionEnd(event) {
        if (event.target !== event.currentTarget) {
            return;
        }

        if (featuredIndex >= cloneCount * 2) {
            setTransitionEnabled(false);
            setFeaturedIndex(cloneCount);
        }

        if (featuredIndex < cloneCount) {
            setTransitionEnabled(false);
            setFeaturedIndex(cloneCount * 2 - 1);
        }
    }

    return (
        <div className="featured-carousel" ref={featuredViewportRef}>
            <button
                className="carousel-control carousel-control-prev"
                type="button"
                aria-label="Xem truyện trước"
                onClick={() => moveFeatured(-1)}
            >
                &lt;
            </button>
            <div
                className="featured-track"
                ref={featuredTrackRef}
                onTransitionEnd={handleFeaturedTransitionEnd}
                style={{
                    transform: `translate3d(-${featuredIndex * slideDistance}px, 0, 0)`,
                    transition: transitionEnabled ? "transform .55s ease-in-out" : "none",
                }}
            >
                {featuredStories.map((story, index) => (
                    <StoryCard key={`${story.title}-${index}`} {...story} />
                ))}
            </div>
            <button
                className="carousel-control carousel-control-next"
                type="button"
                aria-label="Xem truyện tiếp theo"
                onClick={() => moveFeatured(1)}
            >
                &gt;
            </button>
        </div>
    );
}

export default FeaturedCarousel;
