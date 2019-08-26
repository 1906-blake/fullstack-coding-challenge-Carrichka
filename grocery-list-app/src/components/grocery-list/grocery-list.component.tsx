import React from 'react';
import { Form, Label, Input, Button, Container, Table } from 'reactstrap'
import { GroceryItem } from '../../models/grocery-items';

interface IState {
    items: GroceryItem[]
}


export class GroceryList extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount = async () => {
        const resp = await fetch('http://localhost:8012/grocery-lists', {
            credentials: 'include'
        })
        const items = await resp.json();

        this.setState({
            ...this.state,
            items
        })

        console.log(items);
    }

    render() {
        const items = this.state.items

        return (
            <div className="user-table">
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th>Item Type</th>
                                <th>List</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items && items.map(item =>
                                    <tr>
                                        <th scope="row">{item.itemId}</th>
                                        <td>{item.itemName}</td>
                                        <td>{item.type}</td>
                                        {/* <td>{item.groceryList.listName}</td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }

}