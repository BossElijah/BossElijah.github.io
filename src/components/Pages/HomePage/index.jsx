import { Helmet } from "react-helmet";
import { calculateAge } from "../../../util/util";

const HomePage = ({ tabTitle, img, content }) => {
  content = content
    .replace("my-age", calculateAge("08.10.05"))
    .replace("micah-age", calculateAge("05.01.08"))
    .replace("josias-age", calculateAge("01.10.11"));

  return (
    <>
      <Helmet>
        <title>{tabTitle}</title>
      </Helmet>
      <div className="content">
        {img && (
          <img
            src={img.src}
            alt={img.alt}
            height="150px"
            width="150px"
            className="picture"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export default HomePage;
