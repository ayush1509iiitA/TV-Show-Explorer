
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data.map((item) => item.show));
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  const fixParagraphs = (summary) => {
    // Replace <br> tags with opening and closing <p> tags
    return summary.replace(/<br\s*\/?>/gi, '</p><p>');
  };

  return (
    <div className="show-list">
      <h1>TV Shows</h1>
      {shows.map((show) => (
        <div className="show-card" key={show.id}>
          <h2>{show.name}</h2>

          <table>
            <tr>
                <td className="img-align">
          {show.image && <img src={show.image.medium} alt={show.name} />}   </td>
          <td>
          <p>
            <strong>Genres:</strong> {show.genres.join(', ')}
          </p>
          <p>
            <strong>Rating:</strong> {show.rating.average || 'N/A'}
          </p>
          <p>
          <strong>Network:</strong> {show.network ? show.network.name : 'N/A'}
          </p>
          <p>
            <strong>Country:</strong> {show.network ? show.network.country.name : 'N/A'}
          </p>
          <p>
            <strong>Web Channel:</strong> {show.webChannel ? show.webChannel.name : 'N/A'}
          </p>
          <p>
            <strong>Timezone:</strong> {show.network ? show.network.country.timezone : 'N/A'}
          </p>
          <p>
            <strong>Language:</strong> {show.language || 'N/A'}
          </p>
        
          {/* <p className="sum" dangerouslySetInnerHTML={{ __html: fixParagraphs(show.summary) }} /> */}
          </td>
          </tr>
          </table>

          <Link to="/show-details" onClick={() => onSelectShow(show)}>
          <button className="view-details-btn" onClick={() => onSelectShow(show)}>
            View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
