// api functions
import { createTag, delTag, updateTag } from "../Data/api";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// tag state actions
import { addTagState, updateTagState, deleteTagState  } from "../../../reduxStates/slices/tagsSlice";



// context outlet 
import { useOutletContext } from "react-router-dom";

// Components
import OptionForm from "./OptionForm"
import OptionList from "./OptionList"

export default function Tags() {
  const dispatch = useDispatch();
  const title = "Tags"
  const tagState = useSelector((state) => state.tags.data);
  const apiFunctions = {
    create: createTag,
    update: updateTag,
    delete: delTag,
  };
  

  const {OptionInputValue, setOptionInputValue} = useOutletContext(); // from Option_ADmin

  return (
    <>
      <div>
        <h3 className="title-1"> {title} List </h3>
        <OptionForm
          title={title}
          create={apiFunctions.create}
          addToState={addTagState}
          inputval={OptionInputValue}
          setInputVal={setOptionInputValue}
        />
        {/* tags list */}
        <OptionList
          title={title}
          data={tagState}
          updateState={updateTagState}
          updateOption={apiFunctions.update}
          deleteState={deleteTagState}
          deleteOption={apiFunctions.delete}
        />
      </div>
    </>
  );
}
