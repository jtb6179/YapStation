import React, { Component } from 'react'
import { Row, Col, Card, Icon } from 'react-materialize'

class BabbleCard extends Component {

    handleClick = (event) => {
        this.props.setBabble(this.props.babble)
    } 
    render() {
        let {text} = this.props.babble
        // console.log(this.props.babble);
        
        return (
            <div>
                <Row>
                    <Col
                        m={10}
                        s={12}
                                    >
                        <Card
                        // actions={[
                        //     <a key="1" href="#">This is a link</a>,
                        //     <a key="2" href="#">This is a link</a>
                        // ]}
                        className="red darken-2"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        >
                    <div onClick={this.handleClick}> 
                        <div id={this.props.id}>
                            {text} 
                        </div>
                        <div>
                            <p>Likes: {this.props.babble.babble_likes.length} </p>
                            <p>comment: {this.props.babble.comments.length}</p>
                        </div>
                    </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BabbleCard
