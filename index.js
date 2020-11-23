let data = {
    data: {
        viewer: {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/28878343?s=300&u=ed33540e047c9190e7ac276fd11301fa3053d90e&v=4',
            name: 'Victory Asokomeh',
            login: 'victory-a',
            bio: 'Frontend Developer & Mobile enthusiast\r\n',
            url: 'https://github.com/victory-a',
            repositories: {
                totalCount: 24,
                nodes: [
                    {
                        name: 'twitterClone',
                        description: 'React setup with styled components and chakra ui, to be updated.....',

                        primaryLanguage: {
                            name: 'TypeScript',
                            color: '#2b7489',
                        },
                        stargazerCount: 0,
                        forkCount: 0,
                        updatedAt: '2020-08-26T22:25:37Z',
                        url: 'https://github.com/victory-a/twitterClone',
                    },
                    {
                        name: 'twitterClone',
                        description: 'React setup with styled components and chakra ui, to be updated.....',

                        primaryLanguage: {
                            name: 'TypeScript',
                            color: '#2b7489',
                        },
                        stargazerCount: 0,
                        forkCount: 0,
                        updatedAt: '2020-08-26T22:25:37Z',
                        url: 'https://github.com/victory-a/twitterClone',
                    },
                ],
            },
        },
    },
};

// controls the functionality for toggling mobile nav
function toggleMobileNav() {
    return document.getElementById('mobile-nav').classList.toggle('open');
}

// controls the visibility tab bar avatar and username
let emptyStickyDiv = document.querySelector('.empty');
function toggleTabLeftSection() {
    if (window.pageYOffset > 515) {
        emptyStickyDiv.classList.add('visible');
    } else {
        emptyStickyDiv.classList.remove('visible');
    }
}

// keeps track of vertical scroll position to determine elements to render on the categories tab
window.addEventListener('scroll', () => toggleTabLeftSection());

// select elements to be populated
let userAvatars = document.querySelectorAll('.userAvatar');
let currentUser = document.querySelectorAll('#name');
let userName = document.querySelectorAll('#username');
let userBio = document.getElementById('bio');
let repoCount = document.getElementById('private-repo-count');
let reposContainer = document.getElementById('repos');

function formatRepoLayout(repo) {
    // template elements
    const starButton = repo.viewerHasStarred
        ? `<button class="star">
            <span class="iconify" data-icon="octicon:star-fill-24" data-inline="false"></span>
            Unstar
            </button>`
        : `<button class="star">
            <span class="iconify" data-icon="octicon:star-24" data-inline="false"></span>
                Star
                </button>`;

    const stars =
        repo.stargazerCount > 0
            ? `<span class="stargazers">
            <a href="" aria-label="repo star stats">
            <span class="iconify starred" data-icon="octicon:star-24" data-inline="false"></span>
            </a>
            <p class="stargazer-count">${repo.stargazerCount}</p>
        </span>`
            : '';

    const forks =
        repo.forkCount > 0
            ? `<span class="forks">
            <a href="" aria-label="repo forks">
            <span class="iconify" data-icon="octicon:git-fork-24" data-inline="false"></span>
            </a>
            <p class="fork-count">${repo.forkCount}</p>
            </span>`
            : '';

    const description = repo.description ? `<p class="repo-description">${repo.description}</p>` : '';

    return `
            <div class="repo-title-row">
            <a class="repo-name" href=${repo.url}>${repo.name}</a>
            ${starButton}
            </div>
            ${description}
            <div class="repo-metadata">
            <span class="repo-language-details">
            <span class="language-color-code" style="background-color: ${repo.primaryLanguage.color};"></span>
            <p class="language">${repo.primaryLanguage.name}</p>
            </span>
            ${stars}
            ${forks}
            </div>
            `;
}

const { avatarUrl, login, name, bio, url, repositories } = data.data.viewer;

// populates attributes element attributes and textcontents
userAvatars.forEach((avatar) => (avatar.src = avatarUrl));
currentUser.forEach((occurence) => (occurence.textContent = name));
userName.forEach((occurence) => (occurence.textContent = login));
repoCount.textContent = repositories.totalCount;
userBio.textContent = bio;


repositories.nodes.forEach((repo) => {
    const list = document.createElement('li');
    list.innerHTML = formatRepoLayout(repo);
    reposContainer.appendChild(list);
});
