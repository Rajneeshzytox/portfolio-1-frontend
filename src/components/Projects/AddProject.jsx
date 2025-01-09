import { createProject, fetchPOST } from "../../services/api";

import { useState } from "react";

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

function Selectlabel({ text, type, options }) {
  return (
    <div className="flex flex-col gap-1 my-1">
      <p className="capitalize opacity-50">{text}</p>
      <div key={text} className="flex flex-wrap gap-2">
        {options.map((option) => (
          <span key={option.id} className="flex gap-1">
            <label className="opacity-80" htmlFor={option.id}>{option.name}</label>
            <input type={type} value={option.name} name={text} id={option.id} />
          </span>
        ))}
      </div>
    </div>
  );
}

function RenderInputLabel({ inputLabels }) {
  return (
    <div>
      {inputLabels.map((input) => (
        <InputLabel
          key={input.text}
          type={input.type}
          text={input.text}
          req={input.req}
          value={input.value ? input.value : ""}
        />
      ))}
    </div>
  );
}
function RenderSelectLabel({ selectLabels }) {
  return (
    <div>
      {selectLabels.map((input) => (
        <Selectlabel
          key={input.text}
          text={input.text}
          type={input.type}
          options={input.options}
        />
      ))}
    </div>
  );
}


const getFormData = (data) => {
  const dataJson = {};

  data.inputLabels.map((input) => {
    dataJson[input.text] = document.getElementById(input.text).value;

    document.getElementById(input.text).value = "";
  });

  data.selectLabels.map((input) => {
    const tempArr = [];
    const elements = document.querySelectorAll(
      `input[name="${input.text}"]:checked`
    );

    elements.forEach((element) => {
      tempArr.push(Number(element.id));
      element.checked = false;
    });

    dataJson[input.text] = input.text == "status" ? tempArr[0] : tempArr;
  });

  // console.log(JSON.stringify(dataJson));
  return JSON.stringify(dataJson);
  
};

const addProject = async (postData) => {
  const res = await createProject(postData);
  // const res = await fetchPOST(postData)
  // console.log("project added Successfully !");
  return res
};

function SubmitBtn({ data }) {
  // console.log(data)
  const json_final_data = getFormData(data)
  try {
    addProject(json_final_data);
  } catch (err) {
    console.log(err.data);
  }
}

export default function AddProject({ data }) {
  return (
    <div className="grid md:grid-cols-2 m-auto md:w-[80%] md:max-w-[800px] p-4 gap-2">
      
      <RenderInputLabel inputLabels={data.inputLabels} />
      <RenderSelectLabel selectLabels={data.selectLabels} />
      
      <button className="bg-blue-700 md:col-span-2 px-3 py-1 rounded-md" onClick={()=>SubmitBtn({data})}>add</button>
      
    </div>
  );
}
