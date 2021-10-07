import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = (params) => {
  const addQuoteHandler = (quoteData) => {
      console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuotes;
