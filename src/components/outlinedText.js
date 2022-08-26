import styled from 'styled-components';

export const OutlinedHeading = styled.span`
    color: transparent !important;
    font-size: 3rem !important;
    -webkit-text-stroke: 2px wheat !important;
    &.text-yellow {
        -webkit-text-stroke: 2px #ff9900 !important;
    }
    &.text-grey {
        -webkit-text-stroke: 2px #565979 !important;
    }
    `;