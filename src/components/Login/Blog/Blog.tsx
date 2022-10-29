import styles from "./blog.module.css";
import HeadBlog from "./HeadBlog/HeadBlog";
import SortBlog from "./SortBlog/SortBlog";
import Review from "./Review/Review";
import { ReviewInfoObj } from "../../interfaces/interface";

interface MainProps {
   ReviewInfo: ReviewInfoObj[]
}

const Blog: React.FC<MainProps> = (props) => {
   return (
      <div className={styles.items__top}>
         <div className={styles.item}>
            <HeadBlog />
            <hr className={styles.head__bar_bottom_line} />
            <SortBlog />
         </div>
         <div className={styles.items__comment}>
            {
               props.ReviewInfo.map((item) => <Review
                  key={item.id}
                  info={item}
               />)
            }
         </div>
      </div>
   )
}


export default Blog;