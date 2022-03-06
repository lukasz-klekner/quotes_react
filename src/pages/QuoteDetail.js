import { Fragment, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/useHttp'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const { quoteId } = useParams()
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
      <Outlet />
    </Fragment>
  )
}

export default QuoteDetail
