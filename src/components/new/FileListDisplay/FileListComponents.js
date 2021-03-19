import React from 'react';

export const FileListComponents = (props) => {
    const {data} = props;

    return (
        <section className="file-row" data-testid='FileListComponents'>
            {data ? data.map(x => (x.name ?
                    <section className="file-row" key={x.name}>
                        <div className="column-1">
                            <img src={`./file.svg`} alt="file" className="icon"/>
                        </div>
                        <div className="column-2">
                            <p>{x.name}</p>
                        </div>
                        <div className="column-3">
                            <p>{(x.size / 1000 / 1000).toFixed()}MB</p>
                        </div>
                    </section> : null
            )) : null}
        </section>
    )
}