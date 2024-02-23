import {SectionTitleBg} from "./SectionTitleBg";
import {SectionTitleFront} from "./SectionTitleFront";


type SectionTitlePropsType = {
    BgTitle: string;
    FrontTitle: string;
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <SectionTitleBg>
            {props.BgTitle}
            <SectionTitleFront>
                {props.FrontTitle}
            </SectionTitleFront>
        </SectionTitleBg>
    );
};



