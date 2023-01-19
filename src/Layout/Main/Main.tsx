import React, { useContext, useEffect } from 'react';
import BlogSection from '../../Components/BlogSection/BlogSection';
import { topics } from '../../constants';
import PostsContext from '../../context/PostsContext';
import UsersContext from '../../context/UsersContext';
import CommentsContext from '../../context/CommentsContext';
import { fetchComments, fetchPosts, fetchUsers } from '../../Services/Utilities/fetchDataFun';
import { FaRegHandPointer } from "react-icons/fa";



const Main = () => {
  const { setPosts } = useContext(PostsContext);
  const { setUsers } = useContext(UsersContext);
  const { setComments } = useContext(CommentsContext);

  useEffect(() => {
    const fetchFun = async () => {
      const postsData = await fetchPosts()
      const userData = await fetchUsers()
      const commentsData = await fetchComments()
      setPosts(() => postsData)
      setUsers(() => userData)
      setComments(() => commentsData)
    }
    fetchFun()
  }, []);

  return (
    <main className="relative min-h-screen p-5  bg-gray-200 flex flex-col ">
      <div className='flex flex-col justify-center items-center'>
        <span className='text-3xl text-center my-3'>the</span>
        <h1 className='text-6xl text-center px-4 mb-9'>Teeny-Tiny Blog</h1>
      </div>
      <div className='mx-auto'>
        {topics.map((topic, i) =>
          <BlogSection tagValue={topic.name} />
        )}
      </div>
      <a href="#n">
        <button className='fixed bottom-20 right-1 text-5xl p-2 border rounded-3xl border-black cursor-pointer'><FaRegHandPointer /></button>
      </a>
    </main>

  );
}

export default Main