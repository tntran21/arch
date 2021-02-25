import * as React from 'react'
import { css, Global } from "@emotion/core";
import { getSize, getSizeAuto } from "utils/common/size-utils";

export const baseStyle = (
    <Global 
        styles={
            css`
            html,
            body {
                // Disables pull-to-refresh and overscroll glow effect.
                overscroll-behavior: none;
                -webkit-tap-highlight-color: transparent; /* for removing the highlight on Android */
                @supports (-webkit-touch-callout: none) {
                    /* CSS specific to iOS devices */
                    -webkit-text-size-adjust: none;
                }
            }
            body {
                color: var(--primary-text-color);
                font-family: "MonsterratRegular";
                font-size: ${getSize(14)};
            }
            :root {
                --ts: 414;
                --ss: 414;
            }
            @media (max-width: 320px) {
                :root {
                    --ss: 320;
                }
            }
            @media (min-width: 320px) {
                :root {
                    --ss: 331.2;
                }
            }
            @media (min-width: 375px) {
                :root {
                    --ss: 372.6;
                }
            }
            @media (min-width: 414px) {
                :root {
                    --ss: 414;
                }
            }
            @media (min-width: 480px) {
                :root {
                    --ss: 455.4;
                }
            }
            `
        }
    />
)


export const resetStyle = (
    <Global
        styles={css`
            html,
            body,
            div,
            span,
            applet,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            a,
            abbr,
            acronym,
            address,
            big,
            cite,
            code,
            del,
            dfn,
            em,
            font,
            img,
            ins,
            kbd,
            q,
            s,
            samp,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            var,
            b,
            u,
            i,
            center,
            dl,
            dt,
            dd,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td {
                margin: 0;
                padding: 0;
                border: 0;
                outline: 0;
                font-size: 100%;
                vertical-align: baseline;
                background: transparent;
            }
            body {
                line-height: 1;
            }
            ol,
            ul {
                list-style: none;
            }
            blockquote,
            q {
                quotes: none;
            }
            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
                content: "";
                content: none;
            }

            /* Remember to define focus styles! */
            :focus {
                outline: 0;
            }

            /* Remember to highlight inserts somehow! */
            ins {
                text-decoration: none;
            }
            del {
                text-decoration: line-through;
            }

            /* Tables still need 'cellspacing="0"' in the markup */
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }

            /* Remove margin, example: input[type=checkbox] */
            input[type="checkbox"] {
                margin: 0;
            }

            *:not(input):not(textarea) {
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;

                // Hide scroll bar
                scrollbar-width: none;
                ::-webkit-scrollbar {
                    display: none;
                }
            }
        `}
    />
);
