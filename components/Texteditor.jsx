
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faBold, faIndent, faItalic, faLink, faList, faOutdent, faRotateLeft, faRotateRight, faStrikethrough, faSubscript, faSuperscript, faUnderline, faUnlink } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Texteditor = () => {


   
    let [color,setColor]=useState('')

    let handlebold = () => {
        document.execCommand('bold')
    }

    let handleitalic = () => {
        document.execCommand('italic')
    }

    let handleunderline = () => {
        document.execCommand('underline')
    }

    let aligncenter = () => {
        document.execCommand('JustifyCenter')
    }
    let alignright = () => {
        document.execCommand('JustifyRight')
    }
    let alignleft = () => {
        document.execCommand('JustifyLeft')
    }

    let align = () => {
        document.execCommand('JustifyFull')
    }

    let strikethrough = () => {
        document.execCommand('strikeThrough')
    }

    let redo = () => {
        document.execCommand('redo')
    }
    let undo = () => {
        document.execCommand('undo')
    }
    let superscript = () => {
        document.execCommand('superscript')
    }
    let subscript = () => {
        document.execCommand('subscript')
    }

    let clear = () => {
        document.execCommand('removeFormat')
    }
    let insertorderedlist = () => {
        document.execCommand('insertOrderedList')
    }
    let insertUnorderedlist = () => {
        document.execCommand('insertUnorderedList')
    }
    let outdent = () => {
        document.execCommand('outdent')
    }
    let indent = () => {
        document.execCommand('indent')
    }
    let createlink = () => {
        document.execCommand('createLink', false, "URI")
    }
    let unlink = () => {
        document.execCommand('unlink', true, "URI")
    }
    let forecolor = () => {
        document.execCommand('foreColor', true, color)
    }
    let handleh1=()=>{
        document.execCommand('heading',true,"H1")
    }
    return (
        <div className="texteditor">
            <div className="options">
                <button id="bold" className="option-button-format" onClick={handlebold} >
                    <FontAwesomeIcon icon={faBold} />
                </button>
            </div>

            <div className="options">
                <button id="italic" className="option-button-format" onClick={handleitalic} >
                    <FontAwesomeIcon icon={faItalic} />
                </button>
            </div>

            <div className="options">
                <button id="underline" className="option-button-format" onClick={handleunderline} >
                    <FontAwesomeIcon icon={faUnderline} />
                </button>
            </div>
            <div className="options">
                <button id="strikethrough" className="option-button-format" onClick={strikethrough} >
                    <FontAwesomeIcon icon={faStrikethrough} />
                </button>
            </div>
            <div className="options">
                <button id="superscript" className="option-button-format" onClick={superscript}>
                    <FontAwesomeIcon icon={faSuperscript} />
                </button>
            </div>
            <div className="options">
                <button id="subscript" className="option-button-format" onClick={subscript}>
                    <FontAwesomeIcon icon={faSubscript} />
                </button>
            </div>

            <button id="insertOrderedList" className="option-button" onClick={insertorderedlist} >
                <FontAwesomeIcon icon={faList} />
            </button>

            <button id="insertUnOrderedList" className="option-button" onClick={insertUnorderedlist} >
                <FontAwesomeIcon icon={faList} />
            </button>

            <button id="undo" className="option-button" onClick={undo} >
                <FontAwesomeIcon icon={faRotateLeft} />
            </button>
            <button id="redo" className="option-button" onClick={redo} >
                <FontAwesomeIcon icon={faRotateRight} />
            </button>

            <button id="createLink" className="adv-option-button" onClick={createlink} >
                <FontAwesomeIcon icon={faLink} />
            </button>

            <button id="unLink" className="adv-option-button" onClick={unlink} >
                <FontAwesomeIcon icon={faUnlink} />
            </button>


            <button id="justifyleft" className="option-button-align" onClick={alignleft} >
                <FontAwesomeIcon icon={faAlignLeft} />
            </button>
            <button id="justifycenter" className="option-button-align" onClick={aligncenter} >
                <FontAwesomeIcon icon={faAlignCenter} />
            </button>
            <button id="justifyright" className="option-button-align" onClick={alignright} >
                <FontAwesomeIcon icon={faAlignRight} />
            </button>
            <button id="justifyfull" className="option-button-align" onClick={align} >
                <FontAwesomeIcon icon={faAlignJustify} />
            </button>
            <button id="indent" className="option-button-spacing" onClick={indent} >
                <FontAwesomeIcon icon={faIndent} />
            </button>
            <button id="outdent" className="option-button-spacing" onClick={outdent} >
                <FontAwesomeIcon icon={faOutdent} />
            </button>

            {/* <select name="" id="formatblock" className="adv-option-button"  >
                <option value="">Select </option>
                <option value="H1" onClick={handleh1}>H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
                <option value="H5">H5</option>
                <option value="H6">H6</option>
            </select>

            <select name="" id="font-name" className="adv-option-button" >

            </select>
            <select name="" id="font-size" className="adv-option-button" >

            </select>


            <div className="input-wrapper">
                <input type="color" id="foreColor" className="adv-option-button" onClick={forecolor} onChange={(e)=>{setColor(e.target.value)}}  />
                <label htmlFor="foreColor">Font Color</label>
            </div>

            <div className="input-wrapper">
                <input type="color" id="blackColor" className="adv-option-button" />
                <label htmlFor="blackColor">Highlight Color</label>
            </div> */}
            <div className="clearselection">
                <button id="clear" onClick={clear} >Clear</button>
            </div>
            <div id="text-input" contentEditable="true" >

            </div>

            {/* <button id="submit" onClick={handlesubmit} > Submit</button> */}
        </div>
    );
}

export default Texteditor;