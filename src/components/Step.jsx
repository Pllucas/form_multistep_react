//ICONS
import { AiOutlineUser,AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

//STYLE
import "./Step.css";

const Step = ({ currentStep }) => {
  return (
    <div className='steps'>
        <div className='step active'>
            <AiOutlineUser/>
            <p>Indetificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <AiOutlineStar/>
            <p>Avaliação</p>
        </div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <FiSend/>
            <p>Envio</p>
        </div>
    </div>
  )
}

export default Step