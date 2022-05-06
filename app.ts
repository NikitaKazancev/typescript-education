// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }

// [
// 	{
// 		"question": "Как осуществляется доставка",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]

const enum reqStatus {
	published = 'published',
	draft = 'draft',
	deleted = 'deleted',
}

const getFaqs = async (req: {
	topicId: number;
	status?: reqStatus;
}): Promise<
	{
		question: string;
		answer: string;
		tags: string[];
		likes: number;
		status: reqStatus;
	}[]
> => {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req),
	});
	const data = await res.json();
	return data;
};
