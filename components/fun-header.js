import React, {useRef} from 'react';
import useGyroscope from 'react-hook-gyroscope'

const FunHeader = () => {
    const gyro = useGyroscope({frequency: 60});

    const {x, y, z , error} = gyro;
    const init = useRef({ix: 0, iy : 0, iz : 0});

    let dx = 0, dy = 0, dz = 0;

    if(!error && !x && !y && !z){
        init.current.ix = x;
        init.current.iy = y;
        init.current.iz = z;
    }

    if(!error){
        dx = init.current.ix - x;
        dy = init.current.iy - y;
        dz = init.current.iz - z;
    }


    return (
        <div className={"relative"}>
            <h1 className={"text-indigo-700 font-bold text-2xl transition"} style={{transition: `translate(${dx} px,${dy} px,${dz} px)`}}>
                Curl
            </h1>
        </div>
    );
};

export default FunHeader;
