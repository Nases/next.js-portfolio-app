import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from "react"
const axios = require('axios')

export default () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('https://api.stackexchange.com/2.2/users/10179445?order=desc&sort=reputation&site=stackoverflow')
      .then(value => {
        console.log(value.data.items[0].reputation)
        const SOReputation = value.data.items[0].reputation
        setUser(prevstate => ({
          ...prevstate,
          SOReputation: SOReputation
        }))
      })
  }, [])
  return (
    <Layout title='About'>
      <div className="grid grid-col-3 gap-4">
        <div className="col-span-1 text-left">
          <p>
            <i className="fab fa-github"></i>
            &nbsp; <a className="text-orange-500" href="https://github.com/Nases">Github</a>

          </p>
          <p>
            <i className="fab fa-stack-overflow"></i>
            &nbsp;&nbsp; <a className="text-orange-500" href="https://stackoverflow.com/users/10179445/hasan-sefa-ozalp?tab=profile">Stackoverflow</a>
            &nbsp; Current Rep: <span className="text-green-500 blink">{user.SOReputation}</span>
          </p>
          <p>
            <i className="fas fa-box-open "></i>
            &nbsp;<a className="text-orange-500" href="https://codesandbox.io/u/Nases">CodeSandbox</a>
          </p>
          <p>
            <i className="fas fa-heart text-red-500"></i>
            &nbsp;&nbsp;Latin music & dancing
          </p>
        </div>
        <div className="col-span-2">
          <img src="assets/svg/about-me.svg" alt="About me" />
        </div>
      </div>

    </Layout>
  )
}