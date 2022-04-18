import { useState } from "react";
import {ListOfProducts} from '../Helpers/Data.js';

const Carousel = () => {
    const [carousel,setCarousel] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setCarousel(carousel>0 ? carousel-1:2);
        } else{
            setCarousel(carousel>0 ? carousel+1:0);
        }
    };
    return(
        <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper carousel={carousel}>
        {sliderItems.map((food) => (
          <Slide name={food.name} key={food.id}>
            <InfoContainer>
              <Title>{food.title}</Title>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
    );
};

export default Carousel;