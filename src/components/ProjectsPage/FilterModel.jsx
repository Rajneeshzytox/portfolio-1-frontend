/* 
     SAMPLE CALL: 
    <FilterSideBar
        setTags={addTag}
        setStatus={addStatus}
        tagData={tagsFetchData}
        statusData={statusFetchData}
        isIncludeStatus={isIncludeStatus}
        isIncludeTags={isIncludeTags}
        activeTag={activeFilterTags}
        activeStatus={activeFilterStatus}
    />
 */



const OptionFilter = ({
    title, arrayData, setOption, isInclude
}) => {

    return (
        <>
        <div>
                <h3 className="mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                {
                    arrayData && arrayData.length>0 &&
                    arrayData.map((option)=>(
                        <span
                            key={option.id}
                            className={
                                `cursor-pointer
                                px-2 py-1 rounded-md
                                ${isInclude(option.name)?"bg-gray-400 text-gray-950": "text-gray-400"}`
                            }
                            onClick={()=>setOption(option.name)}
                        >
                            {option.name}
                        </span>
                    ))
                }

                </div>
            </div>
        </>
    )
}




export default function FilterOption({
    setTags, setStatus, tagData, statusData,
    isIncludeStatus, isIncludeTags, activeTag, activeStatus
}){

    // Add tag to activeFilterTag state
    const handleTagFilterClick=(tag)=>{
        setTags(tag)
    }
    const handleStatusFilterClick=(status)=>{
        setStatus(status)
    }

    // Check if included in active filter to highlight: 
    const isTagInclude = (tag) => {
        console.log("run include for ", tag)
        return isIncludeTags(tag, activeTag, true)
    }
    const isStatusInclude = (status) => {
        return isIncludeStatus(activeStatus, status, true)
    }

    return (
        <>
        <div className="flex flex-col gap-6 max-w-52">

            {/* Tags */}
            <OptionFilter 
                title={"Tags"}
                arrayData={tagData}
                setOption={handleTagFilterClick}
                isInclude={isTagInclude}
            />

            {/* Status */}
            <OptionFilter 
                title={"Status"}
                arrayData={statusData}
                setOption={handleStatusFilterClick}
                isInclude={isStatusInclude}
            />
        </div>
            
        </>
    )
}