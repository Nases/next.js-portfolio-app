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
      <h5>Stuff I do</h5>

      <p>
        <i class="fab fa-github text-orange-500"></i>
        programming https://github.com/Nases
      </p>

      <p className="text-orange-500">
        <i class="fab fa-stack-overflow"></i>
        <a href="https://stackoverflow.com/users/10179445/hasan-sefa-ozalp?tab=profile">Stackoverflow</a>
        Current Rep: {user.SOReputation}
      </p>

      https://api.stackexchange.com/docs

      <p>
        <i class="fas fa-box-open text-orange-500"></i>
        sharing https://codesandbox.io/u/Nases
      </p>
      <p>♥ Latin music & dancing 🕺</p>
      {/* <img src="/js-logo.jpg" alt="Javascript logo" height="200px" /> */}
    </Layout>
  )
}