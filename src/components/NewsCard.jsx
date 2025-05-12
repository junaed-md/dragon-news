import { Link } from "react-router";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    thumbnail_url,
    author,
    details,
    rating,
    total_view,
  } = news;

  const formattedDate = new Date(author.published_date).toISOString().split("T")[0];

  return (
    <div className="card bg-base-100 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-xl">
          <button title="Bookmark">
            <FaRegBookmark />
          </button>
          <button title="Share">
            <FaShareAlt />
          </button>
        </div>
      </div>
      <h2 className="card-title text-lg font-semibold py-[14px] px-5">{title}</h2>

      {/* Image */}
      <figure>
        <img src={thumbnail_url} alt={title} className="w-full h-52 object-cover" />
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        
        <p className="text-sm text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news/${id}`} className="text-orange-500 font-semibold ml-1">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-base-200 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-500">
            {Array(5).fill(0).map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating.number) ? "text-orange-500" : "text-gray-300"}
              />
            ))}
            <span className="ml-1 text-black">{rating.number.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
