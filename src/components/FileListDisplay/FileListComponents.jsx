import React from 'react';
import PropTypes from 'prop-types';

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
                            <p data-testid="name">{x.name}</p>
                        </div>
                        <div className="column-3">
                            <p data-testid="size">{(x.size / 1000 / 1000).toFixed()}MB</p>
                        </div>
                    </section> : null
            )) : null}
        </section>
    )
}

FileListComponents.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        type: PropTypes.string,
        lastModified: PropTypes.number
    })).isRequired
}