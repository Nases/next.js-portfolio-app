import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from "react"
const axios = require('axios')

export default () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    // Get total rep form SO
    axios.get('https://api.stackexchange.com/2.2/users/10179445?order=desc&sort=reputation&site=stackoverflow')
      .then(value => {
        const SOReputation = value.data.items[0].reputation
        setUser(prevstate => ({
          ...prevstate,
          SOReputation
        }))
      })

    // Get public repo count, name and avatar from GitHub
    axios.get('https://api.github.com/users/Nases')
      .then(value => {
        const publicGithubRepos = value.data.public_repos
        const name = value.data.name
        const avatar = value.data.avatar_url
        console.log(avatar);

        setUser(prevstate => ({
          ...prevstate,
          publicGithubRepos,
          name,
          avatar
        }))
      })
  }, [])
  return (
    <Layout title='About'>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 text-left">
          <div className="mb-4">
            <img src={user.avatar} className="h-16 w-16 rounded-full inline mr-3" alt="Hasan Sefa Ozalp" />
            {user.name}
          </div>
          <p className="mb-4">
            <i className="fab fa-github"></i>
            &nbsp; <a className="text-orange-500" href="https://github.com/Nases">Github</a>
            <br />
            &nbsp; Public repos: <span className="text-green-500 blink">{user.publicGithubRepos}</span>
          </p>
          <p className="mb-4">
            <i className="fab fa-stack-overflow"></i>
            &nbsp;&nbsp; <a className="text-orange-500" href="https://stackoverflow.com/users/10179445/hasan-sefa-ozalp?tab=profile">Stackoverflow</a>
            <br />
            &nbsp; Current rep: <span className="text-green-500 blink">{user.SOReputation}</span>
          </p>
          <p className="mb-4">
            <i className="fas fa-box-open "></i>
            &nbsp;<a className="text-orange-500" href="https://codesandbox.io/u/Nases">CodeSandbox</a>
          </p>
          <p>
            <i className="fas fa-heart text-red-500"></i>
            &nbsp;&nbsp;Latin music & dancing
          </p>
        </div>
        <div className="col-span-1">
          <img src="assets/svg/about-me.svg" alt="About me" />
        </div>
      </div>
    </Layout>
  )
}