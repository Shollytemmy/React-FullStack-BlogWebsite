import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ArticlesList = ({articles}) => {
  return (
    <React.Fragment>
          {articles.map((article) => (
      <Link className="article-list-item" to={`/articles/${article.name}`} key={article.name}>
      <h3 >{article.title}</h3>
      <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
      
    </React.Fragment>
  )
}

export default ArticlesList
