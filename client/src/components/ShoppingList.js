import React, {Component} from 'react';
import ItemModal from './itemModal';
import { connect } from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

class ShoppingList extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = (id) =>{
        this.props.deleteItem(id);
    }

    render(){
        const {items} = this.props.item;
        return(
            <Container>
                <ItemModal/>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn mr-3" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);