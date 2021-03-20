import React from 'react';
import {Dialog, DialogBackdrop, DialogDisclosure, useDialogState,} from "reakit/Dialog";
import {css} from "@emotion/css";

const backdropStyles = css`
  perspective: 800px;
  transition: opacity 250ms ease-in-out;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 999;
  &[data-enter] {
    opacity: 1;
  }
`;

const dialogueStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: white;
`;

export const FileExport = () => {
    const dialog = useDialogState();
    return (
        <>
            <DialogDisclosure {...dialog}>
                <img src={"./export.svg"} className="export" alt="export"
                                               data-testid="file-export"/>
            </DialogDisclosure>
            <DialogBackdrop {...dialog} className={backdropStyles}>
                <Dialog {...dialog} aria-label="Welcome" className={dialogueStyles}>
                    Welcome to Reakit!
                </Dialog>
            </DialogBackdrop>
        </>
    )
}