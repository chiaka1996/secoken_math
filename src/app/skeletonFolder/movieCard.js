import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import css from "./movieCard.module.css";

const skeletonCard = ({ num }) => {
  const number = parseInt(num, 10);
  const arr = Array(number).fill(0);

  return (
    <div className={css.skeleton}>
      {arr.map((_, index) => (
        <div className={css.house} key={index}>
          <div className={css.imageCover}>
            <Skeleton height={400} />
          </div>

          <div className={css.description}>
            <Skeleton count={3} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default skeletonCard;