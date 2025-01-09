

function InputLabel({text, type, req}){
    return(
        <div key={text}>  
            <label htmlFor={text}>
                <span>{text}: </span>
            </label>
            <input type={type} id={text} placeholder={text} name={text} required={req} />
        </div>
    )
}

function Selectlabel({text, multi, children}){
    return(
        <div key={text}>
            <label htmlFor={text}>{text}:</label>
            <select id={text} multiple={multi} name={text}>
                {children}
            </select>
        </div>
    )
}

function Selectlabel2({text, type, options}){ 
    return (
        <>
            <div key={text}>
                <p>{text}</p>
                {
                    options.map((option) => (
                        <span key={option.id}>
                        <label htmlFor={option.name}>{option.name}:</label>
                        <input type={type} value={option.name} name={text} id={option.name}/>
                        
                        </span>
                    ))
                }
                
            </div>
        </>
    )
}


export default function TempForm() {
    const attrs = [
        {type:"text", text:"title", req:true},
        {type:"text", text:"description", req:false},
        {type:"url", text:"source", req:false},
        {type:"url", text:"demo", req:false},
        {type:"url", text:"site", req:false},
    ]
    const selectAttrs = [
        {text: "tags", multi:true, options:[{id:1, name:'html'},{id:2, name:'css'},{id:3, name:'js'},]},
        {text: "categories", multi:true, options:[{id:1, name:'fronetnd'},{id:2, name:'backend'},{id:3, name:'database'},]},
        {text: "status", multi:false, options:[{id:1, name:'pending'},{id:2, name:'woking'},{id:3, name:'completed'},]},
    ]

    const selectAttrs2 = [
        {text: "tags", type:"checkbox", options: [{id:1, name:'html'},{id:2, name:'css'},{id:3, name:'js'},]},
        {text: "categories", type:"checkbox", options:[{id:1, name:'fronetnd'},{id:2, name:'backend'},{id:3, name:'database'},]},
        {text: "status", type: "radio", options:[{id:1, name:'pending'},{id:2, name:'woking'},{id:3, name:'completed'},]},
    ]
  return (
    <>
    <h1 className="text-3xl">Project Create form</h1>
      <div className="flex flex-col my-5">
        {
            attrs.map(attr =>(
                <InputLabel key={attr.text} type={attr.type} text={attr.text} req={attr.req} />
            ))
        }

        {
            selectAttrs.map(attr =>(
                <Selectlabel key={attr.text} text={attr.text} multi={attr.multi}>
                    {
                        attr.options.map((option => <option key={option.id} value={option.name}>{option.name}</option> ))
                    }
                    
                </Selectlabel>
            ))
        }

        {
            selectAttrs2.map(attr => (
                <Selectlabel2 key={attr.text} text={attr.text} type={attr.type} options={attr.options} />
            ))
        }
  
       
      </div>
    </>
  );
}
