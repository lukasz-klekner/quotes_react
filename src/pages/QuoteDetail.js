import { useParams } from 'react-router-dom'

const QuoteDetail = () => {
  const { quoteId } = useParams(0)
  return (
    <>
      <h1>Quote Detail Page</h1>
      {quoteId}
    </>
  )
}

export default QuoteDetail
