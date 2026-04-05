#### Реализованная функциональность

 - Разработан нарративный сценарий для 3х уровней
 - Содан модуль "Выбор действия"
 - Реализована система профилей, для геймификации процесса и отображения статистики
 - Реализован интерфейс для десктопа

#### Особенность проекта в следующем:



#### Основной стек технологий:
- `js-cookie`
- `React(next.js)`
- `framer-motion`
- `zustand`
- `Postgresql`
- `Fastapi`
- `psycopg2`

#### Демо
Демо сервиса доступно по адресу: https://IP_сервера

СРЕДА ЗАПУСКА
------------
1) развертывание сервиса производится на debian-like linux (debian 11+);
2) требуется установленный web-сервер с поддержкой reverce-proxy(предпологается nginx)
3) требуется установленная утилита docker

УСТАНОВКА
------------
Выполните
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install docker.io
git clone https://github.com/crazy-tosser3/SHTEUDTEAM
cd SHTEUDTEAM/
```

Развёртвание через docker compose
Для удобства запуска мы используем файл `startProject.sh`, который автоматически установит проект и его зависимости. После чего сервис будет доступен по адресу 127.0.0.1:8000, в дальнейшем вы сможете вывести его с помощю любого удобного reverce-proxy.

Конфигурационный файл nginx для работе в режиме reverce-proxy
```
server {
    listen 80;
    server_name IP_сервера;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name IP_сервера;

    ssl_certificate /root/.acme.sh/IP_сервера_ecc/fullchain.cer;
    ssl_certificate_key /root/.acme.sh/IP_сервера_ecc/IP_сервера.key;
    ssl_protocols TLSv1.2 TLSv1.3;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
#### Азаров Артём frontend https://t.me/VousDeVout049
#### Никита Тарасов backend https://t.me/zxc_anerexia
#### Алексей Лыков backend https://t.me/crzto3
#### Давид Балацкий frontend https://t.me/De_games
#### Алексей Семерников frontend https://t.me/adam_scm