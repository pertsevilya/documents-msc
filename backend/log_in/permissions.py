from loguru import logger

from rest_framework.permissions import BasePermission

from django.contrib.auth.models import Group


class IsTeacher(BasePermission):
    
    def has_permission(self, request, view):
        return bool(request.user and _is_in_group(request.user, 'teacher'))


class IsUser(BasePermission):
    
    def has_permission(self, request, view):
        return bool(request.user and _is_in_group(request.user, 'user'))


class IsEmployee(BasePermission):
    
    def has_permission(self, request, view):
        return bool(request.user and _is_in_group(request.user, 'employee'))


def _is_in_group(user, group_name):
    """ Принимает пользователя и название группы, возращает True, если пользователь в группе """
    try:
        return Group.objects.get(name=group_name).user_set.filter(id=user.id).exists()
    except Group.DoesNotExist:
        return None