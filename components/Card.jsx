import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdb-react-ui-kit';

function GridExample({puppy}) {
  return (
    <MDBCol>
        <MDBCard>
          <MDBCardImage className="photo"
            src={
              puppy.imageUrl
                ? puppy.imageUrl
                : '../src/assets/puppy.jpeg'
            }
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{puppy.name}</MDBCardTitle>
            <MDBCardText>
            {puppy.breed}, {puppy.status}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  );
}

export default GridExample;