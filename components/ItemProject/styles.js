import styled from "@emotion/styled"
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
    display: block;
    position: relative;
    border-collapse: separate; 
    border-radius: 5px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: ${getSize(16)};
    box-sizing: border-box;
    cursor: pointer;
    over-flow: hiden;
    
    .item {
        &__content {
            position: relative;
            &:hover {
                .item-hover {
                    opacity: 1;
                    visibility: inherit;
                }
                .item__img {
                    img {
                        transform: scale(1.1);
                    }
                }
            }
        }
        &__img {
            overflow: hidden;
            img {
                transition: all .2s ease-in-out;
                border-radius: 8px;
            }
        }
       
        &-hover {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: ${getSize(10)};
            overflow: hidden;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.38);
            color: #fff;
            border-radius: 8px;
            .ttl {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1; /* after 1 line show ... */
                -webkit-box-orient: vertical;
            }
        }
    }
`;