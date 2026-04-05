import { Link } from "react-router-dom";
import "./Pagination.css";

function Pagination({ basePath, page, totalPages, search = "" }) {
  const suffix = search ? `?${search}` : "";
  return (
    <nav className="pagination" aria-label="Gallery pages">
      {Array.from({ length: totalPages }, (_, i) => {
        const n = i + 1;
        return (
          <Link
            key={n}
            to={`${basePath}/${n}${suffix}`}
            className={`pagination-link${n === page ? " is-current" : ""}`}
          >
            {n}
          </Link>
        );
      })}
    </nav>
  );
}

export default Pagination;
