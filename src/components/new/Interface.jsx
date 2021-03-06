import React from "react";
import {Button} from "reakit/Button";
import {Tooltip, TooltipReference, useTooltipState} from "reakit/Tooltip";

import FileUpload from './PlayerComponents/InputFile';
import ErrorBoundary from '../ErrorBoundary/Error';
import {fileName} from './slices/filesSlice';
import {Play} from './PlayerDisplay/Play';
import {Pause} from './PlayerDisplay/Pause';
import {Forward} from './PlayerDisplay/Forward';
import {Backward} from './PlayerDisplay/Backward';

export default function Interface() {
    const tooltip1 = useTooltipState({baseId: 'tooltip1'});
    const tooltip2 = useTooltipState({baseId: 'tooltip2'});
    const tooltip3 = useTooltipState({baseId: 'tooltip3'});
    const tooltip4 = useTooltipState({baseId: 'tooltip4'});
    const tooltip5 = useTooltipState({baseId: 'tooltip5'});
    const tooltip6 = useTooltipState({baseId: 'tooltip6'});
    const tooltip7 = useTooltipState({baseId: 'tooltip7'});
    const tooltip8 = useTooltipState({baseId: 'tooltip8'});

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
                        <Backward />
                    </TooltipReference>
                    <Tooltip {...tooltip3}>Backward</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip8} as={Button}>
                        <Pause/>
                    </TooltipReference>
                    <Tooltip {...tooltip8}>Stop</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip4} as={Button}>
                        <Play/>
                    </TooltipReference>
                    <Tooltip {...tooltip4}>Play</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip5} as={Button}>
                        <Forward />
                    </TooltipReference>
                    <Tooltip {...tooltip5}>Forward</Tooltip>
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