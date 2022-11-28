import React from 'react';
import { products } from '../data/products';

const imgArticle = require.context('../images', true);

export const getProduct = () => {

  const grid = products.map(article => (
    <li key={ article.id }>
      { article.cost }
      <img src={imgArticle( `./${ article.name }.png`)} alt="Artículo" />
    </li>
  ))
}
