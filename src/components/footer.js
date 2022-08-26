import React from 'react'
import Image from 'react-bootstrap/esm/Image'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocation, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  const Foter = styled.div`
  background-color: #22243C;
  &.footer{
  color:white;
  
  .links{
    
  }  
  .about-company{
    
  } 
  .location{
    i{font-size: 18px;}
  }
  
  .copyright {border-top:1px solid #ff9900;} 
}
.underline-yellow{
  text-decoration: underline;
  text-decoration-color: #ff9900;
}
.image{
    width: 100px;
  }
  .border-right-yellow{
    border-right: 1px solid #ff9900;
  }
`
  const data = [
    {
      title: 'Our Services',
      links: ['Strategy', 'Research & Web Development', 'Web Solution', 'Digital Merketing', 'App Design', 'App Development'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Services', 'Projects', 'Blog', 'Career', 'Pricing Plan'],
    }
  ]
  return (
    <Foter className="pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xs-12 about-company">
            <Image className = 'mx-5 my-3 image'src='/img/logo.svg' />
            <h4 className="my-2 underline-yellow mt-sm-3">Office</h4>
            <p className="my-3 text-white">168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
            <p className='my-5'>
            <a href="#" className='border text-white border-white rounded py-1 px-2 m-2 fs-6'><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#" className='border text-white border-white rounded py-1 px-2 m-2 fs-6'><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="#" className='border text-white border-white rounded py-1 px-2 m-2 fs-6'><FontAwesomeIcon icon={faPinterest}/></a>
            <a href="#" className='border text-white border-white rounded py-1 px-2 m-2 fs-6'><FontAwesomeIcon icon={faInstagram}/></a>
            </p>
          </div>
          {
            data.map((obj) => {
              return (
                <div className="col-lg-3 col-xs-12 links">

                  <h4 className="my-5  mt-sm-3">{obj.title}</h4>
                  <div className="m-0 p-0">
                    {
                      obj.links.map((ink) => {
                        return (<a className='d-block my-3 text-decoration-none text-white' href="#">{ink}</a>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }

          <div className="col-lg-3 col-xs-12 location">
          <h4 className="my-5 mx-3 mt-sm-3">Contacts</h4>
            <div className='d-flex align-items-start my-2'>
              <FontAwesomeIcon icon={faPhone} className="fs-3 mx-3 my-3 text-yellow "/>
              <div>
                <p  className='lh-lg mx-2'>
                +880 566 1111 985<br /> +880 657 1111 576
                </p>
                
              </div>
            </div>
            <div className='d-flex align-items-start my-2'>
              <FontAwesomeIcon icon={faEnvelope} className="fs-3 mx-3 my-3 text-yellow "/>
              <div>
                <p  className='lh-lg mx-2'>
                info@example.com<br />info@support.com
                </p>
              </div>
            </div>
            <div className='d-flex align-items-start my-2'>
              <FontAwesomeIcon icon={faLocationArrow} className="fs-3 mx-3 my-3 text-yellow "/>
              <div>
                <p  className='lh-base mx-2'>
                168/170, Avenue 01,<br /> Mirpur DOHS,<br /> Bangladesh
                </p>
               
              </div>
            </div>
            
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright d-flex align-items-center justify-content-between">
            <p className="">© 2019. All Rights Reserved.</p>
            <div>
              <a href='#' className='px-3 border-right-yellow d-inline-block text-white text-decoration-none'>
                Privacy Policy
              </a> 
              <a href='#' className='px-3 border-right-yellow d-inline-block text-white text-decoration-none'>
                Terms of Use
              </a>
              <a href='#' className='px-3 border-right-yellow d-inline-block text-white text-decoration-none'>
                Support Policy
              </a>
              <a href='#' className='px-3 d-inline-block text-white text-decoration-none'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </Foter>)
}
