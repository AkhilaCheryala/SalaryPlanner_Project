from django.contrib import admin
from .models import Salary

class SalaryAdmin(admin.ModelAdmin):
    list_display = ('user', 'base_salary', 'bonus', 'deductions')  # Fields shown in admin panel
    search_fields = ('user__username',)  # Search by username
    list_filter = ('base_salary',)  # Add filters

admin.site.register(Salary, SalaryAdmin)
