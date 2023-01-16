import { IPosts } from '../../Types/Interfaces/Interfaces'
import './Card.css'

interface ICard {
  post: IPosts
}

const Card = ({ post }: ICard) => {
  
  return (
      <article className='card'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className='card__detail-wrap'>
          <span>{post.reactions}</span>
          <div className='card__detail__tag-wrap'>
            {post.tags?.map((tag, i) => <span key={i}>{tag}</span>)}
          </div>
        </div>
      </article>
  )
}

export default Card