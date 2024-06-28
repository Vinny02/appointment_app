from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Clinician, Patient, Appointment

admin.site.register(Clinician)
admin.site.register(Patient)
admin.site.register(Appointment)