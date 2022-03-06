import { Fragment, useEffect } from 'react'
import { useParams, Route, useRouteMatch, Link } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import useHttp from '../hooks/useHttp'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const { quoteId } = useParams()
  const { path, url } = useRouteMatch()
  const {
    status,
    error,
    data: quote,
    sendRequest,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  if (!quote.text) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
