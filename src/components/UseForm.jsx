const UseForm = ({ data, updateFielHandler }) => {
  return (
    <>
    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input type="text" 
      id="name"
      name="name"
      placeholder="Digite seu nome aqui"
      required
      value={data.name || ""}
      onChange={(e) => updateFielHandler("name", e.target.value)}/>
    </div>
    <div className="form-control">
      <label htmlFor="email">E-mail:</label>
      <input type="email" 
      id="email"
      name="email"
      placeholder="Digite seu e-mail aqui"
      required
      value={data.email || ""}
      onChange={(e) => updateFielHandler("email", e.target.value)}/>
    </div>
    </>
  )
}

export default UseForm