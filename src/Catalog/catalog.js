import React, { Component, Fragment } from 'react';
import {
    Grid,
    Segment,
    Divider,
    Radio,
    Dropdown,
} from 'semantic-ui-react';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Services: [],
            soapServices: true,
            restServices: false,
            domainValue: null,
            servicesValue: null,
            servicesOptions: [],
        };
    }


    componentDidMount() {
        const { serviceList = null } = SampleData;
        const Services = Array.isArray(serviceList) ? serviceList.map(
            ({
                serviceName = null,
                domainName = null,
                serviceState = null,
            }) => ({
                'Service Name': serviceName,
                'Certificate Name': domainName,
                'Certificate State':  serviceState === 'certificate' ? 'Active' : 'Expiring Soon',
                'Environment Name': `Unit ${domainName.split('_Unit_')[1]}`,
            })
        ) : [];

        const servicesOptions = [
            {
                key: 'Place Holder',
                text: 'Place Holder',
                value: 'Place Holder',
            }, {
                key: 'Panda bears',
                text: 'Panda bears',
                value: 'Panda bears',
            }, {
                key: 'Pizza',
                text: 'Pizza',
                value: 'Pizza',
            }, {
                key: 'Cupcakes',
                text: 'Cupcakes',
                value: 'Cupcakes',
            },
        ];

        this.setState({ Services, servicesOptions });
    }

    getServices = () => {
        const { Services, soapServices } = this.state;
        return <Grid columns={2}>
                {
                    Services.map(one => (
                        <Grid.Column>
                            <Segment>
                                <Grid celled>
                                    <Grid.Row className="starting-row">
                                      <Grid.Column celled width={13}>
                                        <Grid.Row><span className="service-type">{ soapServices ? 'SOAP SERVICE Certificate' : 'REST SERVICE Certificate'}</span></Grid.Row>
                                        <Divider style={{ marginLeft: 0, marginRight: 0 }} />
                                        <Grid.Row><span className="sec-text">Environment: Unit</span></Grid.Row>
                                      </Grid.Column>
                                      <Grid.Column width={3}>
                                          display progress bar
                                      </Grid.Column>
                                    </Grid.Row>
                                    {Object.keys(one).length > 0 && Object.keys(one).map((key,i) => (<Grid.Row><Grid className="oneServiceData row" key={i}><Grid.Column className="title-name" width={8}><b>{`${key}:`}</b></Grid.Column><Grid.Column width={8} className="value-name">{one[key]}</Grid.Column></Grid></Grid.Row>))}
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    ))
                }
            </Grid>

    }

    onRadioServiceClick = (e, { name }) => {
        const { soapServices, restServices } = this.state;
        if (name === 'soap') this.setState({ soapServices: !soapServices, restServices: soapServices })
        else this.setState({ restServices: !restServices, soapServices: restServices })
    }

    render() {
        const {
            soapServices,
            restServices,
            servicesOptions,
        } = this.state;
        return (
            <div className="catlog">
                <Grid columns={2}>
                    <div className="underline-label row"><b>Environment</b></div>
                    <Grid.Row className="dropdown-content">
                        <Dropdown className="row" fluid selection search options={servicesOptions} placeholder='- Choose or Search for a Environment to find Services -' />
                    </Grid.Row>
                </Grid>
                <Grid className="catlog-data" columns={2}>
                    <div className="underline-label row"><b>Choose to Claim or Unclaim Services</b></div>
                    <div className="filters">
                        <Radio label='SOAP Services' checked={soapServices} name="soap" onClick={this.onRadioServiceClick} />
                        <Radio label='REST Services' checked={restServices} name="rest" onClick={this.onRadioServiceClick} />
                    </div>
                </Grid>
                <Grid className="catlog-data" columns={2}>
                    <div className="underline-label row"><b>Domain</b></div>
                    <Grid.Row className="dropdown-content">
                        <Dropdown className="row" fluid selection search options={servicesOptions} placeholder='- Choose or Search for a Domain to find Services -' />
                    </Grid.Row>
                </Grid>
                <Grid className="catlog-data" columns={2}>
                    <div className="underline-label row"><b>Services</b></div>
                    <Grid.Row className="dropdown-content">
                        <Dropdown className="row" fluid search selection options={servicesOptions} placeholder='- Choose or Search for a Services to find Services -' />
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row padding>
                        {this.getServices()}
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
 
export default Catalog;


const SampleData = {
    serviceList: [
        {
            datapowerBoxName: null,
            serviceName: 'AccumulatorRetrievalService',
            serviceState: 'certificate',
            domainName: 'Accumulator_Gateway_Unit_A',
            remoteEndProtocolDetails: 'http://accumssvc-unita.bcbsfl.com',
            publishEndProtocolDetails: 'https://google.com',
            facing: 'Internal Facing',
            frontSideTransactionTimeout: 180,
            frontSideConnectionTimeout: 120,
            backEndTransactionTimeout: 120,
            backEndConnectionTimeout: 120,
            maxMessageSize: null,
            baseWSDL: [{something: null}],
            xmlManager: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            },
            dataPowerInternalPort: 17001,
            frontProtocolValue: 'FSH-All-Web-Service-Proxies',
            certificateList: [],
            sync: false,
            userAgentUI: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            }
        }, {
            datapowerBoxName: null,
            serviceName: 'AccumulatorRetrievalService',
            serviceState: 'enabled',
            domainName: 'Accumulator_Gateway_Unit_A',
            remoteEndProtocolDetails: 'http://accumssvc-unita.bcbsfl.com',
            publishEndProtocolDetails: 'https://google.com',
            facing: 'Internal Facing',
            frontSideTransactionTimeout: 180,
            frontSideConnectionTimeout: 120,
            backEndTransactionTimeout: 120,
            backEndConnectionTimeout: 120,
            maxMessageSize: null,
            baseWSDL: [{something: null}],
            xmlManager: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            },
            dataPowerInternalPort: 17001,
            frontProtocolValue: 'FSH-All-Web-Service-Proxies',
            certificateList: [],
            sync: false,
            userAgentUI: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            }
        }, {
            datapowerBoxName: null,
            serviceName: 'AccumulatorRetrievalService',
            serviceState: 'enabled',
            domainName: 'Accumulator_Gateway_Unit_A',
            remoteEndProtocolDetails: 'http://accumssvc-unita.bcbsfl.com',
            publishEndProtocolDetails: 'https://google.com',
            facing: 'Internal Facing',
            frontSideTransactionTimeout: 180,
            frontSideConnectionTimeout: 120,
            backEndTransactionTimeout: 120,
            backEndConnectionTimeout: 120,
            maxMessageSize: null,
            baseWSDL: [{something: null}],
            xmlManager: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            },
            dataPowerInternalPort: 17001,
            frontProtocolValue: 'FSH-All-Web-Service-Proxies',
            certificateList: [],
            sync: false,
            userAgentUI: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            }
        }, {
            datapowerBoxName: null,
            serviceName: 'AccumulatorRetrievalService',
            serviceState: 'enabled',
            domainName: 'Accumulator_Gateway_Unit_A',
            remoteEndProtocolDetails: 'http://accumssvc-unita.bcbsfl.com',
            publishEndProtocolDetails: 'https://google.com',
            facing: 'Internal Facing',
            frontSideTransactionTimeout: 180,
            frontSideConnectionTimeout: 120,
            backEndTransactionTimeout: 120,
            backEndConnectionTimeout: 120,
            maxMessageSize: null,
            baseWSDL: [{something: null}],
            xmlManager: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            },
            dataPowerInternalPort: 17001,
            frontProtocolValue: 'FSH-All-Web-Service-Proxies',
            certificateList: [],
            sync: false,
            userAgentUI: {
                same1: { 1: 0 },
                same2: { 2: 0 },
                same3: { 3: 0 },
                same4: { 4: 0 },
                same5: { 5: 0 },
            }
        },
    ],
}