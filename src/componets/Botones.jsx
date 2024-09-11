import React, {Component} from "react";
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class txtt extends Component {

    render() {
        
        return(
            
          
            <div><Container className="my-4">

                <Button variant="primary" className="me-2">buy now</Button>
                <Button variant="secondary">Contact</Button></Container></div>
        )
    }
  }