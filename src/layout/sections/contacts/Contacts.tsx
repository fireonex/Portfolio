import React from 'react';
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Contacts_Styles"
import {LinkAsButton} from "../../../components/LinkAsButton";


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <FlexWrapper direction={'column'}>
                    <S.TitleContacts>Wanna be starting something ?</S.TitleContacts>
                    <S.BottomRightWrapper>
                        <S.LinkWrapper>
                            <Link href={''}
                                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                      e.preventDefault()
                                  }}
                                  style={{cursor: "default"}}>mari.krulikovskaya@mail.ru</Link>
                                {/*<Button typeButton={'submit'} text={'Send message'}></Button>*/}
                            {/*<Link href={'mailto:mari.krulikovskaya@mail.ru'}>Send message</Link>*/}
                            <LinkAsButton href={'mailto:mari.krulikovskaya@mail.ru'}>Send message</LinkAsButton>
                        </S.LinkWrapper>
                    </S.BottomRightWrapper>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

