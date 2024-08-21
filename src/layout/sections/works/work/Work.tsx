import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles"

type WorkProps = {
    title: string;
    text: string;
    src: string;
    domainLink: string | null;
    codeLink: string;
}

export const Work: React.FC<WorkProps> = (props: WorkProps) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={''}/>
                <Button text={'View project'} onClick={() => {}}></Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                {props.domainLink ? (
                    <Link active href={props.domainLink}>
                        demo
                    </Link>
                ) : null}
                <Link href={props.codeLink}>code</Link>
            </S.Description>
        </S.Work>
    );
};