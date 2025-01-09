import { useState } from "react"

export default function SelectInput(){
    const [selectedOptions,setSelectedOptons] = useState([])
    const [options, setOptions ] = useState([
        {id:1, name:"html", disable: false},
        {id:2, name:"css", disable: false},
        {id:3, name:"js", disable: false},
    ])

    const selectOption = (e, option_object, index) =>{
        setSelectedOptons((pre) => ([...pre,option_object]))

        const temp_list = [...options]
        temp_list[index].disable = true
        setOptions(temp_list)
        // console.log(options)
    }

    // remove selected Option
    const removeSelected = (option) =>{
        
        setSelectedOptons((pre)=> pre.filter(object=> object.id !== option.id))

        const temp_options = [...options]
        const filter_options = temp_options.filter(object=> object.id !== option.id)
        option.disable = false

        setOptions([...filter_options, option])
    }


    return (
        <div className="outline">
           {/* selected options div */}
            <div className="flex flex-wrap gap-2 py-4">
                {
                    selectedOptions.map((option)=>(
                        <span 
                            className="px-2 rounded bg-gray-600" 
                            key={option.id}
                            onClick={()=>removeSelected(option)}
                        >
                            {option.name}
                        </span>
                    ))
                }
            </div>

            {/* options display div */}
            <div className="w-max overflow-y-scroll bg-gray-600">
                <div className="flex flex-col *:border-b *:w-52">
                    {
                        options.map((option, index) =>(
                            <input type="button" 
                                key={option.id}
                                onClick={(e) => (selectOption(e, option, index))}
                                disabled={option.disable}
                                value={option.name}
                                className={`${option.disable?"bg-gray-500 text-gray-300":""}`}
                            />

                            
                        ))
                    }
                </div>
            </div>
        </div>
    )
}