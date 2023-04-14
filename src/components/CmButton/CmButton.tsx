import React from 'react';
import './CmButton.scss';

type cmButtonProps = {
    text: string,
    clickHandler: (e?: any) => any,
    addClasses?: string,
}

function CmButton({ text, clickHandler, addClasses }: cmButtonProps) {
    return (
        <button className={`cmButton ${addClasses}`} onClick={clickHandler}>{text}</button>
    )
}

export default CmButton