from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
   path('edit/', edit, name="edit"),
   path('profile/', profile, name="profile"),
   path('new/', new, name="new"),
   path('create/', create, name="create"),
   path('edit/<str:id>', edit, name="edit"),
   path('update/<str:id>', update, name="update"),
   path('delete/<str:id>', delete, name="delete"),
   path('nangman/', nangman, name='nangman'),
   path('detail/<str:id>', detail, name="detail"),
]