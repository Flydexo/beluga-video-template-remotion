import {Img} from "remotion";
import fileIcon from "./images/file.svg";
import download from "./images/down.svg";
import "./css/file.css"

export const File = ({name, size}) => {
  return (
	<div className="file-container">
		<Img src={fileIcon} className="file-icon"/>
		<p className="file-name">{name}</p>
		<p className="file-size">{size}</p>
		<svg className="file-download" aria-hidden="false" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z" /></svg>
	</div>
  )
}