const Teaser = ({ title, url, text, date }) => (
  <a href={url} target="_blank" rel="noreferrer" className="project">
    <h2>{title}</h2>
    <p>{text}</p>
    <div className="date">{date}</div>
  </a>
);

export default Teaser;
