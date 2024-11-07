require('dotenv').config()
const express = require('express')
const app = express()


const port = 4000

const githubData = {
    "login": "AbhishekSinghaniya2002",
    "id": 102066156,
    "node_id": "U_kgDOBhVn7A",
    "avatar_url": "https://avatars.githubusercontent.com/u/102066156?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AbhishekSinghaniya2002",
    "html_url": "https://github.com/AbhishekSinghaniya2002",
    "followers_url": "https://api.github.com/users/AbhishekSinghaniya2002/followers",
    "following_url": "https://api.github.com/users/AbhishekSinghaniya2002/following{/other_user}",
    "gists_url": "https://api.github.com/users/AbhishekSinghaniya2002/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AbhishekSinghaniya2002/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AbhishekSinghaniya2002/subscriptions",
    "organizations_url": "https://api.github.com/users/AbhishekSinghaniya2002/orgs",
    "repos_url": "https://api.github.com/users/AbhishekSinghaniya2002/repos",
    "events_url": "https://api.github.com/users/AbhishekSinghaniya2002/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AbhishekSinghaniya2002/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Abhishek Singh",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "Abhishek_5869",
    "public_repos": 16,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-03-21T17:51:11Z",
    "updated_at": "2024-11-07T11:17:07Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('abhisheksingh02431@gmail.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hey my name is abhishek singh</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})