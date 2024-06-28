import React, { useState, useEffect } from 'react';
import { getAppointments } from './apiService';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const data = await getAppointments();
            console.log('Fetched Appointments:', data);  // Debug log
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching appointments', error);
        }
    };

    const filterAppointments = () => {
        console.log('Filtering Appointments:', appointments);  // Debug log
        return appointments.filter(appointment => {
            const appointmentDate = new Date(appointment.appointment_date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;
            return (!start || appointmentDate >= start) && (!end || appointmentDate <= end);
        });
    };

    return (
        <div className="p-4 mx-2 ">
            <h1 className="text-2xl font-bold mb-4">Appointments</h1>
            <div className="flex flex-row space-x-4">
                <div className="mb-4">
                    <label className="block mb-2">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="p-2 border rounded"
                    />
                </div>
            </div>
            <ul className="space-y-4">
                {filterAppointments().map(appointment => (
                    <li key={appointment.id} className="mb-4 p-4 border border-slate-200 rounded-lg shadow-sm bg-slate-50">
                        <p><strong>Patient:</strong> {appointment.patient.first_name} {appointment.patient.last_name}</p>
                        <p><strong>Clinician:</strong> {appointment.clinician.first_name} {appointment.clinician.last_name}</p>
                        <p><strong>Patient Email:</strong> {appointment.patient.email}</p>
                        <p><strong>Patient Phone:</strong> {appointment.patient.phone_number}</p>
                        <p><strong>Appointment Time:</strong> {new Date(appointment.appointment_date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Appointments;