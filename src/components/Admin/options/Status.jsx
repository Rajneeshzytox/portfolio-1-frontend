// api functions
import { createStatus, updateStatus, delStatus } from "../Data/api";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// ststus sctiosn
import { addStatusState, updateStatusState, deleteStatusState } from "../../../reduxStates/slices/statusSlice";

// context outlet 
import { useOutletContext } from "react-router-dom";

// Components
import OptionForm from "./OptionForm"
import OptionList from "./OptionList"
import { deleteCategoriesState } from "../../../reduxStates/slices/categoriesSlice";

export default function Status() {
  const dispatch = useDispatch();
  const title = "Status";
  const statusState = useSelector((state) => state.status.data);
  const apiFunctions = {
    create: createStatus,
    update: updateStatus,
    delete: delStatus,
  };

  const {OptionInputValue, setOptionInputValue} = useOutletContext(); // from Option_ADmin

  return (
    <>
      <div>
        <h3 className="title-1"> {title} List </h3>
        <OptionForm
          title={title}
          create={apiFunctions.create}
          inputval={OptionInputValue}
          setInputVal={setOptionInputValue}
          addToState={addStatusState}
        />
        {/* tags list */}
        <OptionList
          title={title}
          data={statusState}
          updateOption={apiFunctions.update}
          deleteOption={apiFunctions.delete}
          updateState={updateStatusState}
          deleteState={deleteStatusState}
        />
      </div>
    </>
  );
}
