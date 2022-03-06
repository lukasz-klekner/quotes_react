import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const { push } = useHistory()

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)

    push('/quotes')
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote
