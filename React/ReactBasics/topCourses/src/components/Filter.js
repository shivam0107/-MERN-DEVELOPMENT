import React from "react";

function Filter(props) {

    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title)

    }

    return (
      
            <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center ">
                {
                    filterData.map((data) => {
                    
                    return (
                      <button
                        className={`bg-slate-600
                            text-white font-semibold hover:text-white py-2
                             px-4 border border-blue-500 hover:border-transparent 
                             rounded
                             ${
                               category === data.title
                                 ? "  bg-blue-500 border-white"
                                 : " bg-blue-500 border-transparent"
                             }
                             
                             `}
                        key={data.id}
                        onClick={() => filterHandler(data.title)}
                      >
                        {data.title}
                      </button>
                    );
                       
                    })
                }
            </div>
      
    );
}


export default Filter;