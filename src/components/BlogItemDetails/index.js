// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const UpdatedItemData = {
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogItemData: UpdatedItemData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItemData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blog-container">{this.renderBlogItemDetails()}</div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
