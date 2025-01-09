import axios from "axios";
import { useState } from "react";

const data = [
    {id:1, name:'html'},
    {id:2, name:'css'},
    {id:3, name:'js'},
    {id:11, name:'c'},
    {id:21, name:'c++'},
    {id:31, name:'python'},
    {id:12, name:'django'},
    {id:22, name:'php'},
    {id:32, name:'mysql'},
]

// send data format : data_format_send = [1,2]
 
export default function SelectTags(){
    // data = data.length === 0 ? [] : data;
    const [options, setOptions] = useState(data);
    const [selectedOptions, setSelectedOptons] = useState([
        {id:1, name:'html'},     
        {id:3, name:'js'},
    ]);
    const [inputValue, setinputValue] = useState('');

    

    // check if object is inside array of objects
    const IsSeleted = (option) => {

        const name = typeof(option) == 'object' ? option.name.toLowerCase() : option.toLowerCase()

        const temp_filter_array = selectedOptions.filter((obj) => obj.name.toLowerCase() == name)

        if (temp_filter_array.length > 0){
            return temp_filter_array[0].name.includes(name)
        }
        else{
            return false
        }
    }

    // filter options as input 
    const filterOptions = options.filter((option) => 
        option.name.toLowerCase().includes(inputValue.toLocaleLowerCase()) && !IsSeleted(option)
    )


    // select options (add in selected options state)
    const selectOption = (option) => {
        setSelectedOptons((prev) => ([...prev, option]))
    }
    // remove options (remove in selected options state)
    const removeSelect = (option) => {
        
        setSelectedOptons((prev) => (prev.filter((obj) => obj.id != option.id)))
    }


    // craete new Optiona 
    const createNewOption = async (data) =>{
        // const response = 
        console.log("post req", data)
    }


    return (
        <>  
            {/* container  */}
            <div>
                {/* selected options */}
                <div className="flex flex-wrap gap-2">
                    {
                        selectedOptions.map((option) => (
                            <span 
                                key={option.id}
                                onClick={()=> removeSelect(option)}
                                className="cursor-pointer"
                            >
                                {option.name}
                            </span>
                        ))
                    }
                    {/* if no options selected */}
                    {selectedOptions.length === 0 && <p>No option selected</p>}
                </div>

                {/* options container */}
                <div>
                    {/* search input */}
                    <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} placeholder="type to search options" className="text-black" />

                    {/* options  */}
                    { inputValue &&
                        <div className="overflow-y-scroll max-h-32 w-max">
                        <div className="flex flex-col">
                            {
                                filterOptions.length > 0 ?
                                // if filter tags is not empty
                                filterOptions.map((option) => (
                                    <span 
                                        key={option.id} 
                                        className="min-w-52 cursor-pointer"
                                        onClick={() => selectOption(option)}

                                    >
                                        {option.name}
                                    </span>
                                ))
                                : /* if filter options are none */
                                    IsSeleted(inputValue) ?
                                        <p>{inputValue} is selected already</p>
                                    :
                                    <p onClick={() => createNewOption(inputValue)}>
                                        create new tags {inputValue}
                                    </p>
                            }
                           
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}