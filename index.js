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

function formatDate(dateString) {
    let finalDate;
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    let date = new Date(dateString).toLocaleDateString(undefined, options);
    const currentYear = new Date().getFullYear();

    if (date.includes(currentYear)) {
        date.replace(currentYear, '');
        const formattedDate = date.split(',')[0].split(' ');
        finalDate = `${formattedDate[1]} ${formattedDate[0]}`;
    } else {
        const dateArr = date.split(',');
        const formattedDate = dateArr[0].split(' ');
        finalDate = `${formattedDate[1]} ${formattedDate[0]} ${formattedDate[2].trim()}`;
    }
    return finalDate;
}

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
    const lastUpdatedDate = formatDate(repo.updatedAt);
    const repoColor = repo?.primaryLanguage?.color
        ? `<span class="language-color-code" style="background-color: ${repo.primaryLanguage.color};"></span>`
        : '';
    const repoLanguage = repo?.primaryLanguage?.name ? `<p class="language">${repo.primaryLanguage.name}</p>` : '';

    return `
            <div class="repo-title-row">
            <a class="repo-name" href=${repo.url}>${repo.name}</a>
            ${starButton}
            </div>
            ${description}
            <div class="repo-metadata">
            <span class="repo-language-details">
            ${repoColor}
            ${repoLanguage}
            </span>
            ${stars}
            ${forks}
            <p id="updated-at" class="repo-activity-time">Updated on ${lastUpdatedDate}</p>
            </div>
            `;
}

// populates attributes element attributes and textcontents
function populaterRepos(data) {
    const { avatarUrl, login, name, bio, repositories } = data.data.viewer;

    userAvatars.forEach((avatar) => (avatar.src = avatarUrl));
    currentUser.forEach((occurence) => (occurence.textContent = name));
    userName.forEach((occurence) => (occurence.textContent = login));
    repoCount.textContent = repositories.totalCount;
    userBio.textContent = bio;

    repositories.nodes.forEach((repo) => {
        let list = document.createElement('li');
        list.innerHTML = formatRepoLayout(repo);
        reposContainer.appendChild(list);
    });
}

const query = `
    query {
        viewer {
          avatarUrl(size: 300)
          name
          login
          bio
          url
          repositories(last: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
            totalCount
            nodes {
              name
              description
              primaryLanguage {
                name
                color
              }
              viewerHasStarred
              stargazerCount
              forkCount
              updatedAt
              url
            }
          }
        }
    }
`;

// IIFE which makes call to githubs api on page load
(function fetchDataFromGithub() {
    // I normally would not expose the api key this way.
    // The other ways around this I could come up with involved moving part of the code here to a server.
    // Thus I set strict access permissions on this key to limit it to only allowing GET requests to my public repos

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer fa1f8825e8ca78769d6056c84ea95f46a1806efc' },
        body: JSON.stringify({ query }),
    };

    fetch('https://api.github.com/graphql', options)
        .then((res) => res.json())
        .then((data) => populaterRepos(data))
        .catch(console.error);
})();
