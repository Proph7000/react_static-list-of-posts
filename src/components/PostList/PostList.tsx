import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Posts = {
  posts: Post[];
};

export const PostList: React.FC<Posts> = ({ posts = [] }) => (
  <div className="PostList">
    {posts.map((post) => (
      <div className="PostInfo" key={post.id}>
        <PostInfo
          title={post.title}
          user={post.user}
          body={post.body}
          comments={post.comments}
        />
      </div>
    ))}
  </div>
);
