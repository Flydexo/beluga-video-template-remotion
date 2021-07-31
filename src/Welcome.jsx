import { Img } from "remotion"
import arrow from "./images/arrow.svg"
import "./css/welcome.css"

export const Welcome = ({pseudo, date, sentence}) => {
 return (
	<div className="welcome-container">
		<Img src={arrow} className="arrow"/>
		<p className="sentence"><span style={{fontWeight: "bold"}}>{pseudo}</span> {sentence}</p>
		<p className="welcome-date">{date}</p>
	</div>
  )
}