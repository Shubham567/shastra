import React from 'react';
import PropTypes from 'prop-types';
import {TrashIcon} from "@heroicons/react/outline";
import {useDispatch, useSelector} from "react-redux";
import {addSelectedField, removeSelectedField} from "../store/slices/curlSlice.js";

const EntityVisualizer = ({entityName, entityValue, handleEntityChange, handleEntityDelete, entityType, data_id}) => {
    const dispatch = useDispatch();

    const selectedFields = useSelector(state => state.curlData.selectedFields);

    const handleDelete = (_e) => {
        handleEntityDelete?.(entityName);
    }

    const handleItemSelect = (e) => {
        if(e.target.checked){
            dispatch(addSelectedField({entityType, name: entityName, value: entityValue, data_id}));
            return;
        }
        dispatch(removeSelectedField({data_id}));
    }

    return (
        <div className={""}>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-3 flex items-center"}>
                    <div>
                        <label className={"sr-only"}>
                            Show entity in UI
                        </label>
                        <input type={"checkbox"} className={""} onChange={handleItemSelect} checked={selectedFields.find(f => f.data_id === data_id)} />
                    </div>
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
