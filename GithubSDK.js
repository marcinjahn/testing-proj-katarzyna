export class GithubSDK {
    async getRepositories(user) {
        const url = `https://api.github.com/users/${user}/repos`;

        return await (await fetch(url, {
            headers: {
                accept: 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })).json();
    }
}