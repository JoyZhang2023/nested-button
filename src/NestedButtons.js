import React from 'react';
const NestedButtons = () => {
    const handleOuterClick = () => {
        alert("outer button clicked!");
    };

    const handleInnerClick = (e) => {
        e.stopPropagation(); // This stops the click event from propagating to the outer button
        alert("Inner button clicked!");
    };

    return (
        <div>
            <button onClick={handleOuterClick}>
                Outer Button
                <button onClick={handleInnerClick} style={{margin: '10px'}}>
                    Inner Button
                </button>
            </button>
        </div>
    );
};

export default NestedButtons;