import React, {Component} from 'react'

import VideoDetail from '@/Components/VideoDetail/VideoDetail'

class index_VideoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id
        }

    }


    render() {
        return (
            <VideoDetail id={this.state.id}/>
        )
    }

}


export default index_VideoDetail