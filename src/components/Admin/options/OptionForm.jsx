import { useState, useEffect } from "react"

export default function OptionForm({
    title, create, load, inputval, setInputVal
}){
    

    // create option function 
    const createOption = async (name) => {
        if (typeof(name) == 'string' && name.length > 0){
            const obj = {name:name.toLowerCase()};

            try{
                await create(JSON.stringify(obj));
                console.log(`created ${title}: ${name}`)
                await load()
                setInputVal("")
            }catch (err){
                console.log(`failed to create ${title}: ${name}\n`, err)
            }

        }
    }

    return (
        <>
        <div className="mx-auto flex sm:flex-row flex-col gap-1 px-8 justify-center sm:items-center">
            <label htmlFor={title} className="label">
                Name:
            </label>

            <input type="text" id={title} name={title} value={inputval} className="OptionFormInput" onChange={(e)=> setInputVal(e.target.value)}/>

            {/* submit */}
            <button className="button" onClick={()=>createOption(inputval)}>
                Create {title}
            </button>
        </div>
        </>
    )
}