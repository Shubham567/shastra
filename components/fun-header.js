import React, {useRef} from 'react';
import useGyroscope from 'react-hook-gyroscope'
import clsx from "clsx";

const FunHeader = () => {
    const gyro = useGyroscope({frequency: 5});

    const {x, y, z , error} = gyro;
    const init = useRef({ix: 0, iy : 0, iz : 0});

    let dx = 0, dy = 0, dz = 0;

    if(!error && !x && !y && !z){
        // console.log("No data");
        init.current.ix = x;
        init.current.iy = y;
        init.current.iz = z;
    }

    if(!error){
        dx = Math.ceil((init.current.ix - x)*1000);
        dy = Math.ceil((init.current.iy - y)*1000);
        dz = Math.ceil((init.current.iz - z)*100);
    }

    // console.table({dx, dy, dz,});
    console.log({dx, dy, dz,});

    const elemRef = useRef(null);

    if(elemRef.current){
        elemRef.current.style.transform = `translate(${-dy}px, ${-dx}px)`;
    }

    return (
        <div className={clsx("h-screen w-screen fixed top-0 left-0 overflow-hidden select-none",{"hidden": error})}>
            <div className={"h-full w-full flex justify-center items-center"}>
                <h1 className={"text-indigo-700 font-bold text-2xl transition ease-in-out duration-1000 opacity-20 z-10"} ref={elemRef}>
                    😎
                </h1>
            </div>
        </div>
    );
};

export default FunHeader;
