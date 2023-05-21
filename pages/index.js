import Link from "next/link";
import { getAllPosts } from "../client/request";
import Banner from "../components/Banner";

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:5000/navbar");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((i) => (
        <> {i.pointer}</>
      ))}
    </div>
  );
}
