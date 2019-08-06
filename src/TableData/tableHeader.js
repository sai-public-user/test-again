import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

const TableHeader = (props) => {
    const { headers } = props;
    return (
        <Segment className="tableheader row">
            <Grid>
                {
                    Array.isArray(headers) && headers.map(({ name, value }) => (
                        value === 'actions' ? <div className="one wide column" key={value}></div> : <div className="three wide column" key={value}>{name}</div>
                    ))
                }
            </Grid>
        </Segment>
    )
};

export default TableHeader;
