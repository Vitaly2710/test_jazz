import axios from 'axios'

export const FetchUser = async (props) => {
  const res = await axios('https://reqres.in/api/users?page=2')
  const data = await res.data
  const user = await data.data[props]
  return user
}
