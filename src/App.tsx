import { useSelector } from "react-redux";
import { selectPost, useGetPostsQuery } from "./_features/post/postSlice";
import "./App.css";
import { useGetCommentsQuery, useLoginMutation } from "./_features/comment/commentSlice";

function App() {
  useGetPostsQuery();
  const { data: comments, error, isLoading } = useGetCommentsQuery();
  const [login, { isLoading: loginLoading }] = useLoginMutation(); 

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <div>
      <button onClick={() => login()}>login {loginLoading ? 'loading' : 'done loading'}</button>
      post
      <ul>
        {comments?.map((comment: any) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
      <PostsList />
    </div>
  );
}

export default App;

// anggap saja di page lain
const PostsList: React.FC = () => {
  const posts = useSelector(selectPost);

  if (!posts) return;

  return (
    <div>
      comment
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
