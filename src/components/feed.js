import Loader from "./loader";
import { FetchUserAPIResponse } from "../utils/api";
import { useEffect, useState } from "react";
import Tweet from "./tweet";

const Feed = (prop) => {

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [message, setMessage] = useState(null);


	useEffect(() => {
		async function getPosts() {
			const response = await FetchUserAPIResponse(prop.url+`?$page=${page}&$limit=10`, 'GET', null);
			if (response.status === 200) {
				console.log(response.data.data);
				setPosts(response.data.data);
				setPage(page + 1);
			} else if (response.status === 204) {
				setMessage('No Tweets Found');
			} else {
				setMessage('Something went wrong');
			}
			setLoading(false);
		}
		getPosts();
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				message ? (
					<p>{message}</p>
				) : (
					<>
						{posts.map((post) => (
							<Tweet key={post.id} tweet={post.content} created_at={post.created_at}/>
						))}
					</>
				)
			)}
		</>
	)
}

export default Feed;