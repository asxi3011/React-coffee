import { React, useState} from "react"
import '../App.css';

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Loading({status}) {
  const [show, setShow] = useState(status);
    const handleShow = () => setShow(true);
  return (
      <> 
    <Modal show={show} onHide={handleShow} aria-labelledby="contained-modal-title-vcenter">     
        <Modal.Body>     
        <ClipLoader color={"#f00"} loading={true} css={override} size={150} />
        </Modal.Body>  
    </Modal>
 </>
  

  );
}


