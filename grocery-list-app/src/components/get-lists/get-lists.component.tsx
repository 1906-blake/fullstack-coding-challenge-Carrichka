import React from 'react';
import { Table, Input, Button, Container, Form, Label } from 'reactstrap'
import { GroceryList } from '../../models/grocery-list';

interface IState {
    lists: GroceryList[]
    listId: number
    newListName: string
}

export class GetLists extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            lists: [],
            listId: 0,
            newListName:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount = async () => {
        const resp = await fetch('http://localhost:8012/lists', {
            credentials: 'include'
        })
        const lists = await resp.json();

        this.setState({
            ...this.state,
            lists
        })
    }

    handleChange(event: any) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    submit = async (event:any) => {
        event.preventDefault();
        const submittedList = {
            listName:this.state.newListName
        }
        console.log(submittedList)
        const resp = await fetch('http://localhost:8012/lists', {
            credentials: 'include',
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submittedList)
        })

        const listFromServer = await resp.json();
    }

    render() {
        const lists = this.state.lists

        return (
            <div className="user-table">
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>List ID</th>
                                <th>List Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lists && lists.map(list =>
                                    <tr>
                                        <th scope="row">{list.listId}</th>
                                        <td>{list.listName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Container>
                <Form onSubmit={this.submit}>
                <Container>
                    <Form>
                        <Label>Create a new list</Label>
                        <Input
                            type="text"
                            name="newListName"
                            value={this.state.newListName}
                            onChange={this.handleChange}
                        ></Input>
                        <Button className="btn-lg btn-primary" type="submit">Create</Button>
                    </Form>
                </Container>
                </Form>
            </div>
        )
    }
}