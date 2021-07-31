import { Img } from "remotion"
import { Mention } from "./Mention"
import "./css/message.css"

export const Message = ({pseudo, image, date, message, color}) => {
  const regex = /@(\w|\d)+/g;
  const msgArr = message.split(" ");
  const mentions = message.match(regex);
  mentions.forEach(m => {
    msgArr.forEach((msg, i) => {
      const reg = /@/;
      if(msg == m){
        console.log(msg, m, "if")
        msgArr[i] = <Mention name={m}/>;
        if(msgArr.length-1 > i){
          msgArr[i+1] = ` ${msgArr[i+1]}`;
        }
      }else if(!reg.test(msg) && typeof msg === "string"){
        console.log(msg, m, "else")
        msgArr[i]+= ' ';
      }
    })
  });
  return (
	<div className="container">
		<Img src={image} className="profile-picture"/>
		<h1 className="pseudo" style={{color}}>{pseudo}</h1>
		<p className="date">{date}</p>
		<p className="message">{
        msgArr
      }
		</p>
	</div>
  )
}