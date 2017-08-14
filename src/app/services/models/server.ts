export class Server {
    servers: Array<ServerInfo>;
}
export class ServerInfo {
    resourcegroup: string;
    name: string;
    region: string;
    powerstate: string;
    tags: any;
    ip?: string;
}

export const SERVER: Server = {
    'servers': [
        {
            'resourcegroup': 'RG-JUMP',
            'name': 'rdsh1',
            'region': 'australiaeast',
            'powerstate': 'PowerState/deallocated',
            'tags': {}
        }, {
            'resourcegroup': 'TEST',
            'name': 'vm-jump',
            'region': 'australiaeast',
            'powerstate': 'PowerState/deallocated',
            'tags': {}
        }, {
            'resourcegroup': 'TESTRG3',
            'name': 'chrome01',
            'region': 'australiasoutheast',
            'powerstate': 'PowerState/deallocated',
            'tags': {}
        }, {
            'resourcegroup': 'TESTRG3',
            'name': 'chrome2',
            'ip': '13.77.1.225',
            'region': 'australiasoutheast',
            'powerstate': 'PowerState/running',
            'tags': {}
        }, {
            'resourcegroup': 'TESTRG3',
            'name': 'test4',
            'region': 'australiasoutheast',
            'powerstate': 'PowerState/deallocated',
            'tags': {}
        }
    ]
};

