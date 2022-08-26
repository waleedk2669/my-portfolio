import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import { BlogCard } from './blogCard'
import { Heading } from './heading'
import Button from 'react-bootstrap/esm/Button'
export const Blog = () => {
  const data = [
    {
      tag: 'Web Design',
      postedBy: 'Alen Jodge',
      date: '05 January 2022',
      title: 'Donec A Porttitor Phari Sod Tellus Nunc Quis Erosn.',
      discription: 'Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent nec neque at dolor ti venenatis consectetur eu quis ex.',
      pic: '/img/girldp.jpg'

    },
    {
      tag: 'Web Design',
      postedBy: 'Alen Jodge',
      date: '05 January 2022',
      title: 'Donec A Porttitor Phari Sod Tellus Nunc Quis Erosn.',
      discription: 'Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent nec neque at dolor ti venenatis consectetur eu quis ex.',
      pic: '/img/girldp.jpg'

    }

  ]
  return (
    <Container className='bg-grey' fluid>

      <Container className='d-flex my-5 justify-content-center align-items-center '>
        {data.map((obj) => {
          return (<BlogCard {...obj} />);
        })}
        <Stack className='d-flex-colunm justify-content-around'>
        <div className='text-uppercase text-decoration-underline  mx-2' style={{color:'#ff9900'}}>Blog</div>

          <Heading className='text-align-left mx-2'>
            Latest News And<br />Article Modern <br />Design.
          </Heading>
          <Button variant="" className='fw-bold w-50 px-4 py-1 mx-2' style={{ borderRadius: "4px", background:'#ff9900',color:'black' }}>
            View All Blog
          </Button>
        </Stack>
      </Container>

    </Container>
  )
}
