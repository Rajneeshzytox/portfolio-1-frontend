// api functions
import { createCategories, updateCategories, delCategories } from "../Data/api";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// actions categories
import { addCategoriesState, updateCategoriesState, deleteCategoriesState } from "../../../reduxStates/slices/categoriesSlice";


// context outlet 
import { useOutletContext } from "react-router-dom";

// Components
import OptionForm from "./OptionForm"
import OptionList from "./OptionList"

export default function Categories() {
  const dispatch = useDispatch();
  const title = "Categories";
  const categoriesState = useSelector((state) => state.categories.data);
  const apiFunctions = {
    create: createCategories,
    update: updateCategories,
    delete: delCategories,
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
          addToState={addCategoriesState}
        />
        {/* tags list */}
        <OptionList
          title={title}
          data={categoriesState}
          updateOption={apiFunctions.update}
          deleteOption={apiFunctions.delete}
          updateState={updateCategoriesState}
          deleteState={deleteCategoriesState}
        />
      </div>
    </>
  );
}
