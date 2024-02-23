import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import TabMenu from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import SocialNetworkPic from '../../../images/SocialNetwork.png';
import TimerPic from "../../../images/TimerApp.png"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"
import {TabsStatusType} from "./tabMenu/TabMenu";




const tabsItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "React"
    },
    {
        title: "SPA",
        status: "SPA"
    }
]

const worksData = [
    {
        title: 'Social network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src: SocialNetworkPic,
        type: "SPA"
    },
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src: TimerPic,
        type: "React"
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "React") {
        filteredWorks = worksData.filter(work => work.type === "React")
    }

    if (currentFilterStatus === "SPA") {
        filteredWorks = worksData.filter(work => work.type === "SPA")
    }

    function changeFilterStatus (value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }


    return (
        <S.Works id={'works'}>
            <Container>
                <FlexWrapper align={'center'} justify={'center'}>
                    <SectionTitle BgTitle={'portfolio'} FrontTitle={'latest works'}/>
                </FlexWrapper>

                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={'space-around'} align={'flex-start'} wrap={'wrap'}>
                    {filteredWorks.map((w) => {
                        return <Work title={w.title}
                                     text={w.text}
                                     src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


