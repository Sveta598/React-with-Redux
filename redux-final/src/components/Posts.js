import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

//export default ({posts}) => {
    /*return (
        <div>
            <h1>Posts</h1>
        </div>
    )*/
    /*if (!posts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return posts.map(post => <Post post={post} key={post} />)
}*/

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null) (Posts)
