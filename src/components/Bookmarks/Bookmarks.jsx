import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-400">
      <h4 className="text-2xl text-center ml-4 mt-2 pt-4">
        <div>
          <h4 className="text-4xl">Reading Time:{readingTime}</h4>
        </div>
        BookMarked Blog:{bookmarks.length}
      </h4>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  readingTime: PropTypes.object.isRequired,
};

export default Bookmarks;
