
// Table Heading Component
const TableHeadingText = ({
    title,
}) =>{
    const table_heading_data = [
        { icon: "#", text: "ID" },
        { icon: "N", text: `${title} Name` },
        { icon: "U", text: "Update" },
        { icon: "D", text: "Delete" },

    ];
    return (
        <>
          <tr className="border-b-[1px] border-b-gray-200">
            { table_heading_data &&
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
}


// Table Row Compoenet 
const TableRow = ({
    data,
}) =>{

    return (
        <>
            {data?
                data.map((option)=>(
                    <tr key={`#${option.id} ${option.name}`}>

                        {/* ID  */}
                        <td>
                            {option.id}
                        </td>

                        {/* Name */}
                        <td>
                            {option.name}
                        </td>

                        {/* Update */}
                        <td>
                            Update
                        </td>

                        {/* Delete */}
                        <td>
                            Delete
                        </td>
                    </tr>
                ))
            : 
                // if no data 
                <p>NO DATA</p>
            }
        </>
        
    )
}

export default function OptionList({
    title,
    data,
}){
    return (
        <div className="lg:overflow-auto  overflow-x-scroll my-8 w-full md:mx-auto px-4">
            <table className="mx-auto">
                <thead>
                    <TableHeadingText
                        title={title}
                    />
                </thead>

                <tbody>
                    <TableRow
                        data={data}
                    />
                </tbody>
            </table>
        </div>
    )
}