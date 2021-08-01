import { Img } from "remotion";
import { Mention } from "./Mention";
import {File} from "./File";
import "./css/message.css";

export const Message = ({pseudo, image, date, message, color, file, fileSize}) => {
  const regex = /@(\w|\d)+/g;
  const msgArr = message.split(" ");
  const mentions = message.match(regex);
  if(mentions){
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
  }
  return (
	<div className="container">
		<Img src={image} className="profile-picture"/>
		<p className="pseudo" style={{color}}>{pseudo} <span className="date">{date}</span></p>
		<p className="message">{
        msgArr
      }
			{
      file && fileSize ? <File name={file} size={fileSize}/> : null
    }
		</p>
	</div>
  )
}