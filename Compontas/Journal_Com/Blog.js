// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './Blog_deta';
import Getintouch from '../About_Com/Getintouch';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className='single-blog-page'>
        <div className='single-blog-contact'>
     
        </div>
        <div className='blog-com'>
          <div className='container'>
            <div className='row'>
              <div class="blog-list">
                <img src={post.imageUrl} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Getintouch /></div>
    </>
  );
};

export default BlogPost;