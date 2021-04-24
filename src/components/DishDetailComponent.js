import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderDish({dish}) {
        if (dish != null)
            return(
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <RenderComments comments={dish.comments}/>
                </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({comments}) {
        const comm = comments.map(x =>{
            return( 
             <div>
                   <h3>{x.comment}</h3>
                   <h3>{x.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</h3>
               </div>
            );
       });

       return(  
           <div>
               <h4>comments</h4>
               {comm}
           </div>
       )
      
    }

    const  DishDetail = (props) => {

      return(
          <div>
          <RenderDish dish={props.dish}/>
          </div>
      )
      
    }

export default DishDetail;
