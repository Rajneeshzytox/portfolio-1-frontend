
// select Option 
import SelectOptionsComponent from "./selectOptions";

const RenderSelectInputs = ({
    selectLabels,
    statesInfo
}) => {

    console.log("from render select:\n", statesInfo.status.state)
    return(
        <>
        <div>Tags:

            <SelectOptionsComponent
                options={selectLabels.tags}
                selectedOptions={statesInfo.tags.state}
                setSelectedOptons={statesInfo.tags.set}
            />
        </div>

        <div>Categories:

            <SelectOptionsComponent
                options={selectLabels.categories}
                selectedOptions={statesInfo.categories.state}
                setSelectedOptons={statesInfo.categories.set}
            />
        </div>

        <div>Status:

            <SelectOptionsComponent
                options={selectLabels.status}
                selectedOptions={statesInfo.status.state}
                setSelectedOptons={statesInfo.status.set}
                single={true}
            />
        </div>
        </>
    )
}

export default RenderSelectInputs;