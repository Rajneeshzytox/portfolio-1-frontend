import { useState, useEffect } from "react"

// load data tags/categories/status
import { loadTags, loadCategories, loadStatus } from "./Data/api"

// load all create tags/categories/status
import { createTag, createCategories, createStatus } from "./Data/api"

// load all delete tags/categories/status
import { delTag, delCategories, delStatus } from "./Data/api"

// load all update tags/categories/status
import { updateTag, updateCategories, updateStatus } from "./Data/api"

// child compoenetst 
import RenderOptionList from "./options/RenderOptionList"



export default function Options_Admin(){
    // option form Input 
    const [inputval, setInputVal] = useState('');

    // states (tags/categories/status)
    const [tagState, setTagState] = useState([])
    const [categoriesState, setCategoriesState] = useState([])
    const [statusState, setStatusState] = useState([])

    
    // load all tags
    const loadAllTag = async () =>{
        try{
            const res = await loadTags();
            setTagState(res)

        } catch (err){
            console.log("failed to load: tags \n", err)
        }
    }
    const loadAllCategories = async () =>{
        try{
            const res = await loadCategories();
            setCategoriesState(res)

        } catch (err){
            console.log("failed to load:categories \n", err)
        }
    }
    const loadAllStatus = async () =>{
        try{
            const res = await loadStatus();
            setStatusState(res)

        } catch (err){
            console.log("failed to load: status \n", err)
        }
    }

    useEffect(()=>{

        loadAllCategories();
        loadAllTag();
        loadAllStatus();
       
    }, [])


    // State havng all functions related to object
    const tagFunctions = {
        load: loadAllTag,
        create: createTag,
        update: updateTag,
        delete: delTag,
    }
    const categoriesFunctions = {
        load: loadAllCategories,
        create: createCategories,
        update: updateCategories,
        delete: delCategories,
    }
    const statusFunctions = {
        load: loadAllStatus,
        create: createStatus,
        update: updateStatus,
        delete: delStatus,
    }


    // active to show selected component 
    const [activeOption, setActiveOption] = useState(0)

    // handle Active Option Component
    const handelActiveComponents = (optionNumber) => {
        // reset all form inputs stores in state
        setInputVal('')
        // set active option
        setActiveOption(Number(optionNumber))
    }

    // Option Form data 
    const optionFormData = [
        {activeNo:0, title:'Tags', data:tagState, apiFunctions:tagFunctions},
        {activeNo:1, title:'Categories', data:categoriesState, apiFunctions:categoriesFunctions},
        {activeNo:2, title:'Status', data:statusState, apiFunctions:statusFunctions},
        
    ]

    return (
        <>

            {/* Top Nav for tags/cateeories ... */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 justify-center sm:py-2 py-4 px-3 sm:items-center *:px-4 *:py-1 *:rounded-[5rem] bg-gray-900 sm:my-4 sm:rounded-[10rem] sm:max-w-[500px] sm:w-max sm:mx-auto">
                {
                    optionFormData.length &&
                    optionFormData.map((option)=>(
                        <p  
                            key={option.activeNo}
                            onClick={()=>handelActiveComponents(option.activeNo)}
                            className={`${activeOption==option.activeNo?'bg-gray-200 text-gray-700': 'bg-gray-700'}`}
                        >
                            {option.title}
                        </p>
                    ))
                }            
            </div>


            
            {/* Option form & List */}
            {
                    optionFormData.length &&
                    optionFormData.map((option)=>(
                        (option.activeNo == activeOption) &&
                        <RenderOptionList 
                            key={option.activeNo}
                            title={option.title}
                            data={option.data}
                            Functions={option.apiFunctions}
                            formData={{state:inputval, set:setInputVal}}
                        />
                        
                    ))
                }    
            
            
        </>
    )
}
