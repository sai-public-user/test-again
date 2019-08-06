import React, { Component, Fragment } from 'react';
import {
    Input,
    Grid,
    Radio,
} from 'semantic-ui-react';

import TableHeader from './tableHeader';
import TableRows from './tableRows';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                { name: 'Ticket Id', value: 'id' },
                { name: 'Task Name', value: 'name' },
                { name: 'Status', value: 'status' },
                { name: 'Requestor RACFID', value: 'rafcid' },
                { name: 'Migration Status', value: 'mstatus'},
                { name: 'Actions', value: 'actions' },
            ],
            rows: [
                {
                    id: 'DPR12149',
                    name: 'Backend URL Change',
                    status: 'Completed',
                    rafcid: 'I3eb',
                    mstatus: 'N/A',
                }, {
                    id: 'DPR12150',
                    name: 'Backend URL Not Change',
                    status: 'Completing',
                    rafcid: 'I3fc',
                    mstatus: 'N/A',
                },
                
            ],
            expandedrows: [],
            radiosChecked: [],
        };
    }

    onExpandRow = (e) => {
        const { currentTarget } = e
        const name = currentTarget.getAttribute('name');
        let { expandedrows = [] } = this.state;
        if (expandedrows.includes(name)) expandedrows = expandedrows.filter(one => one !== name);
        else expandedrows.push(name); 
        this.setState({ expandedrows });
    }

    // onRadioClick = (e, { name }) => {
    //     let { radiosChecked = [] } = this.state;
    //     if (radiosChecked.includes(name)) radiosChecked = radiosChecked.filter(one => one !== name);
    //     else radiosChecked.push(name); 
    //     this.setState({ radiosChecked });
    // }

    render() {
        const { headers, rows, expandedrows, radiosChecked } = this.state;
        return ( 
            <Fragment>
                {/* <Grid className="tableSearch" columns={2}>
                    <Input className="search-field" icon='search' placeholder='Search...' />
                    <div className="filters">
                        <span className="filtertag">Filter by:</span>
                        <Radio label='Completed' checked={radiosChecked.includes('completed')} name="completed" onClick={this.onRadioClick} />
                        <Radio label='In Progress' checked={radiosChecked.includes('inprogress')} name="inprogress" onClick={this.onRadioClick} />
                        <Radio label='Denied' checked={radiosChecked.includes('denied')} name="denied" onClick={this.onRadioClick} />
                        <Radio label='Drafted' checked={radiosChecked.includes('drafted')} name="drafted" onClick={this.onRadioClick} />
                    </div>
                </Grid> */}
                <div class="tableData">
                    <TableHeader headers={headers} />
                    <TableRows headers={headers} rows={rows} expandedrows={expandedrows} expandRow={this.onExpandRow} />
                </div>
            </Fragment>
         );
    }
}
 
export default TableData;
