import { useState } from "react";
import { Timer } from "..";
export const Main = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	const updateCurrentTime = () => {
		setCurrentTime(new Date());
	}
	setInterval(updateCurrentTime, 1000);
	return (
		<div>
			<Timer hours={ currentTime.getHours() % 12} minutes={currentTime.getMinutes()} seconds={currentTime.getSeconds()}/>
		</div>
	)
}