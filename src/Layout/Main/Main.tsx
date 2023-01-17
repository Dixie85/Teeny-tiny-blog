import React, { useEffect, useState } from 'react';
import db from '../../db/db.json'
import { IPosts } from '../../Types/Interfaces/Interfaces';
import BlogSection from '../../Components/BlogSection/BlogSection';
// import axios from 'axios';

const topics = ['Classic', 'Magical', 'Fiction', 'Love', 'Mystery']

const Main = () => {
  const [posts, setPosts] = useState<IPosts[]>([{} as IPosts])
  console.log(posts);


  useEffect(() => {
    const fetchFun = async () => {
      const data = db;
      // console.log(data);
      setPosts(prev => [...data.posts])
    }
    fetchFun()
  }, []);

  return (
    <main className="min-h-screen p-5  bg-gray-200 flex flex-col ">
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl text-center my-3'>the</h2>
        <h1 className='text-6xl text-center px-4 mb-9'>Teeny-Tiny Blog</h1>
      </div>
      <div className='mx-auto'>
        {topics.map((topic, i) =>
          <section className='mt-8 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
            <BlogSection posts={posts} tagValue={topic} />
          </section>
        )}
      </div>
    </main>

  );
}

export default Main