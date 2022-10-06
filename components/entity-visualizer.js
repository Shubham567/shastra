import React from 'react';
import PropTypes from 'prop-types';

const EntityVisualizer = ({entityName, entityValue, handleEntityChange, handleEntityDelete}) => {
    const handleDelete = (_e) => {
        handleEntityDelete?.(entityName);
    }
    return (
        <div className={""}>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-3"}>
                    <span>
                        {entityName}
                    </span>
                </div>
                <div className={"col-span-8"}>
                    <textarea
                        name={entityName}
                        placeholder={"<empty>"}
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
                            <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
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
