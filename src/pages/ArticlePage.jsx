import React from "react"
import { useParams } from "react-router-dom"
import articles from "./article-content"
import Erorr404 from "./Erorr404"

const ArticlePage = () => {
  const {articleId} = useParams()
  const article = articles.find((article) => article.name === articleId)
  

  if(!article) return <Erorr404  />
  return (
    <React.Fragment>
      <h1>{article.title}</h1>

      {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      
      
    </React.Fragment>
  )
}

export default ArticlePage
