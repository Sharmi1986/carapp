import styled from 'styled-components';

export const StyledStepperHeaderItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-top:100px;

    .step-counter {
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        padding: 10px;
        border-radius: 50%;
        background: #ccc;
        margin-bottom: 6px;
    }

    &::after {
        position: absolute;
        content: '';
        border-bottom: 5px solid #ccc;
        width: 100%;
        top: 25px;
        left: 50%;
        z-index: 2;
    }

    &.completed {
        .step-counter {
            background-color: red;
        }
        &::before {
            position: absolute;
            content: '';
            border-bottom: 5px solid red;
            width: 100%;
            top: 25px;
            left: -50%;
            z-index: 3;
        }
    }

    &:first-child {
        &::before {
            content: none;
        }
    }

    &:last-child {
        &::after {
            content: none;
        }
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const StyledStepperHeader = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;