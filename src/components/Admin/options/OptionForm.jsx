import { useState } from "react"

export default function OptionForm({
    title,
}){
    const [inputval, setInputVal] = useState('');

    return (
        <>
        <div className="mx-auto flex sm:flex-row flex-col gap-1 px-8 justify-center sm:items-center">
            <label htmlFor="tags" className="label">
                Name:
            </label>

            <input type="text" id="tags" name="tags" value={inputval} onChange={(e)=> setInputVal(e.target.value)}/>

            {/* submit */}
            <button className="button">
                Create {title}
            </button>
        </div>
        </>
    )
}