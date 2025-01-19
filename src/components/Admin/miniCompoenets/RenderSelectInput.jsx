// option create 
import { createTag, createCategories, createStatus } from "../Data/api";

// select Option 
import SelectOptionsComponent from "./SelectOptions";

const RenderSelectInputs = ({
    selectLabels,
    statesInfo,
    // loadAllOptions,
}) => {

    
    return(
        <>
        <div>Tags:

            <SelectOptionsComponent
                options={selectLabels.tags}
                selectedOptions={statesInfo.tags.state}
                setSelectedOptons={statesInfo.tags.set}
                createOption={createTag}
                // loadOption={loadAllOptions.tags}
            />
        </div>

        <div>Categories:

            <SelectOptionsComponent
                options={selectLabels.categories}
                selectedOptions={statesInfo.categories.state}
                setSelectedOptons={statesInfo.categories.set}
                createOption={createCategories}
                // loadOption={loadAllOptions.categories}
            />
        </div>

        <div>Status:

            <SelectOptionsComponent
                options={selectLabels.status}
                selectedOptions={statesInfo.status.state}
                setSelectedOptons={statesInfo.status.set}
                single={true}
                createOption={createStatus}
                // loadOption={loadAllOptions.status}
            />
        </div>
        </>
    )
}

export default RenderSelectInputs;