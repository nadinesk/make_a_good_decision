import React, { Component } from 'react';
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap'

export default class DecisionInput extends Component {

 constructor(props) {
    super(props);

   
    
   
  }

  
  render() {
  const total_pro = parseFloat(this.props.items.proweight1) + parseFloat(this.props.items.proweight2) +
   					parseFloat(this.props.items.proweight3) + parseFloat(this.props.items.proweight4) + 
   					 parseFloat(this.props.items.proweight5) 
  const total_con = parseFloat(this.props.items.conweight1) + parseFloat(this.props.items.conweight2) + 
  					parseFloat(this.props.items.conweight3) + parseFloat(this.props.items.conweight4) + 
  					parseFloat(this.props.items.conweight5)

    return (
     <Grid>
     	<br />
     	<Row>
     		<Col md={12}>
     			The Question is: {this.props.items.question} ?
     		</Col> 
     	</Row>
     	<Row>
     	<Col md={6}>
     	<h3>Pros</h3>  
     	<Table striped bordered condensed hover>
     		
     		<thead>
     			<tr>
     				<th>Item</th> 
     				<th>Weight</th> 
     			</tr> 
     		</thead> 
     		<tbody>
     			
     				<tr>
     					<td>{this.props.items.prodescription1}</td> 
     					<td>{this.props.items.proweight1}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.prodescription2}</td> 
     					<td>{this.props.items.proweight2}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.prodescription3}</td> 
     					<td>{this.props.items.proweight4}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.prodescription4}</td> 
     					<td>{this.props.items.proweight4}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.prodescription5}</td> 
     					<td>{this.props.items.proweight5}</td> 
     				</tr> 
     				
     				
     			
     			
     		</tbody>
     	</Table>
     	</Col> 
     	<Col md={6}>
     	<h3> Cons </h3> 
     		
		<Table striped bordered condensed hover>
     		
     		<thead>
     			<tr>
     				<th>Item</th> 
     				<th>Weight</th> 
     			</tr> 
     		</thead> 
     		<tbody>
     			
     				<tr>
     					<td>{this.props.items.condescription1}</td> 
     					<td>{this.props.items.conweight1}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.condescription2}</td> 
     					<td>{this.props.items.conweight2}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.condescription3}</td> 
     					<td>{this.props.items.conweight4}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.condescription4}</td> 
     					<td>{this.props.items.conweight4}</td> 
     				</tr> 
     				<tr>
     					<td>{this.props.items.condescription5}</td> 
     					<td>{this.props.items.conweight5}</td> 
     				</tr> 
     				
     				
     			
     			
     		</tbody>
     	</Table>
     	</Col> 
	     </Row>

	     <Row> 
		     <Col md={12}> 
		     	<h4>Total: {total_pro - total_con}</h4>
		     </Col> 
	     </Row> 
	     <Row>
	     	<Col md={12}> 
		     	<h4>To Do, or Not To Do: 
		     	{total_pro - total_con === 0 ? "TBD" : total_pro - total_con > 0 ? "You should do it" : "You should not do it"}
		     	</h4> 
	     	</Col> 
	     </Row>

     	 <br /> 		 
	  </Grid> 


    );
  }
}