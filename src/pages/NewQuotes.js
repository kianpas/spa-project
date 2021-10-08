import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = (params) => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
      console.log(quoteData);

      //push 히스토리에 새 페이지를 추가입력, 뒤로가기 가능
      //replace 교체, 뒤로가기 불가능, 리다이렉트 같은 것
      history.push("/quotes")
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuotes;
