import React, {useEffect} from 'react';

const ChannelDisplay = () => {

    useEffect(() => {

        const video = document.querySelector('video');

        if (video) {
            let context = new AudioContext();
            let source = context.createMediaElementSource(video);
            let srcChannelCount = source.channelCount;
            console.dir(srcChannelCount);
        }

    }, );

    /*  if(elm) {
          elm.then(() => {

          });
      }*/


    /*    useEffect(() => {
            const video = document.querySelector('video');
            console.dir(video);
        },[])*/

    /*  useEffect(() => {
          const video = document.querySelector('video');
          if(video) {
              video.addEventListener('onplay', (e) => {
                  console.dir(e.captureStream());
                  console.dir(video.captureStream());
              });
          }
      }[]);*/

    return (
        <>
            <meter id="left"
                   min="0"
                   max="100"
                   low="33"
                   high="66"
                   optimum="80"
                   value="50"
            >
                at 50/100
            </meter>
        </>
    )
}

export default ChannelDisplay;