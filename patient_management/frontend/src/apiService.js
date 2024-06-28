const API_URL = 'http://127.0.0.1:8000/api/';

export const getAppointments = async () => {
    const res = await fetch(`${API_URL}appointments/`);
    if (!res.ok) {
        throw new Error('Bad response');
    }
    return res.json();
};
