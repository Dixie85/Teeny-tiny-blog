import { IPosts } from '../../Types/Interfaces/Interfaces'
import { FcLike } from "react-icons/fc";

interface ICard {
  post: IPosts
}

const Card = ({ post }: ICard) => {

  return (
    <article className='flex flex-col h-full mb-4 p-4 border-2 border-gray-200 shadow-md shadow-gray-500 bg-zinc-50'>
      <h2 className='mb-4 text-2xl font-semiboldbold border-b-2'>{post.title}</h2>
      <p>{`${post.body.slice(0, 100)}...`}</p>
      <div className='flex mt-2 h-full items-end'>
        <div className='flex'>
          <span className='mt-1 mr-1'><FcLike /></span> 
          <span>{post.reactions}</span>
        </div>
        <div className='ml-auto'>
          {post.tags?.map((tag, i) => <span className='mr-2  shadow-md rounded bg-green-100 p-1' key={i}>{tag}</span>)}
        </div>
      </div>
    </article>
  )
}

export default Card