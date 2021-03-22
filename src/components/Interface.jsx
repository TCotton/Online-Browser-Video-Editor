import React from "react";
import {Button} from "reakit/Button";
import {Tooltip, TooltipReference, useTooltipState} from "reakit/Tooltip";
import FileUpload from './PlayerComponents/InputFile';
import ErrorBoundary from './ErrorBoundary/Error';
import {Play} from './PlayerDisplay/Play';
import {Pause} from './PlayerDisplay/Pause';
import {Forward} from './PlayerDisplay/Forward';
import {Backward} from './PlayerDisplay/Backward';
import {Sound} from './PlayerDisplay/Sound';
import {FileExport} from "./FileExportComponents/FileExport";
import {AutoLoad} from "./AutoLoad/AutoLoad";

export default function Interface() {
    const tooltip3 = useTooltipState({baseId: 'tooltip3'});
    const tooltip4 = useTooltipState({baseId: 'tooltip4'});
    const tooltip5 = useTooltipState({baseId: 'tooltip5'});
    const tooltip6 = useTooltipState({baseId: 'tooltip6'});
    const tooltip7 = useTooltipState({baseId: 'tooltip7'});
    const tooltip8 = useTooltipState({baseId: 'tooltip8'});
    const tooltip9 = useTooltipState({baseId: 'tooltip9'});

    return (
        <ErrorBoundary>
            <ul>
                <li>
                    <button>
                        <img src={"./cut.svg"} className="right-cut" alt="right cut"/>
                    </button>
                </li>
                <li>
                    <TooltipReference {...tooltip3} as={Button}>
                        <Backward/>
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
                        <Forward/>
                    </TooltipReference>
                    <Tooltip {...tooltip5}>Forward</Tooltip>
                </li>

                <li>
                    <TooltipReference {...tooltip9} as={Button}>
                        <Sound/>
                    </TooltipReference>
                    <Tooltip {...tooltip9}>Mute/Sound</Tooltip>
                </li>

                <li>
                    <TooltipReference {...tooltip6}>
                        <FileUpload/>
                    </TooltipReference>
                    <Tooltip {...tooltip6}>Upload</Tooltip>
                </li>
                <li>
                    <TooltipReference {...tooltip7}>
                        <ErrorBoundary>
                            <FileExport/>
                        </ErrorBoundary>
                    </TooltipReference>
                    <Tooltip {...tooltip7}>Export</Tooltip>
                </li>
            </ul>
        </ErrorBoundary>
    )
}