import React from 'react'
import styled from 'styled-components'
import Image from 'react-bootstrap/Image'
const Blogcard = styled.div`
    *{
        margin: 0;
    }
    background-color: #02092D;
    padding: 10px;
    margin: 10px;
    color: white;
    .tag {
        background-color: #171D40;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        margin: 10px 0 20px;
        width: 150px;
    }
    .link{
        color: #FF9900;
        text-transform: capitalize;
        text-decoration: none;
        font-weight: bold; 
        font-size: 12px;
    }
    .date{
        font-size: 12px;
    }
    .title{
        font-weight: bold;
    }
    .discription{
        margin: 10px 0;
        font-size: 14px;
    }
    .image{
        border-radius: 10px;
        width: 50px;
        height: 50px;
    }
    .w-200p{
        width: 250px;
        margin: 0 10px;
        margin-right: 30px;
    }
`
export const BlogCard = (props) => {
    const {tag,postedBy, pic, date, title, discription} = props
  return (
    <Blogcard>
        <div className='rounded tag'>
            {tag}
        </div>
        <div className='d-flex '>
            <Image className='image' src={pic} />
            <div className='w-200p'>
                <p className=''>
                    Posted By,{postedBy}
                </p>
                <p className='date'>
                    {date}
                </p>
                <p className='title'>
                    {title}
                </p>
                <p className='discription'>
                    {discription}
                </p>
            </div>
        </div>
        <a href='#' className='link'>
            View Details
        </a>
    </Blogcard>

    )
}
