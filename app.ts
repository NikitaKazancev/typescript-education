function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
	return 1;
}

fetchWithAuth('s', 'get');

const method = 'post';

fetchWithAuth('s', method as 'post');

const body: {
	method: 'post' | 'get';
} = {
	method: 'post',
};

fetchWithAuth('s', body.method);
fetchWithAuth('s', body.method as 'post');
fetchWithAuth('s', body.method as 'get'); // ???
