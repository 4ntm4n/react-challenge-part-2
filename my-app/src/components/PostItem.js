import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const post = props.post;
    const title = post.title
    const artist = post.name
    const image = post.image
    const description = post.description
    return (
        <div  className={css.SearchItem}>
            <p>Title: {title}</p>
            <p>Artist: {artist}</p>
            <img src={image} alt={description}/>
            <p>Description: {description}</p>
        </div>
    )

}

export default PostItem