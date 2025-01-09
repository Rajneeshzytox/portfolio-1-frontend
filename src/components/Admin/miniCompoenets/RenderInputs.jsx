import { useState } from "react";
// input tags components
function InputLabel({ text, type, req, value }) {
  const [labelValue, setlabelValue] = useState(value);
  return (
    <div key={text} className="flex flex-col gap-1">
      <label htmlFor={text} className="text-sm opacity-55">
        <span>{text}: </span>
      </label>
      <input
        type={type}
        id={text}
        placeholder={text}
        name={text}
        required={req}
        value={labelValue}
        onChange={(e) => setlabelValue(e.target.value)}
        className="bg-gray-700 py-1 px-2 rounded-md "
      />
    </div>
  );
}

const RenderInput = ({
    inputLabels,

}) => {
    return(
        <>
        <div>
            {inputLabels?
            inputLabels.map((input) => (
                <InputLabel
                key={input.text}
                type={input.type}
                text={input.text}
                req={input.req}
                value={input.value ? input.value : ""}
                />
            )): 
            <p>No input Labels</p>
        }
        </div>
        </>
    )
}

export default RenderInput;