+++
type = "modinfo"
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
modrinth = 'https://modrinth.com/mod/{{ replace .File.ContentBaseName "-" "_" }}'
+++
