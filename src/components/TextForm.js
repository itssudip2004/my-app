import React, {useState} from 'react'

   
export default function TextForm(props) {
  const handleUpperCLick=()=>{
    console.log("uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success");
  }

  const handleOnChange=(event)=>{
   // console.log("onChanged");
    setText(event.target.value);
   
  }

   const handlelowerCLick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case","success");
   }

   const wordReverse=()=>{
    let newText=text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Word Reversed","success");
   }

  

   const clear=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Cleared","success");
   }
  const [text, setText]=useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white ':'#042743'}}  >
      <h1>{props.heading} </h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'#042743'}}
        placeholder="Enter Your Text Here" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpperCLick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handlelowerCLick}>Convert to lowercase</button>
       <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
       <button className="btn btn-primary mx-2" onClick={wordReverse}>Word Reverse</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h1>Your text summary</h1>
      <p>
        {text.split(" ").length - 1} words and {text.length} characters
      </p>
      <p>{0.008 *text.split(" ").length} minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length >0?text:"enter something to preview it here"}</p>
    </div>
    </>
  
  );
    
}
