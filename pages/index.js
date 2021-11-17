import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services'

const posts = [
  { title: 'React Testing ', excerpt: 'Learn React Testing ' },
  { title: 'React with Tailwind ', excerpt: 'Learn React with Tailwind ' },
  
];

export default function Home({posts}) {
  return (
    <div className="container mx-auto my-20 px-10 py-10 mb-8 bg-yellow-100">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-2 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-4 col-span-1'>
        {posts.map((post) => <PostCard post = {post.node} key={post.title} />)} 
        </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
    </div>
)}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}