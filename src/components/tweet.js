import '../static/css/tweet.css';

const Tweet = (prop) => {
	return (
		<div className={prop.key + " tweet"}>
			<p className="tweet-text">{prop.tweet}</p>
			<p className="tweet-date">{prop.created_at}</p>
		</div>
	)
}

export default Tweet;