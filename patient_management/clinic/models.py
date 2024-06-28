from django.db import models


class Clinician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    npi_number = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Patient(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    location = models.CharField(max_length=100)


    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Appointment(models.Model):
    clinician = models.ForeignKey(Clinician, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()
    reason = models.TextField()

    def __str__(self):
        return f"Appointment on {self.appointment_date} with {self.clinician} for {self.patient}"
