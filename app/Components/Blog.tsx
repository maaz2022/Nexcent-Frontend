import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
    const blogs = [
        {
            pic: '/laptop1.jpg',
            title: 'Creating Streamlined Safeguarding Processes with OneRen',
            description: 'Read more' // Changed 'Readmore' to 'Read more'
        },
        {
            pic: '/laptop2.jpg',
            title: 'What are your safeguarding responsibilities and how can you manage them?',
            description: 'Read more' // Changed 'Readmore' to 'Read more'
        },
        {
            pic: '/laptop3.jpg',
            title: 'Revamping the Membership Model with Triathlon Australia',
            description: 'Read more' // Changed 'Readmore' to 'Read more'
        },
    ]
    return (
        <section className='flex justify-center items-center flex-col p-5'>
            <h1 className='text-3xl font-bold text-[#4D4D4D]'>Caring is the new marketing</h1>
            <p className='text-[#4D4D4D] max-w-[600px] text-center mt-3'>
                The Nextcent blog is the best place to read about the latest membership insights, trends, and more. 
                See whos joining the community, read about how our community is increasing their membership income and lots more.
            </p>
            <div className='flex justify-center items-center gap-10 mt-8 flex-wrap'>
                {blogs.map((blog, index) => (
                    <div 
                        key={index} 
                        className='relative flex flex-col items-center max-w-[400px] w-full'
                    >
                        <div className='w-full mb-4 relative'>
                            <Image
                                src={blog.pic}
                                alt={blog.title}
                                layout='responsive' 
                                width={400}
                                height={250}
                                className='rounded-lg object-cover w-full h-auto'
                            />
                        </div>
                        <div className='mb-12 bg-[#F5F7FA] rounded-lg shadow-md p-4 absolute top-40 w-[90%]'>
                            <h2 className='text-xl font-semibold mt-2 text-center h-[70px]'>
                                {blog.title}
                            </h2>
                            <p className='text-2xl font-semibold text-center text-[#24C6AB] pt-6'>
                                <Link href='/'>{blog.description}</Link>
                                <MoveRight className='inline text-[#24C6AB] ml-2 font-semibold text-3xl'/>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog
