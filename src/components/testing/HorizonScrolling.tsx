import React, {useState, useEffect} from 'react';

function HorizonScrolling() {

    const [test, setTest] = useState('default');

    useEffect(() => {
        
    }, []);

    const handleTest = (e: MouseEvent): void => {
        
        setTest('바뀐값');
    };

    

        
    return (
        <div>
            HorizonScrolling page
            {/* <button onClick={handleTest}>
                test value chagne
            </button> */}

            <br />
            <hr />
            {test}
        </div>
    )
}

export default HorizonScrolling;
