import { Fragment } from 'react'
import { useParams, Route, useRouteMatch, Link } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
]

const QuoteDetail = () => {
  const { quoteId } = useParams()
  const { path, url } = useRouteMatch()

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId)

  if (!quote) {
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
