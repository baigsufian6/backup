import React, { useEffect, useState, useCallback } from 'react';
import './Getting.css';

const GoogleMapsReviewsDisplay = () => {
  const [reviews, setReviews] = useState([]);
  const placeId = 'ChIJw1AoeQA9rjsREUtQj8DgfGM'; // Your Place ID for Google Maps
  const apiKey = 'AIzaSyA1qO--GesR7VguLZy7TU7v8RwDdCtpP64'; // Your Google Maps API Key
  const [lastFetchedReviewCount, setLastFetchedReviewCount] = useState(0);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${apiKey}`)}`
      );
      const { contents } = await response.json();
      const data = JSON.parse(contents); // Parse the proxied content

      // Log the entire data to see what you're getting
      console.log(data);

      if (data.result && data.result.reviews) {
        const latestReviews = data.result.reviews.slice(0, 3); // Get top 6 reviews
        console.log("Latest Reviews Count:", latestReviews.length); // Log the count of latest reviews
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
    // Fetch reviews on component mount
    fetchReviews();
  }, [fetchReviews]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'filled-star' : 'empty-star'}>
          ⭐
        </span>
      );
    }
    return stars;
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
                    src={review.profile_photo_url
                      ? `https://api.allorigins.win/raw?url=${encodeURIComponent(review.profile_photo_url)}`
                      : `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=random&size=40&bold=true`}
                    alt={review.author_name}
                    className="review-avatar"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=random&size=40&bold=true`;
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
