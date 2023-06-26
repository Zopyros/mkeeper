import React, { useState } from "react";

function Note(props) {
    const [isDone, setIsDone] = useState(false);

    const strikeThrough = { textDecoration: "line-through" };

    const handleClick = () => {
        setIsDone(!isDone);
    };

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p
                style={isDone ? strikeThrough : null}
                onClick={handleClick}
            >
                {props.content}
            </p>
        </div>
    );
}

export default Note;