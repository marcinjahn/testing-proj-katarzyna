import { GithubSDK } from "./GithubSDK";

describe('GithubSDK', () => {
    it('fetches array of repositories', async () => {
        const gh = new GithubSDK();

        const repositories = await gh.getRepositories('KatarzynaDworak');

        expect(Array.isArray(repositories)).toBe(true);
    });

    it('fetches repository practice-html-and-css-basics', async () => {
        const gh = new GithubSDK();

        const repositoryNames = (await gh.getRepositories('KatarzynaDworak')).map(repository => repository.name);

        expect(repositoryNames).toContain('practice-html-and-css-basics');
    });
});