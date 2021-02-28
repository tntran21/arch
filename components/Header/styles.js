import styled from "@emotion/styled"
import { getSize, getSizeAuto } from "utils/common/size-utils";

export const Container = styled.div`
   
    position: sticky;
    top: 0;
    box-shadow: inset 0px -1px 0px #f3f4f4;
    z-index: 1000;
    background: #fff;
    .header {
        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: ${getSize(10, 20)};
            @media (max-width: 768px) {
                height: ${getSize(70)};
                box-sizing: border-box;
            }
            .icon__menu {
                display: none;
                width: 18px;
                height: 18px;
                color: var(--main-color);
                @media (max-width: 768px) {
                    display: block;
                }
            }
        }
        
        &__logo {
            width: ${getSize(50)};
            height: ${getSize(50)};
            margin-right: ${getSize(20)};
            @media (max-width: 768px) {
                margin-right: 0;
            }
        }
        &__left {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__right {
            display: flex;
            align-items: center;
            .social__item {
                display: inline-block;
                width: ${getSize(20)};
                height: ${getSize(20)};
                color: var(--main-color);
                margin-right: ${getSize(10)};
                font-size: ${getSize(22)};
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .nav {
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            display: none;
            width: 100%;
            height: calc(100vh - ${getSize(70)});
            background: #fff;
            position: absolute;
            left: 0;
            top: ${getSize(70)};
            overflow-x: hidden;
            overflow-y: auto;

            flex-direction: column;
            align-items: flex-start;
            padding: ${getSize(20)};
            box-sizing: border-box;

            &.active {
                display: flex;
            }
        }
        &__item {
            position: relative;
            margin-right: ${getSize(10)};
            cursor: pointer;
            padding-bottom: ${getSize(5)};
            font-size: ${getSize(13)};
            font-weight: bold;
            a {
                color: var(--main-color);
                text-decoration: none;
            }
            &:hover {
                a {
                    color: #ea4c89;
                }
            }
            &:last-child {
                margin-right: 0;
            }

            @media (max-width: 768px) {
                margin-bottom: ${getSize(10)};
            }
        }
    }
`