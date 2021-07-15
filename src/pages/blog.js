import Link from "next/link";
import Layout from "../components/Layout";
import posts from "../../public/data/posts.json";

const blog = ({ posts = [] }) => {
  return (
    <Layout title="Blog">
      <h1>BLOG</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            style={{
              border: "2px solid green",
              padding: "10px",
              margin: "20px",
              maxWidth: "500px",
            }}
          >
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.dateFormatted}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}

export default blog;
