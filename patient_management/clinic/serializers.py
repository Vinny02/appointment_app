from rest_framework import serializers
from .models import Clinician, Patient, Appointment
import requests


class ClinicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinician
        fields = '__all__'



class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'


    #simple validations for patients
    def validate_email(self, value):

        if not "@" in value:
            raise serializers.ValidationError("Invalid email address.")
        return value
    

    def validate_phone_number(self, value):

        if not value.isdigit() or len(value) < 10 or len(value) > 10:
            raise serializers.ValidationError("Invalid phone number.")
        return value

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'



