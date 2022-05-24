import React, { useState, useEffect } from 'react';
import FormContent from "./FormContent";

export default function Form() {

  const [formContent, setFormContent] = useState<FormContent>({ text: "", radio: "", select: "" });

  useEffect(() => {
    const formContent = localStorage.getItem('form-content');
    if (formContent) {
      setFormContent(JSON.parse(formContent));
    }

  }, []);

  const saveForm = () => {
    localStorage.setItem('form-content', JSON.stringify(formContent))
  };

  const clearForm = () => {
    localStorage.removeItem('form-content')
    setFormContent({ text: "", radio: "", select: "" });
  };

  const handleChangeText = (text: string) => {
    const newFormContent = { ...formContent }
    newFormContent.text = text
    setFormContent(newFormContent)
  }

  const handleChangeRadio = (radio: string) => {
    const newFormContent = { ...formContent }
    newFormContent.radio = radio
    setFormContent(newFormContent)
  }

  const handleChangeSelect = (select: string) => {
    const newFormContent = { ...formContent }
    newFormContent.select = select
    setFormContent(newFormContent)
  }

  return (
    <div>
      <h3>Formulario {formContent?.text}</h3>
      <form>
        <label>Texto: </label>
        <br></br>
        <input type="text" id="text" name="text" onChange={(e) => handleChangeText(e.target.value)} defaultValue={formContent?.text}></input>
        <br></br>

        <label>Radio button: </label>
        <br></br>
        <label>Opcion 1</label>
        <input type="radio" id="radio" name="radio" onChange={(e) => handleChangeRadio(e.target.value)} value="radio1" checked={formContent?.radio === 'radio1'}></input>
        <br></br>
        <label>Opcion 2</label>
        <input type="radio" id="radio" name="radio" onChange={(e) => handleChangeRadio(e.target.value)} value="radio2" checked={formContent?.radio === 'radio2'}></input>
        <br></br>

        <label>Dropbox menu:</label>
        <br></br>
        <select name="select" id="select" onChange={(e) => handleChangeSelect(e.target.value)} value={formContent?.select}>
          <option value="select1">Combo 1</option>
          <option value="select2">Combo 2</option>
          <option value="select3">Combo 3</option>
        </select>
        <br></br>
        <button type="button" onClick={() => saveForm()}>Guardar</button>
        <button type="button" onClick={() => clearForm()}>Borrar</button>
      </form>
    </div>
  );
}
