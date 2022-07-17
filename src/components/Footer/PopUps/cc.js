import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function CodeOfConduct(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2><b>Code of Conduct</b></h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Loreum ipsum</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} style={{backgroundColor: "#2883D7"}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CodeOfConduct