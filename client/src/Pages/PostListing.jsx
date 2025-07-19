import React from 'react';
import PostForm from '../Components/PostListing/PostForm/PostForm';

const PostListing = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '40px' }}>
      <h2 style={{ margin: '0 16px 24px' }}>Post Your Hustle</h2>
      <PostForm />
    </div>
  );
};

export default PostListing;
