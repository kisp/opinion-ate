import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/K363R3gEJC8jigUFdR5ugZ9HGQpC2JDy',
})

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants')
    return response.data
  },
}

export default api
