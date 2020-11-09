import React, {useState, ChangeEvent, FormEvent} from 'react';
import useCommandInsert from '../../hooks/useCommandInsert';

function Command() {
    const [cValue, setCValue] = useState('');
    const { onInsert } = useCommandInsert();

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setCValue(e.target.value)
    };

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(cValue === ' ' || cValue === undefined) {
            alert('입력하신 내용을 확인해주세요')
        } else {
            onInsert(cValue);
        }
        
        setCValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="commandBox">
                <div className="commandBox__writer">pjh9107</div>
                <textarea
                    value={cValue}
                    onChange={onChange}
                />
                <button className="commandBox__wbtn">등록</button>
            </div>
        </form>
    )
};

export default Command;