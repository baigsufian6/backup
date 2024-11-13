import React, { useEffect, useState, useCallback } from 'react';
import './Getting.css';

const GoogleMapsReviewsDisplay = () => {
  const [reviews, setReviews] = useState([]);
  const placeId = 'ChIJw1AoeQA9rjsREUtQj8DgfGM';
  const apiKey = 'AIzaSyA1qO--GesR7VguLZy7TU7v8RwDdCtpP64';
  const [lastFetchedReviewCount, setLastFetchedReviewCount] = useState(0);

  const fetchReviews = useCallback(async () => {
    if (!apiKey) {
      console.error("API Key is undefined. Please ensure it's correctly set.");
      return;
    }
    try {
      const response = await fetch(
        `https://your-server-domain.com/proxy?place_id=${placeId}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.result && data.result.reviews) {
        const latestReviews = data.result.reviews.slice(0, 3);
        setReviews(latestReviews);
        setLastFetchedReviewCount(latestReviews.length);
      } else {
        console.error("No reviews found in the response:", data);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  }, [placeId, apiKey]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'filled-star' : 'empty-star'}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="reviews-container">
      <h2>Latest Google Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="reviews-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="review-header">
                <div className="review-author">
                  <img
                    src={review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}`}
                    alt={review.author_name}
                    className="review-avatar"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}`;
                    }}
                  />
                  <span className="author-name">{review.author_name}</span>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                  <span className="rating-score">{review.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="review-text">{review.text}</div>
              <div className="review-time">
                <span>Reviewed on: {new Date(review.time * 1000).toLocaleDateString()}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
      <div className="see-more-container">
        <a
          href={`https://maps.google.com/?q=place_id:${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="see-more-btn"
        >
          See More Reviews on Google Maps
        </a>
      </div>
    </div>
  );
};

export default GoogleMapsReviewsDisplay;
