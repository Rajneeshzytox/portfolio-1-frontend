import OptionList from "./optionList"
import OptionForm from "./OptionForm"
export default function RenderOptionList({
    title,
    data
}){
    return (
        <>
            <div>
                <h3 className="title-1
                ">
                    {title} List
                </h3>
                <OptionForm
                    title={title}
                />
                {/* tags list */}
                <OptionList
                    title={title}
                    data={data}
                />
            </div>
        </>
    )
}