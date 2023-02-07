import UserInfo from '../UserInfo'
import BlogsList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <UserInfo />
    <BlogsList />
  </div>
)

export default Home
