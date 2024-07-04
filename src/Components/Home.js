import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const Home = () => (
  <Grid verticalAlign='middle' columns={4} centered>
    <GridRow className='img' >
      <GridColumn >
        <Image src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
      </GridColumn>
      <GridColumn>
        <Image src='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' />
        <br />
        <Image src='https://media.istockphoto.com/id/1198272365/photo/colorful-wavy-object.jpg?s=612x612&w=0&k=20&c=2YRVxD1-x4hNeCpFD_aqXK0b_orDV9vAJ868FcPKFYU=' />
      </GridColumn>
      <GridColumn>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTaWdFa4d3hKvS6aRTAaClDy0T3qZYI7YL32mneSQSaWJ-YVInL26U0TQrExrIrlJHM4&usqp=CAU' />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default Home