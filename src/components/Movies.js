import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Detail from './Detail'

function Movies() {

  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="https://w0.peakpx.com/wallpaper/378/623/HD-wallpaper-the-simpsons-the-simpsons-movie-homer-simpson.jpg" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQ07jcQDSzdqK3auQuWRjNPoVxDJYJC4iYg&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbBnogVh7fZnn-1kVnhz4JnfKraQbrtnHAA&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu1CtZhxWTGC4RCdWi45HUgisB9aQZIfEeg&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSURA_gtFUqUW4CL71gDueUXexUxEFOmL8g&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTsllUAl8ajY8Mkd_1Sryjb_hLasMvF1v8A&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcfxRm_ovZHNGGKiq7R9119r_Au-DsPCbPQ&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGT4dr5UNt3z3mRuC0_VbArsZ5z1XNS0XMw&usqp=CAU" />
            </Wrap>
            
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        tranform: scale(1.05);
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color:rgba(249, 249, 249, 0.8);

    }
`

