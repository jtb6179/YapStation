import React, { Component } from 'react'
import { Row, Col, Button,Collapsible, CollapsibleItem, Icon } from 'react-materialize'

class HomeBabbles extends Component {

    render() {
        // let {text} = this.props.babble
        console.log(this.props);
        
        return (
            <div> 
                <Collapsible
                    accordion
                    popout
                    
                    >
                        <CollapsibleItem
                            expanded={false}
                            header={this.props.bab.text}
                            icon={<Icon>filter_drama</Icon>}
                            node="div"
                            className="red darken-2"
                        >
                           <input className="search-txt" type="text" textClassName= "white-text" placeholder="       Comment . . ."  value={this.props.searchTerm}
                                onChange={this.gettingAllTheUsersSearch} />
                                <Button
                                    node="a"
                                    small
                                    style={{
                                    marginRight: '5px'
                                    }}
                                    waves="light"
                                    
                                         >
                                    Comment
                                </Button>
                        </CollapsibleItem>
                    </Collapsible>
            </div>
                 
        )
    }
}

export default HomeBabbles
