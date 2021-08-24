import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { meta } from '../../helpers/meta';
import home from '../../data/home';

export default function Home() {
  document.title = home.meta.title;
  meta('name', 'description', home.meta.description);

  return (
    <Fragment>
      <CategoryList>
        {home.categories.map(category => (
          <CategoryItem to={category.href}>
            <img src={category.img} alt={category.description} />
            <span>{category.title}</span>
          </CategoryItem>
        ))}
      </CategoryList>
    </Fragment>
  );
}

const CategoryList = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryItem = styled(Link)`
  flex: 0 0 calc(100% / 3 - 15px);
  text-decoration: none;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin-bottom: 35px;
  }

  &:hover img {
    filter: grayscale(0%);
  }

  img {
    width: 100%;
    filter: grayscale(100%);
    transition: 0.5s;
    background-color: #969696;
    cursor: pointer;
  }

  span {
    color: #fff;
  }
`;
