import './Main.css'
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
    <main className="main">
      <h2>the</h2>
      <h1>teeny tiny blog</h1>
      {topics.map((topic, i) =>
        <section className='main__sections'>
          <BlogSection posts={posts} tagValue={topic} />
        </section>
      )}
    </main>

  );
}

export default Main