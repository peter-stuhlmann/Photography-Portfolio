import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';
import NotFound from './NotFound';

export default function BlogPost() {
  const { posts } = useContext(Context);
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
