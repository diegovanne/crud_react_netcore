import axios from 'axios';

const baseUrl = 'https://localhost:5001/api/';
// const controllerName = ControllerConsts.DonationCandidate;

export default {
    donationCandidate(url = `${baseUrl}donationcandidate/`) {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}