import {Composition} from 'remotion';
import {Background} from './Background';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="Video"
				component={Background}
				fps={30}
				durationInFrames={30*50}
				width={1920}
				height={1080}
			/>
		</>
	);
};
