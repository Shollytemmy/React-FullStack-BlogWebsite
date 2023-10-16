import { useParams } from "react-router-dom"

const ArticlePage = () => {
  const {articleId} = useParams()
  return (
    <div>
      <p>This is the Article Page with the article id: {articleId}</p>
      
    </div>
  )
}

export default ArticlePage
