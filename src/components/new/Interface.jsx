import React from "react";
import {Button} from "reakit/Button";
import {Tooltip, TooltipReference, useTooltipState} from "reakit/Tooltip";

import FileUpload from './InputFile';
import ErrorBoundary from '../ErrorBoundary/Error';
import {fileName} from './slices/filesSlice';

export default function Interface() {
    const tooltip1 = useTooltipState({baseId: 'tooltip1'});
    const tooltip2 = useTooltipState({baseId: 'tooltip2'});
    const tooltip3 = useTooltipState({baseId: 'tooltip3'});
    const tooltip4 = useTooltipState({baseId: 'tooltip4'});
    const tooltip5 = useTooltipState({baseId: 'tooltip5'});
    const tooltip6 = useTooltipState({baseId: 'tooltip6'});
    const tooltip7 = useTooltipState({baseId: 'tooltip7'});

    return (
        <ErrorBoundary>
            <ul>
                <li>
                    File: {fileName}
                </li>
                <li>
                    <TooltipReference {...tooltip1} as={Button}>
                        <img src={"./cut.svg"} className="left-cut" alt="left cut"/>
                    </TooltipReference>
                    <Tooltip {...tooltip1}>Drap and drop to use as first edit point</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip2} as={Button}>
                        <img src={"./cut.svg"} className="right-cut" alt="right cut"/>
                    </TooltipReference>
                    <Tooltip {...tooltip2}>Drap and drop to use as the second edit point</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip3} as={Button}>
                        <img src={"./left-frame.svg"} className="left-frame" alt="left frame"/>
                    </TooltipReference>
                    <Tooltip {...tooltip3}>Left frame</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip4} as={Button}>
                        <img src={"./play.svg"} className="play" alt="play"/>
                    </TooltipReference>
                    <Tooltip {...tooltip4}>Play</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip5} as={Button}>
                        <img src={"./right-frame.svg"} className="right-frame" alt="right frame"/>
                    </TooltipReference>
                    <Tooltip {...tooltip5}>Right Frame</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip6}>
                        <FileUpload/>
                    </TooltipReference>
                    <Tooltip {...tooltip6}>Upload</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip7} as={Button}>
                        <img src={"./export.svg"} className="export" alt="export"/>
                    </TooltipReference>
                    <Tooltip {...tooltip7}>Export</Tooltip>
                </li>
            </ul>
        </ErrorBoundary>
    )
}