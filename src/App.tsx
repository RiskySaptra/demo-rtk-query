import { useSelector } from "react-redux";
import { selectPost, useGetPostsQuery } from "./_features/post/postSlice";
import "./App.css"; 
import {
  selectComments,
  useGetCommentsQuery,
} from "./_features/comment/commentSlice";

function App() {
  useGetPostsQuery();
  useGetCommentsQuery();

  return (
    <ul>
      <PostsList />
    </ul>
  );
}

export default App;


// anggap saja di page lain
const PostsList: React.FC = () => {
  const comments = useSelector(selectComments);
  const posts = useSelector(selectPost); 


  if (!posts || !comments) return;
  

  return (
    <div>
      post
      <ul> 
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      comment
      <ul>
        {comments.map((comment: any) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};
