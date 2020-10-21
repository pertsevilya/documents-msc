from loguru import logger

from rest_framework.permissions import BasePermission


class IsSuperUser(BasePermission):
    
    def has_permission(self, request, view):
        logger.debug(request.user)
        return bool(request.user and request.user.is_superuser)