import React, { Component, Fragment } from 'react';
import {
    Grid,
    Segment,
    Divider,
    Accordion,
    Icon,
} from 'semantic-ui-react';

class TableRows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accordionRowData: {},
        };
    }

    getTitle = (row, headers, expandedrows, expandRow) => ({
        children: (
            <Grid centered>
                {
                    Array.isArray(headers) && headers.map(({ value }) => (
                        value === 'actions'
                            ? (
                                <div className="one wide column p-0" onClick={expandRow} name={row.id} key={value} style={{ color: 'blue' }}>
                                    {Array.isArray(expandedrows) && expandedrows.includes(row.id) ? <Icon name="minus circle" /> : <Icon name="plus circle" />}
                                </div>
                            )
                            : (<div className="three wide column p-0" name={row.id} key={value}>{row[value]}</div>)
                    ))
                }
            </Grid>
        ),
    });

    expandRowClicked = async (e) => {
        const {
            accordionRowData = {}
            // { govId1: resdta1, govId2: resData2 }
        } = this.state;
        // const axios = {};
        await accordionRowData && accordionRowData[e.target.name] === undefined && axios.get('/getGovernance').then((res) => {
            accordionRowData[e.target.name] = res;
            this.setState({ accordionRowData });
        });
        await this.props.expandRow(e)
    }

    getAccordianContent = (id) => ({
        content: (
            <div className="accordian-content">{this.state.accordionRowData[id] ? this.state.accordionRowData[id] : 'No Accordion Content'}</div>
        ),
    });

    render() {
        const {
            rows = [], expandedrows = [],
            headers = [], expandRow,
        } = this.props;
    
        const panels = Array.isArray(rows) && rows.map(row => {
            const key = row.id;
            const title = this.getTitle(row, headers, expandedrows, expandRow);
            const content = this.getAccordianContent(row.id);
            return ({ key, title, content });
        });
        
        return ( 
            Array.isArray(rows) && rows.map((row, i) => {
                return (
                    <Segment className="tableRows row">
                        <Grid key={i} className="row">
                            <Accordion activeIndex={Array.isArray(expandedrows) && expandedrows.includes(row.id) ? 0 : -1} panels={[panels[i]]} className="row" />
                        </Grid>
                    </Segment>
                );
            })
        );
    }
}
 
export default TableRows;
