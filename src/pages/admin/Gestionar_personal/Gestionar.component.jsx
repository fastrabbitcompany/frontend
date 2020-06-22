import React from 'react';
import './admin.styles.css';
import SideBar from "../../../components/side-bar/SideBar";
import {MDBDataTable} from 'mdbreact';
import {Button} from "react-bootstrap";
import swal from "sweetalert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import UserForm from "../../../components/admin-control/CreateUserForm.component";
import UserFormUpdate from "../../../components/admin-control/UpdateUserForm.component";


class Gestionar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: "",
            email: "",
            password: "",
            phoneNumber: "",
            first_name: "",
            last_name: "",
            address: "",
            employeeIsActive: "",
            employeeRole: "",
            token: "",
            show: false,
            showEdit:false,
            toEdit:{},
        }
    }

    eliminarEmpleado = (body, name) => {
        swal({
            title: "Are you sure?",
            text: "You going to delete " + name,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let headers = {
                        "content-type": "application/json",
                    }
                    console.log("body delete", body)
                    fetch("https://fastrabbitback.herokuapp.com/api/admin/updateemployee", {
                        method: "post",
                        body: JSON.stringify(body),
                        headers: headers
                    }).then(res => res.json())
                        .then(res => {
                            if (res.success) {
                                console.log(res)
                                swal("User deleted", name + " Has been deleted", "success");
                                setTimeout(function(){ window.location.reload(false)}, 1000);
                            } else {
                                swal("error", "No se pudo eliminar", "error");
                            }
                        })

                }
            });
    }
    parseData = (users) => {
        let data = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Last Name',
                    field: 'lastname',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Position',
                    field: 'position',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Editar',
                    field: 'editar',
                    sort: 'asc',
                    width: 20
                },
                {
                    label: 'Eliminar',
                    field: 'eliminar',
                    sort: 'asc',
                    width: 20
                }
            ],
            rows: []
        };
        users.forEach(user => {
            data.rows.push({
                id: user.UserEmployee.id,
                name: user.UserEmployee.firstName,
                lastname: user.UserEmployee.lastName,
                position: user.RoleEmployee.roleName,
                email: user.UserEmployee.email,
                editar: <Button variant={"primary"} onClick={() => this.setState({showEdit:true, toEdit:{
                        username:user.UserEmployee.username,
                        modal_email:user.UserEmployee.email,
                        modal_password:user.UserEmployee.password,
                        modal_phoneNumber:user.UserEmployee.phoneNumber,
                        modal_firstName:user.UserEmployee.firstName,
                        modal_lastName:user.UserEmployee.lastName,
                        modal_address:user.UserEmployee.address,
                    }})} size={"sm"}> <FontAwesomeIcon className={"mr-2"} icon={faPencilAlt}
                                                                                  style={{color: "white"}}/> Editar</Button>,
                eliminar: <Button onClick={() => this.eliminarEmpleado({
                    username: user.UserEmployee.username,
                    employeeIsActive: 0
                }, user.UserEmployee.firstName + " " + user.UserEmployee.lastName)} variant={"danger"}
                                  size={"sm"}> <FontAwesomeIcon className={"mr-2"} icon={faTrash}
                                                                style={{color: "white"}}/>Eliminar</Button>
            })
        });
        return data;
    };

    componentDidMount() {
        let body = {
            token: localStorage.getItem("token")
        }
        let headers = {
            "content-type": "application/json",
        }
        fetch("https://fastrabbitback.herokuapp.com/api/admin/getallemployee", {
            method: "post",
            body: JSON.stringify(body),
            headers: headers
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.success) {
                    let data = this.parseData(res.users);
                    this.setState({
                        data: data
                    })
                }
            })

    }


    render() {

        return (
            <div className="ScreenAdmin">
                <SideBar handler={this.props.handlerNav} data={this.props.sideBarData}/>
                <div className={"mt-4"} style={{marginLeft: "70px", marginRight: "10px"}}>
                    <Button className={"my-4"} variant="primary" onClick={() => this.setState({show: true})}>
                        <FontAwesomeIcon className={"mr-2"} icon={faPlus}
                                         style={{color: "white"}}/> Agregar Nuevo Empleado
                    </Button>
                    <hr/>
                    <Modal show={this.state.show} size="lg" onHide={() => this.setState({show: false})}
                           animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Create User
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UserForm/>
                        </Modal.Body>
                    </Modal>
                    <Modal show={this.state.showEdit} size="lg" onHide={() => this.setState({showEdit: false})}
                           animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Update User
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UserFormUpdate data = {this.state.toEdit}/>
                        </Modal.Body>
                    </Modal>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={this.state.data}
                    />
                </div>
            </div>

        );
    }
}

export default Gestionar;