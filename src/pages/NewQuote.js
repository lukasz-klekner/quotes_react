import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import useHttp from '../hooks/useHttp'
import { addQuote } from '../lib/api'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const { push } = useHistory()
  const { sendRequest, status } = useHttp(addQuote)

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  }

  useEffect(() => {
    if (status === 'completed') push('/quotes')
  }, [status, push])

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote
