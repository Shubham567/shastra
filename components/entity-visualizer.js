import React from 'react';
import PropTypes from 'prop-types';
import {TrashIcon} from "@heroicons/react/outline";

const EntityVisualizer = ({entityName, entityValue, handleEntityChange, handleEntityDelete}) => {
    const handleDelete = (_e) => {
        handleEntityDelete?.(entityName);
    }
    return (
        <div className={""}>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-3 flex items-center"}>
                    <input type={"checkbox"} className={""}/>
                    <textarea
                        rows={1}
                        className={"flex-1 m-1 px-1 pt-1 pb-2 resize-none focus:outline focus:outline-1 outline-gray-400 w-full rounded overflow-y-auto disabled:bg-none"}
                        value={entityName}
                        readOnly
                    />
                </div>
                <div className={"col-span-8"}>
                    <textarea
                        name={entityName}
                        placeholder={"enter value"}
                        // cols="50"
                        rows="1"
                        className={"w-full p-2 resize-none focus:outline focus:outline-1 outline-gray-400 w-full rounded overflow-y-auto"}
                        value={entityValue}
                        onChange={handleEntityChange}
                    />
                </div>
                <div className={"col-span-1"}>
                    <div className={"w-full flex justify-end"}>
                        <button onClick={handleDelete}>
                            <TrashIcon className={"h-5 w-5 text-gray-400"} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

EntityVisualizer.propTypes = {
    entityName: PropTypes.string.isRequired,
    entityValue: PropTypes.string,
    handleEntityChange: PropTypes.func,
    handleEntityDelete: PropTypes.func,
};

export default EntityVisualizer;
