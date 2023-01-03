import { useState } from "react";
import { Timer } from "..";
export const Main = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	const updateCurrentTime = () => {
		setCurrentTime(new Date());
	}
	setInterval(updateCurrentTime, 1000);
	const hours = currentTime.getHours(),
	minutes = currentTime.getMinutes(),
	seconds = currentTime.getSeconds(),
	convention = hours > 12 ? 'PM' : 'AM';
	return (
		<div>
			<Timer hours={ hours % 12} minutes={minutes} seconds={seconds} timeConvention={convention}/>
		</div>
	)
}