from django.urls import path
from .views import SalaryListCreateView, SalaryDetailView

urlpatterns = [
    path('salaries/', SalaryListCreateView.as_view(), name='salary-list'),
    path('salaries/<int:pk>/', SalaryDetailView.as_view(), name='salary-detail'),
]
