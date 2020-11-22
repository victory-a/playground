
let data = {
    "data": {
        "viewer": {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/28878343?s=300&u=ed33540e047c9190e7ac276fd11301fa3053d90e&v=4",
            "name": "Victory Asokomeh",
            "login": "victory-a",
            "bio": "Frontend Developer & Mobile enthusiast\r\n",
            "url": "https://github.com/victory-a",
            "repositories": {
                "totalCount": 24,
                "nodes": [
                    {
                        "name": "trans_monitor",
                        "description": null,
                        "primaryLanguage": {
                            "name": "JavaScript",
                            "color": "#f1e05a"
                        },
                        "stargazerCount": 0,
                        "forkCount": 0,
                        "updatedAt": "2020-10-27T23:56:23Z",
                        "url": "https://github.com/victory-a/trans_monitor"
                    },
                    {
                        "name": "eslint-config-react-native-wcandillon",
                        "description": "My eslint configuration for React Native ",
                        "primaryLanguage": {
                            "name": "JavaScript",
                            "color": "#f1e05a"
                        },
                        "stargazerCount": 0,
                        "forkCount": 0,
                        "updatedAt": "2020-10-25T23:05:26Z",
                        "url": "https://github.com/victory-a/eslint-config-react-native-wcandillon"
                    }
                ]
            }
        }
    }
  }
  
  
// console.log(data.data.viewer)

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
window.addEventListener('scroll', () => toggleTabLeftSection());

function selectElementbyId(id) {
    return document.getElementById(id);
}
// select elements to be populated
let userAvatar = selectElementbyId('userAvatar');
let userName = selectElementbyId('username');


const { avatarUrl, bio, login, name, url, repositories } = data.data.viewer;




