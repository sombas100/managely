from django.contrib import admin
from .models import Project


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'created_at')
    search_fields = ('name', 'owner__username')
    list_filter = ('created_at', 'owner')
    ordering = ('-created_at',)


admin.site.register(Project, ProjectAdmin)
