from django.db import models


class Smth(models.Model):
    id = models.IntegerField(primary_key=True)

    def __repr__(self):
        return str(self.id)