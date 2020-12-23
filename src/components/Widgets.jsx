import InfoIcon from "@material-ui/icons/Info";
import "../styles/Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("The fate of JQUERY", "Top News - 965 readers")}
      {newsArticle("CORONAVIRUS STRIKES USA", "Top News - 1765 readers")}
      {newsArticle(
        "Tesla stocks doubled overnight",
        "Top News - 12765 readers"
      )}
      {newsArticle(
        "Scientists predict warmer winters in Russia, German chancellor says: 'Its our chance'",
        "Top News - 855 readers"
      )}
    </div>
  );
}
