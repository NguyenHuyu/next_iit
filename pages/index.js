import Link from "next/link";
import { getAllPosts } from "../client/request";

export const getStaticProps = async (ctx) => {
  const res = await getAllPosts();
  if (!res.hasError) {
    return {
      props: {
        posts: res.body,
      },
      revalidate: 5,
    };
  } else {
    return {
      props: {
        posts: [],
        res,
      },
    };
  }
};

export default function Home({ posts }) {
  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <div key={index}>
            <div className="">
              <article className="">
                <h2 className="">{post.title}</h2>
                <p className="">
                  {post.createdAt} by <a href="#">{post?.user?.name}</a>
                </p>
                <Link
                  legacyBehavior
                  href={`/post/${post._id}/${post.slug.toLocaleLowerCase()}`}
                >
                  <a>View More</a>
                </Link>
              </article>
            </div>
          </div>
        ))}
    </div>
  );
}
