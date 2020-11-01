import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ThreadService from '../service/ThreadService';

type modalProps = {
  type: string,
  reportID: string
}

export default function ReportModal(props: modalProps) {
  const reportID = props.reportID;
  const history = useHistory();
  const [thread, setThread] = useState<any>([{}, {thread:{}, userInfo:{}, userInfo:{}}]);
  const [comment, setComment] = useState<any>([{comment:{}, userInfo:{}}]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetching = () => {
    if(props.type === 'thread') {
      if(reportID !== undefined) {
        ThreadService.fetchOneThreadReport(reportID)
        .then(obj => {
          setThread(obj)
        });
      }
    } else {
      if(reportID !== undefined) {
        ThreadService.fetchOneCommentReport(reportID)
        .then(obj => {
          setComment(obj)
        })
      }
    }
  };
  
  useEffect(() => {
    fetching();
  }, []); console.log(thread[0])

  return (
    <>
      <Button onClick={handleShow}>
        Read
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title> { props.type } Report </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Topic : {thread[1].thread.topic} &nbsp; By : {} <br />
          Reason : {}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}