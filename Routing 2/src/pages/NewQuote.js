import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm' 

const NewQuote = () => {
  const addQuoteFormHandler = quoteData => {
    console.log(quoteData)
  }
  return (
    <QuoteForm onAddQuote={addQuoteFormHandler}/>
  )
}

export default NewQuote