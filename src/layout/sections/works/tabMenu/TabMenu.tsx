import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {Theme} from "../../../../styles/Theme";


export type TabsStatusType = "all" | "landing" | "React" | "SPA"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={'button'} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    margin-top: 30px;

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }

    @media ${Theme.media.mobile} {
        margin-top: 10px;
    }
`
const ListItem = styled.li`

`


export default TabMenu;