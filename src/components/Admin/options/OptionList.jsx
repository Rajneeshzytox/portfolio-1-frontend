import { useState } from "react";

import { useDispatch } from "react-redux";

// Table Heading Component
const TableHeadingText = ({ title }) => {
  const table_heading_data = [
    { icon: "#", text: "ID" },
    { icon: "N", text: `${title} Name` },
    { icon: "U", text: "Update" },
    { icon: "D", text: "Delete" },
  ];
  return (
    <>
      <tr className="border-b-[1px] border-b-gray-200">
        {table_heading_data &&
          table_heading_data.map((table_heading) => (
            <th
              className="text-sm text-gray-400 font-normal min-w-52 text-left pl-4"
              key={table_heading.text}
            >
              {/* icon */}
              <span className="Table-Heading-icon">{table_heading.icon}</span>

              {/* heading txt */}
              <span>{table_heading.text}</span>
            </th>
          ))}
      </tr>
    </>
  );
};

// Table Row Compoenet
const TableRow = ({ data, handleDeleteClick, handleUpdateClick, update }) => {
  return (
    <>
      {data ? (
        data.map((option) => (
          <tr key={`#${option.id} ${option.name}`}>
            {/* ID  */}
            <td>{option.id}</td>

            {/* Name */}
            <td>
              {update.state.id == option.id ? (
                <input
                  type="text"
                  value={update.state.name}
                  placeholder="update"
                  onChange={(e) =>
                    update.set((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              ) : (
                option.name
              )}
            </td>

            {/* Update */}
            <td>
              {update.state.id == option.id ? (
                // Save Button
                <div>
                <button
                  className="custom-button bg-blue-700 text-white"
                  onClick={() => handleUpdateClick(update.state)}
                >
                  Save
                </button>
                <button
                  className="sec-button"
                  onClick={() => update.set({})}
                >
                  cancel
                </button>

                </div>
              ) : (
                // Update Button
                <button
                  className="custom-button bg-blue-700 text-white"
                  onClick={() => update.set(option)}
                >
                  Update
                </button>
              )}
            </td>

            {/* Delete */}
            <td>
              <button
                className="custom-button bg-red-500 text-white"
                onClick={() => handleDeleteClick(option.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        // if no data
        <p>NO DATA</p>
      )}
    </>
  );
};

export default function OptionList({
  title,
  data,
  updateOption,
  deleteOption,
  updateState,
  deleteState,
}) {

  // DISPATCH 
  const dispatch = useDispatch();

  // Upadte
  // is update state
  const [isUpdate, setIsUpdate] = useState({});

  // Update (Handel save button click)
  const handleUpdateClick = async (obj) => {
    // obj = {id:1, name:'something'}
    if (obj == {}) {
      return;
    }

    try {
      const UpdateData = { name: String(obj.name).toLowerCase() };
      const res = await updateOption(obj.id, JSON.stringify(UpdateData));
      // console.log(res, " Updated")
      if (res){
        dispatch(updateState(res))
      }
      //   reset update state
      setIsUpdate({})
    } catch (error) {
      console.log(`failed to update ${title}\n`, error);
    }
  };

  // handle delete click
  const handleDeleteClick = async (id) => {
    try {
      const res = await deleteOption(Number(id));
      console.log(res, " DELETED");
      if(res){
        dispatch(deleteState({id:res}))
      }

    } catch (error) {
      console.log(`failed to delete ${title}\n`, error);
    }
  };

  return (
    <div className="lg:overflow-auto  overflow-x-scroll my-8 w-full md:mx-auto px-4">
      <table className="mx-auto">
        <thead>
          <TableHeadingText title={title} />
        </thead>

        <tbody>
          <TableRow
            data={data}
            handleDeleteClick={handleDeleteClick}
            handleUpdateClick={handleUpdateClick}
            update={{ state: isUpdate, set: setIsUpdate }}
          />
        </tbody>
      </table>
    </div>
  );
}
