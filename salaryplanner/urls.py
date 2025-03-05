from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Welcome to SalaryPlanner API</h1>")

urlpatterns = [
    path("", home),  # This adds a default homepage
    path("admin/", admin.site.urls),
    path("api/", include("salary_api.urls")),
]

