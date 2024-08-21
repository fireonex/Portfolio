import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import TabMenu, {TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"
import {AnimatePresence, motion} from "framer-motion"
import {tabsItems, worksData} from "../../../data/worksData";


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
                                          domainLink={w.domainLink}
                                          codeLink={w.codeLink}
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