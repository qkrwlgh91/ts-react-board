import axios from 'axios';

const COMMAND_API_BASE_URL = 'http://192.10.14.194:8080/api/v1/commands';

class CommandService {

    getCommands() {
        return axios.get(COMMAND_API_BASE_URL);
    }
}

export default new CommandService();