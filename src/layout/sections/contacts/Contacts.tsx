import React from 'react';
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Contacts_Styles"


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <FlexWrapper direction={'column'}>
                    <S.TitleContacts>Wanna be starting something ?</S.TitleContacts>
                    <S.BottomRightWrapper>
                        <S.LinkWrapper>
                            <Link href={''}>mari.krulikovskaya@mail.ru</Link>
                            <Button typeButton={'submit'} text={'Send message'}></Button>
                        </S.LinkWrapper>
                    </S.BottomRightWrapper>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

