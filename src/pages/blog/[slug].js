import Layout from "../../components/Layout";
import Link from 'next/link';
import posts from "../../../public/data/posts.json";

export default function BlogPost({post}) {
  return (
    <Layout title={`${post.title} | Blog`}>
      <Link href="/blog">
        <a>Go back to blog</a>
      </Link>
      <img src={post.img} alt="/" />
      <h1>{post.title}</h1>
      <p>{post.dateFormatted}</p>
      <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {


    return {
        props:{
            post: posts.find(post => post.slug === ctx.params.slug)
        }
    }
}

// generates all available blog post URLs
export async function getStaticPaths() {
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false
  }
}
