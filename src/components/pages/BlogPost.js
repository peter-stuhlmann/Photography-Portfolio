import React, { Fragment } from 'react';
import NotFound from './NotFound';
import posts from '../../data/BlogPosts';

export default function BlogPost() {
  const slug = window.location.pathname.slice(6); // 6 = /blog/
  const post = posts.filter(post => post.slug === slug);

  if (!post[0]) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <h1>{post[0].title}</h1>
      <div>{post[0].content}</div>
    </Fragment>
  );
}
