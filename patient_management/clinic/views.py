from django.shortcuts import render
from rest_framework import viewsets
from .models import Clinician, Patient, Appointment
from .serializers import ClinicianSerializer, PatientSerializer, AppointmentSerializer

class ClinicianViewSet(viewsets.ModelViewSet):
    queryset = Clinician.objects.all()
    serializer_class = ClinicianSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
