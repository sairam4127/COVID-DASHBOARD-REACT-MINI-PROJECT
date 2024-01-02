import './index.css'

const FaqItem = props => {
  const {answer, question} = props
  return (
    <li className="faq">
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </li>
  )
}

export default FaqItem
