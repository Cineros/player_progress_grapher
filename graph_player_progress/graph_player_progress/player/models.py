from django.db import models

# Create your models here.


class PlayerCharacter():
    character_name = models.CharField(max_length=15)
    character_class = models.CharField(max_length=10, default=null)
    character_realm = models.CharField(max_length=10, default=null)
    character_ave_raid_parse = models.DecimalField(max_digits=4, decimal_places=1)
    #character_ave_mythicplus_parse = models.DecimalField(max_digits=4, decimal_places=1)
    pass

