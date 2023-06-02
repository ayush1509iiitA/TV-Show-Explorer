import React from 'react';
import DOMPurify from 'dompurify';

const ShowDetails = ({ show }) => {
  const sanitizedSummary = DOMPurify.sanitize(show.summary);

  return (
    <div className="show-details">
      <h1>{show.name}</h1>

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
          </table> <br></br><br></br>


      <div  dangerouslySetInnerHTML={{ __html: sanitizedSummary }} />
      
    </div>
  );
};

export default ShowDetails;
