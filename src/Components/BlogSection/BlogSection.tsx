import { useState } from 'react'
import { IPosts } from '../../Types/Interfaces/Interfaces'
import Card from '../Card/Card'
import './BlogSection.css'

interface IBlogSection {
  posts: IPosts[],
  tagValue: string
}

const BlogSection = ({ posts, tagValue }: IBlogSection) => {
  const [isHidden, setIsHidden] = useState(false)
  const filteredPostByTag = posts.filter((post => post.tags?.includes(tagValue.toLowerCase())));
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setIsHidden((prev) => !prev)

  return (
    <section className='blog-section'>
      <div className='blog-section__toggle-div' onClick={handleToggle}>
        <h3>{tagValue}</h3>
        {isHidden ? <span>◁</span> : <span>▽</span>}
      </div>
      {isHidden ? <></> :
        <section className='blog-section__cards-wrapper'>
          {filteredPostByTag.map((post, i) => <Card key={i} post={post} />)}
        </section>}
    </section>
  )
}

export default BlogSection