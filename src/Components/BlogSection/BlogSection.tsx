import { useState } from 'react'
import { IPosts } from '../../Types/Interfaces/Interfaces'
import Card from '../Card/Card'
import React, { useContext } from 'react';
import PostsContext from '../../context/PostsContext';


interface IBlogSection {
  tagValue: string
}

const BlogSection = ({ tagValue }: IBlogSection) => {
  const { posts } = useContext(PostsContext);
  const [isHidden, setIsHidden] = useState(false)
  const filteredPostByTag = posts.filter((post => post.tags?.includes(tagValue.toLowerCase())));
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setIsHidden((prev) => !prev)

  return (
    <section id={tagValue} className='mt-8 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
      <div className={' flex border bg-zinc-100 border-neutral-300 cursor-pointer md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px] bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-200 rounded-t-lg'} onClick={handleToggle}>
        <h3 className='ml-2 text-xl'>{tagValue}</h3>
        {isHidden ? <span className='ml-auto mr-2 '>◁</span > : <span className='ml-auto mr-2'>▽</span>}
      </div>
      {isHidden ? <></> :
        <section className=' md:grid grid-cols-2 gap-5 xl:grid-cols-3 bg-neutral-300 p-4  rounded-b-sm shadow-xl'>
          {filteredPostByTag.map((post, i) => <Card key={i} post={post} />)}
        </section>}
    </section>
  )
}

export default BlogSection