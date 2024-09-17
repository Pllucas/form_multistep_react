//ICONS
import { GrPrevious, GrNext, GrSend } from "react-icons/gr";

//COMPONENTS
import UseForm from "./components/UseForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Step from "./components/Step";

//HOOKS
import { userForm }  from "./hooks/userForm";
import { useState } from "react";

//STYLE
import './App.css'

const formTemplate = {
  name:"",
  email:"",
  review:"",
  comment:"",
}

function App() {
  const [data,setData] = useState(formTemplate);

  const updateFielHandler = (key,value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
  <UseForm data={data} updateFielHandler={updateFielHandler} />,
   <ReviewForm data={data} updateFielHandler={updateFielHandler}/>,
   <Thanks data={data} />
  ];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = userForm(formComponents);

  return (
    <>
      <div className='app'>
        <div className='header'>
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com sua compra, utilize o formulário a baixo para avaliar o produto</p>
        </div>
        <div className='form-container'>
          <Step currentStep={currentStep}/>
          <form onSubmit={(e) =>changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className='actions'>
             
              {!isFirstStep &&(
                  <button type='button' onClick={() => changeStep(currentStep - 1)}>
                  <GrPrevious/>
                  <span>voltar</span>
                  </button>
              )}
              {!isLastStep? (
                <button type='submit'>
                <span>Avançar</span>
                <GrNext/>
                </button>):(
                  <button type='button'>
                  <span>Enviar</span>
                  <GrSend/>
                  </button>
                )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
