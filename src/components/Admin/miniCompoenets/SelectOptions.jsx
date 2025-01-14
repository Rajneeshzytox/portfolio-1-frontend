// import axios from "axios";
import { useState } from "react";


// --------------- Selected Options div container component---------------------\
const SelectedOptionContainer = ({
    selectedOptions,
    removeSelect,
}) => {
    return (
        <>
        
        <div className="flex flex-wrap gap-2">
                    {
                        selectedOptions &&
                        selectedOptions.map((option) => (
                            <span 
                                key={option.id}
                                onClick={()=> removeSelect(option)}
                                className="cursor-pointer badge"
                            >
                                {option.name}
                            </span>
                        ))
                    }
                    {/* if no options selected */}
                    {selectedOptions.length === 0 && <p>No option selected</p>}
                </div>
        </>
    )
}


// --------------- option div container component---------------------\
const OptionsContainerComponent = ({
    inputValue, // state
    filterOptions, // array
    selectOption, // function
    IsSeleted, // function
    createNewOption, // function

}) => {

    return (
        <>
        { 
            <div className="overflow-y-scroll max-h-32 w-max">
                <div className="flex flex-col sm:min-w-52 min-w-40">
                    {
                        filterOptions.length > 0 ?
                        // if filter tags is not empty
                        filterOptions.map((option) => (
                            <span 
                                key={option.id} 
                                className="sm:min-w-52 min-w-40 cursor-pointer badge"
                                onClick={() => selectOption(option)}

                            >
                                {option.name}
                            </span>
                        ))
                        : /* if filter options are none */
                            IsSeleted(inputValue) ?
                                <p>{inputValue} is selected already</p>
                            :
                            inputValue &&
                            <p onClick={() => createNewOption(inputValue)}>
                                create new option <span className="badge">{inputValue}</span>
                            </p>
                    }
                    
                </div>
            </div>
        }
        </>
    )
}


// ---------------- MAIN COMPONENT -------------------------\
// send data format : data_format_send = [1,2]
 
export default function SelectOptionsComponent({
    options,
    selectedOptions,
    setSelectedOptons,
    single,
    createOption,
    loadOption,
}){
    if(!(options)){
        return(
            <p>no data options selectedOptions, setSelectedOptons</p>
        )
    }  

    // if true then display all options OptionContainer  
    const [isActive, setIsActive] = useState();

    // search text (for filter)
    const [inputValue, setinputValue] = useState('');

    // check if object is inside array of objects
    const IsSeleted = (option) => {

        const name = typeof(option) == 'object' ? option.name.toLowerCase() : option.toLowerCase()

        const temp_filter_array = selectedOptions.filter((obj) => obj.name.toLowerCase() == name)

        if (temp_filter_array.length > 0){
            return temp_filter_array[0].name.toLowerCase().includes(name)
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
        if(single){
            setSelectedOptons([option])
        }else{
            setSelectedOptons((prev) => ([...prev, option]))
        }
    }
    // remove options (remove in selected options state)
    const removeSelect = (option) => {
        if(single){
            setSelectedOptons([])
        }else{
            setSelectedOptons((prev) => (prev.filter((obj) => obj.id != option.id)))
        }
    }


    // craete new Optiona 
    const createNewOption = async (data) =>{
        if(data){
            try{
                await createOption(JSON.stringify({name:data}));
                loadOption();
            }catch(err){
                console.log("Error while creating new options\n", err);
            }

        }
    }


    return (
        <>  
            {/* container  */}
            <div>
                {/* selected options container div*/}
                <SelectedOptionContainer 
                    selectedOptions={selectedOptions} 
                    removeSelect={removeSelect}  
                />

                {/* options container */}
                <div>
                    {/* search input */}
                    <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} placeholder="type to search options" id="optionsInputValue"/>

                    {/* options div  */}
                    {
                        inputValue &&
                        <OptionsContainerComponent 
                            inputValue={inputValue} 
                            filterOptions={filterOptions} 
                            selectOption={selectOption} 
                            IsSeleted={IsSeleted} 
                            createNewOption={createNewOption} 
                        /> 
                    }
                    
                </div>
            </div>
        </>
    )
}