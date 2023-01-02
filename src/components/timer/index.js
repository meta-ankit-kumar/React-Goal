import './timer.css';

const displayTime = (hours, minutes, seconds) => {
	return (
		<div className='time-info'>{makeTimeUserFriendly(hours)}<span className='dots'>:</span>{makeTimeUserFriendly(minutes)}<span className='dots'>:</span>{makeTimeUserFriendly(seconds)}</div>
	)
}

const makeTimeUserFriendly = (timeParameter) => timeParameter <= 9 ? '0' + timeParameter: timeParameter;

export const Timer = ({hours, minutes, seconds}) => {
	return (
		displayTime(hours, minutes, seconds)
	)
}