from loguru import logger


class Loguru:
    ''' middleware для логирования всех ошибок во view's с помощью loguru'''
    def __init__(self, get_response):
        self._get_response = get_response

    @logger.catch
    def __call__(self, request):
        response = self._get_response(request)
        return response