import React from 'react';
import { FlexWrapper } from './FlexWrapper';
import { SectionTitle } from './SectionTitle';

type SectionTitleWrapperProps = {
    BgTitle: string;
    FrontTitle: string;
    flexWrapperProps?: {
        direction?: string;
        justify?: string;
        align?: string;
        wrap?: string;
    };
}

const SectionTitleWrapper = ({ BgTitle, FrontTitle, flexWrapperProps }: SectionTitleWrapperProps) => (
    <FlexWrapper {...flexWrapperProps}>
        <SectionTitle BgTitle={BgTitle} FrontTitle={FrontTitle} />
    </FlexWrapper>
);

export default SectionTitleWrapper;
