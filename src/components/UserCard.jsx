import React, { Component } from 'react'
import { Row, Col, Card, Icon, Dropdown } from 'react-materialize'

export class UserCard extends Component {

    state = {
        friends: []
    }
    
    handleClicked = (event) => {
        this.props.addFriends(this.props.usersInfo)
    }



    render() {
        console.log(this.props.current_user.friends);
        
        let {profile_name, bio, age, location } = this.props.usersInfo
        return (
            <div>
                <Row>
                    <Col
                        m={6}
                        s={12}
                        >
                            <Card
                            actions={<Dropdown
                            id="Dropdown_6"
                            options={{
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                container: null,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }}
                            trigger={<i className="small material-icons dropdown-trigger" data-target='dropdown1'>more_vert</i>}
                            >
                            <a href="#" onClick={this.handleClicked} >
                                Add as a Friend 
                            </a>
                            <a href="#">
                                Hit them up 
                            </a>
                            </Dropdown>}
                            className="white"
                            closeIcon={<Icon>close</Icon>}
                            revealIcon={<Icon>more_vert</Icon>}
                            textClassName="black-text"
                            title={<p> {profile_name} </p>}
                            >
                            <p> Bio: {bio} </p>
                            <p> age: {age} </p>
                            <p> location: {location} </p>
                            </Card>
                        </Col>
                    </Row>
                </div>
        )
    }
}

export default UserCard
