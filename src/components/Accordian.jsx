import React,{useState} from 'react'
import '../components/ProductDetail.css';
import lineSvg from "../assets/images/line.svg";
import addSvg from "../assets/images/add.svg";

const  Accordian =({questions, answer})=> {
    const [questionsToggle, setQuestionsToggle] = useState(false)

  return (
    <>
              <div itemScope itemType="http://schema.org/Question">
                  <div className='flex justify-between cursor-pointer' onClick={()=>setQuestionsToggle(!questionsToggle)}>
                    <div className='question-class' itemProp="name">
                     {questions}
                    </div>
                    <div className='plus-mini-icon' style={{marginTop:"80px"}} onClick={()=>setQuestionsToggle(!questionsToggle)}><img alt="accordion-icon"src={questionsToggle?lineSvg:addSvg} className={questionsToggle?'accordian-minus-class':'accordian-plus-class'}/></div>
                  </div>
                  {
                    questionsToggle && 
                    <div className='answer-class' itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer">
               <div itemProp="text">
                                {answer}
                            </div>
                  </div>
                  }
                </div>
      </>    
  )
}
export default Accordian
