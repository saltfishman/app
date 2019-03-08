import React, {Component} from 'react'

import FanArtDetail from '@/Components/FanArtDetail/FanArtDetail'

class index_FanArtDetail extends Component {
    constructor(props) {
        super(props)
        console.log(this,props)
        this.state = {
            id: props.match.params.iContentId
        }

    }


    render() {
        return (
            <FanArtDetail id={this.state.id}/>
        )
    }

}


export default index_FanArtDetail