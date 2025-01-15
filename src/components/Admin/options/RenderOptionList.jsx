import OptionList from "./OptionList"
import OptionForm from "./OptionForm"
export default function RenderOptionList({
    title,
    data,
    Functions,
    formData
}){
    // if functions to req api is not given
    if(!Functions){
        return(<>No Api Functions Available</>)
    }

    return (
        <>
            <div>
                <h3 className="title-1
                ">
                    {title} List
                </h3>
                <OptionForm
                    title={title}
                    create={Functions.create}
                    load={Functions.load}
                    inputval={formData.state}
                    setInputVal={formData.set}
                />
                {/* tags list */}
                <OptionList
                    title={title}
                    data={data}
                    updateOption={Functions.update}
                    deleteOption={Functions.delete}
                    loadOption={Functions.load}
                />
            </div>
        </>
    )
}