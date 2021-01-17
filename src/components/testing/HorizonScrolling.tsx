import React, {useState, useEffect} from 'react';

interface Person {
    name: string;
    age: number;
    addr: string;
}

function HorizonScrolling() {

    const [test, setTest] = useState<string>('default');
    const [info, setInfo] = useState<Person>({
        name: 'ksy',
        age: 32,
        addr: 'dragon'
    })

    useEffect(() => {
        
    }, []);

    const handleTest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        
        setTest('바뀐값');
    };

    

        
    return (
        <div>
            HorizonScrolling page
            <button onClick={handleTest}>
                test value chagne
            </button>

            <br />
            <hr />
            {test}
            <hr />
            {info.name} {info.age} {info.addr}
        </div>
    )
}

export default HorizonScrolling;
