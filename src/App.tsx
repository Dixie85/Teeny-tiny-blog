import { CommentsProvider } from './context/CommentsContext';
import { PostsProvider } from './context/PostsContext';
import { UsersProvider } from './context/UsersContext';
import Header from './Layout/Header/Header';
import Main from './Layout/Main/Main';

function App() {
  return (
    <>
      <Header />
      <CommentsProvider>
        <UsersProvider>
          <PostsProvider>
            <Main />
          </PostsProvider>
        </UsersProvider>
      </CommentsProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
