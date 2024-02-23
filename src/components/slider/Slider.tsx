import React from 'react';
import User from '../../images/img_1.webp';
import {S} from "./Slider_Styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'


type SlidePropsType = {
    text: string;
    userPhoto: string;
    userName: string;
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.UserPic src={props.userPhoto}/>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide
        text={'“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”'}
        userPhoto={User} userName={'Lucas Wolfer'}/>,
    <Slide
        text={'“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”'}
        userPhoto={User} userName={'John Doe'}/>,
    <Slide
        text={'“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”'}
        userPhoto={User} userName={'Sam Tarley'}/>
];

export const Slider = () => (

        <S.Slider>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </S.Slider>

    )
;
