#!/bin/bash

rsync -rv . www-data@aws.internal.crumbcake.cc:/var/www/html/static.nicholashollander.com/cs3041_hifi/
