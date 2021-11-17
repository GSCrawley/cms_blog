import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
    console.log(post);

    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="objet-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-400 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="block lg:flex test-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-4">
                    <img 
                        alt={post.author.name}
                        height="80px"
                        width="80px"
                        className="aligh-middle rounded-full"
                        src={post.author.photo.url}
                    />
                 </div>
            </div>
        </div>
    )
}

export default PostCard
