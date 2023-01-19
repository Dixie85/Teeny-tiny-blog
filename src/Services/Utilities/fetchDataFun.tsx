import axios from 'axios';
// import postsDB from '../../db/postsDB.json'
// import usersDB from '../../db/usersDB.json'
// import commentsDB from '../../db/commentsDB.json'
import { IUsers, IPosts } from '../../Types/Interfaces/Interfaces'

export const fetchPosts = async () => {
  const postsData = await axios('https://dummyjson.com/posts');
  const posts = postsData.data.posts;
  // const {posts} = postsDB;
  return [...posts]
};

export const fetchUsers = async () => {
  const usersData = await axios('https://dummyjson.com/users');
  const  usersUnfiltered  = usersData.data.users;
  const users = usersUnfiltered.reduce((resArr: IUsers[], user: IUsers) => {
    return [...resArr, {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      email: user.email
    }]
  }, [])
  return [...users]

// const { users } = usersDB;
// const usersData = users.reduce((resArr: IUsers[], user: IUsers) => {
//   return [...resArr, {
//     id: user.id,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     image: user.image,
//     email: user.email
//   }]
// }, [])
// return [...usersData]
};

export const fetchComments = async () => {
  const commentsData = await axios('https://dummyjson.com/comments');
  const comments = commentsData.data.comments
  // const { comments } = commentsDB;
  return [...comments]
};
