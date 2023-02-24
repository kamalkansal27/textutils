import React, { useState } from 'react'

export default function Textform(props) {

    const handleOnUPEvent = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text first.", "warning")
        }
        else {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        }
    }

    const handleOnLCEvent = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text first.", "warning");
        }
        else {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success")
        }
    }

    const handleOnChangeEvent = (event) => {
        setText(event.target.value);
    }

    const handleCleartext = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text first.", "warning");
        }
        else {
            setText("");
            props.showAlert("All the text has been cleared", "success")
        }
    }

    const [text, setText] = useState("");

    const handleCopyText = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text first.", "warning");
        }
        else {
            let text = document.getElementById("mybox");
            text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            props.showAlert("Text has been copied", "success")
        }
    };

    const handleExtraSpace = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text first.", "warning");
        }
        else {
            let newText = text.split(/[  ]+/);
            setText(newText.join(" "));
            props.showAlert("All the extra spaces has been removed", "success")
        }
    };

    return (
        <div className="container p-2">
            <div className="container">
                <h3 style={{marginBottom:'25px'}}>{props.heading}</h3>
                <div>
                    <div className="mb-3">
                        <textarea style={{ backgroundColor: 'lightgrey', color: 'black', border: '1px solid black' }} id="mybox" className="form-control" value={text} placeholder="Enter your text here" onChange={handleOnChangeEvent} rows="5"></textarea>
                    </div>
                </div>
                <button  className="btn btn-primary mx-2 my-2" onClick={handleOnUPEvent}>Convert to Uppercase</button>
                <button  className="btn btn-primary mx-2 my-2" onClick={handleOnLCEvent}>Convert to Lowercase</button>
                <button  className="btn btn-primary mx-2 my-2" onClick={handleCleartext}>Clear text</button>
                <button  className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy text</button>
                <button  className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-4">
                <h4><i>Text Summary</i></h4>
                <p><i>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters.</i></p>
            </div>
            <div className="container my-4">
                <h4><i>Preview</i></h4>
                <p style={{ opacity: 0.6 }}>{text.length > 0 ? text : 'Nothing to preview yet.'}</p>
            </div>
        </div>
    )
}
