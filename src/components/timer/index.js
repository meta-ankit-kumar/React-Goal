import './timer.css';

const displayTime = (hours, minutes, seconds, convention) => {
	return (
		<div className='time-info'>
				<span className='time'>{makeTimeUserFriendly(hours)}<span className='dots'>:</span>{makeTimeUserFriendly(minutes)}<span className='dots'>:</span>{makeTimeUserFriendly(seconds)}</span>
				<span className='time-convention'>({convention})</span>
		</div>
	)
}

const makeTimeUserFriendly = (timeParameter) => timeParameter <= 9 ? '0' + timeParameter: timeParameter;

export const Timer = ({hours, minutes, seconds, timeConvention}) => {
	return (
		displayTime(hours, minutes, seconds, timeConvention)
	)
}