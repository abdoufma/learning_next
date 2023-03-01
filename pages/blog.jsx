// import Link from "next/link";
import dynamic from 'next/dynamic'
// import styles from "../styles/blog.module.css";
import styles from "@styles/blog.module.css" ;
import "../utils";

// import DynamicHeader from '@components/dynamicHeader';

const DynamicHeader = dynamic(() => import("../components/dynamicHeader"), {loading: () => 'Loading...'});



export default function Blog({posts}) {
  return (
    <>
      <p>Hello there</p>
      <h2 className={styles.title}>The Blog</h2>
      <DynamicHeader text={"My Dynamic Header"}/>
      {/* {posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )
      })} */}
    </>
  )
}

// export async function getStaticProps() {
//   const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
//   const {posts} = await response.json();

//   return {
//     props: { posts }
//   }
// }