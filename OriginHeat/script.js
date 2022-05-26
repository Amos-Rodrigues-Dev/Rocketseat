window.onload = function () {
  const LinksSocialMedia = {
    github: 'amos-rodrigues-dev',
    lin: '/',
    facebook: '/',
    instagram: 'amos.adm.rh',
    twitter: '/'
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
  changeSocialMediaLinks()

  function getGitHubProfilesInfos(user) {
    const url = `https://api.github.com/users/${user}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.innerText = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
      })
  }
  getGitHubProfilesInfos(LinksSocialMedia.github)
}

// fetch(url).then(response =>
//   response
//     .json()
//     .then(json =>
//       response.ok
//         ? Promise.resolve(console.log(json))
//         : Promise.reject(json)
//     )
// )

// const url = `https://api.github.com/users/${user}`
// const userInfo = await fetch(url)
// const result = await userInfo.json()

// const { name } = result

// https://api.github.com/users/amos-rodrigues-dev

// {
//   "login": "Amos-Rodrigues-Dev",
//   "id": 73254602,
//   "node_id": "MDQ6VXNlcjczMjU0NjAy",
//   "avatar_url": "https://avatars.githubusercontent.com/u/73254602?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Amos-Rodrigues-Dev",
//   "html_url": "https://github.com/Amos-Rodrigues-Dev",
//   "followers_url": "https://api.github.com/users/Amos-Rodrigues-Dev/followers",
//   "following_url": "https://api.github.com/users/Amos-Rodrigues-Dev/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Amos-Rodrigues-Dev/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Amos-Rodrigues-Dev/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Amos-Rodrigues-Dev/subscriptions",
//   "organizations_url": "https://api.github.com/users/Amos-Rodrigues-Dev/orgs",
//   "repos_url": "https://api.github.com/users/Amos-Rodrigues-Dev/repos",
//   "events_url": "https://api.github.com/users/Amos-Rodrigues-Dev/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Amos-Rodrigues-Dev/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Amós Rodrigues",
//   "company": "Trybe",
//   "blog": "https://amos-rodrigues-dev.github.io/",
//   "location": "Governador Valadares - MG",
//   "email": null,
//   "hireable": true,
//   "bio": "Web Development Student at Trybe",
//   "twitter_username": null,
//   "public_repos": 16,
//   "public_gists": 0,
//   "followers": 21,
//   "following": 4,
//   "created_at": "2020-10-21T19:39:20Z",
//   "updated_at": "2021-12-01T22:42:25Z"
//   }
