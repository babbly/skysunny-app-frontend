export default {
    clientName: 'skysunny',
    clientFullName: 'skysunny',
    clientMajorVersion: '1',
    clientMinorVersion: 'v20250718',

    // serverProtocol: 'https',
    // serverIp: 'skysunny-api.mayoube.co.kr',
    serverProtocol: 'http',
    serverIp: '192.168.0.222',

    // serverPort: '3000',
    serverContext: '',

    get serverUrl() {
        return `${this.serverProtocol}://${this.serverIp}${this.serverPort ? `:${this.serverPort}` : ''}${this.serverContext}`;
    }

};
