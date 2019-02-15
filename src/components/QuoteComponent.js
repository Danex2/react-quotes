import React from "react";

function QuoteComponent({ quote, ...props }) {
  return (
    <React.Fragment>
      <p id="quote-text">{quote.quote}</p>
      <p id="quote-author">- {quote.author}</p>
      <div className="buttons">
        <a
          className="links"
          href={`https://twitter.com/intent/tweet?hashtags=ProgrammingQuotes&related=freecodecamp&text=${
            quote.quote
          } - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter " />
        </a>
        <a
          className="links"
          href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${
            quote.author
          }&content=${
            quote.quote
          }&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-tumblr" />
        </a>
        <button className="generator" onClick={props.generate}>
          <i class="fas fa-redo-alt" />
        </button>
      </div>
    </React.Fragment>
  );
}

export default QuoteComponent;
