import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import EditForm from "../EditForm/EditForm";
import { DeleteUser } from "../../Actions/UserAction";
import { connect } from "react-redux";
import "./Users.css";

const Users = ({ Users, deleteUser, editUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (event) => {
    deleteUser(Users.id);
  };

  return (
    <>
      <div className="Users">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {Users.name}</ListGroup.Item>
            <ListGroup.Item>Email: {Users.email}</ListGroup.Item>
            <ListGroup.Item>Gen: {Users.gen}</ListGroup.Item>
          </ListGroup>
        </Card>
        <div className="card-btn">
          <button className="btn btn-success edit" onClick={handleShow}>
            Edit
          </button>
          <button className="btn btn-danger delete" onClick={handleDelete}>
            Delete
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm
              Users={Users}
              editUser={editUser}
              closeModal={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  DeleteUser: DeleteUser,
};

export default connect(null, mapDispatchToProps)(Users);
