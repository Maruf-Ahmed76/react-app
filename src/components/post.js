import React,{Component} from "react"
import axois from "axios"
class Post extends Component{
    state = {
        post : []
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axois.get("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(res => {
            this.setState({
                post : res.data
            })
        })
    }
    render(){
        const thePost = this.state.post ?(
            <div className="conatiner">
                <h4 className="center">{this.state.post.title}</h4>
                <p className="center">{this.state.post.body}</p>
            </div>
        ):(
            <div className="center">Post loading.......</div>
        );

        return(
            <div className="container">
            {thePost}
            </div>
        )
    }
}
export default Post