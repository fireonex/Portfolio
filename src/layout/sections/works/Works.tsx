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
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
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
        type: "SPA",
        id: 1
    },
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src: TimerPic,
        type: "React",
        id: 2
    },
    {
        title: 'Social network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src: SocialNetworkPic,
        type: "SPA",
        id: 3
    },
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src: TimerPic,
        type: "React",
        id: 4
    },
    {
        title: 'Social network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src: SocialNetworkPic,
        type: "SPA",
        id: 5
    },
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src: TimerPic,
        type: "React",
        id: 6
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

    function changeFilterStatus(value: TabsStatusType) {
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

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >

                                    <Work title={w.title}
                                          text={w.text}
                                          src={w.src}
                                          key={w.id}
                                    />


                                </motion.div>)

                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


