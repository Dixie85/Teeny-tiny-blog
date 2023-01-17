import { useState } from 'react'
import { IPosts } from '../../Types/Interfaces/Interfaces'
import Card from '../Card/Card'

interface IBlogSection {
  posts: IPosts[],
  tagValue: string
}

const BlogSection = ({ posts, tagValue }: IBlogSection) => {
  const [isHidden, setIsHidden] = useState(false)
  const filteredPostByTag = posts.filter((post => post.tags?.includes(tagValue.toLowerCase())));
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setIsHidden((prev) => !prev)

  return (
    <section className=''>
      <div className=' flex border bg-zinc-100 border-neutral-300 cursor-pointer min-w-[384px] md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]' onClick={handleToggle}>
        <h3>{tagValue}</h3>
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