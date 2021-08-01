import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { Sequence } from "remotion";
import "./css/main.css"

export const Background = () =>  {
  return (
	<div style={{background: "#000", width: "1920px", height: "1080px"}} >
		<Sequence from={0} durationInFrames={30*0.7}>
			<Welcome pseudo="Beluga" date="Today at 11:22 PM" sentence="just slid into the server"/>
		</Sequence>
		<Sequence from={30*0.7} durationInFrames={30*1}>
			<Message pseudo="Beluga" message="thx @Ralph how are you ? @tiny hello @dear" image="https://pfps.gg/assets/pfps/8302-beluga.png" date="Today at 11:22 PM" color="#40BFF5"/>
		</Sequence>
		<Sequence from={51} durationInFrames={30*2}>
			<Message pseudo="Flydexo" message="thx @Ralph how are you ? @tiny hello @dear" image="https://pfps.gg/assets/pfps/8302-beluga.png" date="Today at 11:23 PM" color="#40BFF5" file="rules.txt" fileSize="10Go"/>
		</Sequence>
	</div>
  )
}