import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

export default function Blog() {
  const { posts, text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.blog.heading}</h1>
      <StyledBlog>
        {posts.map(post => (
          <li key={post.date}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${post.thumbnail})` }}
            />
            <div className="card-content">
              <h2>
                <Link to={post.slug}>{post.title}</Link>
              </h2>
              <div className="meta">
                {post.date} | {post.category}
              </div>
              <p>{post.excerpt}</p>
              <button type="button">
                <Link to={post.slug}>{text.blog.readMore}</Link>
              </button>
            </div>
          </li>
        ))}
      </StyledBlog>
    </Fragment>
  );
}

const StyledBlog = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0;

  li {
    background-color: #28282828;
    border-radius: 8px;
    box-sizing: border-box;
    flex: 0 0 100%;
    list-style-type: none;
    margin: 13px 0;

    @media screen and (min-width: 768px) {
      flex: 0 0 49.5%;
    }

    @media screen and (min-width: 1300px) {
      flex: 0 0 32.5%;
    }

    .card-image {
      background-position: center;
      background-size: cover;
      border-radius: 8px 8px 0 0;
      height: 200px;

      @media screen and (min-width: 768px) {
        height: 200px;
      }

      @media screen and (min-width: 1300px) {
        height: 150px;
      }

      img {
        height: 100%;
        width: 100%;
      }
    }

    .card-content {
      padding: 15px;

      h2 {
        margin: 0 0 10px 0;
        line-height: 1.2;

        a {
          color: #282828;
          text-decoration: none;
        }
      }

      .meta {
        font-size: 14px;
        margin-bottom: 10px;
      }

      p {
        margin: 0 0 30px;
      }

      button {
        background-image: radial-gradient(#282828, #4c4c4c);
        border: none;
        border-radius: 20px;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 16px;
        margin: 0 auto;
        max-width: 200px;
        outline: none;
        padding: 7px 12px;
        transition: 0.2s;
        width: 100%;

        a {
          color: #fff;
          text-decoration: none;
        }

        @media screen and (min-width: 768px) {
          &:hover {
            opacity: 0.75;
          }
        }
      }
    }
  }
`;
