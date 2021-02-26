import styled from "@emotion/styled"
import { getSize, getSizeAuto } from "utils/common/size-utils";

export const Container = styled.div`
    padding: ${getSize(10)};
    position: sticky;
    top: 0;
    box-shadow: 0 0 6px 0 var(--g-colorGray200Hovered);
    z-index: 1000;
    background: #fff;
    .header {
        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__logo {
            width: ${getSize(50)};
            height: ${getSize(50)};
        }
    }
    .nav {
        display: flex;
        align-items: center;
        &__item {
            position: relative;
            margin-right: ${getSize(10)};
            cursor: pointer;
            padding-bottom: ${getSize(5)};
            font-size: ${getSize(13)};
            
            &:after {
                position: absolute;
                left: 0;
                bottom: 0;
                content: "";
                height: 2px;
                width: 0;
                display: block;
                background: #000;
                transition: width .3s ease-in;
            }
            &:hover {
                &:after {
                    width: 100%;
                }
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
`