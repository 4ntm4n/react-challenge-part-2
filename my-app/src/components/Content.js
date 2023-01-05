import React, { Component } from 'react'
import { savedPosts } from '../posts.json'
import css from './css/Content.module.css'
import Loader from './Loader'
import PostItem from './PostItem'

class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
      }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResult}>
                {
                    this.state.isLoaded ? (
                        savedPosts.map((post) => <PostItem key={post.title} post={post} />)
                    ) : (<Loader />)
                }
                </div>
            </div>
        )
    }
}

export default Content