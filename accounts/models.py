from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.contrib.auth.models import User


class Participant(models.Model):

    User = models.OneToOneField(to=User, on_delete=models.CASCADE)
    ContactNumber = models.IntegerField(verbose_name="Contact Number", validators=[
        MaxValueValidator(limit_value=9999999999, message="Phone number Not valid"),
        MinValueValidator(limit_value=1000000000, message="Phone number Not valid")
    ])
    Accommodation = models.BooleanField(default=False)
    College = models.CharField(max_length=500)
    Address = models.CharField(max_length=2000)
    YearOfStudy = models.IntegerField(verbose_name="Year of Study", validators=[
        MaxValueValidator(limit_value=5, message="Year Not valid"),
        MinValueValidator(limit_value=1, message="Year Not valid")
        ]
    )
    FirstTimer = models.BooleanField(default=True)
    Gender = models.IntegerField(default=0, validators=[
        MaxValueValidator(limit_value=5, message="Gender Not valid"),
        MinValueValidator(limit_value=1, message="Gender Not valid")
        ]
    )
